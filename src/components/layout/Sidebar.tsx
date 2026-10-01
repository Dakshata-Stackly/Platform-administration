import {
  LayoutDashboard,
  Globe,
  Settings,
  Palette,
  Layers,
  FileText,
  SlidersHorizontal,
  Building2,
  Users,
  LogOut,
  Languages,
} from "lucide-react";

const superAdminItems = [
  {
    label: "Super Admin Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Platform Administration",
    icon: Globe,
    active: true,
  },
  {
    label: "Global Dashboard",
    icon: Globe,
  },
  {
    label: "Platform Configuration",
    icon: Settings,
  },
  {
    label: "Platform Branding",
    icon: Palette,
  },
  {
    label: "Feature Management",
    icon: Layers,
  },
  {
    label: "License Management",
    icon: FileText,
  },
  {
    label: "Settings",
    icon: SlidersHorizontal,
  },
];

const organizationItems = [
  {
    label: "Company Setup",
    icon: Building2,
  },
  {
    label: "User Management",
    icon: Users,
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-mark">S</div>
        <span>STACKLY</span>
      </div>

      <div className="platform-label">PLATFORM ADMINISTRATION</div>

      <nav className="sidebar-nav">
        <p className="nav-title">SUPER ADMIN MANAGEMENT</p>

        {superAdminItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className={`nav-item ${item.active ? "active" : ""}`}
            >
              <Icon size={17} />
              <span>{item.label}</span>
            </div>
          );
        })}

        <p className="nav-title organization-title">ORGANIZATION</p>

        {organizationItems.map((item) => {
          const Icon = item.icon;

          return (
            <div className="nav-item" key={item.label}>
              <Icon size={17} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="footer-item">
          <Languages size={17} />
          <span>Language</span>
          <small>English</small>
        </div>

        <div className="footer-item">
          <LogOut size={17} />
          <span>Log out</span>
        </div>

        <div className="sidebar-profile">
          <div className="profile-avatar">D</div>

          <div>
            <strong>Dakshata </strong>
            <small>Super Admin</small>
          </div>
        </div>
      </div>
    </aside>
  );
}