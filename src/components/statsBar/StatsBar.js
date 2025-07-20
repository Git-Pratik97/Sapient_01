import React from 'react';
import './StatsBar.css';

function StatsBar({ recipes }) {
  if (!recipes.length) return null;
  const topRecipe = recipes.reduce((a, b) => (a.rating > b.rating ? a : b));
  const cuisines = [...new Set(recipes.map(r => r.cuisine))];

  return (
    <div className="stats-bar">
      <div>Total Recipes: <b>{recipes.length}</b></div>
      <div>Top Cuisine: <b>{cuisines[0]}</b></div>
      <div>Highest Rated: <b>{topRecipe.name} ({topRecipe.rating})</b></div>
    </div>
  );
}

export default StatsBar;