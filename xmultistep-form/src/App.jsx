import { useState } from "react";
import "./App.css";

import sidebarDesktop from "./assets/bg-sidebar-desktop.svg";
import sidebarMobile from "./assets/bg-sidebar-mobile.svg";

import arcadeIcon from "./assets/icon-arcade.svg";
import advancedIcon from "./assets/icon-advanced.svg";
import proIcon from "./assets/icon-pro.svg";
import checkmarkIcon from "./assets/icon-checkmark.svg";
import thankYouIcon from "./assets/icon-thank-you.svg";

const plans = [
  {
    name: "Arcade",
    monthly: 9,
    yearly: 90,
    icon: arcadeIcon,
  },
  {
    name: "Advanced",
    monthly: 12,
    yearly: 120,
    icon: advancedIcon,
  },
  {
    name: "Pro",
    monthly: 15,
    yearly: 150,
    icon: proIcon,
  },
];

const addons = [
  {
    id: "online",
    name: "Online Services",
    description: "Access to multiplayer games",
    monthly: 1,
    yearly: 10,
  },
  {
    id: "storage",
    name: "Larger Storage",
    description: "Extra 1TB of cloud save",
    monthly: 2,
    yearly: 20,
  },
  {
    id: "profile",
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    monthly: 2,
    yearly: 20,
  },
];

function App() {
  const [step, setStep] = useState(1);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [plan, setPlan] = useState("Arcade");
  const [billing, setBilling] = useState("monthly");

  const [selectedAddons, setSelectedAddons] = useState([]);

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    phone: "",
    plan: "",
    addons: "",
  });

  const selectedPlan = plans.find((item) => item.name === plan);

  const planPrice =
    billing === "monthly" ? selectedPlan.monthly : selectedPlan.yearly;

  const selectedAddonObjects = addons.filter((addon) =>
    selectedAddons.includes(addon.id),
  );

  const addonTotal = selectedAddonObjects.reduce(
    (total, addon) =>
      total + (billing === "monthly" ? addon.monthly : addon.yearly),
    0,
  );

  const total = planPrice + addonTotal;

  const billingLabel = billing === "monthly" ? "mo" : "yr";

  const validateStepOne = () => {
    const newErrors = {
      userName: "",
      email: "",
      phone: "",
      plan: "",
      addons: "",
    };

    let valid = true;

    if (!userName.trim()) {
      newErrors.userName = "Enter your name";
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Enter email";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = "Enter your mobile number";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const goNext = () => {
    if (step === 1) {
      if (!validateStepOne()) return;
    }

    if (step === 2 && !plan) {
      setErrors((prev) => ({
        ...prev,
        plan: "Please select a plan",
      }));
      return;
    }

    setErrors({
      userName: "",
      email: "",
      phone: "",
      plan: "",
      addons: "",
    });

    setStep((current) => Math.min(current + 1, 5));
  };

  const goBack = () => {
    setErrors({
      userName: "",
      email: "",
      phone: "",
      plan: "",
      addons: "",
    });

    setStep((current) => Math.max(current - 1, 1));
  };

  const toggleAddon = (id) => {
    setSelectedAddons((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const changePlan = () => {
    setStep(2);
  };

  return (
    <div className="app">
      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside
        className="sidebar"
        style={{
          "--sidebar-desktop": `url(${sidebarDesktop})`,
          "--sidebar-mobile": `url(${sidebarMobile})`,
        }}
      >
        <div className="steps">
          <div className={`step-item ${step === 1 ? "active" : ""}`}>
            <div className="step-number">1</div>

            <div className="step-info">
              <span>Step 1</span>
              <strong>Your Info</strong>
            </div>
          </div>

          <div className={`step-item ${step === 2 ? "active" : ""}`}>
            <div className="step-number">2</div>

            <div className="step-info">
              <span>Step 2</span>
              <strong>Select Plan</strong>
            </div>
          </div>

          <div className={`step-item ${step === 3 ? "active" : ""}`}>
            <div className="step-number">3</div>

            <div className="step-info">
              <span>Step 3</span>
              <strong>Add-ons</strong>
            </div>
          </div>

          <div className={`step-item ${step >= 4 ? "active" : ""}`}>
            <div className="step-number">4</div>

            <div className="step-info">
              <span>Step 4</span>
              <strong>Summary</strong>
            </div>
          </div>
        </div>
      </aside>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="content-area">
        {/* ===================================================
            STEP 1
        ==================================================== */}

        {step === 1 && (
          <section className="form-step">
            <div className="step-header">
              <h1>Personal Info</h1>

              <p>Please provide your name, email address, and phone number.</p>
            </div>

            <div className="fields">
              <div className="field">
                <div className="field-label">
                  <label htmlFor="userName">Name</label>

                  {errors.userName && (
                    <span className="error">{errors.userName}</span>
                  )}
                </div>

                <input
                  id="userName"
                  name="userName"
                  type="text"
                  placeholder="e.g. Stephen King"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);

                    if (e.target.value.trim()) {
                      setErrors((prev) => ({
                        ...prev,
                        userName: "",
                      }));
                    }
                  }}
                  className={errors.userName ? "input-error" : ""}
                />
              </div>

              <div className="field">
                <div className="field-label">
                  <label htmlFor="email">Email Address</label>

                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. stephenking@lorem.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);

                    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
                      setErrors((prev) => ({
                        ...prev,
                        email: "",
                      }));
                    }
                  }}
                  className={errors.email ? "input-error" : ""}
                />
              </div>

              <div className="field">
                <div className="field-label">
                  <label htmlFor="phone">Phone Number</label>

                  {errors.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                </div>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. 7894561230"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);

                    if (e.target.value.trim()) {
                      setErrors((prev) => ({
                        ...prev,
                        phone: "",
                      }));
                    }
                  }}
                  className={errors.phone ? "input-error" : ""}
                />
              </div>
            </div>

            <div className="form-actions next-only">
              <button id="next-button" type="button" onClick={goNext}>
                Next step
              </button>
            </div>
          </section>
        )}

        {/* ===================================================
            STEP 2
        ==================================================== */}

        {step === 2 && (
          <section className="form-step">
            <div className="step-header">
              <h1>Select your plan</h1>

              <p>You have the option of monthly or yearly billing.</p>
            </div>

            <div className="plan-grid">
              {plans.map((item) => {
                const selected = plan === item.name;

                const price =
                  billing === "monthly" ? item.monthly : item.yearly;

                return (
                  <button
                    key={item.name}
                    type="button"
                    className={`plan_card ${selected ? "selected" : ""}`}
                    onClick={() => {
                      setPlan(item.name);
                      setErrors((prev) => ({
                        ...prev,
                        plan: "",
                      }));
                    }}
                  >
                    <img src={item.icon} alt={item.name} />

                    <div className="plan-details">
                      <h3>{item.name}</h3>

                      <p>
                        ${price}/{billing === "monthly" ? "mo" : "yr"}
                      </p>

                      {billing === "yearly" && <span>2 months free</span>}
                    </div>
                  </button>
                );
              })}
            </div>

            {errors.plan && <p className="selection-error">{errors.plan}</p>}

            <div className="billing-toggle">
              <span className={billing === "monthly" ? "billing-active" : ""}>
                Monthly
              </span>

              <button
                type="button"
                className={`toggle ${billing === "yearly" ? "yearly" : ""}`}
                onClick={() =>
                  setBilling((current) =>
                    current === "monthly" ? "yearly" : "monthly",
                  )
                }
                aria-label="Toggle billing"
              >
                <span />
              </button>

              <span className={billing === "yearly" ? "billing-active" : ""}>
                Yearly
              </span>
            </div>

            <div className="form-actions">
              <button type="button" className="back-button" onClick={goBack}>
                Go Back
              </button>

              <button id="next-button" type="button" onClick={goNext}>
                Next step
              </button>
            </div>
          </section>
        )}

        {/* ===================================================
            STEP 3
        ==================================================== */}

        {step === 3 && (
          <section className="form-step">
            <div className="step-header">
              <h1>Pick add-ons</h1>

              <p>Add-ons help enhance your gaming experience.</p>
            </div>

            <div className="addon-list">
              {addons.map((addon) => {
                const selected = selectedAddons.includes(addon.id);

                const price =
                  billing === "monthly" ? addon.monthly : addon.yearly;

                return (
                  <button
                    type="button"
                    key={addon.id}
                    className={`addon_card ${selected ? "selected" : ""}`}
                    onClick={() => toggleAddon(addon.id)}
                  >
                    <div className={`checkbox ${selected ? "checked" : ""}`}>
                      {selected && <img src={checkmarkIcon} alt="Selected" />}
                    </div>

                    <div className="addon-info">
                      <h3>{addon.name}</h3>
                      <p>{addon.description}</p>
                    </div>

                    <span className="addon-price">
                      +${price}/{billing === "monthly" ? "mo" : "yr"}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="form-actions">
              <button type="button" className="back-button" onClick={goBack}>
                Go Back
              </button>

              <button id="next-button" type="button" onClick={goNext}>
                Next step
              </button>
            </div>
          </section>
        )}

        {/* ===================================================
            STEP 4
        ==================================================== */}

        {step === 4 && (
          <section className="form-step">
            <div className="step-header">
              <h1>Finishing up</h1>

              <p>Double-check everything looks OK before confirming.</p>
            </div>

            <div className="summary-box">
              <div className="summary-plan">
                <div>
                  <h3>
                    {plan} ({billing === "monthly" ? "Monthly" : "Yearly"})
                  </h3>

                  <button
                    type="button"
                    className="change-plan"
                    onClick={changePlan}
                  >
                    Change
                  </button>
                </div>

                <strong>
                  ${planPrice}/{billingLabel}
                </strong>
              </div>

              {selectedAddonObjects.length > 0 && (
                <div className="summary-addons">
                  {selectedAddonObjects.map((addon) => {
                    const price =
                      billing === "monthly" ? addon.monthly : addon.yearly;

                    return (
                      <div className="summary-addon" key={addon.id}>
                        <span>{addon.name}</span>

                        <strong>
                          +${price}/{billingLabel}
                        </strong>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="total-row">
              <span>
                Total (per {billing === "monthly" ? "month" : "year"})
              </span>

              <strong>
                ${total}/{billingLabel}
              </strong>
            </div>

            <div className="form-actions">
              <button type="button" className="back-button" onClick={goBack}>
                Go Back
              </button>

              <button id="next-button" type="button" onClick={goNext}>
                Confirm
              </button>
            </div>
          </section>
        )}

        {/* ===================================================
            STEP 5 - THANK YOU
        ==================================================== */}

        {step === 5 && (
          <section className="thank-you">
            <img
              src={thankYouIcon}
              alt="Thank You"
              className="thank-you-icon"
            />

            <h1>Thank You!</h1>

            <p>
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please email us at{" "}
              <strong>support@lorem.com</strong>.
            </p>
          </section>
        )}
      </main>

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.crio.do" target="_blank">
          CrioDo
        </a>
        . Coded by{" "}
        <a href="https://www.github.com/ashishverma94" target="_blank">
          Ashish
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
