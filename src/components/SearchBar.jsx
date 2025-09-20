import React from 'react';

export default function SearchBar({ query, setQuery }) {
  return (
    <input
      className="input"
      type="text"
      placeholder="Search issues…"
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  );
}
