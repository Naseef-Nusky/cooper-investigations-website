import { Link } from 'react-router-dom'
import { SITE_PHONE, SITE_PHONE_HREF } from '../siteConfig.js'

export function ServicePageHero({ title, breadcrumb }) {
  return (
    <div className="service-page-hero relative overflow-hidden">
      <div className="service-page-hero-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="service-page-hero-glow pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-brand-teal/20 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-16 text-center md:px-6 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/90">Investigation Services</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-white/75 md:text-base">
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>
          <span className="mx-2 opacity-60">/</span>
          <span>{breadcrumb}</span>
        </p>
      </div>
    </div>
  )
}

export function ServiceBulletList({ items }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item.id ?? item.text} className="service-bullet flex gap-3 text-sm leading-relaxed text-slate-600 md:text-base">
          <span className="service-bullet-icon" aria-hidden>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span>{item.text ?? item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ServiceFeatureGrid({ features }) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {features.map((feature) => (
        <div key={feature} className="service-feature-chip">
          <span className="service-feature-chip-dot" aria-hidden />
          {feature}
        </div>
      ))}
    </div>
  )
}

export function ConsultationCta() {
  return (
    <section className="about-cta relative overflow-hidden py-20 md:py-28">
      <div className="about-cta-bg" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Call for a FREE Consultation</h2>
        <p className="mt-4 text-lg text-white/90">
          If you would like to talk in complete confidence, then contact one of our team today.
        </p>
        <p className="mt-6 text-xl font-bold text-white md:text-2xl">
          Please call us on{' '}
          <a href={SITE_PHONE_HREF} className="underline decoration-brand-teal underline-offset-4 hover:text-brand-teal">
            {SITE_PHONE}
          </a>
          .
        </p>
        <Link to="/#contact" className="about-cta-btn mt-10 inline-flex">
          Contact us
        </Link>
      </div>
    </section>
  )
}

export function ServiceContentSection({ children, variant = 'default', className = '' }) {
  const bg = variant === 'muted' ? 'bg-slate-50 border-t border-slate-200' : 'bg-white'
  return <section className={`py-16 md:py-24 ${bg} ${className}`}>{children}</section>
}

export function ServiceImageCard({ src, alt }) {
  return (
    <div className="service-image-card group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg">
      <div className="relative overflow-hidden">
        <img src={src} alt={alt} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" aria-hidden />
      </div>
    </div>
  )
}
