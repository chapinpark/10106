import React from 'react';

//const color1 = "var(--color1)";
const color2 = "var(--color2)";
const color1 = "var(--color1)";

const Syllabus = () => {
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

  // Format date as "Month day"
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Calculate class dates
  const classDates = getClassDates('2024-01-16', '2024-05-01');

  // Create a placeholder topics array
  // Manually define the topics array
const topics = [
  "What is philosophy?",
  "The first cause argument",
  "The cosmological argument",
  "The fine-tuning argument",
  "The argument from evil",
  "The free will defense",
  "Evil and life after death",
  "Discussion day",
  "Free will vs. fate",
  "Free will vs. determinism",
  "Free will vs. science",
  "Discussion day",
  "Identity and survival",
  "Consciousness and immaterial souls",
  "Puzzles of survival",
  "Survival and immortality",
  "Spring break",
  "Spring break",
  "Discussion day",
  "Should I believe without certainty?",
  "Should I believe without evidence?",
  "Should I believe what will make me happy?",
  "Discussion day",
  "[class canceled]",
  "Is morality real and is it relative?",
  "Right and wrong, good and bad",
  "TBA",
  "What is justice?",
  "Discussion day",
  "Concluding lecture",
  "[My Philosophy discussions]"
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
    { name: "How should I live?", duration: 5, color: color2},
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
      let sectionCellStyle = isFirstDayOfSection ? {
        borderRight: `30px solid ${sections[sectionIndex].color}`,
        color: sections[sectionIndex].color,
        verticalAlign: 'middle',
        lineHeight: `${dayCount * 20}px` // Adjust line height based on the number of rows
      } : {};

      rows.push(
        <tr key={index}>
          {isFirstDayOfSection && (
            <td rowSpan={sections[sectionIndex].duration} style={sectionCellStyle}>
              {sections[sectionIndex].name}
            </td>
          )}
          <td>{formatDate(date)}</td>
          <td>{topics[index]}</td>
        </tr>
      );

      // Decrease dayCount and move to the next section if needed
      dayCount--;
      if (dayCount === 0) {
        sectionIndex++;
      }
    } else {
      // If there are no more sections, just fill in the dates and topics
      rows.push(
        <tr key={index}>
          <td></td>
          <td>{formatDate(date)}</td>
          <td>{topics[index]}</td>
        </tr>
      );
    }
  });

  return rows;
};


  return (
    <div style={styles.container}>
      <h1>Schedule</h1>
      <table style={styles.table}>
        <tbody>
          {generateTableRows(classDates, topics, sections)}
        </tbody>
      </table>
    </div>
  );
};

export default Syllabus;
