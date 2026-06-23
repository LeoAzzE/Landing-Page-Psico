"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { gaMeasurementId } from "@/lib/site-config";
import {
  CONSENT_UPDATED_EVENT,
  hasAnalyticsConsent,
} from "@/lib/cookie-consent";

function shouldLoadAnalytics() {
  if (!gaMeasurementId) return false;
  if (!hasAnalyticsConsent()) return false;

  if (process.env.NODE_ENV === "production") return true;
  return process.env.NEXT_PUBLIC_GA_ENABLE_DEV === "true";
}

export function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    function sync() {
      setEnabled(shouldLoadAnalytics());
    }

    sync();
    window.addEventListener(CONSENT_UPDATED_EVENT, sync);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, sync);
  }, []);

  if (!enabled || !gaMeasurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          gtag('config', '${gaMeasurementId}');
        `}
      </Script>
    </>
  );
}
