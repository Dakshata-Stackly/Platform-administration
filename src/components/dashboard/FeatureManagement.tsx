import {
  Search,
  SlidersHorizontal,
  CheckCircle2,
  CircleAlert,
  RefreshCw,
  Download,
  ChevronDown,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    name: "User Management",
    module: "Identity",
    plan: "Enterprise",
    status: "Enabled",
  },
  {
    name: "Workflow Engine",
    module: "Workflow",
    plan: "Enterprise",
    status: "Enabled",
  },
  {
    name: "AI Assistant",
    module: "AI Services",
    plan: "Premium",
    status: "Disabled",
  },
  {
    name: "Reports",
    module: "Analytics",
    plan: "Standard",
    status: "Enabled",
  },
  {
    name: "API Access",
    module: "Integration",
    plan: "Enterprise",
    status: "Enabled",
  },
];

function FeatureManagement() {
  return (
    <div className="feature-page">
      <div className="feature-breadcrumb">
        <span>Platform Administration</span>
        <span>/</span>
        <strong>Feature Management</strong>
      </div>

      <div className="feature-header">
        <div>
          <h1>Feature Management</h1>
          <p>
            Control platform feature availability, configuration, and access
            across the enterprise.
          </p>
        </div>

        <div className="feature-header-actions">
          <button className="outline-button">
            <RefreshCw size={15} />
            Refresh
          </button>

          <button className="primary-button">
            <Download size={15} />
            Export report
          </button>
        </div>
      </div>

      <div className="feature-stat-grid">
        <div className="feature-stat-card">
          <div className="stat-card-top">
            <span>Total Features</span>
            <SlidersHorizontal size={20} />
          </div>

          <h2>65</h2>

          <div className="stat-change positive">
            <span>↑ +4.2%</span>
            <small>this month</small>
          </div>
        </div>

        <div className="feature-stat-card">
          <div className="stat-card-top">
            <span>Enabled</span>
            <CheckCircle2 size={21} />
          </div>

          <h2>52</h2>

          <div className="stat-change positive">
            <span>↑ +3.6%</span>
            <small>this month</small>
          </div>
        </div>

        <div className="feature-stat-card">
          <div className="stat-card-top">
            <span>Disabled</span>
            <CircleAlert size={21} />
          </div>

          <h2>13</h2>

          <div className="stat-change negative">
            <span>↓ -7.1%</span>
            <small>this month</small>
          </div>
        </div>
      </div>

      <div className="feature-table-card">
        <div className="feature-filter-row">
          <div className="feature-search">
            <Search size={20} />
            <input placeholder="Search features..." />
          </div>

          <div className="feature-filters">
            <button className="filter-button">
              All Modules
              <ChevronDown size={16} />
            </button>

            <button className="filter-button">
              All License Plans
              <ChevronDown size={16} />
            </button>

            <button className="filter-button">
              All Status
              <ChevronDown size={16} />
            </button>

            <button className="clear-filter">Clear Filters</button>
          </div>
        </div>

        <div className="feature-table-wrapper">
          <table className="feature-table">
            <thead>
              <tr>
                <th>FEATURE NAME</th>
                <th>MODULE</th>
                <th>LICENSE PLAN</th>
                <th>STATUS</th>
                <th>CONFIGURE</th>
                <th>USAGE</th>
                <th>ACTION</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {features.map((feature) => (
                <tr key={feature.name}>
                  <td className="feature-name">{feature.name}</td>

                  <td>{feature.module}</td>

                  <td>{feature.plan}</td>

                  <td>
                    <span
                      className={`status-badge ${
                        feature.status === "Enabled"
                          ? "status-enabled"
                          : "status-disabled"
                      }`}
                    >
                      <span className="status-dot"></span>
                      {feature.status}
                    </span>
                  </td>

                  <td>
                    <button className="configure-button">
                      <SlidersHorizontal size={13} />
                      Configure
                    </button>
                  </td>

                  <td>
                    <button className="usage-button">View Usage</button>
                  </td>

                  <td>
                    <button
                      className={
                        feature.status === "Enabled"
                          ? "action-disable"
                          : "action-enable"
                      }
                    >
                      {feature.status === "Enabled" ? "Disable" : "Enable"}
                    </button>
                  </td>

                  <td>
                    <button className="more-button">
                      <MoreVertical size={19} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="feature-pagination">
          <span>
            Showing <strong>1-5</strong> of <strong>65</strong> features
          </span>

          <div className="pagination-controls">
            <button className="page-arrow">
              <ChevronLeft size={17} />
            </button>

            <button className="page-number active">1</button>
            <button className="page-number">2</button>
            <button className="page-number">3</button>
            <span className="page-dots">...</span>
            <button className="page-number">13</button>

            <button className="page-arrow">
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureManagement;