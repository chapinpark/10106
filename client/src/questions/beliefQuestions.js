import showIf from "../utils/showIf";

// define questions as a function. The answers state is not available in static js files - so we in effect postpone using it until render time. This makes it possible to state questionConditions using Boolean operators as in ordinary js.

export const beliefQuestions = (answers) => [

    {
        questionId: "bel1", questionText: 'What is the meaning of life?', questionType: 'Radio', questionOptions: ['To love and be loved', 'To be happy'],
        questionCondition: (x) => true
    },
    {
        questionId: "bel2",
        questionText: 'What is the meaning of life?',
        questionType: 'Checkbox',
        questionOptions: ['check1', 'check2', 'check3', 'check4', 'check5'],
        questionCondition: (x) => showIf(x, 'God1', 1)
    },
{
    questionId: "bel3",
    questionText: 'This is the third question and is about belief. show on 5 checked.',
    questionType: 'LongAnswer',
    questionCondition: (x) => showIf(x, 'bel2', 5)
    },

];

