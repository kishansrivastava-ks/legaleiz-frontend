import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
