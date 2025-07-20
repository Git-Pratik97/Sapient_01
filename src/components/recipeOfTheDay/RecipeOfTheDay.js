import React from 'react';
import './RecipeOfTheDay.css';

function RecipeOfTheDay({ recipe }) {
  if (!recipe) return null;

  return (
    <div className="recipe-of-day">
      <h2>🍽️ Recipe of the Day</h2>
      <div className="rod-content">
        <img src={recipe.image} alt={recipe.name} className="rod-img" />
        <div>
          <h3>{recipe.name}</h3>
          <p><b>Cuisine:</b> {recipe.cuisine}</p>
          <p><b>Rating:</b> {recipe.rating} ⭐</p>
          <p className="rod-desc">{recipe.instructions?.[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeOfTheDay;