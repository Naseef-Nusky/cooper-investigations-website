import { Link } from 'react-router-dom'
import { PageShell } from '../components/SiteChrome.jsx'
import {
  ConsultationCta,
  ServiceBulletList,
  ServiceContentSection,
  ServiceImageCard,
  ServicePageHero,
  serviceSideColsLg,
  serviceSplitCols,
} from '../components/ServicePageLayout.jsx'

const redFlagSigns = [
  { id: 'computer', text: 'Excessive or discreet use of the computer' },
  { id: 'overtime', text: 'Overtime hours or holdovers with work' },
  { id: 'hiding', text: 'Hiding of phone, credit card, or bank accounts histories' },
  { id: 'arguing', text: 'Excessive arguing of facts related to time' },
  { id: 'defensive', text: 'Blaming, defensive behaviour' },
  { id: 'projection', text: 'Negative projections behaviour – accusing you of an affair' },
  { id: 'sexual', text: 'Lack of sexual interest or abnormal renewed sexual interest' },
  { id: 'phones', text: 'Abnormal call activity at the home or cell phones – Hang ups and long tones' },
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
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-2 md:items-stretch md:gap-16 md:px-6">
            <h2 className={`service-section-title ${serviceSplitCols.topic}`}>Marital Affair Investigation</h2>
            <div className={serviceSplitCols.image}>
              <ServiceImageCard
                src="/Marital-Affair-Investigation.jpg"
                alt="Couple sitting together on a bench"
              />
            </div>
            <div className={`${serviceSplitCols.body} mt-6 space-y-4 md:mt-0`}>
              <blockquote className="border-l-4 border-brand-teal pl-5 text-base italic leading-relaxed text-slate-700 md:text-lg">
                Suspecting your mate of having an affair can be a very emotionally overwhelming experience. To be sure
                of anything you need facts. We will investigate the suspicious activity, helping you attain the truth you
                need to make important decisions in your life.
              </blockquote>
              <p className="mt-4 leading-relaxed text-slate-600">
                Feelings of disappointment, anger, uncertainty, betrayal and confusion can cloud rational thinking.
                There is no reason to live a moment longer wondering and in pain. There is nothing worse than the feeling
                of suspicion of a loved one, and until you know for sure, such thoughts could take a serious toll on
                your own well being as well as the well being of your relationship. If you are facing having to deal
                with infidelity, we can facilitate an in-depth, discreet investigation to find out for certain. With
                knowing the truth, comes peace of mind and in situations like these, certainty is priceless.
              </p>
            </div>
          </div>
        </ServiceContentSection>

        <ServiceContentSection variant="muted">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14">
              <h2 className={`service-section-title ${serviceSideColsLg.topic}`}>
                Look over the list below, if this sounds even remotely familiar, you need to call us today.
              </h2>
              <div className={serviceSideColsLg.image}>
                <div className="lg:sticky lg:top-28">
                  <ServiceImageCard
                    src="/phone-chat-1.jpg"
                    alt="Person reviewing information on a smartphone outdoors"
                  />
                </div>
              </div>
              <div className={`${serviceSideColsLg.body} mt-6 md:mt-0`}>
                <div className="protection-content-panel marital-signs-panel mt-8 md:mt-8">
                  <ServiceBulletList items={redFlagSigns} columns={1} />
                </div>

                <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
                  <p>
                    We understand completely that discretion is paramount in these investigations. With us you are 100%
                    assured and guaranteed complete confidentiality. We can, in most circumstances, also complete a
                    background investigation and profile of the &quot;Unknown Subjects&quot;. If desired we have the
                    ability to provide you with a complete report on the other person, pictures included.
                  </p>
                  <p>
                    Usually, there are no direct evidences against adultery and it has to be proven with the help of
                    circumstantial proofs such as photographs of the spouse with a third person at secluded place where
                    they may get intimate or at places like hotels where they may get an opportunity for physical
                    relationship. Since, it is difficult to have an eyewitness to prove an illicit relationship; it can
                    be proved indirectly by showing evidences such as hotel bills or travel records. Also, their public
                    display of affection or their letters, SMS&apos;s etc. can also be used as evidence against the
                    offending party.
                  </p>
                  <p>
                    All evidence is collected and provided in a strict, factual and specific manner. Extramarital
                    affairs often lead to divorce; we do not interfere; we are here to help. We can assist in items from
                    the discovery process to the healing process of recovering from infidelity. We believe infidelity is
                    a very serious matter and should be treated accordingly.
                  </p>
                  <p>
                    As difficult as it may be to come to terms with, you are going to need to get the facts and protect
                    your interests and own well-being. Coping with infidelity is not easy, but living with it is worse.
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
