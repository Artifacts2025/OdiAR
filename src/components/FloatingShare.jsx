export function FloatingShare({ title, url }) {
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(`${title} – ${url}`)}`
  return (
    <a className="whatsapp-fab" href={shareUrl} target="_blank" rel="noreferrer" aria-label="Share on WhatsApp">
      <span className="material-icons-outlined">whatsapp</span>
    </a>
  )
}


