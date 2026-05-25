import { Link } from 'react-router-dom'
import { PageShell } from '../components/SiteChrome.jsx'
import {
  ConsultationCta,
  ServiceContentSection,
  ServiceImageCard,
  ServicePageHero,
  ServiceTimelineList,
} from '../components/ServicePageLayout.jsx'

const corporateServices = [
  {
    title: 'Debtor Tracing',
    paragraphs: ['We locate people who owe you money.'],
  },
  {
    title: 'Full Background Checks',
    paragraphs: [],
  },
  {
    title: 'GPS Vehicle Tracking',
    paragraphs: ['Vehicle tracking is a very cost-effective method of gathering information.'],
  },
  {
    title: 'Counter Surveillance',
    paragraphs: [],
  },
  {
    title: 'Process Serving',
    paragraphs: ['All investigators are experienced Process Servers.'],
  },
  {
    title: 'Criminal Investigation',
    paragraphs: [],
  },
  {
    title: 'Fraud Investigation',
    paragraphs: [],
  },
  {
    title: 'Landlord Investigations',
    paragraphs: [],
  },
  {
    title: 'Antisocial Behavior investigations',
    paragraphs: [],
  },
  {
    title: 'Insurance Claims Investigations',
    paragraphs: [],
  },
  {
    title: 'Absent Employee Investigations',
    paragraphs: [],
  },
  {
    title: 'Asset Tracking',
    paragraphs: [],
  },
]

export default function CorporateInvestigationsPage() {
  return (
    <PageShell>
      <ServicePageHero
        title="Corporate Investigations Services"
        breadcrumb="Corporate Investigations Services"
      />

      <main id="main">
        <ServiceContentSection>
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <h2 className="service-section-title">Corporate Investigations</h2>
              <p className="mt-6 leading-relaxed text-slate-600">
                A large majority of the daily work we do is for various companies. We have successfully conducted
                investigations across the UK for small businesses and larger companies. Our specialist team is available
                24/7 to ensure that we meet your requirements.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Your personal investigator will keep you up-to-date throughout the investigation and you will provide a
                full detailed report which is date and time stamped with photographic evidence.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Our company complies with the United Kingdom data protection act and all our investigators are thoroughly
                DBS Checked. Within the legal limits of the country in which the investigation is carried out, we
                guarantee confidentiality.
              </p>
            </div>

            <ServiceImageCard
              src="/Corporate-investigations-services.jpg"
              alt="Keyboard with a small caution cone on the keys"
            />
          </div>
        </ServiceContentSection>

        <ServiceContentSection variant="muted">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <ServiceImageCard
                  src="/data-protection.jpg"
                  alt="Hands typing on a laptop displaying code on the screen"
                />
              </div>

              <div className="lg:col-span-7">
                <h2 className="service-section-title">Our Company</h2>
                <p className="mt-6 leading-relaxed text-slate-600">
                  Here at Cooper Investigations, we comply with the data protection act within the UK and all our
                  investigators are fully DBS Checked and insured.
                </p>
                <p className="mt-4 leading-relaxed text-slate-600">
                  We guarantee confidentiality within the legal limits of the country the investigation is carried out
                  in.
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-brand-navy md:text-base">
                  Corporate investigations services we offer:
                </p>
                <div className="protection-content-panel mt-6">
                  <ServiceTimelineList items={corporateServices} />
                </div>
              </div>
            </div>
          </div>
        </ServiceContentSection>

        <section className="border-t border-slate-200 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="service-highlight-banner flex flex-col items-start gap-4 rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-brand-navy to-brand-green p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Corporate investigation support</h3>
                <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
                  Discuss debtor tracing, fraud investigation, employee enquiries, and more in complete confidence.
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
