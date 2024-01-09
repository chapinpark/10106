import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function LoginStatus() {
  const { isLoggedIn, fullName } = useContext(AuthContext);

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, opacity: 0.5, textAlign: 'center', backgroundColor: 'white', fontSize: '17px' }}>
      {isLoggedIn ? `You are logged in as ${fullName}.` : "You are not logged in."}
    </div>
  );
}

export default LoginStatus;
