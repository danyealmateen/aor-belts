import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.styling.css';

const NewLogin = (props: any) => {
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
        console.log(error);
        setLoginError('Wrong username or password');
      }
    } catch (error) {
      setLoginError('Login failed');
    }
  };

  return (
    <>
      <div className='input-container'>
        <h1>AOR Kids</h1>
        <form onSubmit={handleLogin}>
          <FloatingLabel
            controlId='username'
            label='Användarnamn'
            className='mb-3'
          >
            <Form.Control
              type='text'
              placeholder='Användarnamn'
              className='custom-focus'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId='password' label='Lösenord'>
            <Form.Control
              type='password'
              placeholder='Lösenord'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FloatingLabel>
          <br />
          <Button className='primary-btn' variant='success' type='submit'>
            Logga in
          </Button>
          {loginError && <h2>{loginError}</h2>}
        </form>
      </div>
    </>
  );
};

export default NewLogin;
