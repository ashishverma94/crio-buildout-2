import "./App.css";

import heroImage from "../assets/illustration-hero.svg";
import musicIcon from "../assets/icon-music.svg";
function App() {
  return (
    <main className="main">
      <div className="container">
        <img className="hero-image" src={heroImage} alt="Order Summary" />

        <div className="content">
          <h1 className="heading">Order Summary</h1>

          <p className="summary-para">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>

          <div className="plan">
            <div className="plan-left">
              <img src={musicIcon} alt="Music" className="music-icon" />

              <div className="plan-text">
                <strong>Annual Plan</strong>
                <span>$59.99/year</span>
              </div>
            </div>

            <div className="change-link">
              <a href="#">Change</a>
            </div>
          </div>

          <button className="proceed-btn">Proceed to Payment</button>

          <a href="#" className="cancel-order">
            Cancel Order
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
