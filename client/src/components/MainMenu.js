import React, { useState } from 'react';

function MainMenu({ onMenuSelect }) {
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
        course description
      </button>
      <button
        className={activeButton === 'syllabus' ? 'selectedButton' : ''}
        onClick={() => handleClick('syllabus')}
      >
        schedule
      </button>
      <button
        className={activeButton === 'myphi' ? 'selectedButton' : ''}
        onClick={() => handleClick('myphi')}
      >
        my philosophy
      </button>
     <button
    className={activeButton === 'slack' ? 'selectedButton' : ''}
    onClick={() => window.open('https://philo1016.slack.com/', '_blank')}
>
    slack
</button>

    </div>
  );
}

export default MainMenu;
