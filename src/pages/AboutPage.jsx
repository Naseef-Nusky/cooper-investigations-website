import { Link } from 'react-router-dom'
import { PageShell } from '../components/SiteChrome.jsx'
import {
  ServiceImageCard,
  ServicePageHero,
  serviceSideColsMd,
  serviceSplitCols,
} from '../components/ServicePageLayout.jsx'
import { SITE_PHONE, SITE_PHONE_HREF } from '../siteConfig.js'

function IconSearchBullet({ className = 'h-5 w-5 shrink-0 text-brand-teal' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
    </svg>
  )
}

function AboutBulletList({ items }) {
  return (
    <ul className="service-bullet-list mt-6 space-y-3">
      {items.map((item, index) => (
        <li key={typeof item === 'string' ? item : index} className="service-bullet flex gap-3 text-sm leading-relaxed text-slate-600 md:text-base">
          <IconSearchBullet />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const aboutPoints = [
  'We have an extremely dedicated and efficient support group/team.',
  'Each bespoke case is carried out with maximum professionalism and discretion.',
  'We pride ourselves on achieving results and go out of our way to do so.',
  'We are discreet and confidential.',
  'Let us help find the facts and evidence, then the solution to your problem.',
  'Each case is bespoke and treated with extreme discretion! We pride ourselves on gathering information and evidence according to the strictest legal and ethical standards.',
  'Our high success rate is due to gathering information in the correct manner and by putting the client’s needs first.',
  <strong key="priority">You&apos;re our priority!</strong>,
]

const whyPoints = [
  <span key="exp">
    <strong>40 years combined experience</strong> – Our team of private investigators and agents have over 40 years
    combined experience.
  </span>,
  <span key="247">
    <strong>Personal 24/7 Service</strong> – We provide a dedicated, out of hours service for urgent and/or overseas
    matters, to all clients.
  </span>,
  <span key="staff">
    <strong>Expert Personnel</strong> – We have a policy of not subcontracting, instead preferring to keep tasks within
    our group of trusted personnel.
  </span>,
  <span key="disc">
    <strong>Discrete &amp; Confidential</strong> – Discretion and confidentiality are at the core of everything we do.
  </span>,
]

export default function AboutPage() {
  return (
    <PageShell>
      <ServicePageHero
        category="About Cooper Investigations"
        title="About us – Cooper Investigations"
        breadcrumb="About us – Cooper Investigations"
      />

      <main id="main">
        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:items-stretch md:gap-16 md:px-6">
            <h2 className={`about-section-title ${serviceSplitCols.topic}`}>About us</h2>
            <div className={serviceSplitCols.image}>
              <div className="flex h-full min-h-0 flex-col md:sticky md:top-28">
                <ServiceImageCard
                  src="/private-investigation-agency-1.jpg"
                  alt="Private investigation agency professional at work"
                  tall
                  className="min-h-0 flex-1"
                />
              </div>
            </div>
            <div className={`${serviceSplitCols.body} mt-6 md:mt-0`}>
              <p className="leading-relaxed text-slate-600">
                A bespoke and 24/7 confidential service with a flexible and adaptable to whatever the necessary situation
                and brief! A private investigating service with over 40 years combined experience and we have a
                multi-disciplined team (Ex-Military, Special force&apos;s, civil and criminal investigations).
              </p>
              <AboutBulletList items={aboutPoints} />
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:items-stretch md:gap-16 md:px-6">
            <h2 className={`about-section-title ${serviceSideColsMd.topic}`}>Why use Cooper Investigations?</h2>
            <div className={serviceSideColsMd.image}>
              <div className="flex h-full min-h-0 flex-col md:sticky md:top-28">
                <ServiceImageCard
                  src="/private-investigation2.jpg"
                  alt="Private investigator conducting confidential work"
                  tall
                  className="min-h-0 flex-1"
                />
              </div>
            </div>
            <div className={`${serviceSideColsMd.body} mt-6 md:mt-0`}>
              <p className="leading-relaxed text-slate-600">
                We are reliable, flexible, diligent, and reassuring. We use the upmost discretion. This is achieved
                through strong management. The ability to meet and exceed client&apos;s expectations as well as respond to
                the changing needs of the client or his/her situation, this is achieved through being honest and acting
                on the facts with integrity and transparency.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                We have dealt with challenging individuals and cases and are more than capable and experienced in the
                most demanding and complex case with positive results, we are also experienced in all civil, criminal
                and domestic cases! As well as corporate.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                We also have an international investigation team that we work with if subjects abscond. We have a NO
                NONSENSE approach with a dedicated and ambitious team of experts who will work tirelessly to achieve
                results.
              </p>
              <AboutBulletList items={whyPoints} />
            </div>
          </div>
        </section>

        <section className="about-cta relative overflow-hidden py-20 md:py-28">
          <div className="about-cta-bg" aria-hidden />
          <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Call for a FREE Consultation</h2>
            <p className="mt-4 text-lg text-white/90">
              If you would like to talk in complete confidence, then contact one of our team today.
            </p>
            <p className="mt-6 text-xl font-bold text-white md:text-2xl">
              Please call us on{' '}
              <a href={SITE_PHONE_HREF} className="underline decoration-brand-teal underline-offset-4 hover:text-brand-teal">
                {SITE_PHONE}
              </a>
              .
            </p>
            <Link to="/contact" className="about-cta-btn mt-10 inline-flex">
              Contact us
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  )
}
