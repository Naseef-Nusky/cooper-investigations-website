import { Link } from 'react-router-dom'
import { PageShell } from '../components/SiteChrome.jsx'
import {
  ConsultationCta,
  ServiceBulletList,
  ServiceContentSection,
  ServiceGraphicCard,
  ServiceImageCard,
  ServicePageHero,
  ServiceTimelineList,
} from '../components/ServicePageLayout.jsx'

const investigatorCapabilities = [
  { id: 'records', text: 'Access all public records (including some criminal records and court documents)' },
  { id: 'background', text: 'Perform background checks and historical checks' },
  { id: 'social', text: 'Investigate social media and internet inquiries' },
]

const surveillanceTypes = [
  {
    title: 'Static Surveillance',
    paragraphs: [
      'Normally undertaken by one Agent who will observe and record activity from a fixed position, maintaining cover and continuity for the duration required. This method is ideal when behaviour at a specific address or location needs to be documented discreetly.',
    ],
  },
  {
    title: 'Mobile Surveillance',
    paragraphs: [
      'This is when we are asked to follow a person or persons, documenting movements, associations, and patterns of behaviour using trained surveillance operatives, equipped vehicles, and lawful techniques throughout urban and suburban environments.',
    ],
  },
  {
    title: 'Field Surveillance',
    paragraphs: [
      'Far less common but still required when we are asked to monitor a scenario whilst in a rural area or open terrain, where static posts and mobile follows are adapted to the landscape, visibility, and operational requirements of the enquiry.',
    ],
  },
]

export default function PersonalInvestigationPage() {
  return (
    <PageShell>
      <ServicePageHero title="Personal Investigation Services" breadcrumb="Personal Investigation Services" />

      <main id="main">
        <ServiceContentSection>
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <h2 className="service-section-title">What is a Private Investigator Allowed to Do?</h2>
              <p className="mt-6 leading-relaxed text-slate-600">
                In the United Kingdom, private investigators must operate within the law at all times. They are not
                exempt from legislation covering privacy, harassment, or data protection, and cannot obtain evidence
                through illegal means such as trespass, hacking, or intercepting private communications without lawful
                authority.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Cooper Investigations conducts personal enquiries using ethical, proportionate methods. Our investigators
                gather intelligence from lawful sources and present findings you can rely on — whether for matrimonial,
                family, or individual matters requiring discretion and clarity.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-brand-navy md:text-base">
                Lawful capabilities include:
              </p>
              <ServiceBulletList items={investigatorCapabilities} />
            </div>

            <ServiceGraphicCard
              src="/Personal-Investigation-Services.png"
              alt="Magnifying glass over fingerprint pattern"
            />
          </div>
        </ServiceContentSection>

        <ServiceContentSection variant="muted">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <ServiceImageCard src="/Legal-Surveillance.jpg" alt="Security camera mounted on a building wall" />
              </div>

              <div className="lg:col-span-7">
                <h2 className="service-section-title">Different Types of Legal Surveillance Operations</h2>
                <p className="mt-6 leading-relaxed text-slate-600">
                  All surveillance carried out by Cooper Investigations is planned, documented, and conducted in
                  compliance with UK law. The approach we recommend depends on your objectives, the environment, and the
                  level of cover required.
                </p>
                <div className="protection-content-panel mt-8">
                  <ServiceTimelineList items={surveillanceTypes} />
                </div>
              </div>
            </div>
          </div>
        </ServiceContentSection>

        <section className="border-t border-slate-200 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="service-highlight-banner flex flex-col items-start gap-4 rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-brand-navy to-brand-green p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Discreet personal investigation support</h3>
                <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
                  Speak to our team in complete confidence about surveillance, background checks, or any personal enquiry.
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
