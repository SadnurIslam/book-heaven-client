import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="p-8">
      <button onClick={toggleTheme} className="btn">
        {theme === 'light' ? '🌙' : '☀️'} Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;