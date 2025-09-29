import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Maps() {
  const { t } = useTranslation()
  const categories = ['temple', 'beach', 'park', 'museum']
  const [selectedCategory, setSelectedCategory] = React.useState('all')

  return (
    <div className="container py-3">
      <header className="banner-slanted mb-3">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="h-heading m-0">{t('maps.title')}</h1>
          <Link to="/" className="btn btn-sm btn-accent">{t('navigation.home')}</Link>
        </div>
        <small className="text-secondary">{t('maps.subtitle')}</small>
      </header>

      {/* Category Filters */}
      <div className="mb-4">
        <div className="d-flex flex-wrap gap-2">
          <button 
            className={`btn btn-sm ${selectedCategory === 'all' ? 'btn-accent' : 'btn-outline-secondary'}`}
            onClick={() => setSelectedCategory('all')}
          >
            {t('maps.filters.all')}
          </button>
          {categories.map(category => (
            <button 
              key={category}
              className={`btn btn-sm ${selectedCategory === category ? 'btn-accent' : 'btn-outline-secondary'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {t(`maps.filters.${category}s`)}
            </button>
          ))}
        </div>
      </div>

      {/* Odisha State Map (Google Maps embed) */}
      <div className="card-dark p-3 mb-4">
        <h3 className="h-heading fs-5 mb-3">{t('maps.stateMap')}</h3>
        <div className="odisha-map-container">
          <iframe
            title="Odisha Map"
            src="https://www.google.com/maps?q=Odisha&hl=en&z=7&output=embed"
            style={{ width: '100%', height: '350px', border: 0, borderRadius: '8px' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* POI List */}
      <div className="card-dark p-3">
        <h3 className="h-heading fs-5 mb-3">{t('maps.pois')}</h3>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="poi-item p-3 border border-secondary rounded">
              <div className="d-flex align-items-center">
                <span className="material-icons-outlined text-accent me-2">temple_hindu</span>
                <div>
                  <h6 className="mb-1">{t('maps.poiList.konarkTemple')}</h6>
                  <small className="text-secondary">{t('maps.poiList.konarkDesc')}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="poi-item p-3 border border-secondary rounded">
              <div className="d-flex align-items-center">
                <span className="material-icons-outlined text-accent me-2">beach_access</span>
                <div>
                  <h6 className="mb-1">{t('maps.poiList.puriBeach')}</h6>
                  <small className="text-secondary">{t('maps.poiList.puriBeachDesc')}</small>
                </div>
              </div>
              <div className="mt-2">
                <img 
                  src="/puri_beach.jpeg" 
                  alt="Puri Beach" 
                  style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px' }} 
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="poi-item p-3 border border-secondary rounded">
              <div className="d-flex align-items-center">
                <span className="material-icons-outlined text-accent me-2">temple_hindu</span>
                <div>
                  <h6 className="mb-1">{t('maps.poiList.jagannathTemple')}</h6>
                  <small className="text-secondary">{t('maps.poiList.jagannathDesc')}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="poi-item p-3 border border-secondary rounded">
              <div className="d-flex align-items-center">
                <span className="material-icons-outlined text-accent me-2">park</span>
                <div>
                  <h6 className="mb-1">{t('maps.poiList.simlipalPark')}</h6>
                  <small className="text-secondary">{t('maps.poiList.simlipalDesc')}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


