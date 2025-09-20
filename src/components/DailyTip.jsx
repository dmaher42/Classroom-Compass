import React from 'react';
import issuesData from '../data/issues.json';

export default function DailyTip() {
  // Flatten all strategies from all issues into a single array
  const allStrategies = issuesData.flatMap(issue => issue.strategies);
  
  // Pick a random strategy each render
  const randomStrategy = allStrategies[Math.floor(Math.random() * allStrategies.length)];

  return (
    <div style={{ 
      padding: 16, 
      border: "1px solid #e5e7eb", 
      borderRadius: 12, 
      background: "#f9fafb",
      boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
    }}>
      <h3 style={{ margin: "0 0 8px 0", fontSize: 16, color: "#374151" }}>Daily tip</h3>
      <p style={{ margin: 0, color: "#4b5563", fontSize: 14 }}>{randomStrategy}</p>
    </div>
  );
}