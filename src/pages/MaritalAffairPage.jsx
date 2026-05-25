import { Link } from 'react-router-dom'
import { PageShell } from '../components/SiteChrome.jsx'
import {
  ConsultationCta,
  ServiceBulletList,
  ServiceContentSection,
  ServiceImageCard,
  ServicePageHero,
} from '../components/ServicePageLayout.jsx'

const redFlagSigns = [
  { id: 'computer', text: 'Excessive or discreet use of the computer' },
  { id: 'overtime', text: 'Overtime hours or holdovers with work' },
  { id: 'hiding', text: 'Hiding of phone, credit card, or bank account histories' },
  { id: 'arguing', text: 'Excessive arguing of facts related to time' },
  { id: 'defensive', text: 'Blaming, defensive behaviour' },
  { id: 'projection', text: 'Negative projections behaviour – accusing you of an affair' },
  { id: 'sexual', text: 'Lack of sexual interest or abnormal increased sexual interest' },
  { id: 'phones', text: 'Abnormal cell activity at the home or cell phones – hang ups and long tones' },
  { id: 'photos', text: 'Removal of pictures or photos from wallet' },
  { id: 'ring', text: 'Lost wedding ring' },
  { id: 'single', text: 'Single behaviour – out with friends' },
]

export default function MaritalAffairPage() {
  return (
    <PageShell>
      <ServicePageHero
        title="Marital Affair Investigation Services"
        breadcrumb="Marital Affair Investigation Services"
      />

      <main id="main">
        <ServiceContentSection>
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <h2 className="service-section-title">Marital Affair Investigation</h2>
              <p className="mt-6 leading-relaxed text-slate-600">
                Suspecting your mate of having an affair can be a very emotionally overwhelming experience. To be sure
                of anything you need facts. We will investigate the suspicious activity, helping you attain the truth you
                need to make important decisions in your life.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Feelings of disappointment, anger, uncertainty, betrayal and confusion can cloud rational thinking.
                There is no reason to live a moment longer wondering and in pain. There is nothing worse than the feeling
                of suspicion of a loved one, and until you know for sure, such thoughts could take a serious toll on
                your own well being as well as the well being of your relationship. If you are facing having to deal
                with infidelity, we can facilitate an in-depth, discreet investigation to find out for certain. With
                knowing the truth, comes peace of mind and in situations like these, certainty is priceless.
              </p>
            </div>

            <ServiceImageCard
              src="/Marital-Affair-Investigation.jpg"
              alt="Couple sitting together on a bench"
            />
          </div>
        </ServiceContentSection>

        <ServiceContentSection variant="muted">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <ServiceImageCard
                  src="/phone-chat-1.jpg"
                  alt="Person reviewing information on a smartphone outdoors"
                />
              </div>

              <div className="lg:col-span-7">
                <h2 className="service-section-title">
                  Look over the list below, if this sounds even remotely familiar, you need to call us today.
                </h2>

                <div className="protection-content-panel marital-signs-panel mt-8">
                  <ServiceBulletList items={redFlagSigns} />
                </div>

                <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
                  <p>
                    We treat every marital affair enquiry with complete discretion. Our investigators understand how
                    distressing suspicion can be, and we work quietly and professionally so your case remains
                    confidential from the first call through to delivery of findings.
                  </p>
                  <p>
                    Cooper Investigations can obtain corroborated evidence including photographs, documented meetings,
                    hotel and travel records, and timelines of activity — presented clearly so you have facts to rely
                    on, not speculation.
                  </p>
                  <p>
                    Knowing the truth allows you to make informed decisions and protect your interests. Whether you need
                    clarity for personal peace of mind or evidence to support legal proceedings, our team is here to
                    help you move forward with certainty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ServiceContentSection>

        <section className="border-t border-slate-200 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="service-highlight-banner flex flex-col items-start gap-4 rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-brand-navy to-brand-green p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Speak to us in complete confidence</h3>
                <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
                  If any of these signs sound familiar, contact our team today for a discreet marital affair
                  investigation consultation.
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
