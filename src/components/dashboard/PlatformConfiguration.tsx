import {
  Settings,
  Globe,
  ShieldCheck,
  LockKeyhole,
  FileSearch,
  Network,
  Info,
  Save,
} from "lucide-react";

function PlatformConfiguration() {
  return (
    <main className="platform-config-page">
      <div className="config-top">
        <div>
          <div className="config-breadcrumb">
            <span>Platform Administration</span>
            <span>/</span>
            <strong>Platform Configuration</strong>
          </div>

          <h1>Platform Configuration</h1>

          <p>
            Manage core platform identity, regional defaults, and security
            handling.
          </p>
        </div>

        <div className="config-actions">
          <button className="cancel-btn">Cancel</button>

          <button className="save-btn">
            <Save size={15} />
            Save
          </button>
        </div>
      </div>

      <div className="config-layout">
        <div className="config-left">
          <section className="config-card basic-card">
            <div className="config-card-header">
              <Settings size={19} />
              <h2>Basic Configuration</h2>
            </div>

            <div className="config-card-body">
              <div className="config-input">
                <label>PLATFORM NAME</label>
                <input
                  type="text"
                  value="Java Enterprise Suite"
                  readOnly
                />
              </div>

              <div className="config-input">
                <label>PLATFORM URL</label>
                <input
                  type="text"
                  value="https://app.javasuite.enterprise"
                  readOnly
                />
              </div>
            </div>
          </section>

          <section className="config-card regional-card">
            <div className="config-card-header">
              <Globe size={21} />
              <h2>Regional Configuration</h2>
            </div>

            <div className="regional-body">
              <div className="config-input">
                <label>DEFAULT TIME ZONE</label>

                <div className="select-box">
                  <span>UTC +05:30 (India Standard Time)</span>
                  <span>⌄</span>
                </div>
              </div>

              <div className="config-input">
                <label>DEFAULT LANGUAGE</label>

                <div className="select-box">
                  <span>ENGLISH</span>
                  <span>⌄</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="security-card">
          <div className="security-header">
            <ShieldCheck size={21} />
            <h2>Security Handling</h2>
          </div>

          <div className="security-content">
            <div className="security-item">
              <ShieldCheck size={20} />

              <div>
                <h3>Configuration version control</h3>
                <p>All changes are tracked and can be rolled back.</p>
              </div>
            </div>

            <div className="security-item">
              <LockKeyhole size={20} />

              <div>
                <h3>Encryption of sensitive credentials</h3>
                <p>API keys and passwords are AES-256 encrypted.</p>
              </div>
            </div>

            <div className="security-item">
              <FileSearch size={20} />

              <div>
                <h3>Audit logs</h3>
                <p>Comprehensive logging of administrative actions.</p>
              </div>
            </div>
          </div>

          <div className="system-health">
            <div className="health-icon">
              <ShieldCheck size={20} />
            </div>

            <div>
              <h3>System Health</h3>
              <p>Optimal State</p>
            </div>
          </div>
        </section>
      </div>

      <section className="communication-card">
        <div className="communication-header">
          <Network size={22} />
          <h2>Communication &amp; Integration</h2>
        </div>

        <div className="communication-row">
          <div>
            <h3>SMTP Configuration</h3>
            <p>Manage email server settings</p>
          </div>

          <button>Configure</button>
        </div>

        <div className="communication-row">
          <div>
            <h3>SMS Gateway</h3>
            <p>Twilio integration settings</p>
          </div>

          <button>Configure</button>
        </div>

        <div className="communication-row">
          <div>
            <h3>API Gateway</h3>
            <p>External system access tokens</p>
          </div>

          <button>Configure</button>
        </div>
      </section>

      <section className="deployment-note">
        <div className="deployment-info-icon">
          <Info size={19} />
        </div>

        <div>
          <h3>Deployment Note</h3>
          <p>
            Changes to Core Platform configurations may require a service
            restart for integrated modules to reflect the updates completely.
          </p>
        </div>
      </section>
    </main>
  );
}

export default PlatformConfiguration;