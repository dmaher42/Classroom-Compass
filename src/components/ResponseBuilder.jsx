
import React from 'react';

export default function ResponseBuilder({ selectedIssue }) {
  if (!selectedIssue) {
    return (
      <div style={{ padding: 16, border: "1px dashed #cbd5e1", borderRadius: 12, color: "#475569" }}>
        Select an issue above to view scaffolded strategies.
      </div>
    );
  }

  return (
    <div style={{ padding: 16, border: "1px solid #e5e7eb", borderRadius: 12, marginTop: 8 }}>
      <h2 style={{ marginTop: 0 }}>Strategies for “{selectedIssue.title}”</h2>
      <ul>
        {selectedIssue.strategies.map((s, idx) => (
          <li key={idx}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
