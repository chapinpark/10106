import React, { useContext } from 'react';
import { QuestionsContext } from '../context/QuestionsContext';

function CheckboxQuestion({ questionId, questionText, questionOptions, selectedAnswers }) {
  const { updateAnswer } = useContext(QuestionsContext);
  const safeSelectedAnswers = selectedAnswers || [];

  const handleChange = (optionIndex) => {
    const optionValue = (optionIndex + 1).toString();
    let updatedSelectedOptions;

    if (safeSelectedAnswers.includes(optionValue)) {
      updatedSelectedOptions = safeSelectedAnswers.filter(item => item !== optionValue);
    } else {
      updatedSelectedOptions = [...safeSelectedAnswers, optionValue];
    }

    updateAnswer(questionId, updatedSelectedOptions);
  };

  const getButtonClass = (index) => {
    const isSelected = safeSelectedAnswers.includes((index + 1).toString());
    return isSelected ? "checkboxButton selected" : "checkboxButton";
  };

  return (
    <div className='questionContainer'>
      <p>{questionText}</p>
      <div className='optionsContainer'>
      {questionOptions.map((option, index) => (
        <label key={index} className={getButtonClass(index)}>
          <input
            type="checkbox"
            className="checkboxInput"
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

export default CheckboxQuestion;
