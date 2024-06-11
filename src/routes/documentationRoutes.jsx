import { Route, Routes } from "react-router-dom";
import NonDisclosureAgreement from "../pages/Documentation/NonDisclosureAgreement";

export const BusinessContractsRoutes = () => (
  <Routes>
    <Route
      path="non-disclosure-agreement-nda"
      element={<NonDisclosureAgreement />}
    />
  </Routes>
);
