import { useState, useEffect } from 'react';

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
        const message = await response.text();
        props.onLogin(true);
        console.log(message);
      } else {
        const error = await response.text();
        console.error(error);
      }
    } catch (error) {
      setLoginError('Inloggningen misslyckades');
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleLogin}>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='username'
        />
        <br />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
        />
        <br />
        <button type='submit'>Login</button>
      </form>
      {loginError && <p>{loginError}</p>}
    </div>
  );
}

export default Login;
