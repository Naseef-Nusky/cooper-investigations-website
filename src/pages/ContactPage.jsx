import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm.jsx'
import { PageShell } from '../components/SiteChrome.jsx'
import {
  SITE_EMAIL,
  SITE_EMAIL_HREF,
  SITE_PHONE,
  SITE_PHONE_HREF,
  SITE_WEBSITE,
  SITE_WEBSITE_HREF,
} from '../siteConfig.js'

function IconPhone({ className = 'h-5 w-5' }) {
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

function IconEnvelope({ className = 'h-5 w-5' }) {
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

function IconPin({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
    </svg>
  )
}

function IconShare({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
      />
    </svg>
  )
}

const contactDetails = [
  {
    id: 'phone',
    icon: IconPhone,
    content: (
      <a href={SITE_PHONE_HREF} className="contact-detail-link">
        {SITE_PHONE}
      </a>
    ),
  },
  {
    id: 'email',
    icon: IconEnvelope,
    content: (
      <a href={SITE_EMAIL_HREF} className="contact-detail-link">
        {SITE_EMAIL}
      </a>
    ),
  },
  {
    id: 'location',
    icon: IconPin,
    content: <span>70 Gracechurch Street, London, England, EC3V 0HR</span>,
  },
  {
    id: 'share',
    icon: IconShare,
    content: (
      <a href={SITE_WEBSITE_HREF} className="contact-detail-link" target="_blank" rel="noopener noreferrer">
        Share Our Website
      </a>
    ),
  },
]

export default function ContactPage() {
  return (
    <PageShell>
      <div className="contact-page-hero relative overflow-hidden">
        <div className="contact-page-hero-grid pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-14 text-center md:px-6 md:py-16">
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Contact</h1>
          <p className="mt-3 text-sm text-white/80 md:text-base">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </p>
        </div>
      </div>

      <main id="main">
        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div className="contact-info-card rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm md:p-10">
              <h2 className="service-section-title">Get In Touch</h2>
              <ul className="mt-8 space-y-5">
                {contactDetails.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.id} className="flex gap-4">
                      <span className="contact-info-icon">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm leading-relaxed text-slate-600 md:text-base">{item.content}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="contact-expert-card flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50 p-8 text-center shadow-sm md:p-12">
              <h2 className="text-xl font-bold text-brand-navy md:text-2xl">Get in touch with our expert team</h2>
              <img src="/logo.png" alt="Cooper Investigations" className="mt-8 h-24 w-auto object-contain md:h-28" />
              <a
                href={SITE_PHONE_HREF}
                className="mt-8 text-3xl font-bold tracking-tight text-brand-navy transition hover:text-brand-teal md:text-4xl"
              >
                {SITE_PHONE}
              </a>
            </div>
          </div>
        </section>

        <section className="contact-form-section relative overflow-hidden py-16 md:py-24">
          <div className="contact-form-section-bg" aria-hidden />
          <div className="relative mx-auto max-w-xl px-4 md:px-6">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold md:text-4xl">Contact us</h2>
              <p className="mt-2 text-lg text-white/85">Drop us a message</p>
            </div>
            <ContactForm className="mt-10" />
          </div>
        </section>
      </main>
    </PageShell>
  )
}
