import React, { useState } from 'react';

function MainMenu({ onMenuSelect, isSmallScreen }) {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
    onMenuSelect(buttonId);
  };
  
  return (
    <div className="menu">
      <button
        className={activeButton === 'description' ? 'selectedButton' : ''}
        onClick={() => handleClick('description')}
      >
        {isSmallScreen ? 'desc' : 'course description'}
      </button>
      <button
        className={activeButton === 'syllabus' ? 'selectedButton' : ''}
        onClick={() => handleClick('syllabus')}
      >
        {isSmallScreen ? 'sched' : 'schedule'}
      </button>
      <button
        className={activeButton === 'myphi' ? 'selectedButton' : ''}
        onClick={() => handleClick('myphi')}
      >
        {isSmallScreen ? 'myphi' : 'my philosophy'}
      </button>

      {!isSmallScreen && ( // does not render in small screen
        <button
    className={activeButton === 'slack' ? 'selectedButton' : ''}
    onClick={() => window.open('https://phil10106workspace.slack.com/', '_blank')}
>slack
</button>
      )}
     

    </div>
  );
}

export default MainMenu;
