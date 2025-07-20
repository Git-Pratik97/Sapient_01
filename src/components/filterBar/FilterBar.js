import React from 'react';
import './FilterBar.css';

function FilterBar({ filter, setFilter, cuisines, difficulties }) {
  return (
    <div className="filter-bar" style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
      <select
        value={filter.cuisine}
        onChange={e => setFilter(f => ({ ...f, cuisine: e.target.value }))}
      >
        <option value="">All Cuisines</option>
        {cuisines.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <select
        value={filter.difficulty}
        onChange={e => setFilter(f => ({ ...f, difficulty: e.target.value }))}
      >
        <option value="">All Difficulties</option>
        {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
      </select>
      <input
        type="number"
        min="0"
        max="5"
        value={filter.minRating}
        onChange={e => setFilter(f => ({ ...f, minRating: e.target.value }))}
        placeholder="Min Rating"
        style={{ width: 100 }}
      />
    </div>
  );
}

export default FilterBar;