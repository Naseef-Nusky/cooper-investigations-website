import { Link } from 'react-router-dom'
import { PageShell } from '../components/SiteChrome.jsx'
import { SITE_PHONE } from '../siteConfig.js'
import {
  ConsultationCta,
  ServiceContentSection,
  ServiceImageCard,
  ServicePageHero,
  ServiceSubsection,
  serviceSideColsLg,
  serviceSplitCols,
} from '../components/ServicePageLayout.jsx'

export default function InternationalInvestigationPage() {
  return (
    <PageShell>
      <ServicePageHero
        title="International Investigation Services"
        breadcrumb="International Investigation Services"
      />

      <main id="main">
        <ServiceContentSection>
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:items-stretch md:gap-16 md:px-6">
            <h2 className={`service-section-title ${serviceSplitCols.topic}`}>
              International Investigation Services For Personal &amp; Business Clients
            </h2>
            <div className={serviceSplitCols.image}>
              <div className="flex h-full min-h-0 flex-col md:sticky md:top-28">
                <ServiceImageCard
                  src="/International-Investigation-Services.jpg"
                  alt="Airplane flying between international city skyscrapers"
                  tall
                  className="min-h-0 flex-1"
                />
              </div>
            </div>
            <div className={`${serviceSplitCols.body} mt-6 space-y-4 md:mt-0`}>
              <p className="leading-relaxed text-slate-600">
                International investigation services can be required for any number of reasons. Whether you are seeking
                to resolve personal or family issues, or working on behalf of a multinational corporation, you need a
                reliable, trustworthy team. Call {SITE_PHONE} now.
              </p>

              <ServiceSubsection title="International Private Investigators On Call 24/7">
                <p>
                  Professional, friendly and skilled, Cooper Investigations are on call 24 hours a day, 7 days a week for
                  all your global investigation services. We have a highly experienced multi-lingual team of investigators
                  ready to answer your investigative needs.
                </p>
                <p>
                  We report in real time so you&apos;re up to date with what&apos;s happening with your case.
                </p>
              </ServiceSubsection>

              <ServiceSubsection title="Using the Latest Investigative Methods">
                <p>
                  The team at Cooper Investigations regularly update their skills with training in the latest investigative
                  innovations – from counter-surveillance devices to the latest vehicle-tracking technology to ensure they
                  are always equipped to deal with any detecting jobs required by you or your company.
                </p>
                <p>
                  We treat every international investigation with the same degree of dedication and professionalism as our
                  UK investigations.
                </p>
              </ServiceSubsection>
            </div>
          </div>
        </ServiceContentSection>

        <ServiceContentSection variant="muted">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14">
              <h2 className={`service-section-title ${serviceSideColsLg.topic}`}>
                International private investigations
              </h2>
              <div className={serviceSideColsLg.image}>
                <div className="flex h-full min-h-0 flex-col lg:sticky lg:top-28">
                  <ServiceImageCard
                    src="/phone-chat-1.jpg"
                    alt="Hands using a smartphone outdoors"
                    tall
                    className="min-h-0 flex-1"
                  />
                </div>
              </div>
              <div className={`${serviceSideColsLg.body} mt-6 space-y-4 md:mt-0`}>
                <ServiceSubsection title="No Sub-contracting on International Investigations">
                  <p>
                    Our team of vetted, highly skilled and experienced detectives conduct all of our investigations
                    in-house. If this means travelling, then that&apos;s what we&apos;ll do. This way, you can be certain
                    that your concerns remain private.
                  </p>
                </ServiceSubsection>

                <ServiceSubsection title="Leaders in International Private Investigations">
                  <p>
                    If an international client&apos;s business needs to take us overseas we can usually arrange same-day
                    travel. This is the reason why we already have strong business relationships with multinational
                    corporations, legal service providers and entrepreneurs.
                  </p>
                  <p>
                    What do we do for them? Everything: from due diligence and background checks to matrimonial
                    investigations and surveillance.
                  </p>
                  <p>
                    Always on call, always discrete, always efficient, and always professional; whatever the reason you may
                    require international investigation services, Cooper Investigations can help. We won&apos;t be satisfied
                    until you are.
                  </p>
                </ServiceSubsection>
              </div>
            </div>
          </div>
        </ServiceContentSection>

        <section className="border-t border-slate-200 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="service-highlight-banner flex flex-col items-start gap-4 rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-brand-navy to-brand-green p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Global investigation support</h3>
                <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
                  Speak to our multi-lingual team in complete confidence about international enquiries, due diligence,
                  and surveillance.
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
