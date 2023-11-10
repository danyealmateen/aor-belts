import { useState } from 'react';
import logo from '../images/logo.jpg';

function Login(props: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (event: any) => {
    event.preventDefault();
    setLoginError('');

    try {
      //LOKALT http://localhost:3000/api/login
      //PRODUKT 'https://aor-belts-main.onrender.com/api/login'
      const response = await fetch(
        'https://aor-belts-main.onrender.com/api/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        props.onLogin(true);
      } else {
        const error = await response.text();
        console.error(error);
        setLoginError('Fel användarnamn eller lösenord.');
      }
    } catch (error) {
      setLoginError('Inloggningen misslyckades');
    }
  };

  return (
    <div>
      <img src={logo} alt='' />
      <h1 className='login-title'>Logga in</h1>
      <form onSubmit={handleLogin}>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Användarnamn'
          required
        />
        <br />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Lösenord'
          required
        />
        <br />
        <button type='submit'>Logga in</button>

        {loginError && <h2 className='login-error'>{loginError}</h2>}
      </form>
    </div>
  );
}

export default Login;
