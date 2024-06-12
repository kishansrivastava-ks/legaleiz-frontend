import React from "react";
import Startup from "./pages/Startup/Startup";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";

import StartupLayout from "./pages/Startup/StartupLayout";

// DOCUMENTATION ROUTES
import {
  BusinessContractsRoutes,
  HrPoliciesRoutes,
  NoticesRoutes,
  PersonalAndFamilyRoutes,
  RealEstateRoutes,
} from "./routes/documentationRoutes.jsx";

// STARTUP ROUTES
import {
  CompanyFormationRoutes,
  IntellectualPropertyRoutes,
  RegistrationsAndLicensesRoutes,
} from "./routes/startupRoutes";

import LegalConsultation from "./pages/TalkToLawyer/LegalConsultation";
import DivorceConsultation from "./pages/TalkToLawyer/DivorceConsultation.jsx";
import PropertyLegalConsultation from "./pages/TalkToLawyer/PropertyLegalConsultation.jsx";
import BusinessConsultation from "./pages/TalkToLawyer/BusinessConsultation.jsx";
import ConsultLawyer from "./pages/TalkToLawyer/ConsultLawyer.jsx";
import DocumentationLayout from "./pages/Documentation/DocumentationLayout.jsx";

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
          <Route
            path="/divorce-consultation"
            element={<DivorceConsultation />}
          />
          <Route
            path="/property-consultation"
            element={<PropertyLegalConsultation />}
          />
          <Route
            path="/business-consultation"
            element={<BusinessConsultation />}
          />
          <Route
            path="/business-consultation/consult"
            element={<ConsultLawyer />}
          />
          <Route
            path="/legal-consultation/consult"
            element={<ConsultLawyer />}
          />
          <Route path="/documentation" element={<DocumentationLayout />}>
            <Route
              path="business-contracts/*"
              element={<BusinessContractsRoutes />}
            />
            <Route
              path="personal-and-family/*"
              element={<PersonalAndFamilyRoutes />}
            />
            <Route path="real-estate/*" element={<RealEstateRoutes />} />
            <Route path="notices/*" element={<NoticesRoutes />} />
            <Route path="hr-policies/*" element={<HrPoliciesRoutes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
