import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MasterQuestion from './MasterQuestion';
import { godQuestions } from '../questions/godQuestions';
import { freeWillQuestions } from '../questions/freeWillQuestions';
import { personalIdentityQuestions } from '../questions/personalIdentityQuestions';
import { beliefQuestions } from '../questions/beliefQuestions';
import { ethicsQuestions } from '../questions/ethicsQuestions';
import { QuestionsContext } from '../context/QuestionsContext'; 





function StaticAnswersForPDF() {
  const { username } = useParams();
  const [answersForPDF, setAnswersForPDF] = useState({});
  const { fetchAnswersForUser, thesesForPDF } = useContext(QuestionsContext);
  const [loading, setLoading] = useState(true);

 // console.log('answers state for', username 'is' answers);

    useEffect(() => {
            console.log('Fetching answers for:', username);

     setLoading(true);
    setAnswersForPDF({}); // Reset answers state before fetching new data

    const fetchAndSetAnswers = async () => {
        const fetchedAnswers = await fetchAnswersForUser(username);
    //console.log(`Data fetched for ${username}:`, JSON.stringify(fetchedAnswers, null, 2));
      setAnswersForPDF(fetchedAnswers); // Now using setAllAnswers
      setLoading(false);
    };

      fetchAndSetAnswers();
  }, [username, fetchAnswersForUser]);

  if (loading) return <div>Loading...</div>;
  if (!answersForPDF) return <div>No answers found for {username}.</div>;

  const questionSections = [
    { title: 'Does God exist?', questions: godQuestions(answersForPDF) },
    { title: 'Do I have free will?', questions: freeWillQuestions(answersForPDF) },
    { title: 'What am I?', questions: personalIdentityQuestions(answersForPDF) },
    { title: 'What should I believe?', questions: beliefQuestions(answersForPDF) },
    { title: 'How should I live?', questions: ethicsQuestions(answersForPDF) }
  ];

  return (
    <div key={username}>
          <h1>Answers for {username}</h1>
      {questionSections.map((section, index) => (
        <div key={index}>
          <h2 style={{ color: '#fe938c', fontSize: '25px' }}>{section.title}</h2>
          {section.questions.map((question, qIndex) => (
            <MasterQuestion key={qIndex} question={question} answersData={answersForPDF} thesesData={thesesForPDF} isForPDF={true}/>
          ))}
        </div>
      ))}
      </div>
  );
}

export default StaticAnswersForPDF;
