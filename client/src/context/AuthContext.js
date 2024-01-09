import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState(''); // Add username state

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const storedFullName = sessionStorage.getItem('fullName');
    const storedUsername = sessionStorage.getItem('username'); // Retrieve username from sessionStorage
    if (loggedIn) {
      setIsLoggedIn(true);
      setFullName(storedFullName);
      setUsername(storedUsername); // Set the stored username
    }
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const apiUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch('${apiUrl}/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('fullName', data.fullName);
        sessionStorage.setItem('username', username); // Store the username in sessionStorage
        setIsLoggedIn(true);
        setFullName(data.fullName);
        setUsername(username); // Update the username state
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, fullName, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
