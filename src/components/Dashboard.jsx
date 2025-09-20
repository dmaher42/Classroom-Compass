import React from 'react';
import IssueTile from './IssueTile';

export default function Dashboard({ issues, onSelect }) {
  return (
    <div className="grid">
      {issues.map(issue => (
        <IssueTile key={issue.id} issue={issue} onSelect={onSelect} />
      ))}
    </div>
  );
}
