import showIf from "../utils/showIf";

// define questions as a function. The answers state is not available in static js files - so we in effect postpone using it until render time. This makes it possible to state questionConditions using Boolean operators as in ordinary js.

export const personalIdentityQuestions = (answers) => [

{
        questionId: "pi1", questionText: 'Personal identity', questionType: 'Radio', questionOptions: ['To love and be loved', 'To be happy'],
        questionCondition: (x) => true
    },
{
        questionId: "pi2",
        questionText: 'What is the meaning of life?',
        questionType: 'Checkbox',
        questionOptions: ['check1', 'check2', 'check3', 'check4', 'check5'],
        questionCondition: (x) => showIf(x, 'God1', 1)
    },
{
    questionId: "pi3",
    questionText: 'This is the third question, ad should show only if the first option on number 2 is checked.',
    questionType: 'Radio',
    questionOptions: ['OPTION1', 'OPTION2'],
    questionCondition: (x) => showIf(x, 'God2', 1)
    },

];

