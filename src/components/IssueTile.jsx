
import React from 'react';

export default function IssueTile({ issue, onSelect }) {
  return (
    <button
      onClick={() => onSelect(issue)}
      style={{
        textAlign: "left",
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 16,
        margin: 8,
        background: "white",
        cursor: "pointer",
        boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
      }}
      aria-label={`Open strategies for ${issue.title}`}
    >
      <h3 style={{ margin: "0 0 6px 0", fontSize: 18 }}>{issue.title}</h3>
      <p style={{ margin: 0, color: "#4b5563" }}>{issue.description}</p>
    </button>
  );
}
