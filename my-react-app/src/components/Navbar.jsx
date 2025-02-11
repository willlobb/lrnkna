// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [practiceDropdown, setPracticeDropdown] = useState(false);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li 
          className="dropdown"
          onMouseEnter={() => setPracticeDropdown(true)}
          onMouseLeave={() => setPracticeDropdown(false)}
        >
          <span className="dropdown-title">Practice</span>
          {practiceDropdown && (
            <div className="dropdown-menu">
              <NavLink to="/practice" className={({ isActive }) => isActive ? "active" : ""}>
                Katakana Practice
              </NavLink>
              <NavLink to="/hiragana" className={({ isActive }) => isActive ? "active" : ""}>
                Hiragana Practice
              </NavLink>
            </div>
          )}
        </li>
        {/* Example: authentication links – adjust if using AuthContext */}
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
