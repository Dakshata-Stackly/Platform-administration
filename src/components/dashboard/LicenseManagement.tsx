import {
  Search,
  RefreshCw,
  Download,
  Plus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  KeyRound,
  CheckCircle2,
  TriangleAlert,
  Ban,
  RotateCcw,
  PauseCircle,
  PlayCircle,
} from "lucide-react";

const licenses = [
  {
    key: "LIC-4421-MNPR",
    plan: "Standard",
    seats: "50 Seats",
    type: "123 Inc",
    expiry: "Nov 02, 2024",
    status: "Active",
  },
  {
    key: "LIC-4421-MNPR",
    plan: "Standard",
    seats: "50 Seats",
    type: "123 Inc",
    expiry: "Nov 02, 2024",
    status: "Expiring",
  },
  {
    key: "LIC-4421-MNPR",
    plan: "Standard",
    seats: "50 Seats",
    type: "123 Inc",
    expiry: "Nov 02, 2024",
    status: "Expiring",
  },
  {
    key: "LIC-4421-MNPR",
    plan: "Standard",
    seats: "50 Seats",
    type: "123 Inc",
    expiry: "Nov 02, 2024",
    status: "Rejected",
  },
];

function LicenseManagement() {
  return (
    <div className="license-page">
      <div className="license-breadcrumb">
        <span>Platform Administration</span>
        <span>/</span>
        <strong>License Management</strong>
      </div>

      <div className="license-header">
        <div>
          <h1>License Management</h1>
          <p>Manage platform licenses across organizations and tenants</p>
        </div>

        <div className="license-header-actions">
          <button className="license-outline-button">
            <RefreshCw size={14} />
            Refresh
          </button>

          <button className="license-outline-button">
            <Download size={14} />
            Export
          </button>

          <button className="license-primary-button">
            <Plus size={16} />
            Create License
          </button>
        </div>
      </div>

      <div className="license-stat-grid">
        <div className="license-stat-card">
          <div className="license-stat-title">
            <span>Total Licenses</span>
            <span className="license-stat-icon blue">
              <KeyRound size={15} />
            </span>
          </div>

          <h2>2,458</h2>

          <div className="license-stat-note green">
            ↑ 12% <span>vs last month</span>
          </div>
        </div>

        <div className="license-stat-card">
          <div className="license-stat-title">
            <span>Active Licenses</span>
            <span className="license-stat-icon green">
              <CheckCircle2 size={15} />
            </span>
          </div>

          <h2>2,104</h2>

          <div className="license-stat-note">
            85.6% utilization rate
          </div>
        </div>

        <div className="license-stat-card">
          <div className="license-stat-title">
            <span>Expired Licenses</span>
            <span className="license-stat-icon yellow">
              <TriangleAlert size={15} />
            </span>
          </div>

          <h2>142</h2>

          <div className="license-stat-note">
            Within next 30 days
          </div>
        </div>

        <div className="license-stat-card">
          <div className="license-stat-title">
            <span>Suspended Licenses</span>
            <span className="license-stat-icon red">
              <Ban size={15} />
            </span>
          </div>

          <h2>36</h2>

          <div className="license-stat-note">
            Requires admin review
          </div>
        </div>
      </div>

      <h2 className="license-list-title">License List</h2>

      <div className="license-list-card">
        <div className="license-filter-row">
          <div className="license-search-box">
            <Search size={17} />
            <input placeholder="Search" />
          </div>

          <button className="license-select">
            Organization
            <ChevronDown size={15} />
          </button>

          <button className="license-select">
            License Type
            <ChevronDown size={15} />
          </button>

          <button className="license-select">
            Status
            <ChevronDown size={15} />
          </button>
        </div>

        <div className="license-table-wrapper">
          <table className="license-table">
            <thead>
              <tr>
                <th>LICENSE KEY</th>
                <th>ORGANIZATION PLAN</th>
                <th>LICENSE TYPE</th>
                <th>EXPIRY DATE</th>
                <th>LICENSE STATUS</th>
              </tr>
            </thead>

            <tbody>
              {licenses.map((license, index) => (
                <tr key={index}>
                  <td>
                    <div className="license-key-cell">
                      <input type="checkbox" />
                      <span>{license.key}</span>
                    </div>
                  </td>

                  <td>
                    <div className="license-plan-cell">
                      <strong>{license.plan}</strong>
                      <small>{license.seats}</small>
                    </div>
                  </td>

                  <td>{license.type}</td>

                  <td>{license.expiry}</td>

                  <td>
                    <span
                      className={`license-status-badge ${
                        license.status === "Active"
                          ? "active"
                          : license.status === "Expiring"
                          ? "expiring"
                          : "rejected"
                      }`}
                    >
                      <span></span>
                      {license.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="license-bottom-row">
        <div className="license-bottom-actions">
          <button>
            <RotateCcw size={15} />
            Renew
          </button>

          <button>
            <PauseCircle size={15} />
            Suspend
          </button>

          <button>
            <PlayCircle size={15} />
            Activate
          </button>
        </div>

        <div className="license-pagination-area">
          <span>
            Showing 1 to 5 of 2,458 entries
          </span>

          <div className="license-pagination">
            <button className="license-page-arrow">
              <ChevronLeft size={15} />
            </button>

            <button className="license-page-number active">1</button>
            <button className="license-page-number">2</button>
            <button className="license-page-number">3</button>

            <button className="license-page-arrow">
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LicenseManagement;