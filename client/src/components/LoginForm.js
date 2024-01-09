import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function LoginForm({ onLoginSuccess }) {  // Accept the prop here
  const { handleLogin } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginSuccessful = await handleLogin(username, password);

    if (loginSuccessful) {
      console.log('Login successful');
      onLoginSuccess();  // Call onLoginSuccess on successful login
    } else {
      console.error('Login failed');
      // Handle login error (e.g., display an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;




