import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('dark');
  const [checked, setChecked] = useState(theme === 'light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    setChecked(savedTheme === 'light');
    document.querySelector('html').setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setChecked(!checked);
    setTheme(newTheme);
    document.querySelector('html').setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div>
      <div className='cursor-pointer text-lg flex items-center gap-2'>
        🌙<input onClick={toggleTheme} type="checkbox" checked={checked} className="toggle toggle-warning" />☀️
      </div>
    </div>
  );
}

export default ThemeToggle;