import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayData from './DisplayKids/DisplayKids';
import NewLogin from './Login/NewLogin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = (status: boolean) => {
  //   setIsLoggedIn(status);
  // };

  // if (!isLoggedIn) {
  //   return <NewLogin onLogin={handleLogin} />;
  // }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<DisplayData />} />
      </Routes>
    </Router>
  );
}
export default App;
