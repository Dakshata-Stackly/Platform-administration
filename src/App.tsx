import { useState } from "react";
import "./App.css";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

import Dashboard from "./components/dashboard/Dashboard";
import GlobalDashboard from "./components/dashboard/GlobalDashboard";
import PlatformConfiguration from "./components/dashboard/PlatformConfiguration";
import FeatureManagement from "./components/dashboard/FeatureManagement";
import LicenseManagement from "./components/dashboard/LicenseManagement";
import PlatformBranding from "./components/dashboard/PlatformBranding";

function App() {
  const [currentPage, setCurrentPage] = useState("Platform Administration");

  return (
    <div className="app">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <div className="main-area">
        <Header />

        {currentPage === "Platform Branding" ? (
          <PlatformBranding />
        ) : currentPage === "Global Dashboard" ? (
          <GlobalDashboard />
        ) : currentPage === "Platform Configuration" ? (
          <PlatformConfiguration />
        ) : currentPage === "Feature Management" ? (
          <FeatureManagement />
        ) : currentPage === "License Management" ? (
          <LicenseManagement />
        ) : (
          <Dashboard setCurrentPage={setCurrentPage} />
        )}
      </div>
    </div>
  );
}

export default App;