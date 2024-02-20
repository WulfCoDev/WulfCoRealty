// App.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchResultsProvider } from "./utils/SearchResultsContext";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import SearchResultsPage from "./components/SearchResults";
import PropertyDetailsPage from "./components/PropertyDetails";
import { PropertyDetailsProvider } from "./utils/PropertyDetailsContext";

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
          </Routes>
        </BrowserRouter>
      </PropertyDetailsProvider>
    </SearchResultsProvider>
  );
}

export default App;
