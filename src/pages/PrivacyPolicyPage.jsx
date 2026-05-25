import { PageShell } from '../components/SiteChrome.jsx'
import { SITE_EMAIL, SITE_EMAIL_HREF } from '../siteConfig.js'
import { ConsultationCta, ServiceContentSection, ServicePageHero } from '../components/ServicePageLayout.jsx'

function PolicySection({ title, children }) {
  return (
    <section className="policy-section">
      <h2 className="service-section-title">{title}</h2>
      <div className="policy-section-body">{children}</div>
    </section>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <ServicePageHero title="Online Privacy Policy" breadcrumb="Online Privacy Policy" category="Legal" />

      <main id="main">
        <ServiceContentSection>
          <div className="policy-page mx-auto max-w-3xl px-4 md:px-6">
            <p className="text-lg leading-relaxed text-slate-600">
              Your privacy is important to us. This notice explains our online information practices and the choices you
              can make about the way your information is used at our site.
            </p>

            <PolicySection title="The Information We Collect">
              <p>
                We do not collect personally identifiable information about you – such as your name, address, telephone
                number, fax number, e-mail address, etc. – unless you choose to fill out a &quot;Contact Us&quot; form,
                found on our site or you choose to provide this information to find out more about our services. We may
                automatically collect certain non-personally identifiable information when you visit our site – such as
                the type of browser you are using, the type of operating system you are using, and the domain name of your
                Internet Service Provider.
              </p>
            </PolicySection>

            <PolicySection title="How We Normally Use Information About You">
              <p>
                We use non-personally identifiable information to analyse site usage (such as aggregated information on
                the pages visited by our users), which allows us to improve the design and content of our site. In the
                ordinary course, we use personally identifiable information you provide solely to respond to your inquiry.
                Any data gathered will be shared, if appropriate, with subsidiary companies. Personal Information which
                users in the European Union provide to us may be transferred to other countries, the data protection laws
                of which may differ from those of the European Union, and you expressly agree to such transfer. We will not
                contact you about other matters, unless you specifically request it, nor will we share, rent, or sell your
                personally identifiable information with third parties. However, it is possible, though unlikely, that we
                might be forced to disclose personally identifiable information in response to legal process or when we
                believe in good faith that the law requires it, for example, in response to a court order, or properly
                formatted request under the Data Protection Act (1988). Also, we cannot guarantee the privacy of personal
                information you transmit over the web or that may be collectable in transit by others, including
                contractors who provide services to us.
              </p>
            </PolicySection>

            <PolicySection title="Collection of Information by Third-Party Sites and Sponsors">
              <p>
                Our site may contain links to other sites whose information practices may be different than ours.
                Visitors should consult the other sites&apos; privacy notices as we have no control over information that
                is submitted to, or collected by, these third parties.
              </p>
            </PolicySection>

            <PolicySection title="Cookies">
              <p>
                A cookie is a text-only string of information that a website transfers to the cookie file of the browser
                on your computer&apos;s hard disk so that the website can remember who you are. A cookie will typically
                contain the name of the domain from which the cookie has come, the &quot;lifetime&quot; of the cookie, and
                a value, usually a randomly generated unique number. When you visit our website we send you a cookie.
                Cookies may be used in the following ways: To enable the personalisation features on our website (which
                give you the ability to recall recently viewed pages and see information which you have input on line). To
                compile anonymous, aggregated statistics that allow us to understand how users use our site and to help us
                improve the structure of our website. We cannot identify you personally in this way. Two types of cookies
                may be used on this website, session cookies, which are temporary cookies that remain in the cookie file of
                your browser until you leave the site, and persistent cookies, which remain in the cookie file of your
                browser for us to understand how users use our site and to help us improve the structure of our website. We
                cannot identify you personally in this way.
              </p>
            </PolicySection>

            <PolicySection title="Disabling/Enabling Cookies">
              <p>
                You have the ability to accept or decline cookies by modifying the settings in your browser. However, you
                may not be able to use all the interactive features of our site if cookies are disabled.
              </p>
            </PolicySection>

            <PolicySection title="Our Commitment to Security">
              <p>
                We employ security measures to prevent unauthorised access to information that we collect online.
                However, we cannot guarantee the security of your personal information.
              </p>
            </PolicySection>

            <PolicySection title="How to Contact Us">
              <p>
                If you have any questions or concerns about the privacy policy for Cooper Investigations or its
                implementation, you may contact us at{' '}
                <a href={SITE_EMAIL_HREF} className="font-medium text-brand-teal hover:underline">
                  {SITE_EMAIL}
                </a>
                . If at any time you decide that we should no longer hold any of your personal data, or wish to change the
                use to which any such data can be put, please let us know by emailing us at this address.
              </p>
            </PolicySection>

            <PolicySection title="Revisions to our Privacy Policy">
              <p>
                We reserve the right to revise this policy or any part of it from time to time. Please review the policy
                periodically for changes.
              </p>
            </PolicySection>
          </div>
        </ServiceContentSection>

        <ConsultationCta />
      </main>
    </PageShell>
  )
}
