import { Link } from 'react-router-dom'
import { PageShell } from '../components/SiteChrome.jsx'
import {
  ConsultationCta,
  ServiceBulletList,
  ServiceContentSection,
  ServiceImageCard,
  ServicePageHero,
} from '../components/ServicePageLayout.jsx'

const disclosureSources = [
  { id: 'hdd', text: 'Hard Drives' },
  { id: 'flash', text: 'Flash Drives' },
  { id: 'sms', text: 'Text Messages' },
  { id: 'chat', text: 'Chat logs' },
  { id: 'email', text: 'Email Accounts' },
  { id: 'mobile', text: 'Mobile Phone Storage' },
  { id: 'docs', text: 'Documents' },
  { id: 'social', text: 'Social Media Accounts' },
  { id: 'cloud', text: 'Cloud Data' },
  { id: 'media', text: 'Text or Picture Files' },
  { id: 'av', text: 'Audio or Video Files' },
  { id: 'archive', text: 'Archived Data' },
  { id: 'db', text: 'Databases' },
  { id: 'deleted', text: 'Deleted Data' },
]

export default function EdisclosureServicesPage() {
  return (
    <PageShell>
      <ServicePageHero
        category="Digital Forensics"
        title="Edisclosure Services"
        breadcrumb="Edisclosure Services"
      />

      <main id="main">
        <ServiceContentSection>
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <p className="leading-relaxed text-slate-600">
                You may be required to follow full disclosure procedures where you will have to declare whether or not an
                electronic document exists or has existed. If you are prepared to let your opponent see this personal
                information and documents, this may need to be carried out by a third party such as digital forensics or a
                professional investigation agency in order to retrieve these documents.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                E-disclosure procedures ensure that all electronic data is collected, preserved and delivered according to
                ACPO guidelines. We follow these guide lines to ensure the delivery of accurate and reliable information, as
                well as complete accordance and legality with the law.
              </p>

              <h2 className="service-section-title mt-10">Actual Results</h2>
              <p className="mt-6 italic text-slate-500">
                Electronic evidence may need to be acquired, analysed and collected from many sources.
              </p>
              <p className="mt-4 font-semibold text-brand-navy md:text-lg">
                London Digital Forensics Experts Acquire e-Disclosure From:
              </p>
              <ServiceBulletList items={disclosureSources} />
            </div>

            <ServiceImageCard
              src="/Edisclosure-Services.jpg"
              alt="Smartphone and charging cable on a desk for e-disclosure collection"
            />
          </div>
        </ServiceContentSection>

        <section className="border-t border-slate-200 bg-slate-50 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="service-highlight-banner flex flex-col items-start gap-4 rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-brand-navy to-brand-green p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">E-disclosure &amp; digital forensics</h3>
                <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
                  Speak to our London team about ACPO-compliant collection and delivery of electronic evidence.
                </p>
              </div>
              <Link to="/contact" className="service-highlight-btn shrink-0">
                Contact us
              </Link>
            </div>
          </div>
        </section>

        <ConsultationCta />
      </main>
    </PageShell>
  )
}
