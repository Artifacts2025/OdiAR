import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import { Link } from 'react-router-dom'
import { FloatingShare } from '../components/FloatingShare'
import { useTranslation } from 'react-i18next'

export default function Monuments() {
  const { t } = useTranslation()
  const title = t('navigation.artifacts')
  const url = `https://odiar.app/monuments`
  
  return (
    <div className="container py-3">
      <header className="banner-slanted mb-3">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="h-heading m-0">{title}</h1>
          <Link to="/" className="btn btn-sm btn-accent">{t('navigation.home')}</Link>
        </div>
        <small className="text-secondary">Explore historical monuments in AR</small>
      </header>

      <div className="card-dark p-2 mb-3">
        <model-viewer
          src="/shiva temp1.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          exposure="1.1"
          style={{ width: '100%', height: '60vh', background: '#000' }}
        >
          <button slot="hotspot-1" data-position="0.2 1.1 -0.3" data-normal="0 1 0" className="btn btn-accent btn-sm">
            Shiva Temple
          </button>
        </model-viewer>
      </div>

      <div className="card-dark p-2 mb-3">
        <model-viewer
          src="/temp1.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          exposure="1.1"
          style={{ width: '100%', height: '60vh', background: '#000' }}
        >
          <button slot="hotspot-1" data-position="0.2 1.1 -0.3" data-normal="0 1 0" className="btn btn-accent btn-sm">
            Historical Monument
          </button>
        </model-viewer>
      </div>

      <div className="card-dark p-2 mb-3">
        <model-viewer
          src="/temp5.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          exposure="1.1"
          style={{ width: '100%', height: '60vh', background: '#000' }}
        >
          <button slot="hotspot-1" data-position="0.2 1.1 -0.3" data-normal="0 1 0" className="btn btn-accent btn-sm">
            Ancient Structure
          </button>
        </model-viewer>
      </div>

      <div className="card-dark p-2 mb-3">
        <model-viewer
          src="/Temp3.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          exposure="1.1"
          style={{ width: '100%', height: '60vh', background: '#000' }}
        >
          <button slot="hotspot-1" data-position="0.2 1.1 -0.3" data-normal="0 1 0" className="btn btn-accent btn-sm">
            Heritage Site
          </button>
        </model-viewer>
      </div>

      <div className="card-dark p-3 mb-3">
        <h3 className="h-heading fs-5 mb-2">Monuments around Odisha</h3>
        <ul className="text-secondary small m-0 ps-3">
          <li>Konark Sun Temple – UNESCO World Heritage site famed for stone carvings</li>
          <li>Jagannath Temple, Puri – sacred Vaishnavite shrine and Rath Yatra hub</li>
          <li>Lingaraj Temple, Bhubaneswar – 11th‑century Kalinga architecture</li>
          <li>Udayagiri & Khandagiri Caves – Jain rock‑cut caves with inscriptions</li>
          <li>Ratnagiri, Lalitgiri, Udayagiri – the Buddhist “Diamond Triangle”</li>
          <li>Dhauli Shanti Stupa – Ashokan edicts and peace pagoda near Bhubaneswar</li>
          <li>Mukteswar Temple – the “Gem of Odisha” with exquisite torana</li>
        </ul>
      </div>

      <FloatingShare title={title} url={url} />
    </div>
  )
}

