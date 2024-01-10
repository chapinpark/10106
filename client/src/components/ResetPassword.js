import React, { useState } from 'react';

function ResetPassword({ username, onResetSuccess }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

 const resetPassword = async () => {
  try {
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    const response = await fetch(`${apiUrl}/api/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, newPassword }),
    });

    if (!response.ok) {
      throw new Error('Password reset failed');
    }

    return response.json();
  } catch (error) {
    setErrorMessage(error.message);
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Existing validation checks
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    if (newPassword.length < 4) {
      setErrorMessage('Password must be at least 4 characters long.');
      return;
    }
    if (newPassword === username) {
      setErrorMessage('Password cannot be the same as your username.');
      return;
    }

    // Call the resetPassword function and handle the response
    const result = await resetPassword();
    if (result) {
      // Handle successful password reset
      onResetSuccess();
    }
  };

  

  return (
    <div>
      <p>Welcome to Philosophy 10106! Before entering the My Philosophy page, please enter the password you would like to use to log into this site over the course of the semester. It can be any string of 4 or more characters other than your username.</p>
      <form onSubmit={handleSubmit}>
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Reset Password</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default ResetPassword;
