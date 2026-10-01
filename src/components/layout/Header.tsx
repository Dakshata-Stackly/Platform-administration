import { Bell, Search, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-search">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search tenants, users, settings, audit logs..."
        />

        <span className="search-shortcut">⌘K</span>
      </div>

      <div className="header-actions">
        <button className="icon-button">
          <Bell size={19} />
          <span className="notification-dot" />
        </button>

        <button className="icon-button">
          <Settings size={19} />
        </button>

        <div className="profile">
          <div className="profile-avatar">D</div>

          <div className="profile-info">
            <strong>Dakshata</strong>
            <span>Super Admin</span>
          </div>

          <span className="profile-arrow">⌄</span>
        </div>
      </div>
    </header>
  );
}