import { Link } from 'react-router-dom'
import { PageShell } from '../components/SiteChrome.jsx'
import { SITE_PHONE, SITE_PHONE_HREF } from '../siteConfig.js'

function IconSearchBullet({ className = 'h-5 w-5 shrink-0 text-brand-teal' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
    </svg>
  )
}

function AboutBulletList({ items }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600 md:text-base">
          <IconSearchBullet />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const aboutPoints = [
  'A dedicated team of professionals who understand the sensitivity of your situation.',
  'Bespoke investigations tailored to your objectives — no generic templates.',
  'A relentless focus on results, with clear reporting at every stage.',
  'Absolute discretion and confidentiality throughout your case.',
  'Fact-finding grounded in evidence, proportionate methods, and sound judgment.',
  'Work conducted to the highest legal and ethical standards.',
  <strong key="priority">You&apos;re our priority!</strong>,
]

const whyPoints = [
  <span key="exp"><strong>40 years combined experience</strong> across investigations, forensics, and security.</span>,
  <span key="247"><strong>Personal 24/7 service</strong> when timelines matter most.</span>,
  <span key="staff"><strong>Expert personnel</strong> — we do not subcontract your case to third parties.</span>,
  <span key="disc"><strong>Discrete &amp; confidential</strong> handling from first contact to final report.</span>,
]

export default function AboutPage() {
  return (
    <PageShell>
      <div className="about-page-hero">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center md:px-6 md:py-16">
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            About us – Cooper Investigations
          </h1>
          <p className="mt-3 text-sm text-white/80 md:text-base">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>About us – Cooper Investigations</span>
          </p>
        </div>
      </div>

      <main id="main">
        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <h2 className="about-section-title">About us</h2>
              <p className="mt-6 leading-relaxed text-slate-600">
                Cooper Investigations provides a bespoke, confidential service available 24 hours a day, 7 days a week.
                Our multi-disciplined team brings more than 40 years of combined experience from backgrounds including
                Ex-Military, Special Forces, police, and corporate investigations — united by a commitment to clarity,
                discretion, and results.
              </p>
              <AboutBulletList items={aboutPoints} />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
                alt="Investigation planning with notebook and magnifying glass"
                className="aspect-[4/3] w-full object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div className="order-2 overflow-hidden rounded-2xl shadow-xl md:order-1">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                alt="Professional working on a laptop"
                className="aspect-[4/3] w-full object-cover"
                width={800}
                height={600}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="about-section-title">Why use Cooper Investigations?</h2>
              <p className="mt-6 leading-relaxed text-slate-600">
                We are reliable, flexible, and straightforward. When situations are complex, we bring calm leadership,
                rigorous planning, and the resources to act quickly — in the UK and internationally.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Our management team has handled challenging cases across jurisdictions. We take a{' '}
                <strong>no-nonsense approach</strong>: clear scope, honest advice, and evidence you can rely on.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Whether you need surveillance, digital forensics, or corporate investigations, you work with one
                accountable team that respects confidentiality and the law.
              </p>
              <AboutBulletList items={whyPoints} />
            </div>
          </div>
        </section>

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
      </main>
    </PageShell>
  )
}
