import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "../pages/LandingPage.css";
import Header from "../components/sharedHeader";
import { Button } from "@mui/material";

function LandingPage() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/Explore");

  return (
    <div className="Container">
      <Header />
      {/* Swap out placeholder with the actual text */}
      <h1>...Page Title...</h1>
      <div className="mainContent">
        <img src="https://i.pinimg.com/236x/9f/77/69/9f776960b5fe247c5cd748caaf53ccd8.jpg" />
        <div className="content">
          <h2>...Heading...</h2>
          <h3>...Sub-Header...</h3>
          <p>
          ...body...
          </p>
          <h3>...Sub-Header...</h3>
          <p>
          ...body...
          </p>
          <h3>...Sub-Header...</h3>
          <p>
          ...body...
          </p>
        {/* Add button here */}
        <Button variant="contained" onClick={handleClick}>Start Learning</Button>
        </div>
      </div>

      <footer className="footer">
        <p>
          <FontAwesomeIcon icon={faPaw} size="xs" style={{ color: "black" }} />{" "}
          2024 Woof Wiki. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
