import { Link } from 'react-router-dom'
import { PageShell } from '../components/SiteChrome.jsx'
import {
  ConsultationCta,
  ServiceBulletList,
  ServiceContentSection,
  ServiceImageCard,
  ServicePageHero,
  serviceSplitCols,
} from '../components/ServicePageLayout.jsx'

const recoverableDevices = [
  { id: 'computers', text: 'Computers, laptops and tablets' },
  { id: 'phones', text: 'Mobile phones' },
  { id: 'drives', text: 'HDD, RAID, SSD' },
  { id: 'usb', text: 'USB memory sticks' },
  { id: 'sd', text: 'SD cards' },
  { id: 'servers', text: 'Servers' },
  { id: 'external', text: 'External hard drives' },
  { id: 'tapes', text: 'Back-up tapes' },
  { id: 'vmware', text: 'VMware' },
  { id: 'cloud', text: 'Cloud' },
  { id: 'photos', text: 'Digital photos' },
  { id: 'cctv', text: 'CCTV' },
  { id: 'deleted', text: 'Deleted files' },
]

export default function CorporateDataRecoveryPage() {
  return (
    <PageShell>
      <ServicePageHero
        category="Digital Forensics"
        title="Corporate Data Recovery"
        breadcrumb="Corporate Data Recovery"
      />

      <main id="main">
        <ServiceContentSection>
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:items-stretch md:gap-16 md:px-6">
            <h2 className={`service-section-title ${serviceSplitCols.topic}`}>Data Recovery Expertise</h2>
            <div className={serviceSplitCols.image}>
              <div className="flex h-full min-h-0 flex-col md:sticky md:top-28">
                <ServiceImageCard
                  src="/Data-Recovery-Expertise-1.jpg"
                  alt="Hand holding a USB flash drive in a forensic data recovery setting"
                  tall
                  className="min-h-0 flex-1"
                />
              </div>
            </div>
            <div className={`${serviceSplitCols.body} mt-6 space-y-4 md:mt-0`}>
              <p className="leading-relaxed text-slate-600">
                Cooper Investigations understand how important your data is and the wider commercial implications of data
                recovery, including the potential cost and disruption to a business. Since we started, we have operated a
                team of highly qualified digital forensic professionals, who recover data using forensically sound
                methodology. We operate at the leading edge of data recovery technology and provide services directly to
                criminal and civil law firms, corporate businesses, SMEs, regulatory bodies and private individuals.
              </p>
              <p className="font-semibold text-brand-navy md:text-lg">
                Specialists in forensic data recovery from all types of electronic devices.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                With unparalleled experience in the use of advanced digital forensic techniques, our experts have
                experience in extracting and preserving data from a vast range of digital media. We can recover data from
                hard drives, RAID arrays, Flash Memory devices, SD Cards and SSD hard drives.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Our forensic technicians are on hand to discuss the detailed recovery of your data and can advise you on
                each phase of the process.
              </p>
              <ServiceBulletList items={recoverableDevices} />
            </div>
          </div>
        </ServiceContentSection>

        <section className="border-t border-slate-200 bg-slate-50 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="service-highlight-banner flex flex-col items-start gap-4 rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-brand-navy to-brand-green p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Forensic data recovery support</h3>
                <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
                  Speak to our technicians in complete confidence about recovering data from any electronic device.
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
