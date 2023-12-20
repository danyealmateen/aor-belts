import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayKids from './DisplayKids/DisplayKids';
import NewLogin from './Login/NewLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from './DisplayKids/DataContext';
import { DataProvider } from './DisplayKids/DataContext';
import UpdateKids from './DisplayKids/UpdateKids';

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
            <Route path='/' element={<DisplayKids/>} />

          </Routes>
        </Router>
      </DataProvider>
    </>
  );
}
export default App;
