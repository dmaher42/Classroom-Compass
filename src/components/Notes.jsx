import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'compass-notes';

export default function Notes() {
  const [notes, setNotes] = useState('');

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== null) {
        setNotes(stored);
      }
    } catch (error) {
      // Ignore localStorage access issues.
    }
  }, []);

  const handleChange = (event) => {
    const nextNotes = event.target.value;
    setNotes(nextNotes);

    try {
      window.localStorage.setItem(STORAGE_KEY, nextNotes);
    } catch (error) {
      // Ignore write errors.
    }
  };

  return (
    <section className="section section-spacious">
      <label htmlFor="compass-notes" className="notes-label">
        Notes
      </label>
      <textarea
        id="compass-notes"
        value={notes}
        onChange={handleChange}
        rows={6}
        className="notes-textarea"
        placeholder="Jot down reminders, next steps, or insights here..."
      />
    </section>
  );
}
