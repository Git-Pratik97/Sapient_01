import React from 'react';
import './Navbar.css';

function Navbar({ searchByCuisine, onToggleSearchMode }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-3 custom-navbar">
      <div className="d-flex align-items-center">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/pizza.png"
          alt="Recipe Logo"
          className="navbar-logo"
        />
        <div>
          <span className="navbar-brand mb-0 h1" style={{ fontWeight: 700, fontSize: '2rem', letterSpacing: '1px' }}>
            Recipe Finder
          </span>
          <div className="navbar-tagline text-light" style={{ fontSize: '1rem', fontWeight: 400 }}>
            Discover & Sort Delicious Recipes Instantly
          </div>
        </div>
      </div>
      <div className="form-check form-switch text-white">
        <input
          className="form-check-input"
          type="checkbox"
          id="searchModeSwitch"
          checked={searchByCuisine}
          onChange={onToggleSearchMode}
        />
        <label className="form-check-label" htmlFor="searchModeSwitch">
          Search by Cuisine
        </label>
      </div>
    </nav>
  );
}

export default Navbar;