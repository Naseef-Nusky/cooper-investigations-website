import { Link, useLocation } from 'react-router-dom'
import { SITE_PHONE, SITE_PHONE_HREF, routeHeroImages } from '../siteConfig.js'

export function ServicePageHero({ title, breadcrumb, category = 'Investigation Services', image }) {
  const { pathname } = useLocation()
  const heroImage = image ?? routeHeroImages[pathname]
  const isGraphic = heroImage?.toLowerCase().endsWith('.png')

  return (
    <div
      className={`service-page-hero relative overflow-hidden ${heroImage ? '' : 'service-page-hero--fallback'}`}
    >
      {heroImage ? (
        <>
          <div
            className={`service-page-hero-photo pointer-events-none absolute inset-0 ${isGraphic ? 'service-page-hero-photo--graphic' : ''}`}
            style={{ backgroundImage: `url('${heroImage}')` }}
            aria-hidden
          />
          <div className="service-page-hero-overlay pointer-events-none absolute inset-0" aria-hidden />
        </>
      ) : null}
      <div className="service-page-hero-grid pointer-events-none absolute inset-0 z-[1]" aria-hidden />
      <div className="service-page-hero-glow pointer-events-none absolute -right-20 top-0 z-[1] h-64 w-64 rounded-full bg-brand-teal/20 blur-3xl" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-6xl px-4 py-16 text-center md:px-6 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200/90">{category}</p>
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

export function ServiceBulletList({ items, columns = 2 }) {
  const twoColumns = columns === 2 && items.length > 1

  return (
    <ul
      className={`service-bullet-list mt-6 grid gap-3 ${twoColumns ? 'sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3' : ''}`}
    >
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
        <Link to="/contact" className="about-cta-btn mt-10 inline-flex">
          Contact us
        </Link>
      </div>
    </section>
  )
}

export function ServiceSubsection({ title, children }) {
  return (
    <div className="service-subsection mt-8 first:mt-6">
      <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy">{title}</h3>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600 md:text-base">{children}</div>
    </div>
  )
}

export function ServiceTimelineList({ items }) {
  return (
    <ul className="protection-timeline">
      {items.map((item) => (
        <li key={item.title} className="protection-timeline-item">
          <h3 className="protection-timeline-title">{item.title}</h3>
          <div className="protection-timeline-text">
            {item.paragraphs.map((text) => (
              <p key={text.slice(0, 48)}>{text}</p>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}

export function ServiceCompactList({ items }) {
  return (
    <ul className="service-compact-list mt-6 grid list-none gap-4 p-0 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item.title}
          className="service-compact-item rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm md:p-5"
        >
          <h3 className="text-base font-bold leading-snug text-brand-navy">{item.title}</h3>
          <div className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600">
            {item.paragraphs.map((text) => (
              <p key={text.slice(0, 48)} className="m-0">
                {text}
              </p>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}

export function ServiceContentSection({ children, variant = 'default', className = '' }) {
  const bg = variant === 'muted' ? 'bg-slate-50 border-t border-slate-200' : 'bg-white'
  return <section className={`py-16 md:py-24 ${bg} ${className}`}>{children}</section>
}

/**
 * Mobile: topic → image → description.
 * Desktop: topic + description in the text column; image in the side column.
 */
export function splitColumnClasses({ imageFirst = false, wide = false }) {
  const mobile = {
    topic: 'order-1 min-w-0',
    image: 'order-2 flex h-full min-h-0 flex-col min-w-0',
    body: 'order-3 min-w-0',
  }

  if (wide) {
    if (imageFirst) {
      return {
        topic: `${mobile.topic} lg:col-span-7 lg:col-start-6 lg:row-start-1`,
        image: `${mobile.image} lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:row-span-2`,
        body: `${mobile.body} lg:col-span-7 lg:col-start-6 lg:row-start-2`,
      }
    }

    return {
      topic: `${mobile.topic} lg:col-span-7 lg:col-start-1 lg:row-start-1`,
      image: `${mobile.image} self-stretch lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2`,
      body: `${mobile.body} lg:col-span-7 lg:col-start-1 lg:row-start-2`,
    }
  }

  if (imageFirst) {
    return {
      topic: `${mobile.topic} md:col-start-2 md:row-start-1`,
      image: `${mobile.image} md:col-start-1 md:row-start-1 md:row-span-2`,
      body: `${mobile.body} md:col-start-2 md:row-start-2`,
    }
  }

  return {
    topic: `${mobile.topic} md:col-start-1 md:row-start-1`,
    image: `${mobile.image} md:col-start-2 md:row-start-1 md:row-span-2`,
    body: `${mobile.body} md:col-start-1 md:row-start-2`,
  }
}

/** Topic + description left / image right on desktop. */
export const serviceSplitCols = splitColumnClasses({ imageFirst: false })

/** Image left on md+; mobile: topic → image → description. */
export const serviceSideColsMd = splitColumnClasses({ imageFirst: true })

/** Image left on lg 12-col; mobile: topic → image → description. */
export const serviceSideColsLg = splitColumnClasses({ imageFirst: true, wide: true })

/** Shared grid wrapper for split sections (md two-column). */
export const serviceSplitGrid =
  'mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:items-stretch md:gap-16 md:px-6'

/** Shared grid wrapper for wide split sections (lg twelve-column). */
export const serviceSplitGridLg =
  'grid items-start gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14'

export function ServiceImageCard({ src, alt, tall = false, className = '' }) {
  return (
    <div
      className={`service-image-card group h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg ${tall ? 'md:flex md:min-h-0 md:flex-col' : ''} ${className}`}
    >
      <div className={`relative overflow-hidden ${tall ? 'h-full min-h-[16rem] md:min-h-0 md:flex-1' : ''}`}>
        <img
          src={src}
          alt={alt}
          className={
            tall
              ? 'aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105 md:absolute md:inset-0 md:aspect-auto'
              : 'aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105'
          }
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" aria-hidden />
      </div>
    </div>
  )
}

export function ServiceGraphicCard({ src, alt, tall = false, className = '' }) {
  return (
    <div
      className={`service-graphic-card h-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-lg ${tall ? 'md:flex md:min-h-0 md:flex-col' : ''} ${className}`}
    >
      <div
        className={`service-graphic-card-inner flex items-center justify-center p-6 md:p-10 ${tall ? 'h-full min-h-[16rem] md:min-h-0 md:flex-1 md:aspect-auto' : 'aspect-[4/3]'}`}
      >
        <img src={src} alt={alt} className="max-h-full w-full object-contain transition duration-700 hover:scale-[1.02]" />
      </div>
    </div>
  )
}
