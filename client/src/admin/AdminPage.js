import React, { useState } from 'react';
import { godQuestions } from '../questions/godQuestions';
import { freeWillQuestions } from '../questions/freeWillQuestions';
import { personalIdentityQuestions } from '../questions/personalIdentityQuestions';
import { beliefQuestions } from '../questions/beliefQuestions';
import { ethicsQuestions } from '../questions/ethicsQuestions';

const AdminPage = () => {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (password === 'Wittgenstein1953') {
      setLoggedIn(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleUpdateAllTables = async () => {
    const questionIdMappings = {
      God: godQuestions().map(q => q.questionId),
      FreeWill: freeWillQuestions().map(q => q.questionId),
      PersonalIdentity: personalIdentityQuestions().map(q => q.questionId),
      Belief: beliefQuestions().map(q => q.questionId),
      Ethics: ethicsQuestions().map(q => q.questionId),
    };

    try {
      const apiUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch('${apiUrl}/api/update-all-tables', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionIdMappings })
      });

      if (!response.ok) {
        throw new Error('Failed to update tables');
      }
      console.log('Tables updated successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!loggedIn) {
    return (
      <div>
        <h2>Admin Login</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to the Admin Page</h1>
      <button onClick={handleUpdateAllTables}>Update All Tables</button>
      {/* ... other component code ... */}
    </div>
  );
};

export default AdminPage;
