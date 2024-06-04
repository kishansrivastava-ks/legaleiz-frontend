import React from "react";
import Startup from "./pages/Startup/Startup";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import PartnershipFirm from "./pages/Startup/PartnershipFirm";
import PrivateLimitedCompany from "./pages/Startup/PrivateLimitedCompany.jsx";
import OnePersonCompany from "./pages/Startup/OnePersonCompany.jsx";
import LimitedLiabilityPartnership from "./pages/Startup/LimitedLiabilityPartnership.jsx";
import Copyright from "./pages/Startup/Copyright.jsx";
import RespondToTmObjections from "./pages/Startup/RespondToTmObjections.jsx";
import Patent from "./pages/Startup/Patent.jsx";
import Trademark from "./pages/Startup/Trademark.jsx";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/startup" element={<Startup />} />
          <Route
            path="/startup/company-formation/partnership-firm"
            element={<PartnershipFirm />}
          />
          <Route
            path="/startup/company-formation/private-limited-company"
            element={<PrivateLimitedCompany />}
          />
          <Route
            path="/startup/company-formation/one-person-company"
            element={<OnePersonCompany />}
          />
          <Route
            path="/startup/company-formation/limited-liability-partnership"
            element={<LimitedLiabilityPartnership />}
          />
          <Route
            path="/startup/intellectual-property/copyright"
            element={<Copyright />}
          />
          <Route
            path="/startup/intellectual-property/respond-to-tm-objections"
            element={<RespondToTmObjections />}
          />
          <Route
            path="/startup/intellectual-property/patent"
            element={<Patent />}
          />
          <Route
            path="/startup/intellectual-property/trademark"
            element={<Trademark />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
