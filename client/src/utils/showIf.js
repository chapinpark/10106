// Utility function to create a condition function
// showIf.js

// Assuming answers is globally accessible or passed where needed
export function showIf(answers, questionId, desiredAnswerNumber) {
    const desiredAnswer = desiredAnswerNumber.toString();

    const answer = answers[questionId];
    if (!answer) return false;  // Return false if there is no answer


    // Check if answer is exactly the desiredAnswer
    if (answer === desiredAnswer) return true;

    // Check if answer is a comma-separated list that includes the desiredAnswer
    return answer.includes(desiredAnswer);
}


export default showIf;

