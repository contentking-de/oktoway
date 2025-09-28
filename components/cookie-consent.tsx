'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie as CookieIcon } from 'lucide-react';

const CONSENT_COOKIE_NAME = 'oktoway_cookie_consent';
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;
const THIRTY_DAYS_SECONDS = 60 * 60 * 24 * 30;

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const cookies = document.cookie.split(';').map((c) => c.trim());
  for (const cookie of cookies) {
    if (cookie.startsWith(name + '=')) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  return null;
}

function writeCookie(name: string, value: string, maxAgeSeconds: number) {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax`;
}

export default function CookieConsent() {
  const [isMounted, setIsMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const existing = readCookie(CONSENT_COOKIE_NAME);
    setShowBanner(!existing);
  }, []);

  function handleAccept() {
    writeCookie(CONSENT_COOKIE_NAME, 'accepted', ONE_YEAR_SECONDS);
    setShowBanner(false);
  }

  function handleDecline() {
    writeCookie(CONSENT_COOKIE_NAME, 'declined', THIRTY_DAYS_SECONDS);
    setShowBanner(false);
  }

  if (!isMounted) return null;

  return (
    <>
      {showBanner && (
        <div className="fixed inset-x-0 bottom-0 z-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
            <div className="rounded-xl border border-gray-200 bg-white shadow-lg p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-sm sm:text-base text-gray-800">
                  Wir verwenden nur technisch notwendige Cookies, um Ihre Auswahl zu speichern. Mit Klick auf
                  „Akzeptieren" stimmen Sie dem Speichern Ihres Einverständnisses zu. Weitere Informationen finden Sie in
                  unserer{' '}
                  <a
                    href="/#datenschutz"
                    className="underline"
                    onClick={(e) => {
                      e.preventDefault();
                      try {
                        if (window.location.pathname === '/') {
                          // Update hash for deep-link and accessibility
                          if (window.location.hash !== '#datenschutz') {
                            window.location.hash = '#datenschutz';
                          }
                          const event = new CustomEvent('open-datenschutz');
                          window.dispatchEvent(event);
                        } else {
                          window.location.href = '/#datenschutz';
                        }
                      } catch {}
                    }}
                  >
                    Datenschutzerklärung
                  </a>
                  .
                </div>
                <div className="flex items-center gap-2 sm:shrink-0">
                  <Button variant="secondary" onClick={handleDecline}>Ablehnen</Button>
                  <Button onClick={handleAccept}>Akzeptieren</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label="Cookie-Einstellungen"
        onClick={() => setShowBanner(true)}
        className="fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        title="Cookie-Einstellungen"
      >
        <CookieIcon className="h-6 w-6 mx-auto" aria-hidden />
      </button>
    </>
  );
}


