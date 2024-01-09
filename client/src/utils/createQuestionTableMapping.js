import { godQuestions } from '../questions/godQuestions';
import { freeWillQuestions } from '../questions/freeWillQuestions';
import { personalIdentityQuestions } from '../questions/personalIdentityQuestions';
import { beliefQuestions } from '../questions/beliefQuestions';
import { ethicsQuestions } from '../questions/ethicsQuestions';

export const createQuestionTableMapping = (answers) => {
    let mapping = {};

    const addQuestionsToMapping = (questions, tableName) => {
        questions(answers).forEach(question => {
            mapping[question.questionId] = tableName;
        });
    };

    // Map question IDs to their respective table names
    addQuestionsToMapping(godQuestions, 'God');
    addQuestionsToMapping(freeWillQuestions, 'FreeWill');
    addQuestionsToMapping(personalIdentityQuestions, 'PersonalIdentity');
    addQuestionsToMapping(beliefQuestions, 'Belief');
    addQuestionsToMapping(ethicsQuestions, 'Ethics');

    return mapping;
};
