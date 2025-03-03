import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PuppyCollection from "./pages/PuppyCollection/PuppyCollection";
import PuppyDetailPage from "./pages/PuppyDetail/PuppyDetailPage";
import PuppySummaryPage from "./pages/PuppySummaryPage/PuppySummaryPage";
import PaymentStatus from "./components/PaymentStatus";
import StripeRefresh from "./pages/Stripe Onboarding/StripeRefresh";
import StripeReturn from "./pages/Stripe Onboarding/StripeReturn";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsService from "./pages/PrivacyPolicy/TermsService";
import PaymentSuccess from "./pages/PuppySummaryPage/PaymentSuccess";
import ContactUs from "./pages/ContactPage/ContactUs";
import AboutUs from "./pages/AboutPage/AboutUs";
import HealthGurantee from "./pages/HealthGuranteePage/HealthGurantee";
import FAQ from "./components/FAQ";
import RefundPolicy from "./pages/PrivacyPolicy/RefundPolicy";
import ComingSoonPage from "./pages/ComingSoonPage/ComingSoonPage";
import BreedBasedPuppies from "./components/BreedBasedPuppies";
import ScrollToTop from "./components/global/ScrollToTop";

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<PuppyCollection />} />
        <Route path="/puppy/:id" element={<PuppyDetailPage />} />
        <Route path="/checkout/:hashId" element={<PuppySummaryPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/stripe-refresh" element={<StripeRefresh />} />
        <Route path="/stripe-return" element={<StripeReturn />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsService />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/health-gurantee" element={<HealthGurantee />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/*" element={<ComingSoonPage />} />
        <Route path="/breed-based-puppy/:name" element={<BreedBasedPuppies />} />
      </Routes>
    </Router>
  );
}

export default App;
