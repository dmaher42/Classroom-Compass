
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';
import ResponseBuilder from './components/ResponseBuilder';
import DailyTip from './components/DailyTip';
import Notes from './components/Notes';
import issuesData from './data/issues.json';
import './styles.css';

export default function App() {
  const [query, setQuery] = useState("");
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);

  useEffect(() => {
    setIssues(issuesData);
  }, []);

  const filtered = issues.filter(issue =>
    issue.title.toLowerCase().includes(query.toLowerCase())
    || issue.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Classroom Compass</h1>
      </header>

      <section className="section">
        <DailyTip />
      </section>

      <section className="section">
        <SearchBar query={query} setQuery={setQuery} />
      </section>

      <section className="section section-tight">
        <Dashboard issues={filtered} onSelect={setSelectedIssue} />
      </section>

      <section className="section section-tight">
        <ResponseBuilder selectedIssue={selectedIssue} />
      </section>

      <section className="section section-tight">
        <Notes />
      </section>
    </div>
  );
}
