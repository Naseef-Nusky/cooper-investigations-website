import { Link } from 'react-router-dom'
import { PageShell } from '../components/SiteChrome.jsx'
import {
  ConsultationCta,
  ServiceContentSection,
  ServiceImageCard,
  ServicePageHero,
  ServiceSubsection,
} from '../components/ServicePageLayout.jsx'

export default function CreditCheckingServicesPage() {
  return (
    <PageShell>
      <ServicePageHero
        category="Digital Forensics"
        title="Credit Checking Services"
        breadcrumb="Credit Checking Services"
      />

      <main id="main">
        <ServiceContentSection>
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <h2 className="service-section-title">Employment background checks</h2>
              <p className="mt-6 leading-relaxed text-slate-600">
                Making the right hiring decisions can never be left to chance. From start-ups to global companies, we
                work with businesses of all shapes and sizes to help understand your professional screening needs, and
                integrate seamlessly into your recruitment process for fast, reliable results. With a comprehensive list
                of checks and services at your disposal, our friendly expert team is here to help 24 hours a day.
              </p>

              <ServiceSubsection title="Let us find your solution">
                <p>
                  Whether you&apos;re hiring 1 or 100 new employees a year, we want to make it easy to bring the right people
                  on board. That&apos;s why here at Cooper Investigations we have developed pay-per-candidate screening packages
                  designed for employers who require cost-efficient screening on a pay-as-you-go basis.
                </p>
                <p>
                  We also know that when it comes to pre-employment screening, one size doesn&apos;t always fit all. If our
                  packages aren&apos;t quite right for you, or if you hire over 50 people per year, get in touch to discuss a
                  bespoke solution with a member of our friendly team.
                </p>
              </ServiceSubsection>
            </div>

            <ServiceImageCard
              src="/Employment-background-checks.jpg"
              alt="Credit card held over a laptop during employment background screening"
            />
          </div>
        </ServiceContentSection>

        <ServiceContentSection variant="muted">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <ServiceImageCard
                  src="/Employment-background-checks.jpg"
                  alt="Pre-employment credit and background check"
                />
              </div>

              <div className="lg:col-span-7">
                <h2 className="service-section-title">Here for all Businesses</h2>
                <p className="mt-6 leading-relaxed text-slate-600">
                  No matter what your industry, appropriate pre-employment screening is essential, particularly for
                  maintaining compliance in sensitive industries like healthcare, finance or legal. We offer a comprehensive
                  range of checks so whatever your sector, you can be confident that your hiring processes are compliant and
                  that your business is protected.
                </p>
              </div>
            </div>
          </div>
        </ServiceContentSection>

        <section className="border-t border-slate-200 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="service-highlight-banner flex flex-col items-start gap-4 rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-brand-navy to-brand-green p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Employment screening support</h3>
                <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
                  Discuss pay-per-candidate packages or bespoke screening for your business in complete confidence.
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
