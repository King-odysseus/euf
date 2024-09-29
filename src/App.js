// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar will be displayed on all pages */}
        <Routes>
          {" "}
          {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/about" element={<About />} /> {/* About Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
