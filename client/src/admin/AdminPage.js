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
      const response = await fetch(`${apiUrl}/api/update-all-tables`, {
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

const [netid, setNetid] = useState('');
const [fullName, setFullName] = useState('');

  const handleAddUser = async () => {
  try {
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    const response = await fetch(`${apiUrl}/api/add-user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ netid, fullName })
    });

    if (!response.ok) {
      throw new Error('Failed to add user');
    }
    console.log('User added successfully');
    // Optionally, reset the form fields
    setNetid('');
    setFullName('');
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

      {/* ... inside your return statement ... */}
<div>
  <h2>Add New User</h2>
  <input
    type="text"
    value={netid}
    onChange={(e) => setNetid(e.target.value)}
    placeholder="Enter NetID"
  />
  <input
    type="text"
    value={fullName}
    onChange={(e) => setFullName(e.target.value)}
    placeholder="Enter Full Name"
  />
  <button onClick={handleAddUser}>Add User</button>
</div>

      {/* ... other component code ... */}
    </div>
  );
};

export default AdminPage;
