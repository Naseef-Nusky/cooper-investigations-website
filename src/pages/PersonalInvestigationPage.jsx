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
  serviceSideColsLg,
  serviceSplitCols,
} from '../components/ServicePageLayout.jsx'

const investigatorCapabilities = [
  { id: 'records', text: 'Access all public records (including some criminal records and court documents)' },
  { id: 'background', text: 'Perform background checks and historical checks' },
  { id: 'social', text: 'Investigate social media and internet enquiries' },
]

const surveillanceTypes = [
  {
    title: 'Static Surveillance',
    paragraphs: [
      'Normally undertaken by one Agent. They can be carefully positioned outside a property and will be employed to film and record the movements of a person, or persons at an address or location.',
    ],
  },
  {
    title: 'Mobile Surveillance',
    paragraphs: [
      'This is when we are asked to follow a person/persons. It is normally undertaken by a team, whether that be two, three, four or more. We have the capabilities of using a variety of vehicles applicable to the job as well as all the latest technology and equipment to capture the required evidence for our client.',
    ],
  },
  {
    title: 'Field Surveillance',
    paragraphs: [
      'Far less common but still required when we are asked to monitor a scenario whilst in a rural area.',
    ],
  },
]

export default function PersonalInvestigationPage() {
  return (
    <PageShell>
      <ServicePageHero title="Personal Investigation Services" breadcrumb="Personal Investigation Services" />

      <main id="main">
        <ServiceContentSection>
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <p className="leading-relaxed text-slate-600">
              When it comes to what exactly a private investigator can legally do in the UK, the law is pretty clear.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Which is why here at Cooper Investigations, we pride ourselves in being a very honest and reputable
              London-based detective agency that ensures only legal methods are carried out on all investigations.
              Private investigators are not only required for clients with personal difficulties but also for business
              matters, large or small.
            </p>

            <div className="mt-12 grid items-start gap-12 md:grid-cols-2 md:items-stretch md:gap-16">
              <h2 className={`service-section-title ${serviceSplitCols.topic}`}>
                What is a Private Investigator Allowed to Do?
              </h2>
              <div className={serviceSplitCols.image}>
                <ServiceGraphicCard
                  src="/Personal-Investigation-Services.png"
                  alt="Magnifying glass over fingerprint pattern"
                />
              </div>
              <div className={`${serviceSplitCols.body} mt-6 space-y-4 md:mt-0`}>
                <p className="font-semibold text-brand-navy">Private Investigators can legally:</p>
                <ServiceBulletList items={investigatorCapabilities} columns={1} />
                <p className="mt-6 leading-relaxed text-slate-600">
                  Private investigators can gain valuable information in the way they evaluate intelligence gleaned
                  legally, which can only be beneficial to our instructing clients.
                </p>
              </div>
            </div>
          </div>
        </ServiceContentSection>

        <ServiceContentSection variant="muted">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14">
              <h2 className={`service-section-title ${serviceSideColsLg.topic}`}>
                Different Types of Legal Surveillance Operations:
              </h2>
              <div className={serviceSideColsLg.image}>
                <div className="lg:sticky lg:top-28">
                  <ServiceImageCard src="/Legal-Surveillance.jpg" alt="Security camera mounted on a building wall" />
                </div>
              </div>
              <div className={`${serviceSideColsLg.body} mt-6 md:mt-0`}>
                <div className="protection-content-panel mt-8 md:mt-8">
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
