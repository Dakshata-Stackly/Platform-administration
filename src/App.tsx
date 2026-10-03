import { useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Dashboard from "./components/dashboard/Dashboard";
import GlobalDashboard from "./components/dashboard/GlobalDashboard";

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

        {currentPage === "Global Dashboard" ? (
          <GlobalDashboard />
        ) : (
          <Dashboard setCurrentPage={setCurrentPage} />
        )}
      </div>
    </div>
  );
}

export default App;