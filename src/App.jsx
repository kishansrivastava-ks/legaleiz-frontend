import React from "react";
import Startup from "./pages/Startup/Startup";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";

import LegalConsultation from "./pages/TalkToLawyer/LegalConsultation";

import StartupLayout from "./pages/Startup/StartupLayout";

import {
  CompanyFormationRoutes,
  IntellectualPropertyRoutes,
  RegistrationsAndLicensesRoutes,
} from "./routes/startupRoutes";

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
          <Route path="/startup" element={<StartupLayout />}>
            <Route path="" element={<Startup />} />
            <Route
              path="company-formation/*"
              element={<CompanyFormationRoutes />}
            />
            <Route
              path="intellectual-property/*"
              element={<IntellectualPropertyRoutes />}
            />
            <Route
              path="registrations-and-licenses/*"
              element={<RegistrationsAndLicensesRoutes />}
            />
          </Route>
          <Route path="/legal-consultation" element={<LegalConsultation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <Route
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
          <Route
            path="/startup/registrations-and-licenses/gst-registration"
            element={<GSTRegistration />}
          />
          <Route
            path="/startup/registrations-and-licenses/export-import-code"
            element={<ExportImportCode />}
          />
          <Route
            path="/startup/registrations-and-licenses/annual-gst-return-filing"
            element={<AnnualGSTReturnFiling />}
          /> */
}
