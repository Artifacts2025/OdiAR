import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { Link } from 'react-router-dom'

export default function Culture() {
  const [activeTab, setActiveTab] = React.useState('dress')

  const culturalDress = [
    {
      id: 'sambalpuri-saree',
      name: 'Sambalpuri Saree',
      description: 'Traditional handwoven saree with intricate ikat patterns',
      features: ['Ikat weaving', 'Natural dyes', 'Geometric patterns', 'Cotton & silk'],
      image:"Sambalpuri.jpeg",
      significance: 'Symbol of Odisha\'s textile heritage and craftsmanship'
    },
    {
      id: 'bomkai-saree',
      name: 'Bomkai Saree',
      description: 'Elegant saree with traditional motifs and temple borders',
      features: ['Temple borders', 'Traditional motifs', 'Silk weaving', 'Cultural symbols'],
      image: 'Bomkai.jpeg',
      significance: 'Worn during festivals and special occasions'
    },
    {
      id: 'khandua-saree',
      name: 'Khandua Saree',
      description: 'Sacred saree offered to Lord Jagannath with religious motifs',
      features: ['Religious motifs', 'Sacred designs', 'Temple offerings', 'Spiritual significance'],
      image: '/images/khandua-saree.jpg',
      significance: 'Used in Jagannath temple rituals and ceremonies'
    },
    {
      id: 'odissi-costume',
      name: 'Odissi Dance Costume',
      description: 'Traditional costume worn by Odissi dancers',
      features: ['Silk fabric', 'Traditional jewelry', 'Cultural motifs', 'Dance-specific design'],
      image: '/images/odissi-costume.jpg',
      significance: 'Essential attire for classical Odissi dance performances'
    }
  ]

  const culturalContent = [
    {
      id: 'odissi-dance',
      title: 'Odissi Dance',
      type: 'video',
      description: 'Classical dance form from Odisha with graceful movements',
      thumbnail: '/images/odissi-dance.jpg',
      tags: ['dance', 'classical', 'traditional']
    },
    {
      id: 'ratha-yatra',
      title: 'Ratha Yatra Festival',
      type: 'video',
      description: 'The grand chariot festival of Lord Jagannath',
      thumbnail: '/images/ratha-yatra.jpg',
      tags: ['festival', 'jagannath', 'chariot']
    },
    {
      id: 'pattachitra',
      title: 'Pattachitra Art',
      type: 'image',
      description: 'Traditional scroll painting with mythological themes',
      thumbnail: '/images/pattachitra.jpg',
      tags: ['art', 'painting', 'mythology']
    }
  ]

  return (
    <div className="container py-3">
      <header className="banner-slanted mb-3">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="h-heading m-0">Culture</h1>
          <Link to="/" className="btn btn-sm btn-accent">Home</Link>
        </div>
        <small className="text-secondary">Explore Odisha's rich cultural heritage</small>
      </header>

      {/* Navigation Tabs */}
      <div className="mb-4">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'dress' ? 'active' : ''}`}
              onClick={() => setActiveTab('dress')}
            >
              <span className="material-icons-outlined me-2">checkroom</span>
              Traditional Dress
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'dance' ? 'active' : ''}`}
              onClick={() => setActiveTab('dance')}
            >
              <span className="material-icons-outlined me-2">music_note</span>
              Dance & Music
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'art' ? 'active' : ''}`}
              onClick={() => setActiveTab('art')}
            >
              <span className="material-icons-outlined me-2">palette</span>
              Art & Crafts
            </button>
          </li>
        </ul>
      </div>

      {/* Traditional Dress Section */}
      {activeTab === 'dress' && (
        <div className="mb-4">
          <h2 className="h-heading fs-4 mb-3">Traditional Odia Dress</h2>
          <div className="row g-4">
            {culturalDress.map((dress) => (
              <div key={dress.id} className="col-md-6 col-lg-4">
                <div className="card-dark p-3 h-100">
                  <div className="dress-image mb-3">
                    {dress.image ? (
                      <img
                        src={
                          dress.id === 'sambalpuri-saree'
                            ? '/Sambalpuri.jpeg'
                            : dress.id === 'bomkai-saree'
                            ? '/Bomkai.jpeg'
                            : dress.id === 'khandua-saree'
                            ? '/Khandua.jpeg'
                            : dress.id === 'odissi-costume'
                            ? '/odissi dance.jpeg'
                            : ((dress.image || '').startsWith('/') ? dress.image : `/images/${dress.image}`)
                        }                        
                        alt={dress.name}
                        style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                    ) : (
                      <div className="placeholder-image">
                        <span className="material-icons-outlined">image</span>
                        <small className="text-secondary">Image: {dress.name}</small>
                      </div>
                    )}
                  </div>
                  <h5 className="h-heading fs-5 mb-2">{dress.name}</h5>
                  <p className="text-secondary mb-3">{dress.description}</p>
                  
                  <div className="mb-3">
                    <h6 className="text-accent mb-2">Features:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {dress.features.map((feature, index) => (
                        <span key={index} className="badge bg-secondary">{feature}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="significance">
                    <h6 className="text-accent mb-1">Significance:</h6>
                    <small className="text-light">{dress.significance}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dance & Music Section */}
      {activeTab === 'dance' && (
        <div className="mb-4">
          <h2 className="h-heading fs-4 mb-3">Dance & Music</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card-dark p-3">
                <div className="media-placeholder mb-3">
                  <video controls style={{ width: '100%', borderRadius: '8px' }}>
                    <source src="/oddissi video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h5 className="h-heading fs-5 mb-2">Odissi Dance</h5>
                <p className="text-secondary">Classical dance form with graceful movements, intricate footwork, and expressive storytelling.</p>
                <div className="d-flex flex-wrap gap-1">
                  <span className="badge bg-secondary">Classical</span>
                  <span className="badge bg-secondary">Temple Dance</span>
                  <span className="badge bg-secondary">UNESCO Heritage</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-dark p-3">
                <div className="media-placeholder mb-3">
                  <span className="material-icons-outlined">music_note</span>
                  <small className="text-secondary">Traditional Odia Music</small>
                </div>
                <h5 className="h-heading fs-5 mb-2">Traditional Music</h5>
                <p className="text-secondary">Folk songs, devotional music, and classical compositions that reflect Odisha's cultural richness.</p>
                <div className="d-flex flex-wrap gap-1">
                  <span className="badge bg-secondary">Folk Songs</span>
                  <span className="badge bg-secondary">Devotional</span>
                  <span className="badge bg-secondary">Classical</span>
                </div>
              </div>
            </div>
            {/* Removed Odisha Traditional Music card as requested */}
          </div>
        </div>
      )}

      {/* Art & Crafts Section */}
      {activeTab === 'art' && (
        <div className="mb-4">
          <h2 className="h-heading fs-4 mb-3">Art & Crafts</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card-dark p-3">
                <div className="media-placeholder mb-3">
                  <img src="/patta.jpeg" alt="Pattachitra" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
                <h5 className="h-heading fs-5 mb-2">Pattachitra</h5>
                <p className="text-secondary">Traditional scroll painting depicting mythological stories and religious themes.</p>
                <div className="d-flex flex-wrap gap-1">
                  <span className="badge bg-secondary">Scroll Painting</span>
                  <span className="badge bg-secondary">Mythology</span>
                  <span className="badge bg-secondary">Natural Colors</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-dark p-3">
                <div className="media-placeholder mb-3">
                  <img src="/stone.jpeg" alt="Stone Carving" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
                <h5 className="h-heading fs-5 mb-2">Stone Carving</h5>
                <p className="text-secondary">Intricate stone sculptures and carvings found in temples and monuments across Odisha.</p>
                <div className="d-flex flex-wrap gap-1">
                  <span className="badge bg-secondary">Temple Art</span>
                  <span className="badge bg-secondary">Sculpture</span>
                  <span className="badge bg-secondary">Heritage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cultural Significance */}
      <div className="card-dark p-4">
        <h3 className="h-heading fs-5 mb-3">Cultural Significance</h3>
        <div className="row">
          <div className="col-md-6">
            <h6 className="text-accent mb-2">Traditional Dress Heritage</h6>
            <p className="text-secondary small">
              Odisha's traditional dress reflects the state's rich textile heritage, with each piece telling a story of craftsmanship, 
              cultural identity, and spiritual significance. From the sacred Khandua sarees offered to Lord Jagannath to the elegant 
              Sambalpuri ikat weaves, these garments are living embodiments of Odia culture.
            </p>
          </div>
          <div className="col-md-6">
            <h6 className="text-accent mb-2">Preservation & Modernity</h6>
            <p className="text-secondary small">
              Today, these traditional dresses are not just preserved but also adapted for contemporary fashion, ensuring that 
              Odisha's cultural heritage continues to thrive while maintaining its authentic essence and spiritual connection.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


