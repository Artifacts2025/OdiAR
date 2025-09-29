import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { Link } from 'react-router-dom'

export default function Language() {
  return (
    <div className="container py-3">
      <header className="banner-slanted mb-3">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="h-heading m-0">Language</h1>
          <Link to="/" className="btn btn-sm btn-accent">Home</Link>
        </div>
        <small className="text-secondary">About the Odia language and everyday phrases</small>
      </header>

      {/* About Odia */}
      <div className="card-dark p-3 mb-3">
        <h2 className="h-heading fs-5 mb-2">About Odia (ଓଡ଼ିଆ)</h2>
        <p className="text-secondary small mb-2">
          Odia (also spelled Oriya) is an Indo‑Aryan language spoken primarily in the Indian state of
          Odisha and by Odia communities worldwide. It is one of India&apos;s six classical languages,
          recognized for its rich literary tradition spanning over a millennium.
        </p>
        <div className="d-flex flex-wrap gap-2">
          <span className="badge bg-secondary">Classical language of India</span>
          <span className="badge bg-secondary">Indo‑Aryan family</span>
          <span className="badge bg-secondary">~40+ million speakers</span>
        </div>
      </div>

      {/* Script & Phonetics */}
      <div className="card-dark p-3 mb-3">
        <h3 className="h-heading fs-6 mb-2">Script & Phonetics</h3>
        <p className="text-secondary small mb-2">
          Odia uses its own abugida script derived from Brahmi. Letters are rounded in appearance and
          written with a headline. The script represents syllables built from consonants and vowels.
        </p>
        <div className="row g-2 text-center">
          <div className="col-6 col-md-3"><div className="p-2 border border-secondary rounded">Vowel: ଅ a</div></div>
          <div className="col-6 col-md-3"><div className="p-2 border border-secondary rounded">Vowel: ଆ ā</div></div>
          <div className="col-6 col-md-3"><div className="p-2 border border-secondary rounded">Consonant: କ ka</div></div>
          <div className="col-6 col-md-3"><div className="p-2 border border-secondary rounded">Consonant: ଜ ja</div></div>
        </div>
      </div>

      {/* Common Phrases */}
      <div className="card-dark p-3">
        <h3 className="h-heading fs-6 mb-2">Common Greetings & Phrases</h3>
        <div className="row g-2">
          <div className="col-md-6">
            <ul className="text-secondary small m-0 ps-3">
              <li><strong className="text-accent">ନମସ୍କାର</strong> (Namaskār) – Hello</li>
              <li><strong className="text-accent">ଆପଣ କେମିତି ଅଛନ୍ତି?</strong> (Āpaṇa kemiti achhanti?) – How are you?</li>
              <li><strong className="text-accent">ମୋ ନାମ …</strong> (Mo nāma …) – My name is …</li>
              <li><strong className="text-accent">ଧନ୍ୟବାଦ</strong> (Dhanyabād) – Thank you</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="text-secondary small m-0 ps-3">
              <li><strong className="text-accent">ଦୟାକରି</strong> (Dayākari) – Please</li>
              <li><strong className="text-accent">ମାଫ କରନ୍ତୁ</strong> (Māph karantu) – Sorry/Excuse me</li>
              <li><strong className="text-accent">ହଁ / ନା</strong> (Haṁ / Nā) – Yes / No</li>
              <li><strong className="text-accent">ବିଦାୟ</strong> (Bidāya) – Goodbye</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


