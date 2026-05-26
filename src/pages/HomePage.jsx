import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import HeroCarousel from '../HeroCarousel.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { PageShell } from '../components/SiteChrome.jsx'
import { serviceSplitCols } from '../components/ServicePageLayout.jsx'

const services = [
  {
    id: 'services',
    title: 'Private Investigations',
    description:
      'Discreet corporate and private investigations tailored to your objectives, delivered by experienced investigators.',
    href: '/services/personal-investigation',
    icon: 'search',
    accent: 'from-brand-green to-brand-teal',
    iconBg: 'bg-gradient-to-br from-brand-green to-brand-teal',
  },
  {
    id: 'forensics',
    title: 'Digital Forensics',
    description:
      'Secure collection, preservation, and analysis of digital evidence with clear reporting for legal and regulatory matters.',
    href: '/cyber-security',
    icon: 'document',
    accent: 'from-slate-600 to-forensics',
    iconBg: 'bg-gradient-to-br from-slate-600 to-forensics',
  },
  {
    id: 'security',
    title: 'Cyber Security',
    description:
      'Practical guidance and assessments to strengthen your defences and respond confidently to security incidents.',
    href: '/cyber-security',
    icon: 'lock',
    accent: 'from-cyber-mint to-brand-teal',
    iconBg: 'bg-gradient-to-br from-cyber-mint to-brand-teal',
  },
  {
    title: 'Surveillance Services',
    description:
      'Lawful, professional surveillance capabilities supporting investigations with meticulous planning and documentation.',
    href: '/services/surveillance',
    icon: 'camera',
    accent: 'from-brand-navy to-brand-teal',
    iconBg: 'bg-gradient-to-br from-brand-navy to-brand-teal',
  },
]

const locations = [
  'London',
  'Manchester',
  'Birmingham',
  'Leeds',
  'Kent',
  'Leicester',
  'Bristol',
  'Milton Keynes',
]

const stats = [
  {
    countTo: 40,
    suffix: '+',
    label: 'Years combined experience',
    description: 'Across investigations, forensics, and security',
    progress: 0.88,
  },
  {
    countTo: 99,
    suffix: '%',
    label: 'Satisfaction rate',
    description: 'Measured against client feedback',
    progress: 0.99,
  },
  {
    display: '24/7',
    label: 'Global support',
    description: 'Responsive assistance when timelines matter',
    progress: 1,
  },
]

function IconSearch({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
    </svg>
  )
}

function IconDocument({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  )
}

function IconLockLaptop({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  )
}

function IconCamera({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function IconMouse({ className = 'h-8 w-8' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 36" stroke="currentColor" strokeWidth={1.5}>
      <rect x="7" y="1" width="10" height="18" rx="5" />
      <path strokeLinecap="round" d="M12 5v3" />
    </svg>
  )
}

function IconPin({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
    </svg>
  )
}

function ServiceIcon({ type, className = 'h-7 w-7' }) {
  if (type === 'lock') return <IconLockLaptop className={className} />
  if (type === 'camera') return <IconCamera className={className} />
  if (type === 'search') return <IconSearch className={className} />
  return <IconDocument className={className} />
}

const STAT_RING_R = 42
const STAT_RING_C = 2 * Math.PI * STAT_RING_R

function useInViewOnce(threshold = 0.2) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

function useCountUp(target, active, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active || target == null) return undefined

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setValue(target)
      return undefined
    }

    let frame = 0
    const start = performance.now()

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - t) ** 3
      setValue(Math.round(target * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target, duration])

  return value
}

function StatCard({ stat, index }) {
  const [ref, visible] = useInViewOnce(0.25)
  const count = useCountUp(stat.countTo ?? null, visible && stat.countTo != null)
  const display = stat.display ?? `${count}${stat.suffix ?? ''}`
  const ringOffset = visible ? STAT_RING_C * (1 - stat.progress) : STAT_RING_C

  return (
    <article
      ref={ref}
      className={`stat-card ${visible ? 'stat-card-visible' : ''}`}
      style={{ '--stat-delay': `${index * 0.12}s` }}
    >
      <div className="stat-card-ring-wrap">
        <svg className="stat-card-ring" viewBox="0 0 100 100" aria-hidden>
          <circle className="stat-card-ring-track" cx="50" cy="50" r={STAT_RING_R} />
          <circle
            className="stat-card-ring-progress"
            cx="50"
            cy="50"
            r={STAT_RING_R}
            style={{
              strokeDasharray: STAT_RING_C,
              strokeDashoffset: ringOffset,
            }}
          />
        </svg>
        <div className="stat-card-value" aria-live="polite">
          {display}
        </div>
      </div>

      <div className="stat-card-copy">
        <h3 className="stat-card-label">{stat.label}</h3>
        <p className="stat-card-desc">{stat.description}</p>
      </div>
    </article>
  )
}

function LocationsSection() {
  const [ref, visible] = useInViewOnce(0.12)

  return (
    <section className="locations-section relative overflow-hidden py-16 md:py-24" aria-labelledby="locations-heading">
      <div className="locations-section-map" aria-hidden />
      <div className="locations-section-glow pointer-events-none absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-brand-teal/10 blur-3xl" aria-hidden />
      <div
        className="locations-section-glow pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">Coverage areas</p>
          <h2 id="locations-heading" className="mt-3 text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
            Private investigators in the UK &amp; internationally
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Local teams across major cities — discreet support, rapid mobilisation, and consistent standards nationwide.
          </p>
        </div>

        <div ref={ref} className={`locations-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ${visible ? 'locations-grid-visible' : ''}`}>
          {locations.map((city, index) => (
            <article
              key={city}
              className="location-card group"
              style={{ '--loc-delay': `${index * 0.07}s` }}
            >
              <div className="location-card-accent" aria-hidden />
              <div className="location-card-icon">
                <IconPin className="h-5 w-5 text-white" />
              </div>
              <h3 className="location-card-city">{city}</h3>
              <p className="location-card-desc">
                Private investigators in {city} provide local coverage and rapid response for corporate and private
                clients.
              </p>
              <Link to="/contact" className="location-card-link">
                <span>Get in touch</span>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


export default function HomePage() {
  return (
    <PageShell>
      <main id="main">
        <HeroCarousel />

        {/* Services */}
        <section id="services" className="service-section scroll-mt-24 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">What we offer</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
                Investigation &amp; security services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Specialist capabilities delivered with discretion, rigour, and clear communication at every stage.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {services.map((s) => (
              <article
                key={s.title}
                id={s.id}
                className="service-card group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${s.accent}`} aria-hidden />

                <div
                  className={`service-card-glow absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${s.accent} opacity-[0.07] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.14]`}
                  aria-hidden
                />

                <div
                  className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-md ${s.iconBg}`}
                >
                  <ServiceIcon type={s.icon} className="h-7 w-7" />
                </div>

                <h2 className="relative text-xl font-bold tracking-tight text-brand-navy md:text-2xl">{s.title}</h2>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
                  {s.description}
                </p>

                <Link to={s.href} className="service-card-link relative mt-8 inline-flex w-fit items-center gap-2">
                  <span>Read More</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats-section relative overflow-hidden py-20 md:py-28" aria-label="Company highlights">
          <div className="stats-section-bg" aria-hidden />
          <div className="stats-section-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />

          <div className="relative mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto mb-14 max-w-xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">Why clients trust us</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">Results that speak for themselves</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* About split */}
        <section id="about" className="scroll-mt-24 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center md:gap-16 md:px-6">
            <h2 className={`text-3xl font-bold tracking-tight text-brand-navy md:text-4xl ${serviceSplitCols.topic}`}>
              Private Investigations
            </h2>
            <div className={`relative overflow-hidden rounded-lg shadow-xl ${serviceSplitCols.image}`}>
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
                alt="Professional reviewing confidential documents"
                className="aspect-[4/3] w-full object-cover"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <div className="mb-4 inline-block rounded bg-white px-3 py-2">
                  <img src="/logo.png" alt="Cooper Investigations" className="h-9 w-auto object-contain" />
                </div>
                <p className="max-w-sm text-lg font-semibold leading-snug md:text-xl">
                  Discreet and Confidential Professional Services
                </p>
              </div>
            </div>
            <div className={`space-y-5 ${serviceSplitCols.body} mt-6 md:mt-0`}>
              <p className="leading-relaxed text-slate-600">
                Cooper Investigations supports clients who need clarity in complex situations. We combine rigorous
                planning with field experience to deliver evidence-led outcomes while respecting confidentiality and the
                law.
              </p>
              <p className="leading-relaxed text-slate-600">
                Whether you are safeguarding assets, responding to suspected misconduct, or gathering facts for civil
                proceedings, our team works with you to define proportionate, ethical strategies.
              </p>
              <p className="leading-relaxed text-slate-600">
                From background enquiries to surveillance and digital evidence, we coordinate specialist skills under a
                single accountable point of contact.
              </p>
            </div>
          </div>
        </section>

        {/* Company copy */}
        <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
            <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">Cooper Investigations</h2>
            <div className="mt-8 space-y-5 text-left text-slate-600 md:text-center">
              <p className="leading-relaxed">
                We are an independent investigations and security practice built on integrity, discretion, and
                technical depth. Our consultants include former investigators and digital specialists who understand
                both operational realities and courtroom expectations.
              </p>
              <p className="leading-relaxed">
                Every engagement is scoped with clear milestones, transparent reporting, and respect for privacy and
                regulatory boundaries. We partner with legal teams, compliance leaders, and private clients who require
                dependable judgment under pressure.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-10 inline-block text-sm font-semibold uppercase tracking-wider text-brand-teal underline-offset-4 hover:underline"
            >
              Read More About Us
            </Link>
          </div>
        </section>

        <LocationsSection />

        {/* Contact */}
        <section id="contact" className="contact-form-section scroll-mt-24">
          <div className="home-contact-section-bg" aria-hidden />
          <div className="home-contact-section-overlay" aria-hidden />
          <div className="relative mx-auto max-w-xl px-4 py-16 md:px-6 md:py-24">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold md:text-4xl">Contact us</h2>
              <p className="mt-2 text-lg text-white/85">Drop us a message</p>
            </div>
            <ContactForm variant="home" className="mt-10" />
          </div>
        </section>
      </main>
    </PageShell>
  )
}
