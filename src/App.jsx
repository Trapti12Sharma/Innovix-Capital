import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./components/pages/Home.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes later */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
