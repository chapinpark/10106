import React, { createContext, useState, useContext } from 'react';

const ClassInfoContext = createContext();

export const ClassInfoProvider = ({ children }) => {
  // Set initial values for classDay and classSection
  const [classDay, setClassDay] = useState(10); // Assuming classDay initially is 1
  const [classSection, setClassSection] = useState(1); // Assuming initial section

  const value = {
    classDay,
    setClassDay,
    classSection,
    setClassSection
  };

  return (
    <ClassInfoContext.Provider value={value}>
      {children}
    </ClassInfoContext.Provider>
  );
};

export const useClassInfo = () => {
  const context = useContext(ClassInfoContext);
  if (context === undefined) {
    throw new Error('useClassInfo must be used within a ClassInfoProvider');
  }
  return context;
};

export default ClassInfoContext;
