import "./App.css";

import equilibriumImage from "../assets/image-equilibrium.jpg";
import ethereumIcon from "../assets/icon-ethereum.svg";
import clockIcon from "../assets/icon-clock.svg";
import viewIcon from "../assets/icon-view.svg";
import creatorImage from "../assets/logo.jpeg";

function App() {
  return (
    <div className="page">
      <main className="card">
        <div className="card__images">
          <img
            className="card__images-main"
            src={equilibriumImage}
            alt="Equilibrium #3429"
          />

          <div className="card__images-layer">
            <img src={viewIcon} alt="View NFT" className="card__images-view" />
          </div>
        </div>

        <div className="card__title">
          <h1>Equilibrium #3429</h1>

          <p id="info">Our Equilibrium collection promotes balance and calm.</p>
        </div>

        <div className="card__time">
          <div className="card__time-left">
            <img src={ethereumIcon} alt="Ethereum" />
            <span>0.041 ETH</span>
          </div>

          <div className="card__time-right">
            <img src={clockIcon} alt="Clock" />
            <span>3 days left</span>
          </div>
        </div>

        <div className="card__creator">
          <img src={creatorImage} alt="Ashish Verma" />

          <p>
            Creation of <span>Ashish Verma</span>
          </p>
        </div>
      </main>

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.crio.do" target="_blank" rel="noopener noreferrer">
          Crio
        </a>
        . Coded by{" "}
        <a
          href="https://www.github.com/ashishverma94"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ashish Verma
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
