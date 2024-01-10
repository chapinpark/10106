import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import ResetPassword from './ResetPassword'; // Adjust the path as needed


function LoginForm({ onLoginSuccess }) {
  const { handleLogin } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [resetPassword, setResetPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any existing error messages
    const response = await handleLogin(username, password);

    if (response.success) {
      console.log('Login successful');
      onLoginSuccess();
    } else {
      if (response.reason === 'USER_NOT_FOUND') {
        setErrorMessage('That username is not among the listed netids for this course. Be sure that you are using your netid rather than your email address or your numeric Notre Dame ID. (So, e.g., jspeaks rather than jspeaks@nd.edu or 123456789.) If you are using your netid and are registered for the course, please send an email to jspeaks@nd.edu.');
      } else if (response.reason === 'WRONG_PASSWORD') {
        setErrorMessage('That is not the password saved for that netid. (Remember to use your netid -- like jspeaks -- rather than your email address or your nine-digit Notre Dame ID number.) You can try again, or, if you forgot your password, send an email to jspeaks@nd.edu.');
      } else if (response.reason === 'RESET_PASSWORD') {
        setResetPassword(true); // Show the password reset field
      }
    }
  };

 

  return (
    <div>

      {resetPassword ? (
      <ResetPassword 
        username={username} 
        onResetSuccess={() => {
          console.log('Password reset successful'); // Handle post-reset logic here
          onLoginSuccess();
        }}
      />
    ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Username: 
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label><br></br>
          <label>
            Password: 
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Login</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      )}
    </div>
  );
}

export default LoginForm;
