// MyPhiMenu.js
import React, { useState } from 'react';


function MyPhiMenu({ setActiveMyPhiPage, onReturnToLastVisitedPage }) {
  const [activeMyPhiButton, setActiveMyPhiButton] = useState('God');

  const handleButtonClick = (myPhiPage) => {
    setActiveMyPhiPage(myPhiPage);
    setActiveMyPhiButton(myPhiPage);
  };


  return (
    <div className="myphi-menu">
      <button 
        className={activeMyPhiButton === 'God' ? 'myPhiActiveButton' : ''}
        onClick={() => handleButtonClick('God')}
      >
        Does God exist?
      </button>
      <button 
        className={activeMyPhiButton === 'FreeWill' ? 'myPhiActiveButton' : ''}
        onClick={() => handleButtonClick('FreeWill')}
      >
        Do we have free will?
      </button>
      <button 
        className={activeMyPhiButton === 'PersonalIdentity' ? 'myPhiActiveButton' : ''}
        onClick={() => handleButtonClick('PersonalIdentity')}
      >
        What am I?
      </button>
      <button 
        className={activeMyPhiButton === 'Belief' ? 'myPhiActiveButton' : ''}
        onClick={() => handleButtonClick('Belief')}
      >
        What should I believe?
      </button>
      <button 
        className={activeMyPhiButton === 'Ethics' ? 'myPhiActiveButton' : ''}
        onClick={() => handleButtonClick('Ethics')}
      >
        How should I live?
      </button>

    
      
    </div>
  );
}

export default MyPhiMenu;
