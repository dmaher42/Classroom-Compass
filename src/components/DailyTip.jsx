import React from 'react';
import issuesData from '../data/issues.json';

export default function DailyTip() {
  // Flatten all strategies from all issues into a single array
  const allStrategies = issuesData.flatMap(issue => issue.strategies);
  
  // Pick a random strategy each render
  const randomStrategy = allStrategies[Math.floor(Math.random() * allStrategies.length)];

  return (
    <div className="card card-muted">
      <h3 className="daily-tip-heading">Daily tip</h3>
      <p className="daily-tip-text">{randomStrategy}</p>
    </div>
  );
}