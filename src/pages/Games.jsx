import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { Link } from 'react-router-dom'
import React from 'react'

const BASE_PAIRS = [
  { id: 'ka', or: 'କ', en: 'ka' },
  { id: 'kha', or: 'ଖ', en: 'kha' },
  { id: 'ga', or: 'ଗ', en: 'ga' },
  { id: 'ja', or: 'ଜ', en: 'ja' },
  { id: 'na', or: 'ନ', en: 'na' },
  { id: 'ra', or: 'ର', en: 'ra' },
]

function shuffle(array) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export default function Games() {
  const [cards, setCards] = React.useState([])
  const [flipped, setFlipped] = React.useState([]) // indices
  const [matchedIds, setMatchedIds] = React.useState(new Set())
  const [moves, setMoves] = React.useState(0)

  const buildDeck = React.useCallback(() => {
    const pairs = BASE_PAIRS
    const deck = pairs.flatMap((p) => [
      { key: `${p.id}-or`, pairId: p.id, label: p.or, kind: 'oriya' },
      { key: `${p.id}-en`, pairId: p.id, label: p.en, kind: 'latin' },
    ])
    return shuffle(deck)
  }, [])

  React.useEffect(() => {
    setCards(buildDeck())
    setFlipped([])
    setMatchedIds(new Set())
    setMoves(0)
  }, [buildDeck])

  function onCardClick(index) {
    if (flipped.length === 2) return
    if (flipped.includes(index)) return
    if (matchedIds.has(cards[index].pairId)) return

    const next = [...flipped, index]
    setFlipped(next)

    if (next.length === 2) {
      setMoves((m) => m + 1)
      const a = cards[next[0]]
      const b = cards[next[1]]
      if (a.pairId === b.pairId && a.kind !== b.kind) {
        // match
        const newMatched = new Set(matchedIds)
        newMatched.add(a.pairId)
        setTimeout(() => {
          setMatchedIds(newMatched)
          setFlipped([])
        }, 400)
      } else {
        setTimeout(() => setFlipped([]), 700)
      }
    }
  }

  function resetGame() {
    setCards(buildDeck())
    setFlipped([])
    setMatchedIds(new Set())
    setMoves(0)
  }

  const allMatched = matchedIds.size === BASE_PAIRS.length

  return (
    <div className="container py-3">
      <header className="banner-slanted mb-3">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="h-heading m-0">Games</h1>
          <Link to="/" className="btn btn-sm btn-accent">Home</Link>
        </div>
        <small className="text-secondary">Match Odia letters to their Latin pronunciations</small>
      </header>

      <div className="card-dark p-3">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div>
            <strong className="text-accent">Moves:</strong> <span>{moves}</span>
          </div>
          <button className="btn btn-sm btn-accent" onClick={resetGame}>Restart</button>
        </div>

        <div className="row g-2" style={{ userSelect: 'none' }}>
          {cards.map((card, idx) => {
            const isFlipped = flipped.includes(idx) || matchedIds.has(card.pairId)
            return (
              <div key={card.key} className="col-6 col-md-3">
                <button
                  className="w-100"
                  style={{
                    background: isFlipped ? 'var(--accent)' : 'var(--card)',
                    color: isFlipped ? '#000' : 'var(--text)',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    padding: '18px',
                    fontSize: card.kind === 'oriya' ? '28px' : '16px',
                    fontWeight: 700,
                    width: '100%'
                  }}
                  onClick={() => onCardClick(idx)}
                  disabled={matchedIds.has(card.pairId)}
                >
                  {isFlipped ? card.label : '❓'}
                </button>
              </div>
            )
          })}
        </div>

        {allMatched && (
          <div className="mt-3 alert alert-success" role="alert" style={{ background: '#123', border: '1px solid #244', color: 'var(--text)' }}>
            Great job! You matched all pairs in {moves} moves.
          </div>
        )}
      </div>
    </div>
  )
}


