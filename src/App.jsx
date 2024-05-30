import React from "react";
import Startup from "./pages/Startup/Startup";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import PartnershipFirm from "./pages/Startup/PartnershipFirm";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
