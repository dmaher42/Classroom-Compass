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
    <section style={{ marginTop: 24 }}>
      <label htmlFor="compass-notes" style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>
        Notes
      </label>
      <textarea
        id="compass-notes"
        value={notes}
        onChange={handleChange}
        rows={6}
        style={{
          width: '100%',
          padding: 12,
          fontSize: '1rem',
          fontFamily: 'inherit',
          borderRadius: 8,
          border: '1px solid #ccc',
          resize: 'vertical'
        }}
        placeholder="Jot down reminders, next steps, or insights here..."
      />
    </section>
  );
}
