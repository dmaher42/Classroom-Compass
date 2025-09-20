import React from 'react';

export default function IssueTile({ issue, onSelect }) {
  return (
    <button
      className="card clickable"
      onClick={() => onSelect(issue)}
      aria-label={`Open strategies for ${issue.title}`}
    >
      <h3 style={{ margin: "0 0 6px 0", fontSize: 18 }}>{issue.title}</h3>
      <p className="subtle" style={{ margin: 0 }}>{issue.description}</p>
    </button>
  );
}
