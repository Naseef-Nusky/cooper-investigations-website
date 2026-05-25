import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  SITE_EMAIL,
  SITE_EMAIL_HREF,
  SITE_PHONE,
  SITE_PHONE_HREF,
  SITE_WEBSITE,
  SITE_WEBSITE_HREF,
  SITE_ADDRESS,
  navLinks,
  investigationServices,
  digitalForensicsServices,
} from '../siteConfig.js'

function LogoMark({ className = '' }) {
  return (
    <img
      src="/logo.png"
      alt="Cooper Investigations"
      className={`h-11 w-auto object-contain md:h-12 ${className}`}
      width={220}
      height={48}
    />
  )
}

function IconPhoneSmall({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )
}

function IconMailSmall({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

function NavLink({ link, onNavigate, className, isActive: isActiveOverride }) {
  const location = useLocation()
  const isHash = link.to.includes('#')
  const isActive =
    isActiveOverride ??
    (link.to === '/about'
      ? location.pathname === '/about'
      : !isHash && location.pathname === link.to)

  if (isHash) {
    return (
      <a href={link.to} onClick={onNavigate} className={className}>
        {link.label}
      </a>
    )
  }

  return (
    <Link to={link.to} onClick={onNavigate} className={className} aria-current={isActive ? 'page' : undefined}>
      {link.label}
    </Link>
  )
}

function NavDropdown({ label, parentLink, items, open, onOpen, onClose }) {
  const location = useLocation()
  const isChildActive = items.some((item) => location.pathname === item.to)
  const isHash = parentLink.to.includes('#')
  const triggerClass = `nav-menu-trigger nav-link relative rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-slate-100/80 hover:text-brand-navy ${
    open || isChildActive ? 'text-brand-teal' : 'text-slate-600'
  }`

  const trigger = isHash ? (
    <a href={parentLink.to} className={triggerClass} aria-expanded={open}>
      {parentLink.label}
    </a>
  ) : (
    <Link
      to={parentLink.to}
      className={triggerClass}
      aria-expanded={open}
      aria-current={isChildActive && location.pathname === parentLink.to ? 'page' : undefined}
    >
      {parentLink.label}
    </Link>
  )

  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      {trigger}
      <div
        className={`absolute left-0 top-full z-50 min-w-[17rem] pt-2 transition ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <div className="nav-dropdown-panel" role="menu" aria-label={`${label} submenu`}>
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              role="menuitem"
              className="nav-dropdown-link"
              aria-current={location.pathname === item.to ? 'page' : undefined}
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileNavGroup({ title, items, onNavigate }) {
  const location = useLocation()

  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-2">
      <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-brand-teal">{title}</p>
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              onClick={onNavigate}
              className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-white hover:text-brand-navy"
              aria-current={location.pathname === item.to ? 'page' : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [investigationOpen, setInvestigationOpen] = useState(false)
  const [forensicsOpen, setForensicsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
    setInvestigationOpen(false)
    setForensicsOpen(false)
  }

  const navItemClass =
    'nav-link relative rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100/80 hover:text-brand-navy'

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-white/10 bg-brand-navy lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 text-xs text-white/75 md:px-6">
          <p className="font-medium tracking-wide text-white/90">Discreet · Professional · UK &amp; International</p>
          <div className="flex items-center gap-6">
            <a href={SITE_PHONE_HREF} className="inline-flex items-center gap-2 transition hover:text-white">
              <IconPhoneSmall />
              Call: {SITE_PHONE}
            </a>
            <a href={SITE_EMAIL_HREF} className="inline-flex items-center gap-2 transition hover:text-white">
              <IconMailSmall />
              {SITE_EMAIL}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'border-slate-200/80 bg-white/90 shadow-[0_8px_30px_rgba(17,34,51,0.08)] backdrop-blur-xl'
            : 'border-slate-200/60 bg-white/80 backdrop-blur-md'
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 transition-all duration-300 md:px-6 ${
            scrolled ? 'py-3' : 'py-4'
          }`}
        >
          <Link to="/" className="relative z-50 shrink-0" onClick={closeMenu}>
            <LogoMark className={scrolled ? 'h-10 md:h-11' : ''} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              if (link.menu === 'investigation') {
                return (
                  <NavDropdown
                    key={link.to}
                    label={link.label}
                    parentLink={link}
                    items={investigationServices}
                    open={investigationOpen}
                    onOpen={() => setInvestigationOpen(true)}
                    onClose={() => setInvestigationOpen(false)}
                  />
                )
              }
              if (link.menu === 'forensics') {
                return (
                  <NavDropdown
                    key={link.to}
                    label={link.label}
                    parentLink={link}
                    items={digitalForensicsServices}
                    open={forensicsOpen}
                    onOpen={() => setForensicsOpen(true)}
                    onClose={() => setForensicsOpen(false)}
                  />
                )
              }
              return <NavLink key={link.to} link={link} className={navItemClass} />
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-navy/20 transition hover:bg-brand-green hover:shadow-brand-green/25"
            >
              Get in touch
            </Link>
          </div>

          <button
            type="button"
            className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-brand-navy shadow-sm transition hover:border-slate-300 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 lg:hidden ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-brand-navy/40 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
          aria-label="Close menu overlay"
        />
        <nav
          className={`absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <span className="text-sm font-semibold text-brand-navy">Menu</span>
            <button
              type="button"
              className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-brand-navy"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
            <NavLink
              link={navLinks.find((l) => l.label === 'About Us')}
              onNavigate={closeMenu}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-brand-navy"
            />
            <MobileNavGroup
              title="Investigation Services"
              items={investigationServices}
              onNavigate={closeMenu}
            />
            <MobileNavGroup
              title="Digital Forensics"
              items={digitalForensicsServices}
              onNavigate={closeMenu}
            />
            <NavLink
              link={navLinks.find((l) => l.label === 'Security Services')}
              onNavigate={closeMenu}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-brand-navy"
            />
            <NavLink
              link={navLinks.find((l) => l.label === 'Contact')}
              onNavigate={closeMenu}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-brand-navy"
            />
          </div>
          <div className="border-t border-slate-100 p-4">
            <a href={SITE_PHONE_HREF} className="mb-3 flex items-center gap-2 text-sm text-slate-600" onClick={closeMenu}>
              <IconPhoneSmall />
              {SITE_PHONE}
            </a>
            <a href={SITE_EMAIL_HREF} className="mb-4 flex items-center gap-2 text-sm text-slate-600" onClick={closeMenu}>
              <IconMailSmall />
              {SITE_EMAIL}
            </a>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center rounded-full bg-brand-navy py-3 text-sm font-semibold text-white transition hover:bg-brand-green"
            >
              Get in touch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

const footerLinks = [
  { label: 'Investigation Services', href: '/#services' },
  { label: 'Digital Forensics', href: '/cyber-security' },
  { label: 'Security Services', href: '/services/close-protection' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0d1824] text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:gap-12 md:px-6 lg:grid-cols-4">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
          <address className="mt-4 not-italic text-sm leading-relaxed">
            Cooper Investigations Limited
            <br />
            {SITE_ADDRESS.line1}
            <br />
            {SITE_ADDRESS.line2}
            <br />
            {SITE_ADDRESS.country}
          </address>
          <p className="mt-3 text-sm">
            <a href={SITE_PHONE_HREF} className="text-brand-teal hover:text-white">
              {SITE_PHONE}
            </a>
          </p>
          <p className="text-sm">
            <a href={SITE_EMAIL_HREF} className="text-brand-teal hover:text-white">
              {SITE_EMAIL}
            </a>
          </p>
          <p className="text-sm">
            <a href={SITE_WEBSITE_HREF} className="text-brand-teal hover:text-white" target="_blank" rel="noopener noreferrer">
              {SITE_WEBSITE}
            </a>
          </p>
        </div>
        <div className="lg:col-span-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-brand-teal hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Hours</h3>
          <p className="mt-4 text-sm leading-relaxed">Enquiries monitored around the clock for urgent matters.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-slate-500">
          <p>
            © Copyright {year} All Rights Reserved | Cooper Investigations Limited. Company registered in England and
            Wales. Registration number 13385770.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            {['Facebook', 'Twitter', 'Instagram', 'Pinterest'].map((network) => (
              <a
                key={network}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[10px] font-semibold uppercase text-slate-400 transition hover:border-brand-teal hover:text-white"
                aria-label={network}
              >
                {network[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
      <a
        href="#"
        className="fixed bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal text-white shadow-lg transition hover:bg-white hover:text-brand-navy"
        aria-label="Back to top"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </footer>
  )
}

export function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}
