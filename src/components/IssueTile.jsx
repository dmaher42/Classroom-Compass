
import React from 'react';

export default function IssueTile({ issue, onSelect }) {
  return (
    <button
      onClick={() => onSelect(issue)}
      className="card issue-tile"
      aria-label={`Open strategies for ${issue.title}`}
    >
      <h3 className="issue-tile-title">{issue.title}</h3>
      <p className="issue-tile-description">{issue.description}</p>
    </button>
  );
}
