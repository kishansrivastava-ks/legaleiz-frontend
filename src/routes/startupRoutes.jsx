import { Route, Routes } from "react-router-dom";
import PartnershipFirm from "../pages/Startup/PartnershipFirm";
import PrivateLimitedCompany from "../pages/Startup/PrivateLimitedCompany";
import OnePersonCompany from "../pages/Startup/OnePersonCompany";
import Copyright from "../pages/Startup/Copyright";
import RespondToTmObjections from "../pages/Startup/RespondToTmObjections";
import Patent from "../pages/Startup/Patent";
import Trademark from "../pages/Startup/Trademark";
import GSTRegistration from "../pages/Startup/GSTRegistration";
import ExportImportCode from "../pages/Startup/ExportImportCode";
import AnnualGSTReturnFiling from "../pages/Startup/AnnualGSTReturnFiling";
import LimitedLiabilityPartnership from "../pages/Startup/LimitedLiabilityPartnership";

// Company Formation Routes Component
export const CompanyFormationRoutes = () => (
  <Routes>
    <Route path="partnership-firm" element={<PartnershipFirm />} />
    <Route path="private-limited-company" element={<PrivateLimitedCompany />} />
    <Route path="one-person-company" element={<OnePersonCompany />} />
    <Route
      path="limited-liability-partnership"
      element={<LimitedLiabilityPartnership />}
    />
  </Routes>
);

// Intellectual Property Routes Component
export const IntellectualPropertyRoutes = () => (
  <Routes>
    <Route path="copyright" element={<Copyright />} />
    <Route
      path="respond-to-tm-objections"
      element={<RespondToTmObjections />}
    />
    <Route path="patent" element={<Patent />} />
    <Route path="trademark" element={<Trademark />} />
  </Routes>
);

// Registrations and Licenses Routes Component
export const RegistrationsAndLicensesRoutes = () => (
  <Routes>
    <Route path="gst-registration" element={<GSTRegistration />} />
    <Route path="export-import-code" element={<ExportImportCode />} />
    <Route
      path="annual-gst-return-filing"
      element={<AnnualGSTReturnFiling />}
    />
  </Routes>
);
