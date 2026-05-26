import { Link } from 'react-router-dom'
import { PageShell } from '../components/SiteChrome.jsx'
import {
  ConsultationCta,
  ServiceContentSection,
  ServiceImageCard,
  ServicePageHero,
  ServiceTimelineList,
  serviceSplitCols,
} from '../components/ServicePageLayout.jsx'

const incidentServices = [
  {
    title: 'Incident Response Preparation and Prevention',
    paragraphs: [
      "Enhance your organisation's ability to respond to cyberattacks with Cooper Investigation's wide range of assessments, tabletop exercises, and intelligence.",
    ],
  },
  {
    title: 'Intelligent Endpoint Detection and Response',
    paragraphs: [
      'Employing a powerful combination of technology and people, this sophisticated solution enables you to detect and respond swiftly to credible threats.',
    ],
  },
]

export default function CorporateIncidentResponsePage() {
  return (
    <PageShell>
      <ServicePageHero
        category="Digital Forensics"
        title="Corporate Incident Response"
        breadcrumb="Corporate Incident Response"
      />

      <main id="main">
        <ServiceContentSection>
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:items-stretch md:gap-16 md:px-6">
            <h2 className={`service-section-title ${serviceSplitCols.topic}`}>Corporate Incident Response</h2>
            <div className={serviceSplitCols.image}>
              <div className="flex h-full min-h-0 flex-col md:sticky md:top-28">
                <ServiceImageCard
                  src="/Corporate-Incident-Response.jpg"
                  alt="Professional reviewing incident response documentation at a desk"
                  tall
                  className="min-h-0 flex-1"
                />
              </div>
            </div>
            <div className={`${serviceSplitCols.body} mt-6 space-y-4 md:mt-0`}>
              <p className="leading-relaxed text-slate-600">
                Cooper Investigations manage incidents of all types, complexity and severity for organizations across
                diverse industries. You can count on Cooper Investigations unique frontline experience not only in a
                crisis, but also for proactive planning and mitigation strategies. We are among the top service providers
                preferred by major cyber insurance companies and offer client-friendly incident response retainers for
                peace of mind.
              </p>
              <p className="mt-4 font-semibold text-brand-navy">
                Fast and efficient deployment via onsite and remote incident response capabilities
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Whether your incident is the result of a malicious hacker or accidental exposure by an employee, Cooper
                Investigations can help now. Our global network of certified security and digital forensic experts can
                deploy remote solutions quickly and/or be onsite within hours to help you contain the situation and
                determine next steps.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Cooper Investigations is a leading provider of end-to-end cybersecurity, digital forensics and breach
                response services, and will help you make informed decisions at every stage, from proactive preparation to
                consumer notification and remediation. Our goal, working alongside your counsel and insurance carrier, is
                to smoothly guide you to recovery — one that leaves you standing in the best defensible position, reputation
                intact, and where business can proceed with minimal disruption.
              </p>
              <p className="mt-8 font-semibold text-brand-navy md:text-lg">
                Cooper Investigations offers a continuum of services for the multifaceted nature of incident response
              </p>
              <div className="protection-content-panel mt-6">
                <ServiceTimelineList items={incidentServices} />
              </div>
            </div>
          </div>
        </ServiceContentSection>

        <section className="border-t border-slate-200 bg-slate-50 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="service-highlight-banner flex flex-col items-start gap-4 rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-brand-navy to-brand-green p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Incident response you can trust</h3>
                <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
                  Speak to our team about retainers, remote deployment, and onsite breach response in complete confidence.
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
