import { Link } from 'react-router-dom'
import { PageShell } from '../components/SiteChrome.jsx'
import {
  ConsultationCta,
  ServiceBulletList,
  ServiceContentSection,
  ServiceFeatureGrid,
  ServiceImageCard,
  ServicePageHero,
} from '../components/ServicePageLayout.jsx'

const useCases = [
  { id: 'partner', text: 'Catching a cheating partner' },
  { id: 'employee', text: 'An employee using a company vehicle for personal use or meeting competitors' },
  { id: 'theft', text: 'The ability to track your vehicle in the event of theft' },
]

const trackerData = [
  'Status (start/stop)',
  'Date and time',
  'Speed',
  'Distance travelled',
  'Location — displayed as an address and latitude/longitude',
  'A link via Street View to each recorded position',
]

export default function AssetTrackingPage() {
  return (
    <PageShell>
      <ServicePageHero
        title="Asset and Vehicle Tracking Services"
        breadcrumb="Asset and Vehicle Tracking Services"
      />

      <main id="main">
        <ServiceContentSection>
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <h2 className="service-section-title">Asset and vehicle tracking</h2>
              <p className="mt-6 leading-relaxed text-slate-600">
                <strong className="text-brand-navy">Vehicle tracking</strong> is a covert method of monitoring a vehicle&apos;s
                movements. Using discreet <strong className="text-brand-navy">vehicle trackers</strong>, we help you
                establish patterns of travel, verify suspicions, and gather evidence you can act on — lawfully and
                professionally.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Our investigators deploy and manage tracking with strict confidentiality. Typical scenarios include:
              </p>
              <ServiceBulletList items={useCases} />
            </div>
            <ServiceImageCard
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"
              alt="Black taxi on a London street"
            />
          </div>
        </ServiceContentSection>

        <ServiceContentSection variant="muted">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <ServiceImageCard
              src="https://images.unsplash.com/photo-1569336412537-404f83a3a337?auto=format&fit=crop&w=1200&q=80"
              alt="Smartphone displaying GPS map tracking"
            />
            <div>
              <h2 className="service-section-title">Live intelligence at your fingertips</h2>
              <p className="mt-6 leading-relaxed text-slate-600">
                Our tracking solutions provide detailed journey data so you understand where a vehicle has been, when it
                moved, and how long it stayed at each location — presented in a clear, actionable format.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">Reports can include:</p>
              <ServiceFeatureGrid features={trackerData} />
              <p className="mt-8 leading-relaxed text-slate-600">
                The service is carried out discreetly and covertly. You receive professional analysis from investigators
                who understand how to interpret movement data and present findings suitable for personal or corporate
                decision-making.
              </p>
            </div>
          </div>
        </ServiceContentSection>

        <section className="border-t border-slate-200 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="service-highlight-banner flex flex-col items-start gap-4 rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-brand-navy to-brand-green p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Need covert tracking you can trust?</h3>
                <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
                  Speak to our team in complete confidence. We&apos;ll advise on lawful options and tailor a proportionate
                  plan to your objectives.
                </p>
              </div>
              <Link to="/#contact" className="service-highlight-btn shrink-0">
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
