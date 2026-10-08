import { useState } from "react";
import {
  Image as ImageIcon,
  Sun,
  Moon,
  ShieldCheck,
  History,
  LockKeyhole,
  Save,
} from "lucide-react";

const PlatformBranding = () => {
  const [theme, setTheme] = useState("light");

  return (
    <main className="branding-page">
      <div className="branding-content">
        <div className="branding-heading">
          <div>
            <div className="breadcrumb">
              Platform Administration
              <span>/</span>
              <strong>Platform Branding</strong>
            </div>

            <h1>Platform Branding</h1>

            <p>
              Configure your enterprise platform to create a consistent and
              recognizable brand experience.
            </p>
          </div>

          <div className="branding-heading-actions">
            <button className="cancel-btn">Cancel</button>

            <button className="preview-btn">Preview</button>

            <button className="save-btn">
              <Save size={15} />
              Save Changes
            </button>
          </div>
        </div>

        <div className="branding-layout">
          <div className="branding-main">

            <section className="branding-card">
              <div className="branding-card-header">
                <h2>Platform Identity</h2>
                <span>Basic Info</span>
              </div>

              <div className="branding-card-body">
                <label>Platform Name</label>

                <input defaultValue="Java Enterprise Suite" />

                <div className="branding-two-columns">
                  <div>
                    <label>Company Name</label>
                    <input defaultValue="Oracle Corporation" />
                  </div>

                  <div>
                    <label>Tagline</label>
                    <input defaultValue="Empowering Enterprise Intelligence" />
                  </div>
                </div>
              </div>
            </section>

            <section className="branding-card">
              <div className="branding-card-header">
                <h2>Visual Assets</h2>
              </div>

              <div className="branding-card-body">
                <div className="visual-assets-grid">

                  <div>
                    <div className="field-title-row">
                      <label>
                        <ImageIcon size={14} />
                        Company Logo
                      </label>

                      <span>PNG, SVG up to 5MB.</span>
                    </div>

                    <div className="logo-upload-box">
                      <div className="fake-logo">
                        <div className="fake-logo-symbol">✦</div>

                        <div>
                          <strong>SYNERGY</strong>
                          <small>ENTERPRISE SOFTWARE</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label>Favicon</label>

                    <div className="favicon-row">
                      <div className="favicon-preview">
                        <span>✦</span>
                      </div>

                      <button className="upload-small-btn">
                        Upload Favicon
                      </button>
                    </div>

                    <label className="email-logo-label">
                      Email Header Logo
                    </label>

                    <div className="email-upload-row">
                      <div className="file-box">
                        No file chosen
                      </div>

                      <button className="upload-small-btn">
                        Upload File
                      </button>
                    </div>
                  </div>

                </div>

                <div className="branding-two-columns asset-text-fields">
                  <div>
                    <label>Footer Text</label>

                    <div className="textarea-wrapper">
                      <textarea defaultValue="System Maintained by IT Dept." />
                      <span>29/200</span>
                    </div>
                  </div>

                  <div>
                    <label>Copyright Text</label>

                    <textarea defaultValue="© 2024 platform branding. All rights reserved." />
                  </div>
                </div>
              </div>
            </section>

            <section className="branding-card">
              <div className="branding-card-header">
                <h2>Theme Configuration</h2>
              </div>

              <div className="branding-card-body">
                <div className="theme-row">
                  <label>Theme</label>

                  <div className="theme-toggle">
                    <button
                      className={theme === "light" ? "active" : ""}
                      onClick={() => setTheme("light")}
                    >
                      <Sun size={14} />
                      Light mode
                    </button>

                    <button
                      className={theme === "dark" ? "active" : ""}
                      onClick={() => setTheme("dark")}
                    >
                      <Moon size={14} />
                      Dark mode
                    </button>
                  </div>
                </div>

                <div className="color-grid">
                  <div className="color-field">
                    <label>Primary Color</label>

                    <div className="color-input">
                      <span className="color-box blue-color"></span>
                      <input defaultValue="#1976D2" />
                    </div>
                  </div>

                  <div className="color-field">
                    <label>Secondary Color</label>

                    <div className="color-input">
                      <span className="color-box white-color"></span>
                      <input defaultValue="#FFFFFF" />
                    </div>
                  </div>

                  <div className="color-field">
                    <label>Accent Color</label>

                    <div className="color-input">
                      <span className="color-box green-color"></span>
                      <input defaultValue="#4CAF50" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="last-saved">
              <History size={15} />
              Last saved: 2 mins ago
            </div>
          </div>

          <aside className="branding-right">

            <section className="login-card">
              <div className="right-card-header">
                <h2>Login Background</h2>

                <button>Change Image</button>
              </div>

              <div className="login-preview">
                <div className="login-background-image">
                  <div className="login-overlay">
                    <div className="login-logo">✦</div>

                    <div className="login-brand-name">
                      SYNERGY
                    </div>

                    <div className="login-brand-subtitle">
                      ENTERPRISE SOFTWARE
                    </div>

                    <div className="login-form-preview">
                      <div></div>
                      <div></div>
                      <button></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="welcome-section">
                <label>Welcome Message</label>

                <div className="welcome-box">
                  <textarea
                    defaultValue={
                      "Welcome to Java Enterprise Suite.\nPlease authenticate to continue."
                    }
                  />

                  <span>66/250</span>
                </div>
              </div>
            </section>

            <section className="security-card">
              <h2>
                <ShieldCheck size={18} />
                Security & Rules
              </h2>

              <h3>VALIDATION RULES</h3>

              <p>
                <ShieldCheck size={14} />
                Images: PNG, JPG, SVG max 5MB.
                <br />
                Background max 10MB.
              </p>

              <p>
                <ShieldCheck size={14} />
                Text fields max 100 chars; Messages max 250 chars.
              </p>

              <p>
                <ShieldCheck size={14} />
                Colors must be valid hex values.
              </p>

              <div className="security-divider"></div>

              <h3>SECURITY HANDLING</h3>

              <p>
                <LockKeyhole size={14} />
                Super Admin (RBAC) access only.
              </p>

              <p>
                <History size={14} />
                All changes logged to Audit Trail.
              </p>
            </section>

          </aside>
        </div>
      </div>
    </main>
  );
};

export default PlatformBranding;