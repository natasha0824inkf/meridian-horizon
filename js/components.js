/**
 * Meridian Horizon - Shared Components
 *
 * TODO items before launch - search for [TODO] in this file:
 *   - Replace PHONE with the actual number (with country code, e.g. +971 50 123 4567)
 *   - Replace WHATSAPP_NUMBER with the WhatsApp number (digits only, no + or spaces, e.g. 971501234567)
 *   - Replace EMAIL with the actual email address
 *   - Replace social media href="#" links with actual profile URLs
 */

(function () {

  /* ---- EDIT THESE BEFORE LAUNCH ---- */
  const PHONE            = '+971 [XX XXX XXXX]';      // [TODO] actual phone number
  const WHATSAPP_NUMBER  = '971XXXXXXXXX';             // [TODO] digits only, no + or spaces
  const EMAIL            = 'info@[yourdomain].ae';     // [TODO] actual email
  const LINKEDIN_URL     = '#';                        // [TODO] LinkedIn company page URL
  const INSTAGRAM_URL    = '#';                        // [TODO] Instagram profile URL
  const FACEBOOK_URL     = '#';                        // [TODO] Facebook page URL
  /* ---------------------------------- */

  const pages = [
    { href: 'index.html',      label: 'Home',          i18n: 'nav-home' },
    { href: 'about.html',      label: 'About Us',      i18n: 'nav-about' },
    { href: 'services.html',   label: 'Services',      i18n: 'nav-services' },
    { href: 'industries.html', label: 'Industries',    i18n: 'nav-industries' },
    { href: 'why-us.html',     label: 'Why Choose Us', i18n: 'nav-why' },
    { href: 'partners.html',   label: 'Partners',      i18n: 'nav-partners' },
    { href: 'contact.html',    label: 'Contact',       i18n: 'nav-contact' },
  ];

  function currentPage() {
    return window.location.pathname.split('/').pop() || 'index.html';
  }

  function header() {
    const cur = currentPage();
    const desktopLinks = pages.map(p =>
      `<a href="${p.href}"${cur === p.href ? ' class="active"' : ''} data-i18n="${p.i18n}">${p.label}</a>`
    ).join('');
    const mobileLinks = pages.map(p =>
      `<a href="${p.href}" data-i18n="${p.i18n}">${p.label}</a>`
    ).join('');

    return `
<header class="site-header" id="site-header">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo" aria-label="Meridian Horizon – Home">
      <span class="logo-main">Meridian Horizon</span>
      <span class="logo-sub">Commercial Brokers LLC</span>
    </a>
    <nav class="nav-links" aria-label="Main navigation">${desktopLinks}</nav>
    <div class="nav-right">
      <a href="contact.html" class="btn btn-primary nav-cta" data-i18n="nav-cta">Get in Touch</a>
      <div class="nav-controls">
        <button id="lang-btn" aria-label="Passer en français">FR</button>
        <button id="theme-btn" aria-label="Switch to dark mode">
          <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
        </button>
      </div>
      <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <nav class="nav-mobile" id="nav-mobile" aria-label="Mobile navigation">${mobileLinks}</nav>
</header>`;
  }

  function footer() {
    const year = new Date().getFullYear();
    return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <span class="logo-main">Meridian Horizon</span>
          <span class="logo-sub">Commercial Brokers LLC</span>
        </div>
        <p class="footer-tagline" data-i18n="footer-tagline">Your trusted partner for company formation, corporate structuring and strategic business growth in the UAE and internationally.</p>
        <div class="footer-social">
          <a href="${LINKEDIN_URL}" aria-label="LinkedIn" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="${INSTAGRAM_URL}" aria-label="Instagram" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="${FACEBOOK_URL}" aria-label="Facebook" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
      </div>
      <div>
        <p class="footer-col-heading" data-i18n="footer-quick-links">Quick Links</p>
        <div class="footer-links">
          <a href="index.html" data-i18n="footer-link-home">Home</a>
          <a href="about.html" data-i18n="footer-link-about">About Us</a>
          <a href="services.html" data-i18n="footer-link-services">Services</a>
          <a href="industries.html" data-i18n="footer-link-industries">Industries</a>
        </div>
      </div>
      <div>
        <p class="footer-col-heading" data-i18n="footer-company-col">Company</p>
        <div class="footer-links">
          <a href="why-us.html" data-i18n="footer-link-why">Why Choose Us</a>
          <a href="partners.html" data-i18n="footer-link-partners">Partners</a>
          <a href="contact.html" data-i18n="footer-link-contact">Contact</a>
        </div>
      </div>
      <div>
        <p class="footer-col-heading" data-i18n="footer-contact-col">Contact</p>
        <p class="footer-contact-line"><a href="tel:${PHONE}">${PHONE}</a></p>
        <p class="footer-contact-line"><a href="mailto:${EMAIL}">${EMAIL}</a></p>
        <p class="footer-contact-line" data-i18n="contact-loc-val">Dubai, United Arab Emirates</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-bottom-text">&copy; ${year} Meridian Horizon Commercial Brokers LLC. All rights reserved. Dubai, United Arab Emirates</p>
      <p class="footer-bottom-text">
        <a href="privacy.html" style="color:inherit;text-decoration:none;transition:color 0.2s ease" onmouseover="this.style.color='#C49A3C'" onmouseout="this.style.color='inherit'">Privacy Policy</a>
        &nbsp;&middot;&nbsp;
        <a href="terms.html" style="color:inherit;text-decoration:none;transition:color 0.2s ease" onmouseover="this.style.color='#C49A3C'" onmouseout="this.style.color='inherit'">Terms &amp; Conditions</a>
      </p>
    </div>
  </div>
</footer>
<a href="https://wa.me/${WHATSAPP_NUMBER}" class="whatsapp-fab" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>`;
  }

  /* ---- Inject ---- */

  const headerEl = document.getElementById('header-placeholder');
  if (headerEl) headerEl.outerHTML = header();

  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = footer();

  /* ---- Hamburger toggle ---- */
  document.addEventListener('click', function (e) {
    const btn = document.getElementById('nav-hamburger');
    const menu = document.getElementById('nav-mobile');
    if (!btn || !menu) return;
    if (btn === e.target || btn.contains(e.target)) {
      const open = menu.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open.toString());
    }
  });

  /* ---- Scroll shadow on header ---- */
  window.addEventListener('scroll', function () {
    const h = document.getElementById('site-header');
    if (h) h.style.boxShadow = window.scrollY > 20
      ? '0 2px 20px rgba(0,0,0,0.22)'
      : 'none';
  }, { passive: true });

})();
