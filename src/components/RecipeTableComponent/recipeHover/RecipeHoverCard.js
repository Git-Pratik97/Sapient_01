import React from 'react';
import './RecipeHoverCard.css';

function RecipeHoverCard({ recipe }) {
  return (
    <div
      className="hover-card"
    //   style={{ '--hover-bg-image': `url('${recipe.image}')` }}
    >
      <div className="hover-card-bg" />
      <table  style={{ '--hover-bg-image': `url('${recipe.image}')` }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Ingredients</th>
            <th>Instructions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ fontWeight: 'bold', fontSize: '1.1em', verticalAlign: 'top' }}>
              {recipe.name}
            </td>
            <td style={{ textAlign: 'center', verticalAlign: 'top' }}>
              <img src={recipe.image} alt={recipe.name} style={{ maxWidth: 120, borderRadius: 8 }} />
            </td>
            <td style={{ verticalAlign: 'top' }}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {recipe.ingredients && recipe.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </td>
            <td style={{ verticalAlign: 'top' }}>
              <ol style={{ margin: 0, paddingLeft: 18 }}>
                {recipe.instructions && recipe.instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecipeHoverCard;