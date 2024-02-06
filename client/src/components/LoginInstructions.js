import React, { useContext } from 'react';
import  ClassInfoContext  from '../context/ClassInfoContext';

const LoginInstructions = () => {
  const { classDay } = useContext(ClassInfoContext);
  //const [firstVisit, setFirstVisit] = useState(false);


  if (classDay < 5) {
    return <div>If this is your first time logging in, you should use your netid as your username and password. You will then be prompted to pick a new password. Be sure to use your netid rather than your full email address or your nine digit Notre Dame ID number. <br></br></div>;
  }

  return null; // Render nothing if conditions are not met
};

export default LoginInstructions;
