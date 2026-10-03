import {
  Users,
  Settings,
  FileText,
  Activity,
  UserPlus,
  Eye,
  TrendingUp,
  AlertTriangle,
  Info,
  CheckCircle2,
  RefreshCw,
  Download,
} from "lucide-react";

const overviewStats = [
  {
    title: "Total Tenants",
    value: "132",
    change: "↑ 8% this month",
    icon: Users,
  },
  {
    title: "Total Users",
    value: "48,920",
    change: "↑ 13% this month",
    icon: CheckCircle2,
  },
  {
    title: "Active Subscriptions",
    value: "1,233",
    change: "↑ 10% this month",
    icon: Eye,
  },
  {
    title: "Active Sessions",
    value: "789",
    change: "↑ 6% this month",
    icon: TrendingUp,
  },
];

const quickNavigation = [
  {
    title: "Manage Tenants",
    description: "Manage accounts & roles",
    icon: Users,
  },
  {
    title: "Platform Settings",
    description: "Global configuration",
    icon: Settings,
  },
  {
    title: "Generate Report",
    description: "Renewals & seat usage",
    icon: FileText,
  },
  {
    title: "System Monitoring",
    description: "Track admin actions",
    icon: Activity,
  },
];

const activities = [
  {
    title: "New Tenant Created",
    description: "by Admin users",
    time: "10 min ago",
    icon: AlertTriangle,
  },
  {
    title: "License Updated",
    description: "by Admin users.",
    time: "1 hour ago",
    icon: AlertTriangle,
  },
  {
    title: "User Added",
    description: "Superadmin granted access to monitoring module.",
    time: "3 hours ago",
    icon: Info,
  },
  {
    title: "Backup Completed",
    description: "Daily snapshot of primary database cluster successful.",
    time: "Yesterday",
    icon: CheckCircle2,
  },
];

export default function GlobalDashboard() {
  return (
    <main className="global-dashboard">
      <div className="global-page-header">
        <div>
          <div className="breadcrumb">
            Platform Administration <span>/</span> <strong>Global Dashboard</strong>
          </div>

          <h1>Global Dashboard</h1>

          <p>
            Track performance, engagement, and growth across all your social
            platforms in one place.
          </p>
        </div>

        <div className="global-header-actions">
          <button className="global-refresh-button">
            <RefreshCw size={15} />
            Refresh
          </button>

          <button className="export-button">
            <Download size={15} />
            Export report
          </button>
        </div>
      </div>

      <section>
        <div className="global-section-title">PLATFORM OVERVIEW</div>

        <div className="global-stats-grid">
          {overviewStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div className="global-stat-card" key={stat.title}>
                <div className="global-stat-top">
                  <span>{stat.title}</span>

                  <div className="global-stat-icon">
                    <Icon size={18} />
                  </div>
                </div>

                <h2>{stat.value}</h2>

                <p>{stat.change}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="global-dashboard-section">
        <div className="global-section-title">QUICK NAVIGATION</div>

        <div className="quick-navigation-grid">
          {quickNavigation.map((item) => {
            const Icon = item.icon;

            return (
              <div className="quick-navigation-card" key={item.title}>
                <div className="quick-navigation-icon">
                  <Icon size={20} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="global-middle-grid">
        <div className="health-card">
          <div className="global-card-header">
            <h2>Platform Health Status</h2>

            <select defaultValue="7">
              <option value="7">Last 7 Days</option>
              <option value="30">Last 30 Days</option>
              <option value="90">Last 90 Days</option>
            </select>
          </div>

          <div className="health-item">
            <div className="health-label">
              <span>CPU Usage</span>
              <strong>67%</strong>
            </div>

            <div className="health-progress">
              <span style={{ width: "67%" }} />
            </div>
          </div>

          <div className="health-item">
            <div className="health-label">
              <span>Memory Utilization</span>
              <strong>54%</strong>
            </div>

            <div className="health-progress">
              <span style={{ width: "54%" }} />
            </div>
          </div>

          <div className="health-item">
            <div className="health-label">
              <span>Disk I/O</span>
              <strong>32%</strong>
            </div>

            <div className="health-progress">
              <span style={{ width: "32%" }} />
            </div>
          </div>

          <div className="health-item">
            <div className="health-label">
              <span>Network Bandwidth</span>
              <strong>78%</strong>
            </div>

            <div className="health-progress">
              <span style={{ width: "78%" }} />
            </div>
          </div>
        </div>

        <div className="system-health-card">
          <div className="global-card-header">
            <h2>System Health</h2>

            <select defaultValue="7">
              <option value="7">Last 7 Days</option>
              <option value="30">Last 30 Days</option>
              <option value="90">Last 90 Days</option>
            </select>
          </div>

          <div className="health-legend">
            <span>
              <i className="legend operational" />
              Operational
            </span>

            <span>
              <i className="legend degraded" />
              Degraded
            </span>

            <span>
              <i className="legend down" />
              Down
            </span>
          </div>

          <div className="system-chart">
            <div className="chart-y-labels">
              <span>25K</span>
              <span>20K</span>
              <span>15K</span>
              <span>10K</span>
              <span>5K</span>
            </div>

            <svg
              viewBox="0 0 520 190"
              preserveAspectRatio="none"
              className="chart-svg"
            >
              <line x1="0" y1="25" x2="520" y2="25" />
              <line x1="0" y1="65" x2="520" y2="65" />
              <line x1="0" y1="105" x2="520" y2="105" />
              <line x1="0" y1="145" x2="520" y2="145" />
              <line x1="0" y1="185" x2="520" y2="185" />

              <polyline
                className="chart-line operational-line"
                points="0,112 75,100 150,104 225,76 300,78 375,88 450,70 520,62"
              />

              <polyline
                className="chart-line degraded-line"
                points="0,148 75,134 150,130 225,118 300,132 375,136 450,134 520,108"
              />

              <polyline
                className="chart-line down-line"
                points="0,182 75,174 150,175 225,164 300,164 375,164 450,164 520,158"
              />

              <circle cx="0" cy="112" r="4" />
              <circle cx="75" cy="100" r="4" />
              <circle cx="150" cy="104" r="4" />
              <circle cx="225" cy="76" r="4" />
              <circle cx="300" cy="78" r="4" />
              <circle cx="375" cy="88" r="4" />
              <circle cx="450" cy="70" r="4" />
              <circle cx="520" cy="62" r="4" />
            </svg>

            <div className="chart-x-labels">
              <span>May 12</span>
              <span>May 13</span>
              <span>May 14</span>
              <span>May 15</span>
              <span>May 16</span>
              <span>May 17</span>
              <span>May 18</span>
            </div>
          </div>
        </div>
      </section>

      <section className="global-bottom-grid">
        <div className="security-card">
          <div className="global-card-header">
            <h2>Security alerts</h2>
            <button>View all alerts</button>
          </div>

          <div className="security-alert warning">
            <AlertTriangle size={18} />
            <div>
              <strong>High CPU Usage</strong>
              <p>Database server CPU usage is high</p>
            </div>
            <span>1 hour ago</span>
          </div>

          <div className="security-alert info-alert">
            <Activity size={18} />
            <div>
              <strong>Storage Threshold</strong>
              <p>Storage utilization reached 80%</p>
            </div>
            <span>2 hour ago</span>
          </div>

          <div className="security-alert registration-alert">
            <UserPlus size={18} />
            <div>
              <strong>New Tenant Registration</strong>
              <p>Techcorp solutions registered</p>
            </div>
            <span>2 hour ago</span>
          </div>
        </div>

        <div className="activities-card">
          <div className="global-card-header">
            <h2>Recent activities</h2>
            <button>View All</button>
          </div>

          <div className="activities-list">
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <div className="activity-item" key={activity.title}>
                  <div className="activity-icon">
                    <Icon size={17} />
                  </div>

                  <div className="activity-content">
                    <strong>{activity.title}</strong>
                    <p>{activity.description}</p>
                  </div>

                  <span>{activity.time}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}