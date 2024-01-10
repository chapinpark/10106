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
    const response = await fetch(`${apiUrl}/api/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

      // Check if username and password are the same


    if (response.ok && !(username === password)) {
      const data = await response.json();
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('fullName', data.fullName);
      sessionStorage.setItem('username', username); // Store the username in sessionStorage
      setIsLoggedIn(true);
      setFullName(data.fullName);
      setUsername(username); // Update the username state
      return { success: true };
    } else {
      // If response is not OK, we need to find out why
      if (response.status === 404) { // Assuming 404 for user not found
        return { success: false, reason: 'USER_NOT_FOUND' };
      } else if (response.status === 401) { // Assuming 401 for wrong password
        return { success: false, reason: 'WRONG_PASSWORD' };
      }  else if (username === password) {
        return { success: false, reason: 'RESET_PASSWORD' };
      } else {
        // Handle other HTTP errors
        return { success: false, reason: 'OTHER_ERROR' };
      }
    }
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, reason: 'NETWORK_ERROR' };
  }
};


  return (
    <AuthContext.Provider value={{ isLoggedIn, username, fullName, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
