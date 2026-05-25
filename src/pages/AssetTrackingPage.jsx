import { Link } from 'react-router-dom'
import { PageShell } from '../components/SiteChrome.jsx'
import {
  ConsultationCta,
  ServiceBulletList,
  ServiceContentSection,
  ServiceImageCard,
  ServicePageHero,
} from '../components/ServicePageLayout.jsx'

const useCases = [
  { id: 'partner', text: 'Catching a cheating partner' },
  { id: 'employee', text: 'An employee using a company vehicle for personal use or meeting competitors' },
  { id: 'theft', text: 'Ability to track your vehicle in the event of theft.' },
]

const trackerData = [
  { id: 'status', text: 'Status (start/stop)' },
  { id: 'datetime', text: 'Date and time' },
  { id: 'speed', text: 'Speed' },
  { id: 'distance', text: 'Distance traveled' },
  { id: 'location', text: 'Location (displayed as an address and also latitude/longitude)' },
  { id: 'streetview', text: 'A link via Street view to each recorded position' },
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
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <h2 className="service-section-title">Asset and Vehicle Tracking</h2>
              <p className="mt-6 leading-relaxed text-slate-600">
                Vehicle tracking is a covert method of recording the movements of a vehicle 24 hours a day, 7 days a
                week, 365 days of the year. The vehicle trackers are deployed covertly by our highly trained operatives
                in places where they won&apos;t be located by the driver/owner. We won&apos;t need the keys to the vehicle
                or you to be present, just let us know where it is and we&apos;ll do what we do best.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                There are many reasons why you may want to track the location of a vehicle.
              </p>
              <ServiceBulletList items={useCases} />
              <p className="mt-6 leading-relaxed text-slate-600">
                Maybe you just want to confirm that your trust in your partner is justified and wish to check their
                whereabouts matches where they have stated they&apos;ll be.
              </p>
            </div>
            <ServiceImageCard
              src="/Asset-and-Vehicle-Tracking.jpg"
              alt="Black London taxi on a cobblestone street"
            />
          </div>
        </ServiceContentSection>

        <ServiceContentSection variant="muted">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <ServiceImageCard
                  src="/vehicle-tracker.jpg"
                  alt="Hand holding a smartphone displaying GPS map tracking"
                />
              </div>

              <div className="lg:col-span-7">
                <p className="leading-relaxed text-slate-600">
                  Once the car tracker has been removed you will be sent an email containing the downloaded data from
                  the device. This will outline the following information for the duration that it was deployed:
                </p>
                <ServiceBulletList items={trackerData} />
                <p className="mt-6 leading-relaxed text-slate-600">
                  This won&apos;t give you the irrefutable evidence that a physical surveillance would due to it only
                  providing the vehicle&apos;s location. It doesn&apos;t prove who is driving the vehicle, who else is in
                  it and what their behaviour towards one another is.
                </p>
                <p className="mt-4 leading-relaxed text-slate-600">
                  The vehicle tracker is discreet and completely covert so there&apos;s no need to worry about it being
                  discovered or compromised.
                </p>
              </div>
            </div>
          </div>
        </ServiceContentSection>

        <section className="border-t border-slate-200 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="service-highlight-banner flex flex-col items-start gap-4 rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-brand-navy to-brand-green p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Need covert tracking you can trust?</h3>
                <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
                  Speak to our team in complete confidence about lawful vehicle tracking for your situation.
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
