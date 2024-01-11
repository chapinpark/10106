import React, { useContext } from 'react';
import { QuestionsContext } from '../context/QuestionsContext';
import  ClassInfoContext  from '../context/ClassInfoContext';
import MyPhilosophyHeader from '../components/MyPhilosophyHeader';
import MasterQuestion from '../components/MasterQuestion';
import  NothingToSeeHere  from '../components/NothingToSeeHere';
import { godQuestions } from '../questions/godQuestions';
import { freeWillQuestions } from '../questions/freeWillQuestions';
import { personalIdentityQuestions } from '../questions/personalIdentityQuestions';
import { beliefQuestions } from '../questions/beliefQuestions';
import { ethicsQuestions } from '../questions/ethicsQuestions';
import FAQ from '../components/FAQ'; // Import the FAQ component


function MyPhi({ activeMyPhiPage }) {
  const { answers } = useContext(QuestionsContext);
  const { classSection } = useContext(ClassInfoContext);

  // Include 'FAQ' in the list of question types
  const questionTypes = ['God', 'FreeWill', 'PersonalIdentity', 'Belief', 'Ethics', 'FAQ'];

  const getQuestionsForPage = (page) => {
    switch (page) {
      case 'God': return godQuestions(answers);
      case 'FreeWill': return freeWillQuestions(answers);
      case 'PersonalIdentity': return personalIdentityQuestions(answers);
      case 'Belief': return beliefQuestions(answers);
      case 'Ethics': return ethicsQuestions(answers);
     case 'FAQ': return []; // No questions for FAQ page
      default: return godQuestions(answers);
    }
  };

  const questionsList = getQuestionsForPage(activeMyPhiPage);
  const currentIndex = questionTypes.indexOf(activeMyPhiPage);

  // Check if the currentIndex is greater than classSection
  const shouldRenderNothing = currentIndex >= classSection;

  return (
    <div>
      <MyPhilosophyHeader />
      {activeMyPhiPage === 'FAQ' ? (
        <FAQ /> // Render the FAQ component when the FAQ button is clicked
      ) : shouldRenderNothing ? (
        <NothingToSeeHere />
      ) : (
        questionsList.map((question, index) => (
          <MasterQuestion key={index} question={question} />
        ))
      )}
    </div>
  );
}

export default MyPhi;
