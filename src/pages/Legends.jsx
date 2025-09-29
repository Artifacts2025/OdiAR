import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { Link } from 'react-router-dom'

export default function Legends() {
  return (
    <div className="container py-3">
      <header className="banner-slanted mb-3">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="h-heading m-0">Legends</h1>
          <Link to="/" className="btn btn-sm btn-accent">Home</Link>
        </div>
        <small className="text-secondary">Narrated fairytales and historical legends of Odisha</small>
      </header>

      {/* Narrated Fairytales */}
      <section className="mb-4">
        <h2 className="h-heading fs-5 mb-3">Narrated Fairytales</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card-dark p-3 h-100">
              <h5 className="h-heading fs-6 mb-2">The Santal Creation Legend</h5>
              <p className="text-secondary small mb-3">The tale of Maranbonga, the divine crow, and the birth of the first Santal couple.</p>
              <audio controls style={{ width: '100%' }}>
                <source src="/audio/santal_creation_legend.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-dark p-3 h-100">
              <h5 className="h-heading fs-6 mb-2">The Tale of the River Goddess</h5>
              <p className="text-secondary small mb-3">A soothing folktale about a guardian goddess who blesses villages along the river.</p>
              <audio controls style={{ width: '100%' }}>
                <source src="/audio/river_goddess_fairytale.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Legends */}
      <section>
        <h2 className="h-heading fs-5 mb-3">Historical Legends</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card-dark p-3 h-100">
              <h5 className="h-heading fs-6 mb-2">Legend of Konark</h5>
              <p className="text-secondary small mb-3">The story of the young architect Dharmapada and the Sun Temple&apos;s final stone.</p>
              <audio controls style={{ width: '100%' }}>
                <source src="/audio/legend_of_konark.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-dark p-3 h-100">
              <h5 className="h-heading fs-6 mb-2">Jagannath Legends</h5>
              <p className="text-secondary small mb-3">Timeless legends surrounding Lord Jagannath and the sacred city of Puri.</p>
              <audio controls style={{ width: '100%' }}>
                <source src="/audio/jagannath_legends.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


