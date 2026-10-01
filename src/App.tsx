import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-area">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;