import React from 'react';
import './DescriptionBoxComponent.css'; // Make sure this CSS file is correctly linked

function DescriptionBoxComponent() {
  const boxes = [
    { id: 1, color: 'var(--color1)', text: 'Does God exist?' },
    { id: 2, color: 'var(--color2)', text: 'Do we have free will?' },
    { id: 3, color: 'var(--color3)', text: 'What am I?' },
    { id: 4, color: 'var(--color4)', text: 'What should I believe?' },
    { id: 5, color: 'var(--color5)', text: 'How should I live?' },
  ];

  return (
    <div className="box-container">
      {boxes.map((box) => (
        <div
          key={box.id}
          className="box"
          style={{ backgroundColor: box.color }}
        >
          {box.text}
        </div>
      ))}
    </div>
  );
}

export default DescriptionBoxComponent;
