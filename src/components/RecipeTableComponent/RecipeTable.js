import React from 'react';
import './RecipeTable.css';
import RecipeTableBody from './RecipeTableBody';

function RecipeTable({ recipes, onSort, sortField, sortOrder }) {
  if (recipes.length === 0) return null;

  const renderSortIcon = (field) => {
    if (sortField !== field) return null;
    return sortOrder === 'asc' ? ' 🔼' : ' 🔽';
  };

  return (
    <div className="container mt-4">
      <div style={{ overflowX: 'auto', width: '100%' }}>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th onClick={() => onSort('id')}>ID {renderSortIcon('id')}</th>
            <th onClick={() => onSort('name')}>Name {renderSortIcon('name')}</th>
            <th onClick={() => onSort('mealType')}>Meal Type {renderSortIcon('mealType')}</th>
            <th onClick={() => onSort('cuisine')}>Cuisine {renderSortIcon('cuisine')}</th>
            <th onClick={() => onSort('prepTimeMinutes')}>Prep Time {renderSortIcon('prepTimeMinutes')}</th>
            <th onClick={() => onSort('cookTimeMinutes')}>Cook Time {renderSortIcon('cookTimeMinutes')}</th>
            <th onClick={() => onSort('servings')}>Servings {renderSortIcon('servings')}</th>
            <th onClick={() => onSort('difficulty')}>Difficulty {renderSortIcon('difficulty')}</th>
            <th onClick={() => onSort('caloriesPerServing')}>Calories {renderSortIcon('caloriesPerServing')}</th>
            <th onClick={() => onSort('rating')}>Rating {renderSortIcon('rating')}</th>
            <th onClick={() => onSort('reviewCount')}>Reviews {renderSortIcon('reviewCount')}</th>
            <th>Tags</th>
          </tr>
        </thead>
        <RecipeTableBody recipes={recipes} />
      </table>
      </div>
    </div>
  );
}

export default RecipeTable;