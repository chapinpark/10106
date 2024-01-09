// createQuestionConditionsMapping.js. Used for one question to see wether another question is rendered by evaluating its condition.
import { godQuestions } from '../questions/godQuestions';
// Import other question arrays

export const createQuestionConditionMapping = (answers) => {
    let conditionsMapping = {};

    const godQuestionList = godQuestions(answers);
    godQuestionList.forEach(question => {
        conditionsMapping[question.questionId] = question.questionCondition;
    });

    // Repeat for other question sets

    return conditionsMapping;
};
