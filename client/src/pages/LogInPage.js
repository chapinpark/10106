import React from 'react';
import LoginForm from '../components/LoginForm';
import './LoginPage.css';

const LoginPage = ({ onLoginSuccess }) => {  // Accept onLoginSuccess prop
  return (
    <div className="loginContainer">

      <h1>Login Page</h1>
      <LoginForm onLoginSuccess={onLoginSuccess} /> 
      {/* Add other content below the login form */}
    </div>
  );
};

export default LoginPage;
