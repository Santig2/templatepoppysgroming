'use client';

import { useState, useEffect, useCallback } from 'react';
import { AlertTriangle, Info, X, ExternalLink } from 'lucide-react';

const i18nData = {
  en: {
    switchLang: '🇪🇸 Ver en español',
    tag: {
      initial: 'Important Notice / Project Disclaimer',
      whatsapp: 'Redirect to WhatsApp',
      booking: 'Booking Action',
      tel: 'Phone Call Action',
      form: 'Demo Form Submission',
    },
    title: 'Portfolio Showcase & Reference Project',
    contextMsg: {
      whatsapp: (
        <>
          You clicked the <strong>WhatsApp</strong> button. This website is an independent portfolio showcase and this contact channel is for demonstrative purposes.
        </>
      ),
      booking: (
        <>
          You clicked a <strong>Booking</strong> action. This website is a design template and does not process official appointments.
        </>
      ),
      tel: (
        <>
          You clicked a <strong>phone call</strong> link. Please note this number is displayed as a layout reference for the template.
        </>
      ),
      form: (
        <>
          You interacted with the <strong>booking form</strong>. This is an interactive visual demonstration for presentation purposes.
        </>
      ),
    },
    p1: (
      <>
        This website is exclusively a <strong>project reference, UI template, and web development portfolio showcase</strong>.
      </>
    ),
    p2: (
      <>
        🚫 <strong>It is NOT an official website of the company</strong> and has <strong>NO commercial, legal, or official relationship</strong> with <em>Poppy Paws Grooming (poppypawsgrooming / Poppy Paws LLC)</em>.
      </>
    ),
    p3: 'All trademarks, logos, and business names belong to their respective owners and are displayed strictly for personal portfolio and design demonstration purposes.',
    button: '✓ I Understand',
    continueExt: 'Continue to external link anyway',
    continueScroll: 'Scroll to demo form ↓',
    continuePage: 'Go to demo page',
  },
  es: {
    switchLang: '🇺🇸 View in English',
    tag: {
      initial: 'Aviso Importante / Project Disclaimer',
      whatsapp: 'Redirección a WhatsApp',
      booking: 'Acción de Reserva',
      tel: 'Llamada Telefónica',
      form: 'Envío de Formulario',
    },
    title: 'Sitio Web de Muestra / Portafolio',
    contextMsg: {
      whatsapp: (
        <>
          Has pulsado el botón de <strong>WhatsApp</strong>. Esta página es una referencia de portafolio y este canal de contacto es demostrativo.
        </>
      ),
      booking: (
        <>
          Has pulsado una acción de <strong>Reserva / Booking</strong>. Esta página es una plantilla de desarrollo y no procesa citas oficiales.
        </>
      ),
      tel: (
        <>
          Has pulsado un enlace de <strong>llamada telefónica</strong>. Recuerda que este número figura como referencia de la plantilla de diseño.
        </>
      ),
      form: (
        <>
          Has interactuado con el <strong>formulario</strong>. Esta es una simulación visual y técnica con propósitos de presentación.
        </>
      ),
    },
    p1: (
      <>
        Esta página web es exclusivamente una <strong>referencia de proyecto y plantilla de diseño web</strong>.
      </>
    ),
    p2: (
      <>
        🚫 <strong>NO es una página oficial de la empresa</strong> y <strong>NO tiene relación comercial, societaria ni contractual</strong> con <em>Poppy Paws Grooming (poppypawsgrooming / Poppy Paws LLC)</em>.
      </>
    ),
    p3: 'Todas las marcas registradas, logotipos y nombres comerciales pertenecen a sus respectivos propietarios y se muestran estrictamente con fines de demostración técnica y de portafolio.',
    button: '✓ Lo entiendo',
    continueExt: 'Continuar al enlace externo de todos modos',
    continueScroll: 'Desplazarse al formulario de muestra ↓',
    continuePage: 'Ir a la página de muestra',
  },
};

export function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [context, setContext] = useState('initial');
  const [targetUrl, setTargetUrl] = useState('');
  const [lang, setLang] = useState('en'); // Defaults to English first

  // Initial trigger on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setContext('initial');
      setIsOpen(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  // Intercept any redirection / booking / whatsapp / form action across the site
  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Don't intercept clicks inside the modal itself
      if (e.target.closest('#disclaimer-modal-container')) {
        return;
      }

      const interactiveEl = e.target.closest('a, button, input[type="submit"]');
      if (!interactiveEl) return;

      const href = (interactiveEl.getAttribute('href') || '').trim();
      const text = (interactiveEl.innerText || interactiveEl.textContent || '').trim().toLowerCase();
      const type = (interactiveEl.getAttribute('type') || '').toLowerCase();

      // Check if it's WhatsApp
      const isWhatsApp =
        href.includes('wa.me') ||
        href.includes('whatsapp') ||
        interactiveEl.getAttribute('aria-label')?.toLowerCase().includes('whatsapp') ||
        text.includes('whatsapp') ||
        interactiveEl.closest('.whatsapp-btn');

      // Check if it's a booking action
      const isBooking =
        href.includes('/book') ||
        href.includes('/booking') ||
        href.includes('booking.moego.pet') ||
        text.includes('book now') ||
        text.includes('booking') ||
        text.includes('start request') ||
        text.includes('client portal') ||
        text.includes('reserva');

      // Check if it's a phone call link
      const isTel = href.startsWith('tel:');

      // Check if it's a form submit button
      const isSubmit =
        type === 'submit' ||
        interactiveEl.tagName === 'BUTTON' && interactiveEl.closest('form');

      if (isWhatsApp || isBooking || isTel || isSubmit) {
        e.preventDefault();
        e.stopPropagation();

        if (isWhatsApp) {
          setContext('whatsapp');
          setTargetUrl(href || 'https://wa.me/15126770703');
        } else if (isBooking) {
          setContext('booking');
          setTargetUrl(href || '/book');
        } else if (isTel) {
          setContext('tel');
          setTargetUrl(href);
        } else {
          setContext('form');
          setTargetUrl('');
        }

        setIsOpen(true);
      }
    };

    const handleGlobalSubmit = (e) => {
      if (e.target.closest('#disclaimer-modal-container')) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      setContext('form');
      setTargetUrl('');
      setIsOpen(true);
    };

    document.addEventListener('click', handleGlobalClick, true);
    document.addEventListener('submit', handleGlobalSubmit, true);

    return () => {
      document.removeEventListener('click', handleGlobalClick, true);
      document.removeEventListener('submit', handleGlobalSubmit, true);
    };
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const t = i18nData[lang];

  return (
    <div
      id="disclaimer-modal-container"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-[28px] md:rounded-[32px] p-6 sm:p-8 shadow-2xl border border-white/60 transform transition-all duration-300 scale-100 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls: Language Switcher and Close Button */}
        <div className="absolute top-5 right-5 flex items-center gap-2 z-10">
          <button
            type="button"
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="px-3 py-1 text-xs font-bold font-dm-sans rounded-full bg-pp-cream hover:bg-pp-cream-dark text-pp-dark border border-pp-border transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            title={lang === 'en' ? 'Cambiar a español' : 'Switch to English'}
          >
            {t.switchLang}
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-pp-cream-dark/60 hover:bg-pp-cream-dark text-pp-dark flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close disclaimer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Header Icon & Tag */}
        <div className="flex items-center gap-3 mb-4 pr-32">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 shadow-sm">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
              {t.tag[context] || t.tag.initial}
            </span>
            <h3 className="text-xl sm:text-2xl font-playfair font-bold text-pp-dark leading-tight mt-1">
              {t.title}
            </h3>
          </div>
        </div>

        {/* Dynamic Context Message */}
        {context !== 'initial' && (
          <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3.5 mb-4 text-xs font-dm-sans text-amber-900 leading-relaxed flex items-start gap-2.5">
            <Info className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
            <span>{t.contextMsg[context]}</span>
          </div>
        )}

        {/* Core Disclaimer Description */}
        <div className="space-y-3 text-sm text-pp-body font-dm-sans leading-relaxed">
          <p>{t.p1}</p>
          <p className="bg-pp-cream/70 rounded-2xl p-3.5 border border-pp-border/60 text-xs text-pp-dark/90 leading-relaxed">
            {t.p2}
          </p>
          <p className="text-xs text-pp-muted">
            {t.p3}
          </p>
        </div>

        {/* Primary Action Button: "I Understand" / "Lo entiendo" */}
        <div className="mt-6 flex flex-col gap-2.5">
          <button
            onClick={handleClose}
            className="w-full bg-pp-red hover:bg-pp-red-dark text-white font-dm-sans font-bold py-3.5 px-6 rounded-full text-sm shadow-[var(--clay-btn-primary)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {t.button}
          </button>

          {/* Optional continue actions if a target action was clicked */}
          {targetUrl && targetUrl.startsWith('http') && (
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="text-center text-xs text-pp-muted hover:text-pp-dark underline transition-colors pt-1 inline-flex items-center justify-center gap-1 font-dm-sans"
            >
              {t.continueExt} <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {targetUrl && targetUrl.startsWith('#') && (
            <button
              onClick={() => {
                handleClose();
                const el = document.querySelector(targetUrl);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-center text-xs text-pp-muted hover:text-pp-dark underline transition-colors pt-1 font-dm-sans cursor-pointer"
            >
              {t.continueScroll}
            </button>
          )}
          {targetUrl && targetUrl.startsWith('/') && (
            <a
              href={targetUrl}
              onClick={handleClose}
              className="text-center text-xs text-pp-muted hover:text-pp-dark underline transition-colors pt-1 inline-flex items-center justify-center gap-1 font-dm-sans"
            >
              {t.continuePage} ({targetUrl}) →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
