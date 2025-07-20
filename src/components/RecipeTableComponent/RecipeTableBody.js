import React from 'react';
import RecipeHoverCard from './recipeHover/RecipeHoverCard';

function RecipeTableBody({ recipes }) {
  return (
    <tbody>
      {recipes.map((recipe) => (
        <tr key={recipe.id}>
          <td>{recipe.id}</td>
          <td className="hover-cell">
            <span className="hover-trigger">
              {recipe.name}
                <div className="hover-content">
                    <RecipeHoverCard recipe={recipe} />
                </div>
              {/* <RecipeHoverCard recipe={recipe} /> */}
            </span>
          </td>
          <td>{Array.isArray(recipe.mealType) ? recipe.mealType.join(', ') : recipe.mealType}</td>
          <td>{recipe.cuisine}</td>
          <td>{recipe.prepTimeMinutes} min</td>
          <td>{recipe.cookTimeMinutes} min</td>
          <td>{recipe.servings}</td>
          <td>{recipe.difficulty}</td>
          <td>{recipe.caloriesPerServing}</td>

          <td>{recipe.rating}</td>
          <td>{recipe.reviewCount}</td>
          <td>
            {recipe.tags && recipe.tags.join(', ')}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default RecipeTableBody;