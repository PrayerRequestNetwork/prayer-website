import React from 'react';

export default function ReCAPTCHA () {
  return <div className="g-recaptcha" data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}></div>;
}