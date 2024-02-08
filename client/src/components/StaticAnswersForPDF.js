import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MasterQuestion from './MasterQuestion';
import { godQuestions } from '../questions/godQuestions';
import { freeWillQuestions } from '../questions/freeWillQuestions';
//import { personalIdentityQuestions } from '../questions/personalIdentityQuestions';
//import { beliefQuestions } from '../questions/beliefQuestions';
//import { ethicsQuestions } from '../questions/ethicsQuestions';
import { QuestionsContext } from '../context/QuestionsContext'; 
import './StaticAnswersForPDF.css';




function StaticAnswersForPDF() {
  const { username } = useParams();
  const [answersForPDF, setAnswersForPDF] = useState({});
  const [thesesForPDF, setThesesForPDF] = useState({});
  const { fetchAnswersForUser  } = useContext(QuestionsContext);
  const [loading, setLoading] = useState(true);


    useEffect(() => {

     setLoading(true);
    const fetchAndSetAnswers = async () => {
        await fetchAnswersForUser(username, setAnswersForPDF, setThesesForPDF);
      setLoading(false);
    };

      fetchAndSetAnswers();
  }, [username, fetchAnswersForUser]);

  if (loading) return <div>Loading...</div>;
  if (!answersForPDF) return <div>No answers found for {username}.</div>;

  const questionSections = [
    { title: 'Does God exist?', questions: godQuestions(answersForPDF) },
    { title: 'Do I have free will?', questions: freeWillQuestions(answersForPDF) },
   // { title: 'What am I?', questions: personalIdentityQuestions(answersForPDF) },
   // { title: 'What should I believe?', questions: beliefQuestions(answersForPDF) },
   // { title: 'How should I live?', questions: ethicsQuestions(answersForPDF) }
  ];

  //console.log('answersForPDF:', JSON.stringify(answersForPDF));

  const fullname = answersForPDF['fullname'] ? answersForPDF['fullname'][0] : 'Unknown';
  const PDFHeaderText = (name) => {
    if (!name) return "Philosophy";
    // Check if the name ends with 's'
    const endsWithS = name.endsWith('s') || name.endsWith('S');
    return `${name}${endsWithS ? "'" : "'s"} Philosophy`;
  };



  return (
    <div key={username}>


      <h1 className='PDFNameAtTop'>{PDFHeaderText(fullname)}</h1>
      {questionSections.map((section, index) => (
        <div key={index}>
          <h2 className='sectionHeadingForPDF'>{section.title}</h2>
          {section.questions.map((question, qIndex) => (
            <MasterQuestion key={qIndex} question={question} answersData={answersForPDF} thesesData={thesesForPDF} isForPDF={true}/>
          ))}
        </div>
      ))}
      </div>
  );
}

export default StaticAnswersForPDF;
