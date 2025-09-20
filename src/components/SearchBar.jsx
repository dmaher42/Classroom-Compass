
import React from 'react';

export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search issues..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      className="search-input"
    />
  );
}
