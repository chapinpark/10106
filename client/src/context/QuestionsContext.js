import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';
import debounce from 'lodash.debounce';
import { createQuestionTableMapping } from '../utils/createQuestionTableMapping';
import { createQuestionConditionMapping } from '../utils/createQuestionConditionMapping';
import { transformAnswersToTheses } from '../utils/thesisTransformations';


// Utility function to parse comma-separated answers; MC answers are stored as strings in database but converted to arrays for use in the answers state (for ordinary user use) and the allAnswers state (for pdf generation)

 const parseCommaSeparatedAnswers = (commaSeparatedString) => {
    return commaSeparatedString ? commaSeparatedString.split(',') : [];
  };

  // defines a function which fetches all answers for a user given as argument; needed in pdf generation process in the UserAnswers component.
export const fetchAnswersForUser = async (username) => {
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const tableNames = ['God', 'FreeWill', 'PersonalIdentity', 'Belief', 'Ethics'];
  let allAnswers = {};

  for (const tableName of tableNames) {
    try {
      const response = await fetch(`${apiUrl}/api/answers/${tableName}/${username}`);
      if (response.ok) {
        const data = await response.json();

        // Flatten the structure by iterating over each row and extracting questionId and answers
        data.forEach(row => {
          Object.keys(row).forEach(questionId => {
            // Check if the questionId is 'username', skip it as it's not an actual question
            if (questionId !== 'username') {
              allAnswers[questionId] = parseCommaSeparatedAnswers(row[questionId]);
            }
          });
        });
      } else {
        console.error(`Error fetching data for table ${tableName}: ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Network error fetching data for table ${tableName}:`, error);
    }
  }
  return allAnswers; // Return flattened all answers
};




export const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});
  const [theses, setTheses] = useState({});
  const { username } = useContext(AuthContext);

  const questionTableMapping = createQuestionTableMapping(answers);
//  console.log('questionTableMapping:', questionTableMapping);


 const sendUpdateToServer = async (questionId, newAnswer, tableName) => {
  // Check if newAnswer is an array and convert it to a comma-separated string if so
  // Otherwise, use newAnswer as it is (assuming it's a string for long answers)
  const answerString = Array.isArray(newAnswer) ? newAnswer.join(',') : newAnswer;

 // console.log('Sending update to server:', answerString);

   try {
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    const response = await fetch(`${apiUrl}/api/answers/update/${tableName}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, answers: { [questionId]: answerString } }),
    });

    if (!response.ok) {
      // Handle error
    }
  } catch (error) {
    // Handle network or other errors
  }
};


  const debouncedSendUpdateToServer = debounce(sendUpdateToServer, 2000);

  const updateAnswer = (questionId, newAnswer) => {
    const tableName = questionTableMapping[questionId];
    setAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: newAnswer }));
    debouncedSendUpdateToServer(questionId, newAnswer, tableName);
  };

 

  useEffect(() => {
    const fetchAnswers = async (tableName) => {
      if (!username) return;

      try {
            const apiUrl = process.env.REACT_APP_API_BASE_URL;
        const response = await fetch(`${apiUrl}/api/answers/${tableName}/${username}`);
        if (response.ok) {
          const data = await response.json();
          const newAnswers = {};
          data.forEach(row => {
            Object.keys(row).forEach(questionId => {
              newAnswers[questionId] = parseCommaSeparatedAnswers(row[questionId]);
            });
          });
          setAnswers(prevAnswers => ({ ...prevAnswers, ...newAnswers }));
        } else {
          // Handle errors
        }
      } catch (error) {
        // Handle network errors
      }
    };

    const tableNames = ['God', 'FreeWill', 'PersonalIdentity', 'Belief', 'Ethics'];
    tableNames.forEach(fetchAnswers);
  }, [username]);

useEffect(() => {
  const newTheses = transformAnswersToTheses(answers);
//  console.log('Debug: New theses', newTheses);
  setTheses(newTheses);
}, [answers]);



  
  
  const questionConditionMapping = createQuestionConditionMapping(answers);

  return (
    <QuestionsContext.Provider value={{ answers, updateAnswer, theses, questionConditionMapping }}>
      {children}
    </QuestionsContext.Provider>
  );
};
