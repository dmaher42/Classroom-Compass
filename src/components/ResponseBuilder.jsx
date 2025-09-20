import React from 'react';

export default function ResponseBuilder({ selectedIssue }) {
  if (!selectedIssue) {
    return (
      <div className="card card-muted">
        Select an issue above to view scaffolded strategies.
      </div>
    );
  }

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Strategies for “{selectedIssue.title}”</h2>
      <ul>
        {selectedIssue.strategies.map((s, idx) => (
          <li key={idx}>{s}</li>
        ))}
      </ul>
      <div style={{ marginTop: 12 }}>
        <button className="btn" onClick={() => window.print()}>Print strategy</button>
      </div>
    </div>
  );
}
