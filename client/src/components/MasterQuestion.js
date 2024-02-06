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

function MasterQuestion({ question, answersData, thesesData, isForPDF = false }) {
    //console.log('MasterQuestion props', { question, answersData, isForPDF });

 const context = useContext(QuestionsContext); // Get the context
  const { updateAnswer, theses } = context;
  const { questionId, questionType, questionText, questionOptions, questionCondition } = question;
  const { classDay } = useClassInfo();

  // Determine which set of answers to use; in ordinary case based on the user's answers state, and in pdf generation given by argument allAnswers
  const answersToRender = answersData || context.answers;
    const thesesToRender = thesesData || theses;

// const answersToRender = context.answers;

  //console.log('answersToRender:', answersToRender);
  //console.log(theses);
  // Evaluate the condition to decide whether to render the question
  const shouldRender = questionCondition ? questionCondition(answersToRender,classDay,thesesToRender) : true;

  // Side-effect to update the answer if the question should not be rendered
  // and if the question type is Radio or Checkbox
useEffect(() => {
  const isRadioOrCheckbox = questionType === 'Radio' || questionType === 'Checkbox';
  const currentAnswer = answersToRender[questionId];
  const shouldUpdate = !shouldRender && isRadioOrCheckbox && 
                       (!Array.isArray(currentAnswer) || currentAnswer.length !== 1 || currentAnswer[0] !== '0');
  const thesesAreDefined = Object.keys(thesesToRender).length > 0; // Or a more specific condition based on your data structure

  if (shouldUpdate && !isForPDF && thesesAreDefined) {
    updateAnswer(questionId, ['0']);
  }
}, [shouldRender, answersToRender, thesesToRender, questionId, updateAnswer, questionType, isForPDF]);


//console.log('Rendering with answers:', answersToRender);

  // Get the selected answers for this question
  const selectedAnswers = answersToRender[questionId];
//console.log('selectedAnswers:', selectedAnswers);
  if (!shouldRender) return null;

  switch (questionType) {
    case 'Radio':
      return (
        <RadioQuestion 
          questionId={questionId} 
          questionText={questionText} 
          questionOptions={questionOptions} 
          selectedAnswers={selectedAnswers}
        answersData={answersToRender}/>
      );
    case 'Checkbox':
      return (
        <CheckboxQuestion 
          questionId={questionId} 
          questionText={questionText} 
          questionOptions={questionOptions} 
          selectedAnswers={selectedAnswers}
        answersData={answersToRender}/>
      );
    case 'LongAnswer': 
      //console.log('LongAnswerQuestion:', questionId, questionText);
      return (
        <LongAnswerQuestion 
          questionId={questionId} 
          questionText={questionText}
          answersData={answersToRender}
           isForPDF={isForPDF} // Pass the isForPDF prop here to tell it whether to render a div or textarea
         />
      );
   case 'Contradiction': 
      //console.log('LongAnswerQuestion:', questionId, questionText);
      return (
        <Contradiction 
          questionId={questionId} 
          questionText={questionText}
          answersData={answersToRender}
         />
      );
    // cases for other types
    default:
      return <div>Unsupported question type</div>;
  }
}

export default MasterQuestion;
