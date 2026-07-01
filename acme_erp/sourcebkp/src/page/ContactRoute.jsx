import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Contact from '../components/contact.jsx';

const ContactRoute = () => (
  <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_KEY}>
    <Contact />
  </GoogleReCaptchaProvider>
);

export default ContactRoute;
