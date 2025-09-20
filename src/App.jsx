
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';
import ResponseBuilder from './components/ResponseBuilder';
import DailyTip from './components/DailyTip';
import Notes from './components/Notes';
import issuesData from './data/issues.json';

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
    <div style={{ maxWidth: "980px", margin: "auto", padding: "24px", fontFamily: "system-ui, Arial, sans-serif" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <h1 style={{ margin: 0 }}>Classroom Compass</h1>
      </header>

      <section style={{ marginTop: 16 }}>
        <DailyTip />
      </section>

      <section style={{ marginTop: 16 }}>
        <SearchBar query={query} setQuery={setQuery} />
      </section>

      <section style={{ marginTop: 8 }}>
        <Dashboard issues={filtered} onSelect={setSelectedIssue} />
      </section>

      <section style={{ marginTop: 8 }}>
        <ResponseBuilder selectedIssue={selectedIssue} />
      </section>

      <section style={{ marginTop: 8 }}>
        <Notes />
      </section>
    </div>
  );
}
