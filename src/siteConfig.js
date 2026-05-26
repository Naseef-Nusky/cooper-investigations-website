export const SITE_PHONE = '0203 916 5488'
export const SITE_PHONE_HREF = 'tel:+442039165488'
export const SITE_EMAIL = 'info@cooperinvestigations.co.uk'
export const SITE_EMAIL_HREF = 'mailto:info@cooperinvestigations.co.uk'
export const SITE_WEBSITE = 'www.cooperinvestigations.co.uk'
export const SITE_WEBSITE_HREF = 'https://www.cooperinvestigations.co.uk'

export const SITE_ADDRESS = {
  line1: '70 Gracechurch Street',
  line2: 'London, EC3V 0HR',
  country: 'United Kingdom',
}

/** Footer social profiles — update hrefs when live URLs are available */
export const socialLinks = [
  { id: 'facebook', label: 'Facebook', href: '#' },
  { id: 'twitter', label: 'Twitter', href: '#' },
  { id: 'instagram', label: 'Instagram', href: '#' },
  { id: 'pinterest', label: 'Pinterest', href: '#' },
]

export const navLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/#services', label: 'Investigation Services', menu: 'investigation' },
  { to: '/cyber-security', label: 'Digital Forensics', menu: 'forensics' },
  { to: '/services/close-protection', label: 'Security Services' },
  { to: '/contact', label: 'Contact' },
]

export const digitalForensicsServices = [
  { label: 'Cyber Security', to: '/cyber-security' },
  { label: 'Corporate Data Recovery', to: '/corporate-data-recovery' },
  { label: 'Forensic Accounting', to: '/forensic-accounting' },
  { label: 'Edisclosure Services', to: '/edisclosure-services' },
  { label: 'Credit Checking Services', to: '/credit-checking-services' },
  { label: 'Corporate Incident Response', to: '/corporate-incident-response' },
]

/** Hero background image per route (from /public) */
export const routeHeroImages = {
  '/about': '/private-investigation-agency-1.jpg',
  '/contact': '/phone-chat-1.jpg',
  '/privacy-policy': '/data-protection.jpg',
  '/services/personal-investigation': '/Personal-Investigation-Services.png',
  '/services/marital-affair-investigation': '/Marital-Affair-Investigation.jpg',
  '/services/asset-and-vehicle-tracking': '/Asset-and-Vehicle-Tracking.jpg',
  '/services/corporate-investigations': '/Corporate-investigations-services.jpg',
  '/services/international-investigation': '/International-Investigation-Services.jpg',
  '/services/surveillance': '/Covert-surveillance.jpg',
  '/services/close-protection': '/Close-Protection-Services-1.jpg',
  '/cyber-security': '/experts-in-cyber-security-UK.jpg',
  '/corporate-data-recovery': '/Data-Recovery-Expertise-1.jpg',
  '/forensic-accounting': '/Forensic-Accounting.jpg',
  '/edisclosure-services': '/Edisclosure-Services.jpg',
  '/credit-checking-services': '/Employment-background-checks.jpg',
  '/corporate-incident-response': '/Corporate-Incident-Response.jpg',
}

export const investigationServices = [
  { label: 'Personal Investigation Services', to: '/services/personal-investigation' },
  { label: 'Marital Affair Investigation Services', to: '/services/marital-affair-investigation' },
  { label: 'Asset and Vehicle Tracking Services', to: '/services/asset-and-vehicle-tracking' },
  { label: 'Corporate Investigations Services', to: '/services/corporate-investigations' },
  { label: 'International Investigation Services', to: '/services/international-investigation' },
  { label: 'Surveillance Services', to: '/services/surveillance' },
]
