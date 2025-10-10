import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import './Contact.css'

function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send data to a server
    alert(t('contact.form.success'))
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>{t('contact.info.title')}</h2>
              <p>{t('contact.info.description')}</p>

              <div className="contact-details">
                <div className="contact-item">
                  <Mail size={24} />
                  <div>
                    <h4>{t('contact.info.email')}</h4>
                    <p>info@fardahroshan.org</p>
                  </div>
                </div>

                <div className="contact-item">
                  <Phone size={24} />
                  <div>
                    <h4>{t('contact.info.phone')}</h4>
                    <p>+93 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="contact-item">
                  <MapPin size={24} />
                  <div>
                    <h4>{t('contact.info.address')}</h4>
                    <p>{t('contact.info.location')}</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form card" onSubmit={handleSubmit}>
              <h2>{t('contact.form.title')}</h2>

              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')} {t('contact.form.required')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')} {t('contact.form.required')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('contact.form.subject')} {t('contact.form.required')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')} {t('contact.form.required')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                <Send size={20} />
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

