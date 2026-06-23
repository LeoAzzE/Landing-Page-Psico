export const CONSENT_KEY = "essenciamind_cookie_consent";

export const CONSENT_UPDATED_EVENT = "cookie-consent-updated";

export function hasAnalyticsConsent() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_KEY) === "all";
}

export function saveConsent(type) {
  localStorage.setItem(CONSENT_KEY, type);
  window.dispatchEvent(
    new CustomEvent(CONSENT_UPDATED_EVENT, { detail: type })
  );
}
