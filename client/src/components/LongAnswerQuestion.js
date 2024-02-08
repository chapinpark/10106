import React, { useContext } from 'react';
import { QuestionsContext } from '../context/QuestionsContext';
import AnswerTextArea from './AnswerTextArea';

function LongAnswerQuestion({ questionId, questionText, answersData, isForPDF }) {
   // console.log('LongAnswerQuestion data', { questionId, questionText, answersData });

  const { updateAnswer } = useContext(QuestionsContext);
  const initialAnswer = answersData[questionId] || '';  // Get initial answer from context

  const handleChange = (newAnswer) => {
    updateAnswer(questionId, newAnswer);
  };

  return (
    <div className='questionContainer'>
      <p className='questionText longAnswerQuestionText'>{questionText}</p>
     {isForPDF ? (
        // Render a div with the text for PDF
        <div className='longAnswerTextForPDF'>{initialAnswer}</div>
      ) : (
        // Render the AnswerTextArea for interactive use
        <AnswerTextArea 
          columnName={questionId} 
          onChange={handleChange}
          initialAnswer={initialAnswer} />
      )}
       </div>
  );
}


export default LongAnswerQuestion;
