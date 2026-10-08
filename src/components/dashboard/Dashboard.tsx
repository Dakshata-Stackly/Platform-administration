import {
  Building2,
  Users,
  FileText,
  Settings,
  UserCog,
  Activity,
  Globe,
  Palette,
  Layers,
  SlidersHorizontal,
  LayoutDashboard,
  RefreshCw,
} from "lucide-react";

interface DashboardProps {
  setCurrentPage: (page: string) => void;
}

const stats = [
  {
    title: "ORGANIZATIONS",
    value: "1,842",
    description: "↑ 4.2% this month",
    icon: Building2,
  },
  {
    title: "TOTAL USERS",
    value: "96,412",
    description: "↑ 1.8% this month",
    icon: Users,
  },
  {
    title: "LICENSES ACTIVE",
    value: "2,140",
    description: "27 expiring < 30 days",
    icon: FileText,
  },
  {
    title: "PLATFORM UPTIME",
    value: "99.98%",
    description: "Healthy — all regions",
    icon: Activity,
    uptime: true,
  },
];

const managementItems = [
  {
    title: "Super Admin Dashboard",
    description:
      "Platform status, KPIs, system health, and recent admin activity at a glance.",
    icon: LayoutDashboard,
  },
  {
    title: "Global Dashboard",
    description:
      "Platform-wide KPIs across every organization — tenants by plan, onboarding trends.",
    icon: Globe,
  },
  {
    title: "Platform Configuration",
    description:
      "Platform name, timezone, session limits, upload size, and environment defaults.",
    icon: Settings,
  },
  {
    title: "Settings",
    description:
      "Platform behavior toggles, regional defaults, security policy, and notifications.",
    icon: SlidersHorizontal,
  },
  {
    title: "Platform Branding",
    description:
      "Logo, brand colors, login background, and custom domain for the platform shell.",
    icon: Palette,
  },
  {
    title: "Feature Management",
    description:
      "Roll features out by plan tier, and track rollout percentage across tenants.",
    icon: Layers,
  },
  {
    title: "License Management",
    description:
      "Seat usage, renewal dates, and license status across every organization.",
    icon: FileText,
  },
  {
    title: "Platform Health Overview",
    description:
      "Live status per service — auth, API gateway, database, queue, storage, AI engine.",
    icon: Activity,
  },
];

const organizationItems = [
  {
    title: "Company Setup",
    description:
      "Business units, departments, branches, and legal entity details.",
    icon: Building2,
  },
  {
    title: "User Management",
    description:
      "Invite, deactivate, and manage roles for every user across the organization.",
    icon: UserCog,
  },
];

export default function Dashboard({ setCurrentPage }: DashboardProps) {
  return (
    <main className="dashboard">
      <div className="page-header">
        <div>
          <small>Platform Administration</small>
          <h1>Platform Administration</h1>
        </div>

        <button className="refresh-button">
          <RefreshCw size={15} />
          Refresh
        </button>
      </div>

      <section className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              className={`stat-card ${stat.uptime ? "uptime-card" : ""}`}
              key={stat.title}
            >
              <div className="stat-content">
                <div>
                  <p>{stat.title}</p>
                  <h2>{stat.value}</h2>

                  <span className={stat.uptime ? "" : "stat-description"}>
                    {stat.description}
                  </span>
                </div>

                <div className="stat-icon">
                  <Icon size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="dashboard-section">
        <div className="section-heading">
          <h2>SUPER ADMIN MANAGEMENT</h2>
        </div>

        <div className="management-grid">
          {managementItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="management-card"
                key={item.title}
                onClick={() => {
                  if (item.title === "Global Dashboard") {
                    setCurrentPage("Global Dashboard");
                  }

                  if (item.title === "Platform Configuration") {
                    setCurrentPage("Platform Configuration");
                  }

                  if (item.title === "Platform Branding") {
                    setCurrentPage("Platform Branding");
                  }

                  if (item.title === "Feature Management") {
                    setCurrentPage("Feature Management");
                  }

                  if (item.title === "License Management") {
                    setCurrentPage("License Management");
                  }
                }}
              >
                <div className="management-icon">
                  <Icon size={21} />
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

      <section className="dashboard-section">
        <div className="section-heading">
          <h2>ORGANIZATION</h2>
        </div>

        <div className="organization-grid">
          {organizationItems.map((item) => {
            const Icon = item.icon;

            return (
              <div className="management-card" key={item.title}>
                <div className="management-icon">
                  <Icon size={21} />
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
    </main>
  );
}