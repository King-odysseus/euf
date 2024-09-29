// src/components/Home.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import Navbar from "./Navbar.js";
import "../styles.css";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> Add this line to render the Navbar */}

      <div className="container mt-4">
        <h1>Welcome to EUF</h1>
        <p>
          Empowering Unity Foundation (EUF) is dedicated to making a positive
          impact in communities around the world.
        </p>
        <p>Join us in our mission to create meaningful change!</p>
      </div>
    </div>
  );
};

export default Home;
