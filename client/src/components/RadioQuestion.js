import React, { useContext } from 'react';
import { QuestionsContext } from '../context/QuestionsContext';

function RadioQuestion({ questionId, questionText, questionOptions, selectedAnswers }) {
  const { updateAnswer } = useContext(QuestionsContext);
  const safeSelectedAnswers = selectedAnswers || [];

  const handleChange = (optionIndex) => {
    const answer = (optionIndex + 1).toString();
    updateAnswer(questionId, [answer]);
  };

  const getButtonClass = (index) => {
    const isSelected = safeSelectedAnswers.includes((index + 1).toString());
    return isSelected ? "radioButton selected" : "radioButton";
  };

  return (
    <div className='questionContainer'>
      <p className='questionText'>{questionText}</p>
            <div className='optionsContainer'>
      {questionOptions.map((option, index) => (
        <label key={index} className={getButtonClass(index)}>
          <input
            className="radioInput"
            type="radio"
            name={questionId}
            checked={safeSelectedAnswers.includes((index + 1).toString())}
            onChange={() => handleChange(index)}
          />
          {option}
        </label>
      ))}
      </div>
      </div>
  );
}


export default RadioQuestion;
