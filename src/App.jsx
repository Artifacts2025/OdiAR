import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './App.css'
import './i18n'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Monuments from './pages/Monuments'
import Maps from './pages/Maps'
import Legends from './pages/Legends'
import Culture from './pages/Culture'
import Language from './pages/Language'
import Games from './pages/Games'
import LanguageSwitcher from './components/LanguageSwitcher'

function Home() {
  const { t } = useTranslation()
  
  const categories = [
    { key: 'artifacts', label: t('navigation.artifacts'), icon: 'view_in_ar', href: '/artifacts' },
    { key: 'maps', label: t('navigation.maps'), icon: 'map', href: '/maps' },
    { key: 'legends', label: t('navigation.legends'), icon: 'library_music', href: '/legends' },
    { key: 'culture', label: t('navigation.culture'), icon: 'collections', href: '/culture' },
    { key: 'language', label: t('navigation.language'), icon: 'record_voice_over', href: '/language' },
    { key: 'games', label: t('navigation.games'), icon: 'extension', href: '/games' },
  ]
  return (
    <div className="container py-3">
      <header className="banner-slanted mb-4">
        <div className="odiar-logo">
          <img src="/images/logo.jpeg" alt="OdiAR Logo" />
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="h-heading m-0">{t('app.title')}</h1>
          <div className="d-flex align-items-center gap-2">
            <LanguageSwitcher />
            <Link className="btn btn-sm btn-accent" to="/artifacts">{t('navigation.explore')}</Link>
          </div>
        </div>
        <small className="text-secondary">{t('app.subtitle')}</small>
      </header>

      <section className="mb-4">
        <h2 className="h-heading fs-4 mb-3">{t('home.categories')}</h2>
        <div className="row g-3">
          {categories.map((c) => (
            <div key={c.key} className="col-6 col-md-4">
              <Link to={c.href} className="text-decoration-none text-white">
                <div className="category-tile">
                  <div className="w-100">
                    <span className="material-icons-outlined">{c.icon}</span>
                    <div className="fw-bold mt-2">{c.label}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Removed Konark Horse featured section */}

      <a
        className="whatsapp-fab"
        href={`https://wa.me/?text=${encodeURIComponent('Explore OdiAR – https://odiar.app')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Share on WhatsApp"
      >
        <span className="material-icons-outlined">share</span>
      </a>
    </div>
  )
}

function Placeholder({ title }) {
  const { t } = useTranslation()
  return (
    <div className="container py-4">
      <h1 className="h-heading">{title}</h1>
      <p className="text-secondary">{t('common.comingSoon')}</p>
      <Link to="/" className="btn btn-accent">{t('common.backHome')}</Link>
    </div>
  )
}

export default function App() {
  const { t } = useTranslation()
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artifacts" element={<Monuments />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/legends" element={<Legends />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/language" element={<Language />} />
        <Route path="/games" element={<Games />} />
      </Routes>
      <footer className="text-center text-secondary py-4">
        © 2025 ARTIFACTS2025, All rights reserved
      </footer>
    </BrowserRouter>
  )
}
