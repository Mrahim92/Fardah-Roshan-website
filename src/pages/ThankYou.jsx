import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'
import './ThankYou.css'

function ThankYou() {
  const { t } = useTranslation()
  const location = useLocation()
  const donationData = location.state || {}

  const {
    amount,
    transactionId,
    donorName = 'Friend'
  } = donationData

  return (
    <div className="thankyou-page">
      <SEO 
        title="Thank You"
        description="Thank you for your generous donation to Fardah Roshan Academy. Your support makes a difference in Afghan education."
        keywords="donation thank you, charity receipt, nonprofit donation"
        path="/thank-you"
        noindex={true}
      />
      <section className="page-hero">
        <div className="container">
          <h1>{t('thankYou.title')}</h1>
          <p>{t('thankYou.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            {amount && (
              <div className="donation-details">
                <p className="greeting">Dear {donorName},</p>
                <div className="amount-display">
                  <span className="label">Donation Amount:</span>
                  <span className="value">${parseFloat(amount).toFixed(2)}</span>
                </div>
                {transactionId && (
                  <p className="transaction">
                    <small>Transaction ID: {transactionId}</small>
                  </p>
                )}
              </div>
            )}

            <p className="lead">{t('thankYou.lead')}</p>

            <div className="impact-message">
              <h3>Your Impact</h3>
              <p>Your generous donation helps us:</p>
              <ul>
                <li>Provide computer literacy programs to Afghan students</li>
                <li>Stock libraries with educational materials</li>
                <li>Support teachers and expand our reach to underserved communities</li>
              </ul>
            </div>

            <div className="next-steps">
              <h3>What's Next?</h3>
              <p>• You'll receive a receipt via email from PayPal</p>
              <p>• Your donation is tax-deductible (501c3 nonprofit)</p>
              <p>• We'll send updates on how your contribution is making a difference</p>
            </div>

            <div className="share-section">
              <h3>Share Our Mission</h3>
              <p>Help us reach more supporters:</p>
              <div className="social-share">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://fardah-roshan.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="share-btn facebook"
                >
                  Share on Facebook
                </a>
                <a 
                  href="https://twitter.com/intent/tweet?text=I%20just%20donated%20to%20Fardah%20Roshan%20Academy%20to%20support%20education%20in%20Afghanistan.%20Join%20me!&url=https://fardah-roshan.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="share-btn twitter"
                >
                  Share on Twitter
                </a>
              </div>
            </div>

            <div className="actions">
              <a className="btn-primary" href="/">{t('thankYou.backHome')}</a>
              <a className="btn-secondary" href="/computer-labs">{t('thankYou.viewPrograms')}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ThankYou
