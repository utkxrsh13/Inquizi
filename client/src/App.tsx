import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Documentation from './components/Documentation';
import APIReference from './components/APIReference';
import ContactSupport from './components/ContactSupport';
import Careers from './components/Careers';
import PressKit from './components/PressKit';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/api-reference" element={<APIReference />} />
          <Route path="/contact-support" element={<ContactSupport />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press-kit" element={<PressKit />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
