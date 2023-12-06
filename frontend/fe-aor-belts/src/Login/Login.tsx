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
    <div className='content-container-login'>
      <img className='logo' src={logo} alt='' />
      <form onSubmit={handleLogin}>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Användarnamn'
          required
          className='input-username'
        />
        <br />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Lösenord'
          required
          className='input-password'
        />
        <br />
        <button className='login-btn' type='submit'>
          Logga in
        </button>
        {loginError && <h2 className='login-error'>{loginError}</h2>}
      </form>
    </div>
  );
}

export default Login;
