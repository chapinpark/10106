import React, { useState } from 'react';

const FAQ = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const faqData = [
    {
      question: 'What is question 1?',
      answer: 'This is the answer to question 1.'
    },
    {
      question: 'How does feature X work?',
      answer: 'Feature X works by...'
      },
      {
      question: 'What is question 1?',
      answer: 'This is the answer to question 1.'
    },
    {
      question: 'How does feature X work?',
      answer: 'Feature X works by...'
      },
      {
      question: 'What is question 1?',
      answer: 'This is the answer to question 1.'
    },
    {
      question: 'How does feature X work?',
      answer: 'Feature X works by...'
      },
      {
      question: 'What is question 1?',
      answer: 'This is the answer to question 1.'
    },
    {
      question: 'How does feature X work?',
      answer: 'Feature X works by...'
      },
      {
      question: 'What is question 1?',
      answer: 'This is the answer to question 1.'
    },
    {
      question: 'How does feature X work?',
      answer: 'Feature X works by...'
    },
    // ... Add more questions and answers here
  ];

  const toggleQuestion = (index) => {
    setActiveQuestionIndex(activeQuestionIndex === index ? null : index);
  };

  return (
    <div>
      {faqData.map((faq, index) => (
          <div 
        className="faq-question"
          key={index} 
          style={{ fontWeight: activeQuestionIndex === index ? 'bold' : 'normal' }}
          onClick={() => toggleQuestion(index)}
        >
          <p>{faq.question}</p>
          {activeQuestionIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
