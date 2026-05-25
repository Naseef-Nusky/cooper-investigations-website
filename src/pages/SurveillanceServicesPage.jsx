import { Link } from 'react-router-dom'
import { PageShell } from '../components/SiteChrome.jsx'
import { SITE_PHONE } from '../siteConfig.js'
import {
  ConsultationCta,
  ServiceBulletList,
  ServiceContentSection,
  ServiceImageCard,
  ServicePageHero,
  ServiceSubsection,
} from '../components/ServicePageLayout.jsx'

const surveillanceReasons = [
  { id: 'partner', text: 'To catch a cheating partner' },
  { id: 'sick', text: 'To monitor staff that are off sick' },
  { id: 'domestic', text: 'To obtain proof of domestic violence' },
  { id: 'child', text: 'To obtain proof of child abuse' },
  { id: 'csa', text: 'To prove wrongful CSA claims' },
  { id: 'asb', text: 'To obtain proof of anti social behaviour' },
  { id: 'insurance', text: 'To prove fraudulent insurance claims' },
]

const professionalPoints = [
  { id: 'uk', text: 'We operate across the UK, conducting Covert surveillance at short notice.' },
  {
    id: 'qualified',
    text: 'Our trained, qualified and experienced surveillance operators hold UK recognised qualifications.',
  },
  {
    id: 'equipment',
    text: 'We use professional grade equipment which means any footage obtained and detailed reports can be used in court if required.',
  },
  {
    id: 'dpa',
    text: 'We comply with the Data Protection Act 1998 means we ensure your information is secure.',
  },
  { id: 'insurance', text: 'We hold public liability and indemnity insurance. OPS' },
]

export default function SurveillanceServicesPage() {
  return (
    <PageShell>
      <ServicePageHero title="Surveillance Services" breadcrumb="Surveillance Services" />

      <main id="main">
        <ServiceContentSection>
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <h2 className="service-section-title">Covert Surveillance Services</h2>
              <p className="mt-6 leading-relaxed text-slate-600">
                Covert Surveillance is considered to be among the best ways of identifying actual facts. This process
                offers video and photographic evidence and leaves hardly any room for doubt when investigating a case.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                There are various reasons for which you might require surveillance services. Some of them include the
                following:
              </p>
              <ServiceBulletList items={surveillanceReasons} />
              <p className="mt-6 leading-relaxed text-slate-600">
                To discuss our services please call {SITE_PHONE}
              </p>

              <ServiceSubsection title="Surveillance Solutions">
                <p className="font-semibold text-brand-navy">Covert surveillance</p>
                <p className="mt-3">
                  Covert surveillance is not a new concept, it can be vital when conducting a professional investigation.
                  Covert surveillance will only be successful, if the surveillance operators are thoroughly trained in all
                  aspects of covert physical follows. Vehicle surveillance and the use of the correct technical surveillance
                  systems to capture the evidence.
                </p>
                <p>
                  When you hire Cooper Investigations for covert surveillance, you have absolutely nothing to worry about.
                  We have several decades of experience in carrying out successful surveillance procedures in some highly
                  dangerous environments. When we commit to a client, we are actually confident about doing the job. We are
                  proud of our expertise in the area of covert surveillance, whether it is physical surveillance or technical
                  surveillance.
                </p>
                <p>
                  We use state-of-the-art surveillance equipment including covert GPS Tracking, Covert cameras and audio
                  and video installations for monitoring activities. When carrying out surveillance on a particular person,
                  we shall continue to follow them whether they are on foot or travelling by car or public transport till
                  we have managed to obtain sufficient video or photographic evidence required to prove the case.
                </p>
                <p>
                  You can contact us directly and our surveillance team will discuss your case and advise on what
                  appropriate actions can be taken.
                </p>
              </ServiceSubsection>
            </div>

            <ServiceImageCard
              src="/Covert-surveillance.jpg"
              alt="Surveillance operative holding a professional camera on a gimbal"
            />
          </div>
        </ServiceContentSection>

        <ServiceContentSection variant="muted">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <ServiceImageCard
                  src="/Professional-Surveillance-1.jpg"
                  alt="Hands cutting printed evidence on a desk during an investigation"
                />
              </div>

              <div className="lg:col-span-7">
                <h2 className="service-section-title">Private Investigation Surveillance</h2>
                <p className="mt-6 leading-relaxed text-slate-600">
                  Our investigations are geared to gather the evidence for our customers. Our private clients receive the
                  same levels of service as our commercial clients, offering sound advice with confidentiality assured. All
                  information obtained during the course of an investigation can be used in court if required, as our
                  investigators are professionally trained and qualified; importantly, they are of good character and credible
                  witnesses.
                </p>

                <ServiceSubsection title="Surveillance: Why come to us?">
                  <p>
                    We are a leading private investigation &amp; surveillance company who provide this service for many other
                    investigation agencies, lawyers, private and commercial clients. We at Cooper Investigations come with a
                    covert surveillance background, fully trained, with a thorough understanding of covert surveillance.
                  </p>
                </ServiceSubsection>

                <ServiceSubsection title="Who are we? Professional Surveillance">
                  <p>
                    On request, we can provide you with details of experience of your assigned covert surveillance operator or
                    team. We are all Ex Military and trained to the highest level in all areas of covert surveillance.
                  </p>
                  <ServiceBulletList items={professionalPoints} />
                </ServiceSubsection>

                <p className="mt-6 leading-relaxed text-slate-600">
                  If you have any queries, do not hesitate to contact us Call {SITE_PHONE}
                </p>
              </div>
            </div>
          </div>
        </ServiceContentSection>

        <section className="border-t border-slate-200 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="service-highlight-banner flex flex-col items-start gap-4 rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-brand-navy to-brand-green p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Covert surveillance you can rely on</h3>
                <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
                  Discuss your case in complete confidence with our surveillance team today.
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
