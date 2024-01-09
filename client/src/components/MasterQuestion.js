// this if the logic for question rendering; based on the question type, it renders the appropriate question component

import React, { useContext, useEffect } from 'react';
import { QuestionsContext } from '../context/QuestionsContext';
import { useClassInfo } from '../context/ClassInfoContext';
import RadioQuestion from './RadioQuestion';
import CheckboxQuestion from './CheckboxQuestion';
import LongAnswerQuestion from './LongAnswerQuestion';
import Contradiction from './Contradiction';
import './MasterQuestion.css';
 
// import other question components

function MasterQuestion({ question }) {
  const { answers, updateAnswer, theses } = useContext(QuestionsContext);
  const { questionId, questionType, questionText, questionOptions, questionCondition } = question;
  const { classDay } = useClassInfo();
 // console.log("Current classDay:", classDay);


  // Evaluate the condition to decide whether to render the question
  const shouldRender = questionCondition ? questionCondition(answers,classDay,theses) : true;

  // Side-effect to update the answer if the question should not be rendered
  // and if the question type is Radio or Checkbox
useEffect(() => {
  const isRadioOrCheckbox = questionType === 'Radio' || questionType === 'Checkbox';
  const currentAnswer = answers[questionId];
  const shouldUpdate = !shouldRender && isRadioOrCheckbox && 
                       (!Array.isArray(currentAnswer) || currentAnswer.length !== 1 || currentAnswer[0] !== '0');

  if (shouldUpdate) {
    updateAnswer(questionId, ['0']);
  }
}, [shouldRender, answers, questionId, updateAnswer, questionType]);



  // Get the selected answers for this question
  const selectedAnswers = answers[questionId];

  if (!shouldRender) return null;

  switch (questionType) {
    case 'Radio':
      return (
        <RadioQuestion 
          questionId={questionId} 
          questionText={questionText} 
          questionOptions={questionOptions} 
          selectedAnswers={selectedAnswers} />
      );
    case 'Checkbox':
      return (
        <CheckboxQuestion 
          questionId={questionId} 
          questionText={questionText} 
          questionOptions={questionOptions} 
          selectedAnswers={selectedAnswers} />
      );
    case 'LongAnswer': 
      //console.log('LongAnswerQuestion:', questionId, questionText);
      return (
        <LongAnswerQuestion 
          questionId={questionId} 
          questionText={questionText} 
         />
      );
   case 'Contradiction': 
      //console.log('LongAnswerQuestion:', questionId, questionText);
      return (
        <Contradiction 
          questionId={questionId} 
          questionText={questionText} 
         />
      );
    // cases for other types
    default:
      return <div>Unsupported question type</div>;
  }
}

export default MasterQuestion;
