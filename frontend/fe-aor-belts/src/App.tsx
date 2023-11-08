import DisplayData from './DisplayData/DisplayData';
import '../src/styles/global.styling.css';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <button className='toggle-btn' onClick={toggleTheme}>Toggle theme</button>
      <DisplayData />
    </div>
  );
}

export default App;
