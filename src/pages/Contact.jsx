import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Send } from 'lucide-react'
import SEO from '../components/SEO'
import './Contact.css'

function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('') // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/mrbonlbd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        // Clear success message after 5 seconds
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us"
        description="Get in touch with Fardah Roshan Academy. Email us at info@fardahroshan.org. We'd love to hear from you."
        keywords="contact, email, reach out, Afghanistan education nonprofit"
        path="/contact"
      />
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
                    <a href="mailto:info@fardahroshan.org">info@fardahroshan.org</a>
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

              {status === 'success' && (
                <div className="form-message success">
                  ✅ {t('contact.form.success')}
                </div>
              )}
              
              {status === 'error' && (
                <div className="form-message error">
                  ❌ Something went wrong. Please try again or email us directly at info@fardahroshan.org
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={status === 'sending'}
              >
                <Send size={20} />
                {status === 'sending' ? 'Sending...' : t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

