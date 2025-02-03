import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">F</h1>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Learn</NavLink>
          <NavLink to="/team" onClick={() => setIsOpen(false)}>Team</NavLink>
          <NavLink to="/results" onClick={() => setIsOpen(false)}>Results</NavLink>
          <NavLink to="/workshop" onClick={() => setIsOpen(false)}>Workshop</NavLink>
          <NavLink to="/account" onClick={() => setIsOpen(false)}>Account</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
