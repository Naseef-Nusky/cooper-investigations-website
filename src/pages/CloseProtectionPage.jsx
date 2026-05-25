import { Link } from 'react-router-dom'
import { PageShell } from '../components/SiteChrome.jsx'
import {
  ConsultationCta,
  ServiceContentSection,
  ServiceImageCard,
  ServicePageHero,
  ServiceSubsection,
  ServiceTimelineList,
} from '../components/ServicePageLayout.jsx'

const highEndSecurityItems = [
  {
    title: 'Personal Security',
    paragraphs: [
      'Cooper Investigations provides a bespoke VIP Security package, including personal bodyguards, close protection officers and private security, which is tailored to each individual client for both permanent contracts and day requirements.',
    ],
  },
  {
    title: 'Executive Protection',
    paragraphs: [
      'Ex-Military officers make up our senior management team. Looking after operational planning, outer communications and facilitating the requirements of our security operations, they ensure the service you receive is to the highest possible standard.',
    ],
  },
  {
    title: 'Bespoke Security',
    paragraphs: [
      'Our bespoke service provides you with a fantastic opportunity to take full advantage of our expertise. Offering you and your staff personal advice on a range of security measures including safety, positioning, security features, managing your profile, escape and survival techniques and first aid administration. Cooper Investigations provides premium security awareness and personal protections to you, your family and your company.',
    ],
  },
  {
    title: 'Bodyguard Hire',
    paragraphs: [
      "With a proactive 24/7/365 response unit, it's speed of service you are looking for. Cooper Investigations has one of the fastest response times in the security industry — 48 times faster than average, to be exact.",
      "Cooper Investigations' network of dedicated employees are highly trained, well vetted and have an established knowledge and resource base resulting from years of experience in the security industry. This enables us to provide you with optimal protection and efficiency in every interaction.",
    ],
  },
]

export default function CloseProtectionPage() {
  return (
    <PageShell>
      <ServicePageHero
        category="Security Services"
        title="Security Services – Close Protection"
        breadcrumb="Security Services – Close Protection"
      />

      <main id="main">
        <ServiceContentSection>
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <h2 className="service-section-title">Close Protection Services</h2>
              <p className="mt-6 leading-relaxed text-slate-600">
                We offer a range of reputable security options, tailored to provide complete security and lifestyle
                management for high net worth individuals, companies and properties. Through our security company you
                can hire bodyguards, set up personal protection schemes, hire venue security and contract travel security
                guards.
              </p>

              <ServiceSubsection title="Ex Military Staff">
                <p>
                  One hundred percent of our staff are Ex-British Military, SIA licensed, close protection officers.
                </p>
              </ServiceSubsection>

              <ServiceSubsection title="Complete Discretion">
                <p>
                  One hundred percent of our services are handled discreetly, rest assured our staff are carefully
                  selected and extensively vetted.
                </p>
              </ServiceSubsection>
            </div>

            <ServiceImageCard
              src="/Close-Protection-Services-1.jpg"
              alt="Secure entrance with close protection detail"
            />
          </div>
        </ServiceContentSection>

        <ServiceContentSection variant="muted">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <ServiceImageCard
                  src="/private-Security-Services.jpg"
                  alt="Close protection officer in formal attire"
                />
              </div>

              <div className="lg:col-span-7">
                <h2 className="service-section-title">Close Protection Services – High-end security</h2>
                <div className="protection-content-panel mt-8">
                  <ServiceTimelineList items={highEndSecurityItems} />
                </div>
              </div>
            </div>
          </div>
        </ServiceContentSection>

        <section className="border-t border-slate-200 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="service-highlight-banner flex flex-col items-start gap-4 rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-brand-navy to-brand-green p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Protect what matters most</h3>
                <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
                  Discuss close protection, executive security, or bodyguard hire in complete confidence with our team.
                </p>
              </div>
              <Link to="/contact" className="service-highlight-btn shrink-0">
                Request a consultation
              </Link>
            </div>
          </div>
        </section>

        <ConsultationCta />
      </main>
    </PageShell>
  )
}
