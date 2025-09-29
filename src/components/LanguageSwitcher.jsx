import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'or', name: 'ଓଡ଼ିଆ', flag: '🇮🇳' }
  ]

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode)
  }

  return (
    <div className="language-switcher">
      <div className="dropdown">
        <button 
          className="btn btn-outline-secondary btn-sm dropdown-toggle" 
          type="button" 
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="me-2">
            {languages.find(lang => lang.code === i18n.language)?.flag || '🌐'}
          </span>
          {languages.find(lang => lang.code === i18n.language)?.name || 'Language'}
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          {languages.map((language) => (
            <li key={language.code}>
              <button 
                className={`dropdown-item ${i18n.language === language.code ? 'active' : ''}`}
                onClick={() => changeLanguage(language.code)}
              >
                <span className="me-2">{language.flag}</span>
                {language.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

