import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import AssetTrackingPage from './pages/AssetTrackingPage.jsx'
import CloseProtectionPage from './pages/CloseProtectionPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import PersonalInvestigationPage from './pages/PersonalInvestigationPage.jsx'
import MaritalAffairPage from './pages/MaritalAffairPage.jsx'
import CorporateInvestigationsPage from './pages/CorporateInvestigationsPage.jsx'
import InternationalInvestigationPage from './pages/InternationalInvestigationPage.jsx'
import SurveillanceServicesPage from './pages/SurveillanceServicesPage.jsx'
import CyberSecurityPage from './pages/CyberSecurityPage.jsx'
import CorporateDataRecoveryPage from './pages/CorporateDataRecoveryPage.jsx'
import ForensicAccountingPage from './pages/ForensicAccountingPage.jsx'
import EdisclosureServicesPage from './pages/EdisclosureServicesPage.jsx'
import CreditCheckingServicesPage from './pages/CreditCheckingServicesPage.jsx'
import CorporateIncidentResponsePage from './pages/CorporateIncidentResponsePage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/asset-and-vehicle-tracking" element={<AssetTrackingPage />} />
        <Route path="/services/personal-investigation" element={<PersonalInvestigationPage />} />
        <Route path="/services/marital-affair-investigation" element={<MaritalAffairPage />} />
        <Route path="/services/corporate-investigations" element={<CorporateInvestigationsPage />} />
        <Route path="/services/international-investigation" element={<InternationalInvestigationPage />} />
        <Route path="/services/surveillance" element={<SurveillanceServicesPage />} />
        <Route path="/services/close-protection" element={<CloseProtectionPage />} />
        <Route path="/cyber-security" element={<CyberSecurityPage />} />
        <Route path="/corporate-data-recovery" element={<CorporateDataRecoveryPage />} />
        <Route path="/forensic-accounting" element={<ForensicAccountingPage />} />
        <Route path="/edisclosure-services" element={<EdisclosureServicesPage />} />
        <Route path="/credit-checking-services" element={<CreditCheckingServicesPage />} />
        <Route path="/corporate-incident-response" element={<CorporateIncidentResponsePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
