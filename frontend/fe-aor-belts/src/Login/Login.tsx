import { useState, useEffect } from 'react';

function Login(props: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: any) => {
    event.preventDefault();
    props.onLogin(true);

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const message = await response.text();
        console.log(message);
      } else {
        const error = await response.text();
        console.error(error);
      }
    } catch (error) {
      console.error('Inloggningen misslyckades', error);
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleLogin} action='/login' method='post'>
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
    </div>
  );
}

export default Login;
