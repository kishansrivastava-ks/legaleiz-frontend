import React from "react";
import Startup from "./pages/Startup/Startup";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import { Toaster } from "react-hot-toast";

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

import PartnerWithUs from "./pages/PartnerWithUs/PartnerWithUs.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import SignUpPage from "./pages/Login/SignUpPage.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import Home from "./components/Dashboard/Home/Home.jsx";
import MyServices from "./components/Dashboard/MyServices/MyServices.jsx";
import Compliances from "./components/Dashboard/Compliances/Compliances.jsx";
import Profile from "./components/Dashboard/Profile/Profile.jsx";
import Ongoing from "./components/Dashboard/MyServices/Ongoing.jsx";
import Renewal from "./components/Dashboard/MyServices/Renewal.jsx";
import Completed from "./components/Dashboard/MyServices/Completed.jsx";
import Closed from "./components/Dashboard/MyServices/Closed.jsx";
import ExploreServices from "./components/Dashboard/Home/ExploreServices.jsx";
import HelpAndSupport from "./components/Dashboard/HelpAndSupport.jsx";
import FAQs from "./components/Dashboard/FAQs.jsx";
import CreateService from "./utils/CreateService.jsx";
import PartnerDashboard from "./pages/Dashboard/PartnerDashboard.jsx";

// PARTNER DASHBOARD COMPONENTS
import MyProjects from "./components/Dashboard/PartnerDashboard/MyProjects.jsx";
import UpdateStatus from "./components/Dashboard/PartnerDashboard/UpdateStatus.jsx";
import MyEarnings from "./components/Dashboard/PartnerDashboard/MyEarnings.jsx";
import MyProfile from "./components/Dashboard/PartnerDashboard/MyProfile.jsx";

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
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<LoginPage />} />

          {/* USER DASHBOARD ROUTES */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="home/explore-services" element={<ExploreServices />} />
            <Route path="my-services" element={<MyServices />}>
              <Route path="" element={<Ongoing />} />
              <Route path="ongoing" element={<Ongoing />} />
              <Route path="renewal" element={<Renewal />} />
              <Route path="completed" element={<Completed />} />
              <Route path="closed" element={<Closed />} />
            </Route>
            <Route path="compliances" element={<Compliances />} />
            <Route path="profile" element={<Profile />} />
            <Route path="help-and-support" element={<HelpAndSupport />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="create-service" element={<CreateService />} />
          </Route>

          {/* PARTNER DASHBOARD ROUTES */}
          <Route path="/dashboard/partner" element={<PartnerDashboard />}>
            <Route path="" element={<MyProjects />} />
            <Route path="my-projects" element={<MyProjects />} />
            <Route path="update-status" element={<UpdateStatus />} />
            <Route path="my-earnings" element={<MyEarnings />} />
            <Route path="my-profile" element={<MyProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}

export default App;
