
import React from 'react';
import IssueTile from './IssueTile';

export default function Dashboard({ issues, onSelect }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: 8
    }}>
      {issues.map(issue => (
        <IssueTile key={issue.id} issue={issue} onSelect={onSelect} />
      ))}
    </div>
  );
}
