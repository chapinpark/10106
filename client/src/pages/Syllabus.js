import React, { useState, useContext, useEffect, useRef } from 'react';
import ClassInfoContext from '../context/ClassInfoContext'; // Adjust the path as necessary
import './Syllabus.css';
import readingsArray from '../utils/readings.js'; // Adjust the path as necessary
import readingsIcon from '../icons/reading.png';
import pdfIcon from '../icons/pdf.png';
import lectureIcon from '../icons/lecture.png';



//const color1 = "var(--color1)";
const color2 = "var(--color2)";
const color1 = "var(--color1)";


const Syllabus = () => {
  // current classDay 
const { classDay } = useContext(ClassInfoContext); // Use the context object, not the provider
 const [selectedLectureDay, setSelectedLectureDay] = useState(null);

  // Function to calculate class dates
  const getClassDates = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    let dates = [];

    for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
      // Check if day is Tuesday (2) or Thursday (4)
      if (date.getDay() === 2 || date.getDay() === 4) {
        dates.push(new Date(date));
      }
    }

    return dates;
  };

  // logic for readings
  
    const readingsRef = useRef(null); // Reference for the readings header for scroll action

const handleReadingClick = (lectureDay) => {
  setSelectedLectureDay(lectureDay);
  // Wait for the state to update and new content to render
  setTimeout(() => {
    readingsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 0);
};


  const Readings = ({ lectureDay }) => {
  const readingComponents = readingsArray.find(reading => reading.day === lectureDay)?.components;

  return (
    <div>
      {readingComponents 
        ? readingComponents.map((ReadingComponent, index) => <ReadingComponent key={index} />)
        : <p>No readings for this day.</p>}
    </div>
  );
};

  
 
useEffect(() => {
  // Ensure that the new default reading does not exceed the total number of lecture days
  const totalLectureDays = topics.reduce((acc, topic) => {
    return topic.lectureDay ? acc + 1 : acc;
  }, 0);

  // Set the selectedLectureDay to classDay + 1 or the last lecture day, whichever is smaller
  const newDefaultReadingDay = Math.min(classDay + 1, totalLectureDays);
  
  setSelectedLectureDay(newDefaultReadingDay);
}, [classDay]);
  
  // Format date as "Month day"
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Calculate class dates
  const classDates = getClassDates('2024-01-16', '2024-05-01');

  // Create a placeholder topics array
  // Manually define the topics array
const topics = [
  { title: "What is philosophy?", lectureDay: 1 },
  { title: "The first cause argument", lectureDay: 2 },
  { title: "The cosmological argument", lectureDay: 3 },
  { title: "The fine-tuning argument", lectureDay: 4 },
  { title: "The argument from evil", lectureDay: 5 },
  { title: "The free will defense", lectureDay: 6 },
  { title: "Evil and life after death", lectureDay: 7 },
  { title: "Discussion day" },
  { title: "Free will vs. fate", lectureDay: 8 },
  { title: "Free will vs. determinism", lectureDay: 9 },
  { title: "Free will vs. science", lectureDay: 10 },
  { title: "Discussion day",  },
  { title: "Identity and survival", lectureDay: 11 },
  { title: "Consciousness and immaterial souls", lectureDay: 12 },
  { title: "Puzzles of survival", lectureDay: 13 },
  { title: "Survival and immortality", lectureDay: 14 },
  { title: "Spring break",  },
  { title: "Spring break",  },
  { title: "Discussion day",  },
  { title: "Should I believe without certainty?", lectureDay: 15 },
  { title: "Should I believe without evidence?", lectureDay: 16 },
  { title: "Should I believe what will make me happy?", lectureDay: 17 },
  { title: "Discussion day",  },
  { title: "[class canceled]",  },
  { title: "Is morality real? Is it relative?", lectureDay: 18 },
  { title: "Right and wrong, good and bad", lectureDay: 19 },
  { title: "TBA",  },
  { title: "What is justice?", lectureDay: 20 },
  { title: "Discussion day", },
  { title: "Concluding lecture",  },
  { title: "[My Philosophy discussions]",  }
];



  // Styles to center the table and stack elements vertically
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column', // Stacks elements vertically
      alignItems: 'center' // Centers elements horizontally
    },
    table: {
      textAlign: 'center',
      marginTop: '20px' // Adds space between h1 and the table
    }
  };

   // Example section array
  const sections = [
    { name: "Does God Exist?", duration: 8, color: color2},
    { name: "Do I have free will?", duration: 4, color: color1 },
    { name: "What am I?", duration: 7, color: color2 },
    { name: "What should I believe?", duration: 5, color: color1 },
    { name: "How should I live?", duration: 7, color: color2},
  ];



  // Function to generate table rows with merged cells for sections
const generateTableRows = (classDates, topics, sections) => {
  let rows = [];
  let sectionIndex = 0;
  let dayCount = 0;

  classDates.forEach((date, index) => {
    // Check if we need to move to the next section
    if (dayCount === 0 && sectionIndex < sections.length) {
      dayCount = sections[sectionIndex].duration;
    }

    // Check if we're within a valid section
    if (sectionIndex < sections.length) {
      let isFirstDayOfSection = dayCount === sections[sectionIndex].duration;
      let combinedSectionStyle = isFirstDayOfSection ? {
        borderRight: `30px solid ${sections[sectionIndex].color}`,
        color: sections[sectionIndex].color,
        verticalAlign: 'middle',
        lineHeight: `${dayCount * 20}px`
      } : {};

      const topic = topics[index];
      rows.push(
        <tr key={index}>
          {isFirstDayOfSection && (
            <td className='section-cell' rowSpan={sections[sectionIndex].duration} style={combinedSectionStyle}>
              {sections[sectionIndex].name}
            </td>
          )}
          <td>{formatDate(date)}</td>
          <td className="topic-cell">
            {topic.title}
            {/* Render reading link if lectureDay is available */}
            {topic.lectureDay && (
              <a href="#" onClick={(e) => {
                e.preventDefault();
                handleReadingClick(topic.lectureDay);
              }}>
                <img src={readingsIcon} alt="Readings" className="syllabusIcon" />
              </a>
            )}
            {/* Render lecture and PDF links if lectureDay is less than or equal to classDay */}
            {topic.lectureDay && topic.lectureDay <= classDay && (
              <>
                <a href={`https://www3.nd.edu/~jspeaks/courses/10106/${topic.lectureDay}/index.html#0`} target="_blank" rel="noopener noreferrer">
                  <img src={lectureIcon} alt="Lecture" className="syllabusIcon" />
                </a>
                <a href={`https://www3.nd.edu/~jspeaks/courses/10106/${topic.lectureDay}.pdf`} target="_blank" rel="noopener noreferrer">
                  <img src={pdfIcon} alt="PDF" className="syllabusIcon" />
                </a>
              </>
            )}
          </td>
        </tr>
      );

      // Decrease dayCount and move to the next section if needed
      dayCount--;
      if (dayCount === 0) {
        sectionIndex++;
      }
    } else {
      // If there are no more sections, just fill in the dates and topics
      const topic = topics[index];
      rows.push(
        <tr key={index}>
          <td></td>
          <td>{formatDate(date)}</td>
          <td className="topic-cell">
            {topic.title}
            {/* Render the links only if lectureDay is available */}
            {topic.lectureDay && (
              <>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  handleReadingClick(topic.lectureDay);
                }}>
                  <img src={readingsIcon} alt="Readings" className="syllabusIcon" />
                </a>
                {topic.lectureDay <= classDay && (
                  <>
                    <a href={`https://www3.nd.edu/~jspeaks/courses/10106/${topic.lectureDay}/index.html#0`} target="_blank" rel="noopener noreferrer">
                      <img src={lectureIcon} alt="Lecture" className="syllabusIcon" />
                    </a>
                    <a href={`https://www3.nd.edu/~jspeaks/courses/10106/${topic.lectureDay}.pdf`} target="_blank" rel="noopener noreferrer">
                      <img src={pdfIcon} alt="PDF" className="syllabusIcon" />
                    </a>
                  </>
                )}
              </>
            )}
          </td>
        </tr>
      );
    }
  });

  return rows;
};



  // ... rest of your component, including the render method ...



  return (
    <div style={styles.container}>
      <h1>Schedule</h1>
      <table style={styles.table}>
        <tbody>
          {generateTableRows(classDates, topics, sections)}
        </tbody>
      </table>

      <h1 ref={readingsRef}>Readings</h1>
            {selectedLectureDay && <Readings lectureDay={selectedLectureDay} />}

    </div>
  );
};

export default Syllabus;
