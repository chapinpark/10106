import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Adjust the import path as necessary

function MyPhilosophyHeader() {
  const { fullName } = useContext(AuthContext);

  // Function to format the header text based on the fullName
  const formatHeaderText = (name) => {
    if (!name) return "Philosophy";

    // Check if the name ends with 's'
    const endsWithS = name.endsWith('s') || name.endsWith('S');
    return `${name}${endsWithS ? "'" : "'s"} Philosophy`;
  };

  return (
    <h1>{formatHeaderText(fullName)}</h1>
  );
}

export default MyPhilosophyHeader;
