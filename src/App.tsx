import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchResultsProvider } from "./utils/SearchResultsContext";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import SearchResultsPage from "./components/SearchResults";
import PropertyDetailsPage from "./components/PropertyDetails";
import { PropertyDetailsProvider } from "./utils/PropertyDetailsContext";
import Overview from "./components/FirstTimeBuyer/Overview";
import FinancialPreparation from "./components/FirstTimeBuyer/FinancialPreparation";
import FindRightHome from "./components/FirstTimeBuyer/FindRightHome";
import UnderstandingTheMarket from "./components/FirstTimeBuyer/UnderstandingMarket";
import InspectionAndAppraisal from "./components/FirstTimeBuyer/InspectionAndAppraisal";

function App() {
  return (
    <SearchResultsProvider>
      <PropertyDetailsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/searchresult" element={<SearchResultsPage />} />
            <Route path="/property/:zpid" element={<PropertyDetailsPage />} />
            <Route path="/overview" element={<Overview />} />
            <Route
              path="/home-inspections-and-appraisals"
              element={<InspectionAndAppraisal />}
            />
            <Route
              path="/understanding-the-market"
              element={<UnderstandingTheMarket />}
            />
            <Route path="/finding-the-right-home" element={<FindRightHome />} />
            <Route
              path="/financial-preparation"
              element={<FinancialPreparation />}
            />
          </Routes>
        </BrowserRouter>
      </PropertyDetailsProvider>
    </SearchResultsProvider>
  );
}

export default App;
