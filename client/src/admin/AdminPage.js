import React, { useState } from 'react';
import { godQuestions } from '../questions/godQuestions';
import { freeWillQuestions } from '../questions/freeWillQuestions';
import { personalIdentityQuestions } from '../questions/personalIdentityQuestions';
import { beliefQuestions } from '../questions/beliefQuestions';
import { ethicsQuestions } from '../questions/ethicsQuestions';
import './AdminPage.css';
import Papa from 'papaparse'; // for csv files

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

  // code for uploading csv files
  
   const handleFileUpload = (event) => {
    const file = event.target.files[0];
    parseCsv(file);
  };

const parseCsv = (file) => {
  Papa.parse(file, {
    header: true,
    complete: (results) => {
      const filteredUsers = results.data
        .filter(user => user.netid && user.fullname)
        .map(user => ({ netid: user.netid.trim(), fullname: user.fullname.trim() }));

      if (filteredUsers.length !== results.data.length) {
        console.error('Some rows were skipped due to missing netid or fullname');
      }

      console.log('Filtered and Validated Users:', filteredUsers);
      handleAddUsers(filteredUsers);
    },
    error: (error) => console.error('Error parsing CSV:', error)
  });
};



const handleAddUsers = async (users) => {
  try {
    const apiUrl = process.env.REACT_APP_API_BASE_URL;

  // Log the final data being sent to the backend
    console.log('Sending the following data to backend:', users);

    const response = await fetch(`${apiUrl}/api/add-users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(users)
    });

    if (!response.ok) {
      throw new Error('Failed to add users');
    }
    console.log('Users added successfully');
  } catch (error) {
    console.error('Error:', error);
  }
};

  
  
  
  
  
  
  
  
  
  
  
  
  
 // return if not logged in 
  
if (!loggedIn) {
  return (
    <div className='adminContainer'>
      <h1>Admin Login</h1>
      <form onSubmit={(e) => {
        e.preventDefault(); // Prevent the default form submission
        handleLogin(); // Invoke the login handler
      }}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          // Optional: Automatically focus this input when the component loads
          autoFocus 
        />
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}




// return if logged in


  return (
    <div className='adminContainer'>
      <h1>Admin Page</h1>
      
      <div>
      <h3>Add all tables in question files to the database</h3>  <button onClick={handleUpdateAllTables}>Update All Tables</button>
      </div>
      
<div>
  <h3>Add New User</h3>
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
  /><br/>
  <button onClick={handleAddUser}>Add User</button>
      </div>
      
      
   <div>
  <h3>Upload CSV of users (must have netid and fullname columns)</h3>
  <label htmlFor="file-upload" className="custom-file-upload">
    Upload CSV
  </label>
  <input id="file-upload" type="file" onChange={handleFileUpload} accept=".csv" style={{ display: 'none' }} />
</div>


    </div>
  );
};

export default AdminPage;
