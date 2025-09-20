import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';
import ResponseBuilder from './components/ResponseBuilder';
import ColorWheel from './components/ColorWheel';
import issuesData from './data/issues.json';

export default function App() {
  const [query, setQuery] = useState("");
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);

  useEffect(() => {
    setIssues(issuesData);
  }, []);

  const filtered = issues.filter(issue =>
    issue.title.toLowerCase().includes(query.toLowerCase()) ||
    issue.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1 className="title">Classroom Compass</h1>
          <div className="subtle">Quick strategies, routines, and responses</div>
        </div>
        <ColorWheel />
      </header>

      <section>
        <SearchBar query={query} setQuery={setQuery} />
      </section>

      <section>
        <div className="grid">
          <Dashboard issues={filtered} onSelect={setSelectedIssue} />
        </div>
      </section>

      <section style={{ marginTop: 10 }}>
        <ResponseBuilder selectedIssue={selectedIssue} />
      </section>
    </div>
  );
}
