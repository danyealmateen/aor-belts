import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayKids from './DisplayKids/DisplayKids';
import NewLogin from './Login/NewLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataProvider } from './DisplayKids/DataContext';
import "./styles/global.styling.css";


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = (status: boolean) => {
  //   setIsLoggedIn(status);
  // };

  // if (!isLoggedIn) {
  //   return <NewLogin onLogin={handleLogin} />;
  // }

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
