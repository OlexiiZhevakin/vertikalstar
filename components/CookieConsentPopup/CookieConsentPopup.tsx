'use client'

import { useState } from "react";

export default function CookieConsentPopup() {
  const [visible, setVisible] = useState(true);

  function handleAccept() {
    // сохранение информации о согласии на использование куки в куки браузера
    document.cookie = "cookieConsent=true; path=/";
    setVisible(false);
  }

  function handleDecline() {
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div>
      We use cookies to improve your experience on our site.
      <button onClick={handleAccept}>Accept</button>
      <button onClick={handleDecline}>Decline</button>
    </div>
  );
}
