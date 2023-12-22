import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayKids from './DisplayKids/DisplayKids';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataProvider } from './DisplayKids/DataContext';
import "./styles/global.styling.css";
import Dashboard from './Dashboard/Dashboard';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status: boolean) => {
    setIsLoggedIn(status);
  };

  if (!isLoggedIn) {
    return <Dashboard onLogin={handleLogin} />;
  }

  return (
    <>
      <DataProvider>
        <Router>
          <Routes>
            <Route path='/' element={<DisplayKids />} />
          </Routes>
        </Router>
      </DataProvider>
    </>
  );
}
export default App;
