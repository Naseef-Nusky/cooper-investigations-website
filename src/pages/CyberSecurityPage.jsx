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

const mobileRecoverable = [
  'SMS | IM Chat | WhatsApp | Viber | Skype | Wechat | IRC | Deleted',
  'Call history | Incoming | Outgoing | Missed | Deleted',
  'EMAILs | Incoming | Outgoing | Drafts | Deleted',
  'GPS locations | Waypoints | GEO tagging of pictures',
  'Photos | Sent | Received | Deleted',
  'Social Network logs | Activity Time | GEO Login | Deleted',
  'Internet History | History | Entered Keywords | Searches | Deleted | Cookies',
  'Wifi Data | SSID | MAC | I.P',
  'Bluetooth | Paired devices | Timestamp',
]

const droneRecoverable = [
  { id: 'serial', text: 'Serial number of the drone aircraft and some internal components such as MAC, IMEI, & IMSI' },
  { id: 'firmware', text: 'Version numbers for firmware' },
  {
    id: 'metadata',
    text: 'Metadata from operations such as launching, waypoint logs, GPS available or unavailable during flight.',
  },
  {
    id: 'geo',
    text: 'Geo location information for critical locations – launching, landing, and home or return location',
  },
  { id: 'flight', text: 'Full flight path information' },
  { id: 'wifi', text: 'Wifi Data | SSID | MAC | I.P' },
  { id: 'bluetooth', text: 'Bluetooth | Paired devices | Timestamp' },
]

function ForensicsSplit({ title, image, alt, imageFirst = false, variant = 'default', children }) {
  const imageCol = (
    <div className={imageFirst ? 'lg:sticky lg:top-28' : ''}>
      <ServiceImageCard src={image} alt={alt} />
    </div>
  )
  const textCol = (
    <div>
      {title ? <h2 className="service-section-title">{title}</h2> : null}
      <div className={title ? 'mt-6 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base' : 'space-y-4 text-sm leading-relaxed text-slate-600 md:text-base'}>
        {children}
      </div>
    </div>
  )

  return (
    <ServiceContentSection variant={variant}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {imageFirst ? (
            <>
              <div className="lg:col-span-5">{imageCol}</div>
              <div className="lg:col-span-7">{textCol}</div>
            </>
          ) : (
            <>
              <div className="lg:col-span-7">{textCol}</div>
              <div className="lg:col-span-5">{imageCol}</div>
            </>
          )}
        </div>
      </div>
    </ServiceContentSection>
  )
}

export default function CyberSecurityPage() {
  return (
    <PageShell>
      <ServicePageHero category="Digital Forensics" title="Cyber Security" breadcrumb="Cyber Security" />

      <main id="main">
        <ForensicsSplit
          title="Digital Forensics"
          image="/Digital-forensics-investigations.jpg"
          alt="Digital forensics investigation workspace"
        >
          <p>
            Digital Forensics is a branch of forensic science encompassing the recovery and investigation of material
            found in digital devices, often in relation to computer or cyber crime. The term digital forensics was
            originally used as a synonym for computer forensics but has expanded to cover investigation of all devices
            capable of storing digital data.
          </p>
          <p>
            Digital forensics investigations have a variety of applications. The most common is to support or refute a
            hypothesis before criminal or civil courts.
          </p>
          <p>
            Criminal cases involve the alleged breaking of laws that are defined by legislation and that are enforced by
            the police and prosecuted by the state, such as murder, theft and assault against the person. Civil cases on
            the other hand deal with protecting the rights and property of individuals (often associated with family
            disputes) but may also be concerned with contractual disputes between commercial entities where a form of
            digital forensics referred to as electronic discovery (ediscovery) may be involved.
          </p>
        </ForensicsSplit>

        <ForensicsSplit
          imageFirst
          variant="muted"
          image="/experts-in-cyber-security-UK.jpg"
          alt="Cyber security experts in the UK"
        >
          <p>
            Cooper Investigations team has a combined 40 years of expertise in Digital Forensics &amp; Security. Our
            team has advanced skills in Data Recovery such as Computer Forensics, Mobile Phone Forensics, eDiscovery,
            Internet Monitoring, penetration testing, IR Team and Red teams. Our headquartered in London provides
            extensive expertise in Digital Forensics, Cyber Security and Cyber Crime, such experience is gained by global
            investigation on real-life cyber attacks.
          </p>
          <p>
            We conduct research for OEMs and government agencies. Cooper Investigations offices are equipped with state
            of the art forensic technology and workshops for research. Our partners have offices in major cities across
            the world, enabling us to offer our services globally.
          </p>
        </ForensicsSplit>

        <ForensicsSplit
          title="Mobile Phone Forensic Investigation"
          image="/Mobile-Phone-Forensic-Investigation.jpg"
          alt="Mobile phone forensic investigation"
        >
          <p>
            Cooper Investigations utilizes global leading technology, Cellebrite Technology, Cellebrite&apos;s forensic expert
            technology allows us to carry out forensic acquisition of data from the supported listed devices.
          </p>
          <p className="font-semibold text-brand-navy">What Data is Recoverable?</p>
          <ServiceFeatureGrid features={mobileRecoverable} />
        </ForensicsSplit>

        <ForensicsSplit
          imageFirst
          variant="muted"
          title="Forensic Examination of Computers"
          image="/data-protection.jpg"
          alt="Computer forensic examination and data analysis"
        >
          <p>
            Computer forensics is a branch of digital forensic science pertaining to evidence found in computers and
            digital storage media. The goal of computer forensics is to examine digital media in a forensically sound
            manner with the aim of identifying, preserving, recovering, analyzing and presenting facts and opinions
            about the digital information.
          </p>
          <p>
            Although it is most often associated with the investigation of a wide variety of computer crime, computer
            forensics may also be used in civil proceedings. The discipline involves similar techniques and principles to
            data recovery, but with additional guidelines and practices designed to create a legal audit trail.
          </p>
          <p>
            Cooper Investigations computer forensics experts investigate, analyse and recover forensic data from
            computers, portable devices and hard disk drives. We ensure that no digital evidence is overlooked and assist
            at any stage of an investigation, regardless of the size or location of data sources. Claims of leaks, fraud,
            cyber espionage, financial tampering, computer crime, employee misconduct, and other illegal or wrongdoing
            actions require corporations, law firms, and government agencies to deploy digital forensic methods to piece
            together facts that lead to the truth.
          </p>
        </ForensicsSplit>

        <ForensicsSplit
          title="Email Forensics"
          image="/Email-Fraud-Investigation-1.jpg"
          alt="Email fraud and forensics investigation"
        >
          <p>
            Cooper Investigations Email Fraud Investigation Team are certified digital forensic experts and fraud
            examiners and can assist to all cases related to Email Scams and Fraud. Cooper Investigations can examine emails
            in PST format or any raw email format to determine the senders IP address, email server used and metadata to
            investigate and undercover fraud.
          </p>
          <p>
            Email fraud investigation is the collection and forensic investigation of evidence into email hacking,
            phishing attacks, tracing and recovery of stolen funds. Email Fraud is the intentional deception made for
            personal gain or to damage another individual through email. Almost as soon as email became widely used, it
            began to be used as a means to defraud people. Email fraud can take the form of a &quot;con game&quot; or scam.
            Investigating email fraud reaches to all aspect of cyber crime from recovery of funds transferred to a
            fraudsters bank account to a forensic examination to determine how fraudsters hacked into email accounts.
          </p>
          <p>
            Email fraud, scams, phishing attacks happens in most cases when cyber criminals find ways to hack into the
            email servers or accounts of small and medium companies, often targeting those with business in Asia
            countries. Cyber criminals gain access to email accounts and search through email accounts looking for
            sensitive information such as outstanding, unpaid invoices or data relating to financial transactions and
            business between supplier, vendor and clients. When cyber criminals identify a sale or a due invoice, the
            fraudsters then send various fictitious emails from the hacked email account or an email address replicated to
            the original purporting to be in charge of the sale or due invoice to be paid, the fraudster is then asking
            for transfers of funds into a nominated bank account, usually giving an excuse that there is a problem at the
            bank and an alternative account needs to be used. It is common that the nominated account is in the same name
            as the company name or with a very slight change such as an extra letter. It is common the bank account to be
            in the same city as the victim or client.
          </p>
        </ForensicsSplit>

        <ForensicsSplit
          imageFirst
          variant="muted"
          title="Email Fraud Investigation"
          image="/Email-Fraud-Investigation-1.jpg"
          alt="Cyber fraud investigation team"
        >
          <p>
            Cooper Investigations Cyber and Fraud Team are certified fraud and forensic examiners and can deploy to assist
            with all cases related to email fraud, email spear phishing attacks, email scams and on-line related fraud.
            Cooper Investigations can deploy forensic examiners to investigate hacking, determine how it took place and
            report the findings, Cooper Investigations ensures that hackers are not active in your network and ensure
            your user accounts policies and rules are configured correctly to prevent further attacks.
          </p>
        </ForensicsSplit>

        <ForensicsSplit
          title="Data theft and leak investigation"
          image="/Data-theft-and-leak-investigation-1.jpg"
          alt="Data theft and leak investigation services"
        >
          <p>
            Cooper Investigations data breach and leak investigation services, range from identifying the source of the
            leak, the digital tracing of the problem, forensic investigation and detailed reporting. We can help you
            protect your brand and re-build trust with the individuals impacted by a breach or data leak. If you suspect
            that your company&apos;s data has been breached or compromised, you immediately face several time-sensitive and
            highly technical questions from enforcement bodies and the individuals impacted by a breach or data leak.
            Cooper Investigations digital investigators, digital forensics teams and legal experts can help companies
            collect evidence to fully understand the scale and the impact of a breach. The evidence discovered can help
            you protect your business and prevent further breaches.
          </p>
        </ForensicsSplit>

        <ForensicsSplit
          imageFirst
          variant="muted"
          title="Drone Forensics"
          image="/Drone-Forensics.jpg"
          alt="Drone forensics data acquisition"
        >
          <p>
            Cooper Investigations expert forensic technology to carry out forensic acquisition of data from the supported
            drones.
          </p>
          <ServiceBulletList items={droneRecoverable} />
        </ForensicsSplit>

        <ForensicsSplit title="WiFi Forensics" image="/cyber-security.jpg" alt="WiFi and cyber security forensics">
          <p>
            Cooper Investigations Cyber Crime Team specialise in wireless network analysis, we offer RF site surveying, WiFi
            network scan and analysis, Secured wireless network installation and Wi-Fi security services for private and
            public Wi-Fi networks.
          </p>
          <p>
            Cooper Investigations developed a probe named &quot;Wi-Fi Signal Analysis&quot; to detect Wi-Fi snooping, payload
            injection, rogue devices and Wi-Fi Spying in seconds, the probe operates on-location and the data is sent to an
            AI based database for analysis which then alerts CSO and CIO&apos;s. The probe has prevented thousands of hacking
            attempts on companies networks and prevented spying on devices installed on networks. We perform Surveys to
            record all Wi-Fi networks on the 2.4GHz and 5GHz spectrum to determine what devices are on your network and if
            any rogue devices are present.
          </p>
          <p>
            Cooper Investigations Wi-Fi experts are certain Wi-Fi and IOT over-the-air attacks will rise in 2023, Cooper
            Investigations team are conducting Wi-Fi audits for business across Europe, the probe audits details such as
            the number of connected devices on a network, Wi-Fi traffic, approved Wi-Fi devices, security flaws,
            unauthorised devices and instant upgrades. The audits have so far discovered out-of-date firmware allowing
            remote control, hijacked routers, modified firmware, many connected un-authorised devices and active
            interception. The probe can be deployed as a fixed install to sites to detect Wi-Fi interference within 900ms.
          </p>
        </ForensicsSplit>

        <ForensicsSplit
          imageFirst
          variant="muted"
          title="WiFi Network Monitoring"
          image="/cyber-security.jpg"
          alt="WiFi network monitoring and security audit"
        >
          <p>
            Are you concerned about information loss or business secrets being targeted over WiFi? A small amount of
            information could be worth millions to the right people or could damage important negotiations. Loss of
            confidential information such as theft of data, hacking incidents, leaks and executive schedules could even
            put lives in danger.
          </p>
          <p>
            WiFi networks are a common focus point for hackers. To ensure all is in order, our forensic team will conduct a
            forensic audit on your Wi-Fi network to detect any rogue or unauthorised devices. We will detect all connected
            devices on your network or Wi-Fi, Detection and Intrusion, Malware or unauthorised devices monitoring data
            traffic. Detection of infected PC&apos;s, phones, tablets and digital devices.
          </p>
        </ForensicsSplit>

        <section className="border-t border-slate-200 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="service-highlight-banner flex flex-col items-start gap-4 rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-brand-navy to-brand-green p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Digital forensics &amp; cyber security</h3>
                <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
                  Speak to our team in complete confidence about mobile, computer, email, and network forensics.
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
