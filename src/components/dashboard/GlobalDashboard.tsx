import {
  Users,
  Settings,
  FileText,
  Activity,
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
    type: "warning",
  },
  {
    title: "License Updated",
    description: "by Admin users.",
    time: "1 hour ago",
    icon: AlertTriangle,
    type: "warning",
  },
  {
    title: "User Added",
    description: "Superadmin granted access to monitoring module.",
    time: "3 hours ago",
    icon: Info,
    type: "info",
  },
  {
    title: "Backup Completed",
    description: "Daily snapshot of primary database cluster successful.",
    time: "Yesterday",
    icon: CheckCircle2,
    type: "success",
  },
];

export default function GlobalDashboard() {
  return (
    <main className="global-dashboard">
      <div className="global-page-header">
        <div>
          <div className="breadcrumb">
            Platform Administration
            <span>/</span>
            <strong>Global Dashboard</strong>
          </div>

          <h1>Global Dashboard</h1>

          <p>
            Track performance, engagement, and growth across all your social
            platforms in one place.
          </p>
        </div>

        <div className="global-header-actions">
          <button className="global-refresh-button">
            <RefreshCw size={14} />
            Refresh
          </button>

          <button className="export-button">
            <Download size={14} />
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
                    <Icon size={17} />
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
                  <Icon size={19} />
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
              <strong className="health-warning">67%</strong>
            </div>

            <div className="health-progress">
              <span
                className="cpu-progress"
                style={{ width: "67%" }}
              />
            </div>
          </div>

          <div className="health-item">
            <div className="health-label">
              <span>Memory Utilization</span>
              <strong className="health-success">54%</strong>
            </div>

            <div className="health-progress">
              <span
                className="memory-progress"
                style={{ width: "54%" }}
              />
            </div>
          </div>

          <div className="health-item">
            <div className="health-label">
              <span>Disk I/O</span>
              <strong className="health-success">32%</strong>
            </div>

            <div className="health-progress">
              <span
                className="disk-progress"
                style={{ width: "32%" }}
              />
            </div>
          </div>

          <div className="health-item">
            <div className="health-label">
              <span>Network Bandwidth</span>
              <strong className="health-warning">78%</strong>
            </div>

            <div className="health-progress">
              <span
                className="network-progress"
                style={{ width: "78%" }}
              />
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
                points="0,105 74,91 148,95 222,70 296,71 370,81 444,66 520,60"
              />

              <polyline
                className="chart-line degraded-line"
                points="0,148 74,133 148,130 222,116 296,129 370,136 444,134 520,111"
              />

              <polyline
                className="chart-line down-line"
                points="0,183 74,175 148,176 222,165 296,165 370,165 444,165 520,159"
              />

              <circle
                className="operational-point"
                cx="0"
                cy="105"
                r="4"
              />
              <circle
                className="operational-point"
                cx="74"
                cy="91"
                r="4"
              />
              <circle
                className="operational-point"
                cx="148"
                cy="95"
                r="4"
              />
              <circle
                className="operational-point"
                cx="222"
                cy="70"
                r="4"
              />
              <circle
                className="operational-point"
                cx="296"
                cy="71"
                r="4"
              />
              <circle
                className="operational-point"
                cx="370"
                cy="81"
                r="4"
              />
              <circle
                className="operational-point"
                cx="444"
                cy="66"
                r="4"
              />
              <circle
                className="operational-point"
                cx="520"
                cy="60"
                r="4"
              />

              <circle
                className="degraded-point"
                cx="0"
                cy="148"
                r="4"
              />
              <circle
                className="degraded-point"
                cx="74"
                cy="133"
                r="4"
              />
              <circle
                className="degraded-point"
                cx="148"
                cy="130"
                r="4"
              />
              <circle
                className="degraded-point"
                cx="222"
                cy="116"
                r="4"
              />
              <circle
                className="degraded-point"
                cx="296"
                cy="129"
                r="4"
              />
              <circle
                className="degraded-point"
                cx="370"
                cy="136"
                r="4"
              />
              <circle
                className="degraded-point"
                cx="444"
                cy="134"
                r="4"
              />
              <circle
                className="degraded-point"
                cx="520"
                cy="111"
                r="4"
              />

              <circle
                className="down-point"
                cx="0"
                cy="183"
                r="4"
              />
              <circle
                className="down-point"
                cx="74"
                cy="175"
                r="4"
              />
              <circle
                className="down-point"
                cx="148"
                cy="176"
                r="4"
              />
              <circle
                className="down-point"
                cx="222"
                cy="165"
                r="4"
              />
              <circle
                className="down-point"
                cx="296"
                cy="165"
                r="4"
              />
              <circle
                className="down-point"
                cx="370"
                cy="165"
                r="4"
              />
              <circle
                className="down-point"
                cx="444"
                cy="165"
                r="4"
              />
              <circle
                className="down-point"
                cx="520"
                cy="159"
                r="4"
              />
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

          <div className="security-alert warning-alert">
            <div className="security-alert-icon">
              <AlertTriangle size={16} />
            </div>

            <div>
              <strong>High CPU Usage</strong>
              <p>Database server CPU usage is high</p>
            </div>

            <span>1 hour ago</span>
          </div>

          <div className="security-alert info-alert">
            <div className="security-alert-icon">
              <Activity size={16} />
            </div>

            <div>
              <strong>Storage Threshold</strong>
              <p>Storage utilization reached 80%</p>
            </div>

            <span>2 hour ago</span>
          </div>

          <div className="security-alert registration-alert">
            <div className="security-alert-icon">
              <Info size={16} />
            </div>

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
                <div
                  className={`activity-item ${activity.type}`}
                  key={activity.title}
                >
                  <div className="activity-icon">
                    <Icon size={15} />
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