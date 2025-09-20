
import React from 'react';

export default function ResponseBuilder({ selectedIssue }) {
  if (!selectedIssue) {
    return (
      <div className="card placeholder-card">
        Select an issue above to view scaffolded strategies.
      </div>
    );
  }

  return (
    <div className="card">
      <h2 className="response-heading">Strategies for “{selectedIssue.title}”</h2>
      <ul>
        {selectedIssue.strategies.map((s, idx) => (
          <li key={idx}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
