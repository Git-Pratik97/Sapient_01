import React, { useState } from 'react';
import './SearchBox.css';

function SearchBox({ onSearch, searchByCuisine }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = () => {
    onSearch(query);
    setQuery(''); // Clear the search box
    setSuggestions([]);
  };

  // filepath: c:\Users\pratikam\Project_2_0\Test_5_hrs\sapient\src\components\SearchBoxComponent\SearchBox.js
  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length >= 3) {
      try {
        const response = await fetch(`/api/recipes/suggestions?prefix=${encodeURIComponent(value)}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Suggestions:', data); // Debug line
          setSuggestions(data);
        } else {
          setSuggestions([]);
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = async (name) => {
    setQuery(name);
    setSuggestions([]);
    onSearch(name);

    // Fetch all recipes from the backend and show as suggestions
    const response = await fetch('/api/recipes'); // Update with your actual endpoint
    if (response.ok) {
      const allRecipes = await response.json();
      setSuggestions(allRecipes);
    }
  };

  return (
    <div className="container my-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={
            searchByCuisine
              ? "Search recipes by Cuisine..."
              : "Search recipes by Name..."
          }
          value={query}
          onChange={handleChange}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul className="list-group position-absolute" style={{ zIndex: 1000, width: '100%' }}>
          {suggestions.map((recipe) => (
            <li
              key={recipe.id}
              className="list-group-item list-group-item-action"
              onClick={() => handleSuggestionClick(recipe.name)}
              style={{ cursor: 'pointer' }}
            >
              {recipe.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;