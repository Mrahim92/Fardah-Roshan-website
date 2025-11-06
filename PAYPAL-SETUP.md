# PayPal Integration Setup Guide

## ✅ What's Been Implemented

Your Donate page now uses **PayPal Smart Payment Buttons** for seamless in-page donations.

### Features Implemented:
- ✓ Select from suggested amounts ($15, $25, $50, $100, $250, $500)
- ✓ Custom "Other Amount" option
- ✓ PayPal buttons load dynamically when amount is selected
- ✓ Secure payment processing through PayPal
- ✓ Automatic redirect to Thank You page after successful donation
- ✓ Transaction ID tracking
- ✓ Google Analytics 4 purchase event tracking (when GA4 is added)
- ✓ Trust signals (501c3 status, secure notice)
- ✓ Enhanced Thank You page with donation details, impact message, and social sharing

---

## 🔧 Current Configuration

**Client ID:** `BAARlzl3RqsbsDFBbMi7YHOPK_8FVPhf5JDqyfRHg6FwTAYIFL-rO-Qb7-WISneWurzEwuJGGRy74-tITM`

**Note:** This appears to be a Sandbox (test) Client ID. 

---

## 🧪 Testing Your Integration

### Step 1: Test Locally

1. Make sure your dev server is running: `npm run dev`
2. Navigate to: http://localhost:5173/Fardah-Roshan-website/donate
3. Select an amount (e.g., $25)
4. PayPal buttons should appear below
5. Click "Donate with PayPal"

### Step 2: Test with PayPal Sandbox Account

If this is a Sandbox Client ID:
1. Go to https://developer.paypal.com/
2. Login and go to "Testing Tools" → "Sandbox Accounts"
3. Use a **Personal** sandbox account to make a test donation
4. After completing the payment, you should be redirected to the Thank You page
5. Verify the test payment in your **Business** sandbox account at https://www.sandbox.paypal.com/

---

## 🚀 Going Live (When Ready)

### Step 1: Get Live Client ID

1. Go to https://developer.paypal.com/dashboard/
2. Click the **"Live"** tab (not Sandbox)
3. Create a new app for your live account
4. Copy your **Live Client ID**

### Step 2: Update the Code

Open `src/pages/Donate.jsx` and update line 7:

```javascript
// Change from:
const PAYPAL_CLIENT_ID = 'BAARlzl3RqsbsDFBbMi7YHOPK_8FVPhf5JDqyfRHg6FwTAYIFL-rO-Qb7-WISneWurzEwuJGGRy74-tITM'

// To your Live Client ID:
const PAYPAL_CLIENT_ID = 'YOUR_LIVE_CLIENT_ID_HERE'
```

### Step 3: Test on Production

1. Deploy your site
2. Make a small real donation ($1) to test
3. Verify the donation appears in your PayPal Business account

---

## 🔐 Security Best Practice (Optional - Future Enhancement)

For better security, you can use environment variables:

1. Create `.env.development`:
```
VITE_PAYPAL_CLIENT_ID=your_sandbox_client_id
```

2. Create `.env.production`:
```
VITE_PAYPAL_CLIENT_ID=your_live_client_id
```

3. Update `Donate.jsx` line 7:
```javascript
const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID || 'fallback_id'
```

4. These files are already in `.gitignore` so they won't be committed

---

## 📊 Tracking & Analytics

The integration includes:

### Transaction Tracking
- After successful donation, the Thank You page receives:
  - Donation amount
  - Transaction ID
  - Donor name (first name from PayPal)
  - Donor email

### Google Analytics 4 (when enabled)
The code includes GA4 e-commerce tracking:
```javascript
gtag('event', 'purchase', {
  transaction_id: order.id,
  value: amount,
  currency: 'USD'
})
```

To enable this, add Google Analytics 4 to your site.

---

## 🆘 Troubleshooting

### PayPal Buttons Not Appearing
- Check browser console for errors
- Verify Client ID is correct
- Make sure amount is selected
- Check network tab to see if PayPal SDK loaded

### Payment Not Processing
- Verify you're using correct account (Sandbox vs Live)
- Check PayPal dashboard for any account issues
- Ensure business account is verified

### Redirect Not Working
- Check browser console for errors
- Verify routing is set up correctly in `App.jsx`

---

## 📞 Support

For PayPal-specific issues:
- PayPal Developer Support: https://developer.paypal.com/support/
- PayPal Integration Wizard: https://developer.paypal.com/dashboard/applications

---

## ✨ Next Enhancements (Optional)

1. **Recurring Donations**: Add monthly subscription option
2. **Multiple Currencies**: Support EUR, GBP, etc.
3. **Donor Dashboard**: Track donation history
4. **Email Automation**: Send custom thank-you emails
5. **CRM Integration**: Connect with donor management system

---

Last Updated: November 6, 2025

