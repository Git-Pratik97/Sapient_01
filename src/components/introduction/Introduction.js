import React from 'react';
import './Introduction.css';

function Introduction() {
  return (
    <div className="intro-hero">
      <img
        src="https://img.icons8.com/ios-filled/100/ffa500/pizza.png"
        alt="Welcome"
        className="intro-hero-img"
      />
      <h1>Welcome to Recipe Finder!</h1>
      <p>
        Discover, search, and sort delicious recipes from around the world.<br />
        Use the search box above to get started by name or cuisine.
      </p>
      <div className="intro-hero-tip">
        <span>Tip:</span> Try searching for <b>Chicken</b> or <b>Italian</b>!
      </div>
    </div>
  );
}

export default Introduction;