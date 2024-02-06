import showIf from "../utils/showIf";

// define questions as a function. The answers state is not available in static js files - so we in effect postpone using it until render time. This makes it possible to state questionConditions using Boolean operators as in ordinary js.

export const freeWillQuestions = (answers,classDay,theses) => [

   {
  questionId: "strongestforfreewill", // Change "id" to "questionId"
  questionType: "Radio", // Capitalize and rename "type" to "questionType"
  questionText: "In class, we talked about three arguments for the reality of human free will. Which of those arguments do you think is the strongest?", // Change "question text" to "questionText"
  questionOptions: [ // Change "options" to "questionOptions"
    "The argument from moral responsibility",
    "The argument from loving relationships",
    "The argument from seeming",
  ],
questionCondition: (answers, classDay, theses) => classDay >= 8,
},

// argument from moral responsibility

{
  questionId: "isresponsibilityargsound", // Change "id" to "questionId"
  questionType: "Radio", // Capitalize and rename "type" to "questionType"
  questionText: "Is the argument from moral responsibility sound?", // Change "question text" to "questionText"
  questionOptions: ["Yes", "No"], // Change "options" to "questionOptions"
  questionCondition: (answers, classDay, theses) => showIf(answers, "strongestforfreewill", 1),
},

{
  questionId: "defendrealresponsibility", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "long" to "LongAnswer" in questionType
  questionText: "How would you defend the assumption that we are sometimes responsible for our actions?", // Change "question text" to "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "isresponsibilityargsound", 1),
},

{
  questionId: "whichpremiseresponsibilityreject", // Change "id" to "questionId"
  questionType: "Checkbox", // Change "check" to "Checkbox" in questionType
  questionText: "Which premises of the argument do you reject?", // Change "question text" to "questionText"
  questionOptions: [
    "1. If someone’s action is not free, then they are not responsible for that action.",
    "2. We are all responsible for at least some of our actions.",
  ],
 questionCondition: (answers, classDay, theses) => showIf(answers, "isresponsibilityargsound", 2),
},

{
  questionId: "responsibilityp1reject", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "long" to "LongAnswer" in questionType
  questionText: "But imagine that you found out that someone was forced to perform some action against their will. Wouldn't that cause you to not hold them responsible for the action?", // Change "question text" to "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "whichpremiseresponsibilityreject", 1),
},

{
  questionId: "responsibilityp2reject", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "long" to "LongAnswer" in questionType
  questionText: "I am sure that, in your ordinary life, you sometimes hold people responsible for their actions (for better or worse). Do you plan to change your behavior? If not, why not?", // Change "question text" to "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "whichpremiseresponsibilityreject", 2),
},

// argument from loving relationships

{
  questionId: "islovingargsound", // Change "id" to "questionId"
  questionType: "Radio", // Capitalize and rename "type" to "questionType"
  questionText: "Is the argument from loving relationships sound?", // Change "question text" to "questionText"
  questionOptions: ["Yes", "No"], // Change "options" to "questionOptions"
  questionCondition: (answers, classDay, theses) => showIf(answers, "strongestforfreewill", 2),
},

{
  questionId: "whichrelationships", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "long" to "LongAnswer" in questionType
  questionText: "Give some examples of types of relationships which you think have to be freely entered into. Why do you think that those relationships require this?", // Change "question text" to "questionText"
 questionCondition: (answers, classDay, theses) => showIf(answers, "islovingargsound", 1),
},

{
  questionId: "rejectpremiseslovingarg", // Change "id" to "questionId"
  questionType: "Checkbox", // Change "check" to "Checkbox" in questionType
  questionText: "Which premises of the argument do you think are false?", // Change "question text" to "questionText"
  questionOptions: [
    "1. Certain kinds of loving relationships must be freely entered into.",
    "2. These kinds of loving relationships exist.",
  ],
  questionCondition: (answers, classDay, theses) => showIf(answers, "islovingargsound", 2),
},

{
  questionId: "spouseexample", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "long" to "LongAnswer" in questionType
  questionText: "Suppose that some day you decide to get married. Wouldn't it be important to you that your spouse freely decided to enter into the relationship? Wouldn't something be lacking if this was not the case?", // Change "question text" to "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "rejectpremiseslovingarg", 1),
},

{
  questionId: "relationshipsexist", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "long" to "LongAnswer" in questionType
  questionText: "Explain what sort of loving relationships would require free will, and why you think that no relationships of that sort actually exist.", // Change "question text" to "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "rejectpremiseslovingarg", 2),
},

// argument from seeming

{
  questionId: "isseemingargsound", // Change "id" to "questionId"
  questionType: "Radio", // Capitalize and rename "type" to "questionType"
  questionText: "Is the argument from seeming sound?", // Change "question text" to "questionText"
  questionOptions: ["Yes", "No"], // Change "options" to "questionOptions"
 questionCondition: (answers, classDay, theses) => showIf(answers, "strongestforfreewill", 3),
},

{
  questionId: "whyseemingsound", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "long" to "LongAnswer" in questionType
  questionText: "It is pretty clear what we mean when we say that it visually seems to us that the sky is blue; there is a certain easily identifiable visual sensation associated with the seeming. Do we have the same kind of experience of free will? Would you be able to explain to someone how it feels to have free will? If not, what do you mean when you say that it seems to you that you have free will?", // Change "question text" to "questionText"
 questionCondition: (answers, classDay, theses) => showIf(answers, "isseemingargsound", 1),
},

{
  questionId: "seemingargpremisereject", // Change "id" to "questionId"
  questionType: "Checkbox", // Change "check" to "Checkbox" in questionType
  questionText: "Which premises of the argument from seeming do you reject?", // Change "question text" to "questionText"
  questionOptions: [
    "1. It seems to me that I have free will.",
    "2. If the world seems to you to be some way, and you have no reason to doubt that the world is that way, then you should believe that the world is that way.",
    "3. I have no reason to doubt that I have free will.",
  ],
 questionCondition: (answers, classDay, theses) => showIf(answers, "isseemingargsound", 2),
},

{
  questionId: "againstseemsfreewill", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "long" to "LongAnswer" in questionType
  questionText: "Then why do you think that most people report that it does seem to them that they have free will? Wouldn't it be odd for everyone to be confused about how things seem to them?", // Change "question text" to "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "seemingargpremisereject", 1),

},

{
  questionId: "counterexampletoseemsprinciple", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "long" to "LongAnswer" in questionType
  questionText: "There is no doubt that we sometimes form beliefs about the world on the basis of how things seem to us. Do you think that this is always a mistake, or only sometimes? If the latter, when?", // Change "question text" to "questionText"
 questionCondition: (answers, classDay, theses) => showIf(answers, "seemingargpremisereject", 2),
},

{
  questionId: "noreasontodoubtfreewill", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "long" to "LongAnswer" in questionType
  questionText: "What's the reason?", // Change "question text" to "questionText"
 questionCondition: (answers, classDay, theses) => showIf(answers, "seemingargpremisereject", 3),
},

// fatalist argument

{
  questionId: "isfatalistsound", // Change "id" to "questionId"
  questionType: "Radio", // Capitalize and rename "type" to "questionType"
  questionText: "Is the fatalist argument sound?", // Change "question text" to "questionText"
  questionOptions: ["Yes", "No"], // Change "options" to "questionOptions"
  questionCondition: (answers, classDay, theses) => classDay >= 8, 
},

{
  questionId: "fatalistpremisereject", // Change "id" to "questionId"
  questionType: "Checkbox", // Change "type" to "questionType" and capitalize the first letter
  questionText: "Which independent premises of that argument do you reject?", // Keep "questiontext" as "questionText"
  questionOptions: [
    "1. We have no choice about past facts.",
    "2. In the past, there were truths about our future actions.",
    "4. If we have no choice about some facts, and those facts necessitate X, we have no choice about X.",
    "It being true that we will perform some action necessitates that we will perform that action.",
  ],
  questionCondition: (answers, classDay, theses) => showIf(answers, "isfatalistsound", 2), 
},

{
  questionId: "nochoicepast", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "But it is obvious that we don't have a choice about many past events — for example, you don't now have a choice about what clothes you wore yesterday. Which past facts do you think that we do now have a choice about, and why?", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "fatalistpremisereject", 1), 
},

{
  questionId: "pasttruthsaboutfutureacts", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "Given the logical argument for fate, you must think that claims about future actions all lack a truth-value. But suppose that you claim that your roommate will eat pasta for dinner tonight, and suppose further that they do. That would seem to imply that your claim was true, which would seem to imply that there was a truth about what your roommate would eat. How do you respond?", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "fatalistpremisereject", 2), 
},

{
  questionId: "againstnecessitationprinciple", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "But how could this principle be false? If I have no choice about X, and it is literally impossible for X to be true without Y, how could I have a choice about Y? It seems like I could only have a choice about Y if I also have a choice about X - but we are only considering cases in which you don't.", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => 
      showIf(answers, "fatalistpremisereject", 3) ||
      showIf(answers, "foreknowledgepremisereject", 3) ||
      showIf(answers, "consequenceargpremisereject", 4),
  },

{
  questionId: "truthnecessitatesfact", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "But that means that you think that it is possible both that it is true that you will perform some action, and that you will not perform that action. But that just sounds like a contradiction. Imagine someone saying that it is true that a paper is due tomorrow and that the paper is not due tomorrow. Wouldn't that be a contradiction? Why is your position any better?", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "fatalistpremisereject", 4), 
},

{
  questionId: "fateandtheopenfuture", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "Here is a challenge to your belief in fate. We ordinarily think that there is a kind of asymmetry between the future and the past. The past is fixed, whereas the future is still, in some sense, open. A natural way to explain this asymmetry would be to say that there are truths about the past, whereas there are not yet any truths about what will happen in the future. Do you just reject the idea that there is this kind of asymmetry between past and future, or do you think that there is some other explanation of it?", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "isfatalistsound", 1), 
},

// foreknowledge argument

{
  questionId: "isforeknowledgesound", // Change "id" to "questionId"
  questionType: "Radio", // Capitalize and rename "type" to "questionType"
  questionText: "Is the foreknowledge argument sound?", // Change "question text" to "questionText"
  questionOptions: ["Yes", "No"], // Change "options" to "questionOptions"
  questionCondition: (answers, classDay, theses) => classDay >= 8, 
},

{
  questionId: "foreknowledgepremisereject", // Change "id" to "questionId"
  questionType: "Checkbox", // Change "type" to "questionType" and capitalize the first letter
  questionText: "Which independent premises of that argument do you reject?", // Keep "questiontext" as "questionText"
  questionOptions: [
    "1. We have no choice about what God knew in the past.",
    "2. In the past, God knew truths about our future actions.",
    "4. If we have no choice about some facts, and those facts necessitate X, we have no choice about X.",
    "5. God knowing that we will perform some action necessitates that we will perform that action",
  ],
  questionCondition: (answers, classDay, theses) => showIf(answers, "isforeknowledgesound", 2), 
},

{
  questionId: "rejectgodpastbeliefs", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "But it is hard to see how you could have a choice about what God knew in the past; you can't, after all, make one of God's beliefs false (since God is infallible). So, for you to now have a choice about what God knew in the past, you would have to now have a choice about what God believed in the past. But how could you now have a choice about that?", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "foreknowledgepremisereject", 1), 
},

{
  questionId: "reasontorejectforeknowledge", // Change "id" to "questionId"
  questionType: "Radio", // Capitalize and rename "type" to "questionType"
  questionText: "Why do you reject foreknowledge?", // Change "questiontext" to "questionText"
  questionOptions: [
    "I don't believe that God, or any all-knowing being, exists.",
    "I do believe that an all-knowing being exists, but do not think that that being has knowledge of my future actions.",
    "I think that an all-knowing being does have knowledge of my future actions, but I think that that being exists outside of time, so that the knowledge was not had in the past.",
  ],
  questionCondition: (answers, classDay, theses) => showIf(answers, "foreknowledgepremisereject", 2), 
},

{
  questionId: "theistbutdeniesGodinthiscase", // Change "id" to "questionId"
  questionType: "Contradiction", // Change "type" to "questionType" and capitalize the first letter
  questionText: "But elsewhere you've said that you believe that God exists --- so denying that God exists here is a contradiction. You should either change your answer here, or rethink your previous commitment to the existence of God.", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "reasontorejectforeknowledge", 1) && theses["theism"] === 1, 
},

{
  questionId: "omnisciencewithoutknowledge", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "But how could that being be all-knowing, if it does not know what you will do tomorrow? If you believe in some more or less traditional religion, explain how the denial of God's knowledge is consistent with your religious beliefs.", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "reasontorejectforeknowledge", 2), 
},

{
  questionId: "godoutsideoftime", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "But it is not clear how placing God outside of time helps. Just as we seem to have no choice about the past, so we seem to have no choice about events outside of time. If you agree, then this can't be a satisfactory response to the foreknowledge argument. If you disagree, say why you think we can have a choice about events outside of time.", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "reasontorejectforeknowledge", 3), 
  },

  {
    questionId: "godknowingthetime",
    questionType: "LongAnswer",
    questionText: "You think of God as existing outside of time. But a puzzle arises for that view. It seems plausible that there is a fact of the matter about what time it is now. Suppose, just to have an example, that it is 11:25 PM EST. One hour ago it was true that it will be 11:25 in an hour; one hour from now it will be true that it was 11:25 an hour ago; but right now it is true that it IS 11:25. But it seems like this is something which can only be known by a being which exists at this time. On your view, God doesn't. So it looks like, on your view, God does not know what time it is. Can this be correct?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "reasontorejectforeknowledge", 3), 
  },

{
  questionId: "knowledgenecessitatesfact", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "But that means that you think that it is possible both that God knows that you will perform some action, and that you will not perform that action. But that just sounds like a contradiction. Imagine someone saying that they know that a paper is due tomorrow and that the paper is not due tomorrow. Wouldn't that be a contradiction? Why is your position any better?", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "foreknowledgepremisereject", 4), 
},

{
  questionId: "foreknowledgesoundquestion", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "So you think that God exists, but did not give human beings free will. But why wouldn't a perfectly good being give us free will? Surely it would be better to have your future be up to you than not.", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "isforeknowledgesound", 1), 
},

// on the master argument against free will

{
  questionId: "ismasterargsound", // Change "id" to "questionId"
  questionType: "Radio", // Capitalize and rename "type" to "questionType"
  questionText: "Is the master argument against free will sound?", // Change "question text" to "questionText"
  questionOptions: ["Yes", "No"], // Change "options" to "questionOptions"
  questionCondition: (answers, classDay, theses) => classDay >= 9, 
},

{
  questionId: "premiserejectmasterarg", // Change "id" to "questionId"
  questionType: "Checkbox", // Change "type" to "questionType" and capitalize the first letter
  questionText: "Which premise or premises do you reject?", // Keep "questiontext" as "questionText"
  questionOptions: [
    "1. Either (i) Compatibilism is true or (ii) Libertarianism is true or (iii) there is no free will.",
    "2. Compatibilism is false.",
    "3. Libertarianism is false."
  ],
  questionCondition: (answers, classDay, theses) => showIf(answers, "ismasterargsound", 2), 
},

// for the confused person that rejects p1 of the master argument

{
  questionId: "confusedmasterargresponse", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "But it is very hard to see how premise (1) of the master argument could possibly be false. If you think this premise is false, then you must think that free will could be real and neither compatible with nor incompatible with determinism. But that just sounds like a contradiction. What's going on?", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, 'premiserejectmasterarg', 1), 
},

// consequence argument

{
  questionId: "consequenceargpremisereject", // Change "id" to "questionId"
  questionType: "Checkbox", // Capitalize and rename "type" to "questionType"
  questionText: "If you think that Compatibilism is true, you must think that the consequence argument is unsound. Which premises do you reject?", // Change "questiontext" to "questionText"
  questionOptions: [
    "1. No one has any choice about the state of the world in the distant past.",
    "2. No one has any choice about what the laws of nature are.",
    "4. If determinism is true, then the state of the world in the distant past + the laws of nature necessitate every future action.",
    "5. If we have no choice about some facts, and those facts necessitate X, we have no choice about X.",
  ],
  questionCondition: (answers, classDay, theses) => showIf(answers, "premiserejectmasterarg", 2), 
},

// contradiction for people who accept the no choice principle in some arguments but reject it in others.

{
  questionId: "nochoiceprincipleinconsistency", // Change "id" to "questionId"
  questionType: "Contradiction", // Change "type" to "questionType" and capitalize the first letter
  questionText: "The following principle occurs in the fatalist argument, the foreknowledge argument, and the consequence argument: <i>If we have no choice about some facts, and those facts necessitate X, we have no choice about X.</i> If you think that this principle is false, you should reject it in all three arguments. If you think that it is true, you should accept it in all three arguments.", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => (showIf(answers, "consequenceargpremisereject", 4) || showIf(answers, "foreknowledgepremisereject", 3) || showIf(answers, "fatalistpremisereject", 3)) && !(showIf(answers, "consequenceargpremisereject", 4) && showIf(answers, "foreknowledgepremisereject", 3) && showIf(answers, "fatalistpremisereject", 3)), 
},

{
  questionId: "consequencedistantpast", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "It's important to remember the kinds of 'past facts' that are relevant here. They aren't past facts which are partly about the future - like the supposed fact about the truth-value of your roommates's belief about what you will eat for dinner tonight. They are facts which are 'wholly about the past', like the fact that the universe was in a certain physical state 10 million years ago. How could you possibly have a choice now about facts like that?", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "consequenceargpremisereject", 1), 
},

{
  questionId: "powertochangethelaws", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "This would seem to be a pretty extraordinary power; we don't ordinarily think that we have the power to, for example, change the way that gravitation works. Why do you think that it is in some sense up to us what the laws of nature are?", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "consequenceargpremisereject", 2), 
},

{
  questionId: "rejectdefdeterminism", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "But this is just the definition of 'determinism'! You should either find another premise to reject, or change your view about the soundness of the consequence argument.", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "consequenceargpremisereject", 3), 
},

// questions on the Control Argument

{
  questionId: "norandomnesspremreject", // Change "id" to "questionId"
  questionType: "Checkbox", // Change "type" to "questionType" and capitalize the first letter
  questionText: "If you think that Libertarianism is true, you must think that the Control Argument is unsound. Which premises of that argument do you think are false?", // Change "questiontext" to "questionText"
  questionOptions: [
    "1. If free will is incompatible with determinism, then, if there are free actions, those actions are undetermined by anything prior to the action.",
    "2. If an action is undetermined, then the agent does not control whether it happens.",
    "4. If an act is free, then the agent must control whether it happens.",
  ],
  questionCondition: (answers, classDay, theses) => showIf(answers, "premiserejectmasterarg", 3), 
},

{
  questionId: "indeterminismsomewhere", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "If free will is incompatible with determinism, then there must be some undetermined event importantly involved with every free action. (If this were not so, then free will would be compatible with determinism.) So you must think that the undetermined event in question is not the action itself, but something leading up to the action. What do you think that it is? And why doesn't the reasoning in the Control Argument show that that undetermined event is random, and hence not freely chosen?", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "norandomnesspremreject", 1), 
},

{
  questionId: "undeterminednotrandom", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "If an action is undetermined, that means that everything in the history of the universe up to that action is consistent with the action not happening. It seems to follow that nothing made the action happen. In particular, the agent did not do anything to make the action happen. So why doesn't it follow that the agent does not control whether the action happens?", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "norandomnesspremreject", 2), 
},

{
  questionId: "nocontrolbutfree", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "The following claims both seem plausible: (i) If you don't control whether an action happens, it is not up to you whether it happens; (ii) if it is not up to you whether an action happens, it is not a free action. But it seems that you must reject at least one of these claims. Which do you reject, and why?", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "norandomnesspremreject", 3), 
},

{
  questionId: "randombutfree", // Change "id" to "questionId"
  questionType: "LongAnswer", // Change "type" to "questionType" and capitalize the first letter
  questionText: "But remember the example of the Randomizer we discussed in class. If your actions were controlled by a Randomizer, it seems clear they would not be free. But what's the difference between an undetermined action and one controlled by a Randomizer?", // Keep "questiontext" as "questionText"
  questionCondition: (answers, classDay, theses) => showIf(answers, "norandomnesspremreject", 3), 
},

{
  questionId: "rollbackarg",
  questionType: "LongAnswer",
  questionText: "In class, we discussed the 'rollback argument,' which seems to show that no undetermined event could be freely chosen. How do you respond to that argument? Do you think that each choice in the imaginary series is free, or that there is some difference between the first and the last?",
  questionCondition: (answers, classDay, theses) => showIf(answers, "norandomnesspremreject", 2) || showIf(answers, "norandomnesspremreject", 3),
},

// should be shown if either the master argument is taken to be sound or if it is unsound but only the third premise of the argument is rejected - ie, people who reject Compatibilism

{
  questionId: "frankfurtcases",
  questionType: "LongAnswer",
  questionText: "The argument for the view that free will is incompatible with determinism depends on the principle that if we have no choice about some facts, and those facts necessitate X, then we have no choice about X. It seems plausible that if this principle is false, then free will is compatible with determinism, since in that case an act could be free even if necessitated by factors outside of your control. But examples like the example of Black and Jones seem to show that this principle is false. Do you agree? If not, why not? If so, why do you think that Compatibilism is false?",
  questionCondition: (answers, classDay, theses) => (
      showIf(answers, "ismasterargsound", 1) ||
      (!showIf(answers, "premiserejectmasterarg", 2) && showIf(answers, "premiserejectmasterarg", 3))),
},

// contradiction for people who accept determinism and free will but reject compatibilism

{
  questionId: "determinismandFWbutnotcompatibilism",
  questionType: "Contradiction",
  questionText: "In your evaluation of the cosmological argument, you endorsed the truth of determinism. You have also endorsed the thesis that humans have free will. But if both of those things are true, then free will must be compatible with determinism, and premise (2) of the master argument must be false. Think about how to revise your views to avoid this contradiction.",
  questionCondition: (answers, classDay, theses) => 
      theses["committedToFreeWill"] === 1 &&
      showIf(answers, "psr-determinism", 1) &&
      !showIf(answers, "premiserejectmasterarg", 2) &&
      showIf(answers, "premiserejectmasterarg", 3),
},

  // puzzles arising from consequence arg and related issues

    {
    questionId: "compatibilismplusFWD",
    questionType: "LongAnswer",
    questionText: "You think that human free will can explain the existence of some evil in the world. But you also think that an action can be free even if it is necessitated by facts about which you have no choice. But it is hard to see how these two views can go together. The reason why is connected to Mackie's objection to the free will defense. If free will is compatible with our actions being necessitated by factors outside of our control, why wouldn't God necessitate that people perform much better actions than they in fact do? It looks like, on your view, God could both give us free will and ensure that we always make the right choice. Why didn't God do this?",
    questionCondition: (answers, classDay, theses) => (showIf(answers, "fatalistpremisereject", 3) ||
          showIf(answers, "foreknowledgepremisereject", 3) ||
          showIf(answers, "consequenceargpremisereject", 4)) &&
        showIf(answers, "doesfreewillexplain", 1),

  },

  {
    questionId: "libertariankalam",
    questionType: "LongAnswer",
    questionText: "You believe that free will is real, and incompatible with determinism. But consider a free action which is not determined by the prior state of the world. Wouldn't that action lack a cause? And, if it would, why do you think (in your discussion of the kalām argument) that anything that comes to exist at some time must have a cause?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "ismasterargsound", 2) &&
        !showIf(answers, "premiserejectmasterarg", 2) &&
        theses["committedToFreeWill"] === 1 &&
        !showIf(answers, "kalamrejectedpremises", 4),

  },

  {
    questionId: "libertarianpsr",
    questionType: "LongAnswer",
    questionText: "You believe that free will is real, and incompatible with determinism. So you must think that some actions, or choices, are undetermined by the prior state of the world. So it looks like there would be no explanation of why those actions or choices occurred. But you also endorse the principle of sufficient reason, which seems to imply that they must have an explanation. How can these views go together?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "ismasterargsound", 2) &&
        !showIf(answers, "premiserejectmasterarg", 2) &&
        theses["committedToFreeWill"] === 1 &&
        !showIf(answers, "cosmologicalrejectedpremises", 2),

  },

// libet and the value of freedom

{
  questionId: "islibetargsound",
  questionType: "Radio",
  questionText: "The Libet experiments are widely taken to be the most important neuroscientific evidence against the existence of free will. Do those experiments show that our free will is (if real at all) much more limited than one might have thought?",
  questionOptions: ["Yes", "No"],
  questionCondition: (answers, classDay, theses) => classDay >= 10, 
},

{
  questionId: "rponsetnotdecision",
  questionType: "LongAnswer",
  questionText: "The Libet experiments seem to require the assumption that the brain activity which occurs at RP-onset time is an unconscious decision. But the second Libet experiment seems to provide some evidence that that is not so - at least if you agree that the subjects of that experiment never made the decision to flex their wrist. How do you respond to that objection?",
  questionCondition: (answers, classDay, theses) => showIf(answers, "islibetargsound", 1), 
},

{
  questionId: "libetobjection",
  questionType: "LongAnswer",
  questionText: "If you doubt that the Libet experiments cast doubt on free will, how do you explain the fact - which is well confirmed by experiment - that the brain activity at RP-onset clearly precedes any conscious act of will?",
  questionCondition: (answers, classDay, theses) => showIf(answers, "islibetargsound", 2), 
},

// questions about the value of free will; not presently included (see questionCondition)

{
  questionId: "valueoffreewill",
  questionType: "Radio",
  questionText: "Consider two people, A and B, who are just alike except that A really has free will and B has the illusion of free will. Is A's life better, to a significant degree, than B's?",
  questionOptions: ["Yes", "No"],
  questionCondition: (answers, classDay, theses) => 1 === 2, 
},

{
  questionId: "defendvaluefreedom",
  questionType: "LongAnswer",
  questionText: "In order for free will to play the role that it does in the free will defense, it has to be a very significant good. So now imagine that A's life is filled with pain and disappointment, while B's life is a very happy one. Would you still choose A's life over B's? Why or why not?",
  questionCondition: (answers, classDay, theses) => showIf(answers, "valueoffreewill", 1), 
},

{
  questionId: "againstvaluefreedom",
  questionType: "LongAnswer",
  questionText: "Remember the example of Naomi and Susan. Most people would choose Naomi's life over Susan's. If given the choice between those two lives, would it really not matter to you which one you got? If not, that would seem to show that good relationships (as opposed to the illusion of good relationships) matters to the value of one's life. But if that is so, why don't you think that free will (as opposed to the value of free will) matters to the value of one's life?",
  questionCondition: (answers, classDay, theses) => showIf(answers, "valueoffreewill", 2), 
},

// ending questions for people who did not accept any of the above arguments

{
  questionId: "freewillnosoundarguments",
  questionType: "Radio",
  questionText: "It looks like you don't think that any of the arguments that we have discussed for or against the reality of free will are sound. Do you believe that human beings have free will?",
  questionOptions: ["Yes", "No"],
  questionCondition: (answers, classDay, theses) => 
      !(
        showIf(answers, "isresponsibilityargsound", 1) ||
        showIf(answers, "islovingargsound", 1) ||
        showIf(answers, "isseemingargsound", 1)
      ) &&
      (
        showIf(answers, "ismasterargsound", 2) &&
        showIf(answers, "isforeknowledgesound", 2) &&
        showIf(answers, "isfatalistsound", 2)),
},

{
  questionId: "explainfreewillnoarguments",
  questionType: "LongAnswer",
  questionText: "Explain why you think that human beings have free will. Imagine that you're explaining this to someone who does not believe in free will.",
  questionCondition: (answers, classDay, theses) => showIf(answers, "freewillnosoundarguments", 1), 
},

{
  questionId: "explainagainstfreewillnoarguments",
  questionType: "LongAnswer",
  questionText: "Explain why you don't think that human beings have free will. Imagine you're explaining this to someone who thinks that human beings do have free will.",
  questionCondition: (answers, classDay, theses) => showIf(answers, "freewillnosoundarguments", 2), 
},

// contradiction for those committed both to the existence of free will and the denial of it

{
  questionId: "freewillcontradiction",
  questionType: "Contradiction",
  questionText: "There can't both be a sound argument for the existence of free will and a sound argument against it. (The conclusion of a sound argument is always true.) Similarly, it can't be the case both that human free will explains the existence of some evil in the world and that human beings lack free will. Think about how best to resolve this contradiction in your views.",
  questionCondition: (answers, classDay, theses) => theses["committedToFreeWill"] === 1 && theses["deniesFreeWill"] === 1, 
},
{
  questionId: "FWconcludingwhichargument",
  questionText: 'Which argument that we talked about in this section of the class was most challenging to the beliefs that you had coming into the class? (If the argument has a name, you can just name the argument.)',
  questionType: 'LongAnswer',
  questionCondition: (answers, classDay, theses) => classDay >= 10,
},
{
  questionId: "FWconcludingwhichbelief",
  questionText: 'What belief did it challenge? Why did you hold that belief coming into the class? (The explanation can be biographical rather than philosophical.)',
  questionType: 'LongAnswer',
  questionCondition: (answers, classDay, theses) => classDay >= 10,
  },
{
  questionId: "FWconcludingdiditchange",
  questionText: 'In the end, did the argument cause you to weaken or change that belief?',
  questionType: 'Radio',
  questionOptions: ['Yes', 'No'],
  questionCondition: (answers, classDay, theses) => classDay >= 10,
  },
  {
    questionId: "FWconcludingchangedmind",
    questionText: 'Explain why you think that the argument in question may be sound, by explaining why you think that each of the independent premises is likely to be true. State what you take to be the strongest objection to one of those premises, and defend the premise against the objection. (It is fine if your answer here overlaps with other answers you gave in this section.)',
    questionType: 'LongAnswer',
    questionCondition: (answers) => showIf(answers, 'FWconcludingdiditchange', 1)
  }, {
    questionId: "FWconcludingdidnotchange",
    questionText: 'Explain why in the end you did not find the argument convincing, by saying which independent premise you think is false, and why. Also say why in the end you think that the belief challenged by the argument is more likely to be true than false. (It is fine if your answer here overlaps with other answers you gave in this section.)',
    questionType: 'LongAnswer',
    questionCondition: (answers) => showIf(answers, 'FWconcludingdiditchange', 2)
  },

];

