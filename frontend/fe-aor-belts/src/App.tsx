import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayData from './DisplayData/DisplayData';
import Login from './Login/Login';
import DisplayKnattar from './DisplayKnattar/DisplayKnattar';
import '../src/styles/global.styling.css';
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
    <Router>
      <Routes>
        <Route path='/' element={<DisplayData />} />
        <Route path='/knattar' element={<DisplayKnattar />} />
      </Routes>
    </Router>
  );
}

export default App;
