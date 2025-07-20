import React, { useState } from 'react';
import Navbar from './components/navigation/Navbar';
import SearchBox from './components/searchBoxComponent/SearchBox';
import RecipeTable from './components/RecipeTableComponent/RecipeTable';
import StatsBar from './components/statsBar/StatsBar'; // Make sure the path is correct
import Introduction from './components/introduction/Introduction';
import RecipeOfTheDay from './components/recipeOfTheDay/RecipeOfTheDay';
import FilterBar from './components/filterBar/FilterBar';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchByCuisine, setSearchByCuisine] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filter, setFilter] = useState({
    cuisine: '',
    difficulty: '',
    minRating: 0,
  });

  // Get unique cuisines and difficulties from recipes
  const cuisines = [...new Set(recipes.map(r => r.cuisine))];
  const difficulties = [...new Set(recipes.map(r => r.difficulty))];

 // Filter recipes first
const filteredRecipes = recipes.filter(r =>
  (!filter.cuisine || r.cuisine === filter.cuisine) &&
  (!filter.difficulty || r.difficulty === filter.difficulty) &&
  (Number(r.rating) >= Number(filter.minRating))
);

// Then sort the filtered recipes
const sortedRecipes = [...filteredRecipes].sort((a, b) => {
  if (!sortField) return 0;
  const aValue = a[sortField]?.toString().toLowerCase();
  const bValue = b[sortField]?.toString().toLowerCase();
  if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
  if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
  return 0;
});



  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const handleSearch = (query) => {
    if (!query) return;

    setHasSearched(true); // <-- Add this line

    const endpoint = searchByCuisine
      ? `http://localhost:8080/recipes/cuisine?cuisine=${query}`
      : `http://localhost:8080/recipes/recipename?recipeName=${query}`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error('Error:', err));
  };

  const toggleSearchMode = () => {
    setSearchByCuisine((prev) => !prev);
  };

  return (
    <div>
      <Navbar
        searchByCuisine={searchByCuisine}
        onToggleSearchMode={toggleSearchMode}
      />
      <SearchBox
        onSearch={handleSearch}
        searchByCuisine={searchByCuisine}
      />
      {!hasSearched && recipes.length > 0 && (
        <RecipeOfTheDay recipe={recipes[0]} />
      )}
      {!hasSearched && recipes.length === 0 && <Introduction />}
      {hasSearched && recipes.length === 0 && (
        <div style={{ textAlign: 'center', margin: '2rem', color: '#b26a00', fontWeight: 500 }}>
          No recipes found.<br />
          Please try a different name or cuisine.
        </div>
      )}
      <StatsBar recipes={recipes} />
      <FilterBar
        filter={filter}
        setFilter={setFilter}
        cuisines={cuisines}
        difficulties={difficulties}
      />
      <RecipeTable
        recipes={sortedRecipes}
        onSort={handleSort}
        sortField={sortField}
        sortOrder={sortOrder}
      />
    </div>
  );
}

export default App;
