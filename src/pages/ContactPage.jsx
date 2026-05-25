import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm.jsx'
import { PageShell } from '../components/SiteChrome.jsx'
import { ServicePageHero } from '../components/ServicePageLayout.jsx'
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
      <a href={SITE_PHONE_HREF} className="contact-teal-link">
        {SITE_PHONE}
      </a>
    ),
  },
  {
    id: 'email',
    icon: IconEnvelope,
    content: (
      <a href={SITE_EMAIL_HREF} className="contact-teal-link">
        {SITE_EMAIL}
      </a>
    ),
  },
  {
    id: 'location',
    icon: IconPin,
    content: <span className="text-slate-700">70 Gracechurch Street, London, England, EC3V 0HR</span>,
  },
  {
    id: 'share',
    icon: IconShare,
    content: (
      <a href={SITE_WEBSITE_HREF} className="contact-teal-link" target="_blank" rel="noopener noreferrer">
        Share Our Website
      </a>
    ),
  },
]

export default function ContactPage() {
  return (
    <PageShell>
      <ServicePageHero category="Get in touch" title="Contact" breadcrumb="Contact" />

      <main id="main">
        <section className="contact-info-section">
          <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-4 py-16 md:grid-cols-2 md:gap-12 md:px-6 md:py-20 lg:gap-16">
            <div className="contact-info-left">
              <h2 className="contact-page-heading">Get In Touch</h2>
              <ul className="contact-info-list">
                {contactDetails.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.id} className="contact-info-item">
                      <span className="contact-info-icon">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="contact-info-text">{item.content}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="contact-expert-panel">
              <h2 className="contact-page-heading text-center">Get in touch with our expert team</h2>
              <img
                src="/logo.png"
                alt="Cooper Investigations"
                className="mx-auto mt-10 h-28 w-auto object-contain md:h-32"
              />
              <a href={SITE_PHONE_HREF} className="contact-hero-phone">
                {SITE_PHONE}
              </a>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="contact-form-section-bg" aria-hidden />
          <div className="contact-form-section-overlay" aria-hidden />
          <div className="relative mx-auto max-w-2xl px-4 py-16 md:px-6 md:py-24">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Contact us</h2>
              <p className="mt-3 text-lg text-white/90">Drop us a message</p>
            </div>
            <ContactForm className="mt-12" />
          </div>
        </section>
      </main>
    </PageShell>
  )
}
