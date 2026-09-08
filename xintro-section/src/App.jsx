import { useState } from "react";
import "./styles.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setFeaturesOpen(false);
    setCompanyOpen(false);
  };

  const toggleFeatures = () => {
    setFeaturesOpen((current) => !current);
    setCompanyOpen(false);
  };

  const toggleCompany = () => {
    setCompanyOpen((current) => !current);
    setFeaturesOpen(false);
  };

  return (
    <div className="app">
      {/* Overlay */}
      <div
        className={`overlay ${mobileMenuOpen ? "active" : ""}`}
        onClick={closeMobileMenu}
      />

      {/* Header */}
      <header className="header">
        <div className="header-inner">

          {/* Logo */}
          <a href="/" className="logo-wrapper">
            <div className="logo" aria-label="Snap">
              snap
            </div>
          </a>

          {/* Navigation */}
          <nav className={mobileMenuOpen ? "nav-open" : ""}>

            <div className="nav-links">

              {/* FEATURES */}
              <div className="nav-item">
                <button
                  type="button"
                  className={`nav-link ${
                    featuresOpen ? "link-open" : ""
                  }`}
                  onClick={toggleFeatures}
                  aria-expanded={featuresOpen}
                >
                  <span>Features</span>

                  <img
                    src={
                      featuresOpen
                        ? "./assets/images/icon-arrow-up.svg"
                        : "./assets/images/icon-arrow-down.svg"
                    }
                    alt=""
                    className="arrow-icon"
                  />
                </button>

                <div
                  className={`dropdown-list ${
                    featuresOpen ? "dropdown-open" : ""
                  }`}
                >
                  <div className="dropdown-link">
                    <a href="#todo" aria-label="todo-list">
                      <img
                        src="./assets/images/icon-todo.svg"
                        alt=""
                      />
                      <span>Todo List</span>
                    </a>
                  </div>

                  <div className="dropdown-link">
                    <a href="#calendar">
                      <img
                        src="./assets/images/icon-calendar.svg"
                        alt=""
                      />
                      <span>Calendar</span>
                    </a>
                  </div>

                  <div className="dropdown-link">
                    <a href="#reminders">
                      <img
                        src="./assets/images/icon-reminders.svg"
                        alt=""
                      />
                      <span>Reminders</span>
                    </a>
                  </div>

                  <div className="dropdown-link">
                    <a href="#planning">
                      <img
                        src="./assets/images/icon-planning.svg"
                        alt=""
                      />
                      <span>Planning</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* COMPANY */}
              <div className="nav-item">
                <button
                  type="button"
                  className={`nav-link ${
                    companyOpen ? "link-open" : ""
                  }`}
                  onClick={toggleCompany}
                  aria-expanded={companyOpen}
                >
                  <span>Company</span>

                  <img
                    src={
                      companyOpen
                        ? "./assets/images/icon-arrow-up.svg"
                        : "./assets/images/icon-arrow-down.svg"
                    }
                    alt=""
                    className="arrow-icon"
                  />
                </button>

                <div
                  className={`dropdown-list company-dropdown ${
                    companyOpen ? "dropdown-open" : ""
                  }`}
                >
                  <div className="dropdown-link">
                    <a href="#history">
                      <span>History</span>
                    </a>
                  </div>

                  <div className="dropdown-link">
                    <a href="#team">
                      <span>Our Team</span>
                    </a>
                  </div>

                  <div className="dropdown-link">
                    <a href="#blog">
                      <span>Blog</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* NORMAL LINKS */}
              <a href="#careers" className="nav-link normal-link">
                Careers
              </a>

              <a href="#about" className="nav-link normal-link">
                About
              </a>
            </div>

            {/* Mobile authentication */}
            <div className="mobile-registration">
              <button type="button" className="login-button">
                Login
              </button>

              <button type="button" className="register-button">
                Register
              </button>
            </div>
          </nav>

          {/* Desktop authentication */}
          <div className="registration">
            <button type="button" className="login-button">
              Login
            </button>

            <button type="button" className="register-button">
              Register
            </button>
          </div>

          {/* Mobile open button */}
          <button
            type="button"
            className="menu-button open-menu"
            onClick={openMobileMenu}
            aria-label="Open menu"
          >
            <img
              src="./assets/images/icon-menu.svg"
              alt=""
            />
          </button>

          {/* Mobile close button */}
          <button
            type="button"
            className="menu-button close-menu"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <img
              src="./assets/images/icon-close-menu.svg"
              alt=""
            />
          </button>

        </div>
      </header>

      {/* Main */}
      <main>

        <section className="hero">

          {/* Hero Image */}
          <picture>
            <source
              media="(min-width: 769px)"
              srcset="./assets/images/image-hero-desktop.png"
            />

            <img
              src="./assets/images/image-hero-mobile.png"
              alt="People working remotely"
            />
          </picture>

          {/* Content */}
          <div className="text-content">

            <div className="hero-copy">

              <h1>Make remote work</h1>

              <p>
                Get your team in sync, no matter your location.
                Streamline processes, create team rituals, and watch
                productivity soar.
              </p>

              <button type="button" className="learn-more">
                Learn more
              </button>

            </div>

            {/* Clients */}
            <div className="clients">

              <img
                src="./assets/images/client-databiz.svg"
                alt="Databiz"
              />

              <img
                src="./assets/images/client-audiophile.svg"
                alt="Audiophile"
              />

              <img
                src="./assets/images/client-meet.svg"
                alt="Meet"
              />

              <img
                src="./assets/images/client-maker.svg"
                alt="Maker"
              />

            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://crio.do"
          target="_blank"
          rel="noreferrer"
        >
          Crio.do
        </a>
      </footer>
    </div>
  );
}

export default App;