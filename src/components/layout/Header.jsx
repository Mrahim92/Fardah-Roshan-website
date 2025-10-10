import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Heart, ChevronDown } from 'lucide-react'
import LanguageSwitcher from '../LanguageSwitcher'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)
  const { t } = useTranslation()
  const location = useLocation()

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ]

  const programItems = [
    { path: '/computer-labs', label: t('programs.computerLabs') },
    { path: '/libraries', label: t('programs.libraries') },
    { path: '/microschools', label: t('programs.microschools') },
    { path: '/online-classes', label: t('programs.onlineClasses') },
    { path: '/student-support', label: t('programs.studentSupport') },
    { path: '/school-development', label: t('programs.schoolDevelopment') },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const togglePrograms = () => setIsProgramsOpen(!isProgramsOpen)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/fra-logo.webp" alt="Fardah Roshan Academy" className="logo-image" />
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/about"
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            
            <div 
              className="nav-dropdown"
              onMouseEnter={() => setIsProgramsOpen(true)}
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <button 
                className={`nav-link dropdown-trigger ${programItems.some(item => location.pathname === item.path) ? 'active' : ''}`}
                onClick={togglePrograms}
              >
                {t('nav.programs')}
                <ChevronDown size={16} className={`chevron ${isProgramsOpen ? 'open' : ''}`} />
              </button>
              <div className={`dropdown-menu ${isProgramsOpen ? 'open' : ''}`}>
                {programItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`dropdown-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => {
                      setIsMenuOpen(false)
                      setIsProgramsOpen(false)
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
          </nav>

          <div className="header-actions">
            <Link to="/contact" className="donate-button">
              <Heart size={18} fill="currentColor" />
              <span>Donate</span>
            </Link>
            <LanguageSwitcher />
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

