import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';

// Product Pages
import MobilePhones from './pages/products/MobilePhones';
import TabletComputers from './pages/products/TabletComputers';
import Laptops from './pages/products/Laptops';
import IoTDevices from './pages/products/IoTDevices';
import SmartAppliances from './pages/products/SmartAppliances';

// Service Pages
import GlobalImport from './pages/services/GlobalImport';
import ExportSolutions from './pages/services/ExportSolutions';
import SupplyChain from './pages/services/SupplyChain';
import QualityAssurance from './pages/services/QualityAssurance';

// Legal Pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CookiePolicy from './pages/legal/CookiePolicy';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Product Routes */}
          <Route path="/products/mobile-phones" element={<MobilePhones />} />
          <Route path="/products/tablet-computers" element={<TabletComputers />} />
          <Route path="/products/laptops" element={<Laptops />} />
          <Route path="/products/iot-devices" element={<IoTDevices />} />
          <Route path="/products/smart-appliances" element={<SmartAppliances />} />
          
          {/* Service Routes */}
          <Route path="/services/global-import" element={<GlobalImport />} />
          <Route path="/services/export-solutions" element={<ExportSolutions />} />
          <Route path="/services/supply-chain" element={<SupplyChain />} />
          <Route path="/services/quality-assurance" element={<QualityAssurance />} />
          
          {/* Legal Routes */}
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
