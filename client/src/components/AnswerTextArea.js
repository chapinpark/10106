import React, { useEffect, useRef } from 'react';


function AnswerTextArea({ columnName, onChange, initialAnswer }) {
  const textareaRef = useRef(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    // Adjust the height initially
    adjustTextareaHeight();

    // Add event listener
    window.addEventListener('resize', adjustTextareaHeight);

    // Cleanup: remove event listener
    return () => {
      window.removeEventListener('resize', adjustTextareaHeight);
    };
  }, []); // Empty dependency array ensures this runs once on mount


  const handleChange = (event) => {
    onChange(event.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <textarea
      ref={textareaRef}
      value={initialAnswer}
      onChange={handleChange}
      style={{ overflow: 'hidden' }}
    />
  );
}

export default AnswerTextArea;
