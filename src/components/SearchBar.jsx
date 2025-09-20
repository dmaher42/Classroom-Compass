
import React from 'react';

export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search issues..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      style={{
        padding: "10px 12px",
        width: "100%",
        border: "1px solid #ddd",
        borderRadius: 8,
        fontSize: 16
      }}
    />
  );
}
