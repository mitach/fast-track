import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Results from "./pages/Results";
import Team from "./pages/Team";
import Workshop from "./pages/Workshop";

import "./styles/global.css";
import Account from "./pages/Account";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/results" element={<Results />} />
            <Route path="/team" element={<Team />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
