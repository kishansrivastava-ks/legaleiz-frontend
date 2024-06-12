import { Route, Routes } from "react-router-dom";

// FOR BUSINESS CONTRACTS OPTIONS
import NonDisclosureAgreement from "../pages/Documentation/BusinessContracts/NonDisclosureAgreement";
import JoinVentureAgreement from "../pages/Documentation/BusinessContracts/JoinVentureAgreement";
import ShareholdersAgreement from "../pages/Documentation/BusinessContracts/ShareholdersAgreement";
import MasterServiceAgreement from "../pages/Documentation/BusinessContracts/MasterServiceAgreement";
import ServiceLegalAgreement from "../pages/Documentation/BusinessContracts/ServiceLegalAgreement";
import FranchiseAgreement from "../pages/Documentation/BusinessContracts/FranchiseAgreement";
import MemorandumOfUnderstanding from "../pages/Documentation/BusinessContracts/MemorandumOfUnderstanding";
import SuccessionCertificate from "../pages/Documentation/BusinessContracts/SuccessionCertificate";
import ConsultancyAgreement from "../pages/Documentation/BusinessContracts/ConsultancyAgreement";
import VendorAgreement from "../pages/Documentation/BusinessContracts/VendorAgreement";
import FoundersAgreement from "../pages/Documentation/BusinessContracts/FoundersAgreement";
import NoncompeteAgreement from "../pages/Documentation/BusinessContracts/NoncompeteAgreement";
import TradeLicense from "../pages/Documentation/BusinessContracts/TradeLicense";
import LegalHeirCertificate from "../pages/Documentation/BusinessContracts/LegalHeirCertificate";
import RelinquishmentDeed from "../pages/Documentation/BusinessContracts/RelinquishmentDeed";
import SharePurchaseAgreement from "../pages/Documentation/BusinessContracts/SharePurchaseAgreement";
import ScopeOfWorkAgreement from "../pages/Documentation/BusinessContracts/ScopeOfWorkAgreement";
import GDPR from "../pages/Documentation/BusinessContracts/GDPR";
import FinanceAgreement from "../pages/Documentation/BusinessContracts/FinanceAgreement";

// FOR PERSONAL AND FAMILY OPTIONS
import WillRegistration from "../pages/Documentation/PersonalAndFamily/WillRegistration";
import ProbateOfWill from "../pages/Documentation/PersonalAndFamily/ProbateOfWill";
import PowerOfAttorneys from "../pages/Documentation/PersonalAndFamily/PowerOfAttorneys";

// FOR REAL ESTATE OPTIONS
import SaleDeed from "../pages/Documentation/RealEstate/SaleDeed";
import RentalAgreement from "../pages/Documentation/RealEstate/RentalAgreement";
import GiftDeed from "../pages/Documentation/RealEstate/GiftDeed";
import RentalTenantNotice from "../pages/Documentation/RealEstate/RentalTenantNotice";

// FOR NOTICES OPTIONS
import LegalNotice from "../pages/Documentation/Notices/LegalNotice";
import ChequeBounceNotice from "../pages/Documentation/Notices/ChequeBounceNotice";
import LegalNoticeForMoneyRecovery from "../pages/Documentation/Notices/LegalNoticeForMoneyRecovery";
import LegalNoticeForRecoveryOfDues from "../pages/Documentation/Notices/LegalNoticeForRecoveryOfDues";
import LegalNoticeUnderConsumerProtectionAct from "../pages/Documentation/Notices/LegalNoticeUnderConsumerProtectionAct";

// FOR HR POLICIES OPTIONS
import ESOP from "../pages/Documentation/HrPolicies/ESOP";
import EmploymentAgreement from "../pages/Documentation/HrPolicies/EmploymentAgreement";
import PayrollMaintenance from "../pages/Documentation/HrPolicies/PayrollMaintenance";

export const BusinessContractsRoutes = () => (
  <Routes>
    <Route
      path="non-disclosure-agreement-nda"
      element={<NonDisclosureAgreement />}
    />
    <Route path="joint-venture-agreement" element={<JoinVentureAgreement />} />
    <Route path="shareholders-agreement" element={<ShareholdersAgreement />} />
    <Route
      path="master-service-agreement"
      element={<MasterServiceAgreement />}
    />
    <Route path="service-legal-agreement" element={<ServiceLegalAgreement />} />
    <Route path="franchise-agreement" element={<FranchiseAgreement />} />
    <Route
      path="memorandum-of-understanding"
      element={<MemorandumOfUnderstanding />}
    />
    <Route path="succession-certificate" element={<SuccessionCertificate />} />
    <Route path="consultancy-agreement" element={<ConsultancyAgreement />} />
    <Route path="vendor-agreement" element={<VendorAgreement />} />
    <Route path="founders-agreement" element={<FoundersAgreement />} />
    <Route path="noncompete-agreement" element={<NoncompeteAgreement />} />
    <Route path="trade-license" element={<TradeLicense />} />
    <Route path="legal-heir-certificate" element={<LegalHeirCertificate />} />
    <Route path="relinquishment-deed" element={<RelinquishmentDeed />} />
    <Route
      path="share-purchase-agreement"
      element={<SharePurchaseAgreement />}
    />
    <Route path="scope-of-work-agreement" element={<ScopeOfWorkAgreement />} />
    <Route path="gdpr" element={<GDPR />} />
    <Route path="finance-agreement" element={<FinanceAgreement />} />
  </Routes>
);

export const PersonalAndFamilyRoutes = () => (
  <Routes>
    <Route path="will-registration" element={<WillRegistration />} />
    <Route path="probate-of-will" element={<ProbateOfWill />} />
    <Route path="power-of-attorneys" element={<PowerOfAttorneys />} />
  </Routes>
);

export const RealEstateRoutes = () => (
  <Routes>
    <Route path="rental-agreement" element={<RentalAgreement />} />
    <Route path="sale-deed" element={<SaleDeed />} />
    <Route path="gift-deed" element={<GiftDeed />} />
    <Route path="rental-tenant-notice" element={<RentalTenantNotice />} />
  </Routes>
);

export const NoticesRoutes = () => (
  <Routes>
    <Route path="legal-notice" element={<LegalNotice />} />
    <Route path="cheque-bounce-notice" element={<ChequeBounceNotice />} />
    <Route
      path="legal-notice-for-money-recovery"
      element={<LegalNoticeForMoneyRecovery />}
    />
    <Route
      path="legal-notice-for-recovery-of-dues"
      element={<LegalNoticeForRecoveryOfDues />}
    />
    <Route
      path="legal-notice-under-consumer-protection-act"
      element={<LegalNoticeUnderConsumerProtectionAct />}
    />
  </Routes>
);

export const HrPoliciesRoutes = () => (
  <Routes>
    <Route path="employment-agreement" element={<EmploymentAgreement />} />
    <Route path="esop" element={<ESOP />} />
    <Route path="payroll-maintenance" element={<PayrollMaintenance />} />
  </Routes>
);
