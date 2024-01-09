import React, { useContext } from 'react';
import { QuestionsContext } from '../context/QuestionsContext';
import MyPhilosophyHeader from '../components/MyPhilosophyHeader';
import MasterQuestion from '../components/MasterQuestion';
import { godQuestions } from '../questions/godQuestions';
import { freeWillQuestions } from '../questions/freeWillQuestions';
import { personalIdentityQuestions } from '../questions/personalIdentityQuestions';
import { beliefQuestions } from '../questions/beliefQuestions';
import { ethicsQuestions } from '../questions/ethicsQuestions';

function MyPhi({ activeMyPhiPage }) {
  const { answers } = useContext(QuestionsContext);

  const getQuestionsForPage = (page) => {
    switch (page) {
      case 'God': return godQuestions(answers);
      case 'FreeWill': return freeWillQuestions(answers);
      case 'PersonalIdentity': return personalIdentityQuestions(answers);
      case 'Belief': return beliefQuestions(answers);
      case 'Ethics': return ethicsQuestions(answers);
      default: return godQuestions(answers);
    }
  };

  const questionsList = getQuestionsForPage(activeMyPhiPage);

  return (
    <div>
      <MyPhilosophyHeader />
      {questionsList.map((question, index) => (
        <MasterQuestion key={index} question={question} />
      ))}
    </div>
  );
}

export default MyPhi;
