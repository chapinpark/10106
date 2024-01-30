import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAnswersForUser } from '../context/QuestionsContext'; // adjust import path
import MasterQuestion from '../components/MasterQuestion';
import { godQuestions } from '../questions/godQuestions';
import { freeWillQuestions } from '../questions/freeWillQuestions';
import { personalIdentityQuestions } from '../questions/personalIdentityQuestions';
import { beliefQuestions } from '../questions/beliefQuestions';
import { ethicsQuestions } from '../questions/ethicsQuestions';

function UserAnswers() {
  const { username } = useParams();
  const [allAnswers, setAllAnswers] = useState({});
  const [loading, setLoading] = useState(true);

    useEffect(() => {
            console.log('Fetching answers for:', username);

     setLoading(true);
    setAllAnswers({}); // Reset answers state before fetching new data

    const fetchAndSetAnswers = async () => {
        const fetchedAnswers = await fetchAnswersForUser(username);
    console.log(`Data fetched for ${username}:`, JSON.stringify(fetchedAnswers, null, 2));
      setAllAnswers(fetchedAnswers); // Now using setAllAnswers
      setLoading(false);
    };

    fetchAndSetAnswers();
  }, [username]);

  if (loading) return <div>Loading...</div>;
  if (!allAnswers) return <div>No answers found for {username}.</div>;

  const questionSections = [
    { title: 'Does God exist?', questions: godQuestions(allAnswers) },
    { title: 'Do I have free will?', questions: freeWillQuestions(allAnswers) },
    { title: 'What am I?', questions: personalIdentityQuestions(allAnswers) },
    { title: 'What should I believe?', questions: beliefQuestions(allAnswers) },
    { title: 'How should I live?', questions: ethicsQuestions(allAnswers) }
  ];

  return (
    <div key={username}>
          <h1>Answers for {username}</h1>
                  {console.log('Rendered allAnswers state:', JSON.stringify(allAnswers, null, 2))}
      {questionSections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          {section.questions.map((question, qIndex) => (
            <MasterQuestion key={qIndex} question={question} answersData={allAnswers} isAdminMode={true}/>
          ))}
        </div>
      ))}
    </div>
  );
}

export default UserAnswers;
