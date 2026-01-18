import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6LfILk8sAAAAACz_WPpREwUKJH0swSWfXIx9O1VO">
      <App />
    </GoogleReCaptchaProvider>
  </StrictMode>,
)
