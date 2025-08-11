import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "../pages/LandingPage.css";
import Header from "../components/sharedHeader";

function LandingPage() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/Explore");

  return (
    <div className="Container">
      <Header />
      <h1>Welcome to Woof Wiki</h1>
      <div className="mainContent">
        {/* <img src="https://i.pinimg.com/236x/9f/77/69/9f776960b5fe247c5cd748caaf53ccd8.jpg" /> */}
        <img src="data:image/png;base64,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" />
        <div className="content">
          <h2>Why Learn About Dog Breeds?</h2>
          <h3>Find Your Perfect Match</h3>
          <p>
            Explore different dog breeds to find the one that suits your
            lifestyle.
          </p>
          <h3>Understand Their Needs</h3>
          <p>
            Learn about the specific care requirements and temperaments of each
            breed.
          </p>
          <h3>Become a Dog Expert</h3>
          <p>
            Expand your ledgeknow about dogs and impress your friends with fun
            facts.
          </p>
          <button className="navigateButton" onClick={handleClick}>
            Start Learning!
          </button>
        </div>
      </div>

      <footer className="footer">
        <p>
          <FontAwesomeIcon icon={faPaw} size="xs" style={{ color: "black" }} />{" "}
          2024 Paw Wiki. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
