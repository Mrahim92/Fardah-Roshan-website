import { useTranslation } from 'react-i18next'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import './Footer.css'

function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Fardah Roshan Academy</h3>
            <p className="footer-text">
              {t('footer.tagline')}
            </p>
            <h4 className="footer-subtitle stay-in-touch">{t('home.stayInTouch')}</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/fardahroshanacademy/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/channel/UCeA9WAIckoKAEy7Gtm8P2og" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/fardah.roshan.academy/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">{t('footer.quickLinks')}</h4>
            <ul className="footer-links">
              <li><a href="/">{t('nav.home')}</a></li>
              <li><a href="/about">{t('about.title')}</a></li>
              <li><a href="/programs">{t('programs.title')}</a></li>
              <li><a href="/contact">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">{t('nav.contact')}</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={18} />
                <span>info@fardahroshan.org</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+93 XXX XXX XXX</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>{t('contact.info.location')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright').replace('2025', currentYear)}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

