import React from 'react';

const GradeScheme = () => {
  const grades = [
    { letter: 'A', range: '94+' },
    { letter: 'A-', range: '90-93' },
    { letter: 'B+', range: '87-89' },
    { letter: 'B', range: '83-86' },
    { letter: 'B-', range: '80-82' },
    { letter: 'C+', range: '77-79' },
    { letter: 'C', range: '73-76' },
    { letter: 'C-', range: '70-72' },
    { letter: 'D', range: '60-69' },
    { letter: 'F', range: '<60' },
    // Add more grades as needed
  ];

  // Split the grades array into two for two tables
  const midIndex = Math.ceil(grades.length / 2);
  const gradesFirstHalf = grades.slice(0, midIndex);
  const gradesSecondHalf = grades.slice(midIndex);

  const renderTable = (gradesSubset) => (
    <table style={{ margin: 'auto', borderCollapse: 'collapse', border: 'none' }}>
      <tbody>
        {gradesSubset.map((grade, index) => (
          <tr key={index}>
            <td style={{ padding: '4px 8px', border: 'none' }}>{grade.letter}</td>
            <td style={{ padding: '4px 8px', border: 'none' }}>{grade.range}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px', lineHeight: '1.2' }}>
      {renderTable(gradesFirstHalf)}
      {renderTable(gradesSecondHalf)}
    </div>
  );
};

export default GradeScheme;
