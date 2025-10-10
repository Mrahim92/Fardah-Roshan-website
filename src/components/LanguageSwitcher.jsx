import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import './LanguageSwitcher.css'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fa', name: 'فارسی', flag: '🇦🇫' },
    { code: 'ps', name: 'پښتو', flag: '🇦🇫' },
  ]

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="language-switcher">
      <button className="language-button">
        <Globe size={20} />
        <span className="current-lang">{languages.find(l => l.code === i18n.language)?.name || 'English'}</span>
      </button>
      <div className="language-dropdown">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`language-option ${i18n.language === lang.code ? 'active' : ''}`}
          >
            <span className="lang-flag">{lang.flag}</span>
            <span className="lang-name">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSwitcher

