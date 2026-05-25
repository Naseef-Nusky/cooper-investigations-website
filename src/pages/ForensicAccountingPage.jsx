import { Link } from 'react-router-dom'
import { PageShell } from '../components/SiteChrome.jsx'
import {
  ConsultationCta,
  ServiceBulletList,
  ServiceContentSection,
  ServiceImageCard,
  ServicePageHero,
  ServiceTimelineList,
} from '../components/ServicePageLayout.jsx'

const forensicServices = [
  {
    title: 'Fraud investigations',
    paragraphs: [
      'We find evidence to show what (and how it) happened, advise on what corrective action you can take, and help you reduce the chances of it happening again.',
    ],
  },
  {
    title: 'Asset recovery',
    paragraphs: [
      "We assess the net worth of individuals and organisations; this can help the legal process of freezing perpetrators' assets to maximise recovery of money lost in fraud cases.",
    ],
  },
  {
    title: 'Loss of Profit claims',
    paragraphs: [
      'Our forensic accountants can produce Loss of Profit claims for businesses who have suffered interruptions – be it from fire, flood or other problems.',
    ],
  },
  {
    title: 'Systems assessments',
    paragraphs: [
      'Our forensic accountants, often in tandem with fraud investigators, review and report on system weaknesses. We can also help you to prepare all necessary fraud, bribery and anti-money laundering policies.',
    ],
  },
  {
    title: 'Defence against employee loss of earnings claims',
    paragraphs: [
      "We can combine the investigation of employees' claims with work to reduce the compensation being claimed for loss of earnings or damages. We'll provide the surveillance teams and equipment.",
    ],
  },
  {
    title: 'Training',
    paragraphs: [
      'We can train your staff on all aspects of fraud awareness and anti-money laundering. We provide a comprehensive training package on many enforcement subjects, including court room skills and investigative interviewing.',
    ],
  },
  {
    title: 'Project management',
    paragraphs: [
      'We have great experience project-managing fraud enquiries, combining the skills of in-house and external HR, legal and accounting teams.',
    ],
  },
]

const serviceQualities = [
  { id: 'comprehensive', text: 'Comprehensive, providing a one-stop shop for everything you need to handle your fraud problem' },
  { id: 'integrated', text: 'Integrated, ensuring maximum impact from everything that we do' },
  { id: 'professional', text: 'Professional, using only the highest-quality staff with a real track record' },
  { id: 'focused', text: 'Focused on reducing the economic and financial impact of fraud' },
  { id: 'reputation', text: 'Designed to enhance the reputation and credibility of your organisation' },
]

export default function ForensicAccountingPage() {
  return (
    <PageShell>
      <ServicePageHero
        category="Digital Forensics"
        title="Forensic Accounting"
        breadcrumb="Forensic Accounting"
      />

      <main id="main">
        <ServiceContentSection>
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <p className="leading-relaxed text-slate-600">
                Whether it&apos;s as a preventative measure or because the worst-case scenario has played out, our forensic
                accounting team can get to the bottom of it – and make sure it doesn&apos;t happen again.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                We have an enviable mix of forensic accountants, retired police detectives, and forensic scientists who
                specialise in investigating key areas of corporate fraud and financial investigations – issues such as
                internal audits, IT audits, tax fraud, VAT fraud, and insolvency.
              </p>
            </div>

            <ServiceImageCard
              src="/Forensic-Accounting.jpg"
              alt="Forensic accounting and financial investigation"
            />
          </div>
        </ServiceContentSection>

        <ServiceContentSection variant="muted">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <ServiceImageCard
                  src="/counter-fraud.jpg"
                  alt="Counter-fraud investigation and financial analysis"
                />
              </div>

              <div className="lg:col-span-7">
                <h2 className="service-section-title">How our fraud and forensic accounting services can help you</h2>
                <div className="protection-content-panel mt-8">
                  <ServiceTimelineList items={forensicServices} />
                </div>
              </div>
            </div>
          </div>
        </ServiceContentSection>

        <ServiceContentSection>
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <h2 className="service-section-title">We have depth of knowledge and experience in counter-fraud</h2>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-brand-navy md:text-base">
              Our services are:
            </p>
            <ServiceBulletList items={serviceQualities} />
            <p className="mt-8 leading-relaxed text-slate-600">
              Our counter-fraud division allows organisations not only to respond to problems, but also to take a
              preventative approach. We work with you to develop an anti-fraud culture in your business, creating strong
              deterrent cultures and preventative systems, and implementing effective detection processes.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              We still do the reactive service, too, and it includes everything that might be needed concerning the
              conducting of fraud investigations, recovery of losses, and provision of advice concerning legal, disciplinary
              or regulatory sanctions.
            </p>
            <p className="mt-6 font-medium text-brand-navy">
              Get in touch, and chat with our experts about your recovery needs.
            </p>
          </div>
        </ServiceContentSection>

        <section className="border-t border-slate-200 bg-slate-50 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="service-highlight-banner flex flex-col items-start gap-4 rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-brand-navy to-brand-green p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Forensic accounting &amp; counter-fraud</h3>
                <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
                  Discuss fraud investigations, asset recovery, and preventative systems with our experts in confidence.
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
