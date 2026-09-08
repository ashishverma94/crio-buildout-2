import { useState } from "react";
import "./styles.css";

import logo from "./assets/logo.svg";

import menuIcon from "./assets/icon-menu.svg";
import closeMenuIcon from "./assets/icon-close-menu.svg";
import arrowDown from "./assets/icon-arrow-down.svg";
import arrowUp from "./assets/icon-arrow-up.svg";

import todoIcon from "./assets/icon-todo.svg";
import calendarIcon from "./assets/icon-calendar.svg";
import remindersIcon from "./assets/icon-reminders.svg";
import planningIcon from "./assets/icon-planning.svg";

import heroDesktop from "./assets/image-hero-desktop.png";
import heroMobile from "./assets/image-hero-mobile.png";

import databiz from "./assets/client-databiz.svg";
import audiophile from "./assets/client-audiophile.svg";
import meet from "./assets/client-meet.svg";
import maker from "./assets/client-maker.svg";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setFeaturesOpen(false);
    setCompanyOpen(false);
  };

  const toggleFeatures = () => {
    setFeaturesOpen((prev) => !prev);
    setCompanyOpen(false);
  };

  const toggleCompany = () => {
    setCompanyOpen((prev) => !prev);
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
          <a href="/" className="logo-link">
            <img src={logo} alt="snap's logo" className="logo" />
          </a>

          {/* Desktop / Mobile Navigation */}
          <nav className={mobileMenuOpen ? "active" : ""}>
            <div className="nav-links">
              {/* Features */}
              <div className={`nav-item ${featuresOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="nav-link"
                  onClick={toggleFeatures}
                  aria-expanded={featuresOpen}
                >
                  Features
                  <img
                    src={featuresOpen ? arrowUp : arrowDown}
                    alt=""
                    className="arrow-icon"
                  />
                </button>

                <div
                  className={`dropdown-list ${featuresOpen ? "visible" : ""}`}
                >
                  <a href="#todo" className="dropdown-link">
                    <img src={todoIcon} alt="" />
                    <span aria-label="todo-list">Todo List</span>
                  </a>

                  <a href="#calendar" className="dropdown-link">
                    <img src={calendarIcon} alt="" />
                    <span>Calendar</span>
                  </a>

                  <a href="#reminders" className="dropdown-link">
                    <img src={remindersIcon} alt="" />
                    <span>Reminders</span>
                  </a>

                  <a href="#planning" className="dropdown-link">
                    <img src={planningIcon} alt="" />
                    <span>Planning</span>
                  </a>
                </div>
              </div>

              {/* Company */}
              <div className={`nav-item ${companyOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="nav-link"
                  onClick={toggleCompany}
                  aria-expanded={companyOpen}
                >
                  Company
                  <img
                    src={companyOpen ? arrowUp : arrowDown}
                    alt=""
                    className="arrow-icon"
                  />
                </button>

                <div
                  className={`dropdown-list company-dropdown ${
                    companyOpen ? "visible" : ""
                  }`}
                >
                  <a href="#history" className="dropdown-link">
                    <span>History</span>
                  </a>

                  <a href="#team" className="dropdown-link">
                    <span>Our Team</span>
                  </a>

                  <a href="#blog" className="dropdown-link">
                    <span>Blog</span>
                  </a>
                </div>
              </div>

              {/* Normal links */}
              <a href="#careers" className="nav-link normal-link">
                Careers
              </a>

              <a href="#about" className="nav-link normal-link">
                About
              </a>
            </div>

            {/* Mobile auth buttons */}
            <div className="mobile-auth">
              <button type="button" className="login-btn">
                Login
              </button>

              <button type="button" className="register-btn">
                Register
              </button>
            </div>
          </nav>

          {/* Desktop authentication */}
          <div className="registration">
            <button type="button" className="login-btn">
              Login
            </button>

            <button type="button" className="register-btn">
              Register
            </button>
          </div>

          {/* Mobile menu buttons */}
          <button
            type="button"
            className="menu-button open-menu"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <img src={menuIcon} alt="" />
          </button>

          <button
            type="button"
            className="menu-button close-menu"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <img src={closeMenuIcon} alt="" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="hero">
          {/* Hero Image */}
          <picture className="hero-picture">
            <source media="(min-width: 769px)" srcSet={heroDesktop} />

            <img src={heroMobile} alt="Person working remotely" />
          </picture>

          {/* Hero Content */}
          <div className="text-content">
            <div className="hero-text">
              <h1>Make remote work</h1>

              <p>
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>

              <button type="button" className="learn-more-btn">
                Learn more
              </button>
            </div>

            {/* Client Logos */}
            <div className="clients">
              <img src={databiz} alt="Databiz" />
              <img src={audiophile} alt="Audiophile" />
              <img src={meet} alt="Meet" />
              <img src={maker} alt="Maker" />
            </div>
          </div>
        </section>
      </main>

      {/* Attribution */}
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://crio.do" target="_blank" rel="noreferrer">
          Crio.do
        </a>
      </footer>
    </div>
  );
}

export default App;
