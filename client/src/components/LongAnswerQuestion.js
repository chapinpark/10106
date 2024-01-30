import React, { useContext } from 'react';
import { QuestionsContext } from '../context/QuestionsContext';
import AnswerTextArea from './AnswerTextArea';

function LongAnswerQuestion({ questionId, questionText, answersData }) {
   // console.log('LongAnswerQuestion data', { questionId, questionText, answersData });

  const { updateAnswer } = useContext(QuestionsContext);
  const initialAnswer = answersData[questionId] || '';  // Get initial answer from context

  const handleChange = (newAnswer) => {
    updateAnswer(questionId, newAnswer);
  };

  return (
    <div className='questionContainer'>
      <p className='questionText'>{questionText}</p>
      <AnswerTextArea 
        columnName={questionId} 
        onChange={handleChange}
        initialAnswer={initialAnswer} />
    </div>
  );
}


export default LongAnswerQuestion;
