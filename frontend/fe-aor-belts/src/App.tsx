import DisplayData from './DisplayData/DisplayData';
import Login from './Login/Login';
import '../src/styles/global.styling.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status: boolean) => {
    setIsLoggedIn(status);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      <DisplayData />
    </div>
  );
}

export default App;
