import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import './Donate.css'

// PayPal Client ID - LIVE (Production)
const PAYPAL_CLIENT_ID = 'BAAgFO_iC-v1VwPoXB_mkreupGIDKDyq3t2_-ajWUy8oPzfDdv85vtxaXUtkv-9oF_BUqJyn7HdE8fRcYU'

function Donate() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')
  const [paypalLoaded, setPaypalLoaded] = useState(false)
  const [error, setError] = useState('')

  const suggestedAmounts = [10, 25, 50, 100, 250, 500]

  // Get the amount to donate (either selected or custom)
  const getAmount = () => {
    if (selectedAmount === 'other') {
      const value = parseFloat(customAmount)
      return !isNaN(value) && value > 0 ? value : 0
    }
    return selectedAmount || 0
  }

  const amount = getAmount()

  // Load PayPal SDK once on mount
  useEffect(() => {
    if (window.paypal) {
      setPaypalLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD&intent=capture`
    script.async = true
    script.onload = () => {
      setPaypalLoaded(true)
    }
    script.onerror = () => {
      console.error('Failed to load PayPal SDK')
      setError('Failed to load payment system. Please refresh and try again.')
    }
    document.body.appendChild(script)

    return () => {
      // Cleanup script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  // Render PayPal buttons when amount is selected
  useEffect(() => {
    if (!paypalLoaded || amount <= 0 || !window.paypal) {
      return
    }

    const container = document.getElementById('paypal-button-container')
    if (!container) return

    // Clear existing buttons
    container.innerHTML = ''

    try {
      window.paypal.Buttons({
        style: {
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'donate',
          height: 50
        },
        
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount.toFixed(2),
                currency_code: 'USD'
              },
              description: 'Donation to Fardah Roshan Academy',
              custom_id: `donation_${Date.now()}`,
            }],
            application_context: {
              brand_name: 'Fardah Roshan Academy',
              shipping_preference: 'NO_SHIPPING'
            }
          })
        },
        
        onApprove: async (data, actions) => {
          try {
            const order = await actions.order.capture()
            console.log('Donation successful:', order)
            
            // Track with GA4 if available
            if (window.gtag) {
              window.gtag('event', 'purchase', {
                transaction_id: order.id,
                value: amount,
                currency: 'USD',
                items: [{
                  item_name: 'Donation',
                  item_category: 'Donation',
                  quantity: 1,
                  price: amount
                }]
              })
            }

            // Redirect to thank you page with donation details
            navigate('/thank-you', { 
              state: { 
                amount: amount,
                transactionId: order.id,
                donorName: order.payer?.name?.given_name || 'Friend',
                donorEmail: order.payer?.email_address
              },
              replace: true
            })
          } catch (err) {
            console.error('Error capturing order:', err)
            setError('There was an error processing your donation. Please contact us if you were charged.')
          }
        },
        
        onError: (err) => {
          console.error('PayPal error:', err)
          setError('There was an error with PayPal. Please try again or contact us.')
        },
        
        onCancel: () => {
          console.log('Donation cancelled by user')
        }
      }).render('#paypal-button-container')
    } catch (err) {
      console.error('Error rendering PayPal buttons:', err)
      setError('Error loading payment buttons. Please refresh the page.')
    }
  }, [paypalLoaded, amount, navigate])

  const handleAmountSelect = (amt) => {
    setSelectedAmount(amt)
    setCustomAmount('')
    setError('')
  }

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value)
    setError('')
  }

  const validateCustomAmount = () => {
    const value = customAmount.trim()
    if (!value) {
      setError(t('donate.errors.enterAmount'))
      return false
    }
    const num = parseFloat(value)
    if (isNaN(num) || num <= 0) {
      setError(t('donate.errors.invalidAmount'))
      return false
    }
    if (!/^\d+(\.\d{1,2})?$/.test(value)) {
      setError(t('donate.errors.twoDecimals'))
      return false
    }
    setError('')
    return true
  }

  useEffect(() => {
    if (selectedAmount === 'other' && customAmount) {
      validateCustomAmount()
    }
  }, [customAmount])

  return (
    <div className="donate-page">
      <section className="page-hero">
        <div className="container">
          <h1>{t('donate.title')}</h1>
          <p>{t('donate.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="donate-grid">
            <div className="donate-card">
              <h2 className="section-title">{t('donate.chooseAmount')}</h2>
              
              <div className="amounts">
                {suggestedAmounts.map((amt) => (
                  <button
                    key={amt}
                    className={`amount ${selectedAmount === amt ? 'selected' : ''}`}
                    onClick={() => handleAmountSelect(amt)}
                  >
                    ${amt}
                  </button>
                ))}
                
                <button
                  className={`amount ${selectedAmount === 'other' ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedAmount('other')
                    setError('')
                  }}
                >
                  {t('donate.otherAmount')}
                </button>
              </div>

              {selectedAmount === 'other' && (
                <div className="other">
                  <label htmlFor="custom-amount">{t('donate.otherAmount')}</label>
                  <div className="other-input-row">
                    <span className="currency">$</span>
                    <input
                      id="custom-amount"
                      type="number"
                      min="1"
                      step="0.01"
                      placeholder="0.00"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                    />
                  </div>
                  {error && <p className="error">{error}</p>}
                </div>
              )}

              {/* PayPal Buttons Container */}
              {amount > 0 && !error && (
                <div className="paypal-container">
                  <div id="paypal-button-container"></div>
                  <p className="note secure-notice">
                    🔒 {t('donate.secureNotice')}
                  </p>
                </div>
              )}

              {!paypalLoaded && amount > 0 && (
                <div className="loading">
                  <p>Loading payment options...</p>
                </div>
              )}

              {error && amount > 0 && (
                <div className="error-box">
                  <p>{error}</p>
                </div>
              )}
            </div>

            <div className="impact-card">
              <h3>{t('donate.yourImpact')}</h3>
              <ul>
                <li>✓ {t('donate.impact.line1')}</li>
                <li>✓ {t('donate.impact.line2')}</li>
                <li>✓ {t('donate.impact.line3')}</li>
              </ul>
              
              <div className="trust-signals">
                <h4>💙 Tax-Deductible</h4>
                <p><strong>501(c)(3) Nonprofit Organization</strong></p>
                <p>EIN: 85-4170493</p>
                <p>Donations are tax-deductible in the United States</p>
                <p className="secure-badge">🔒 Secure payments powered by PayPal</p>
              </div>

              <a href="/thank-you" className="already">{t('donate.alreadyDonated')}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donate
