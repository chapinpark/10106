import showIf from "../utils/showIf";

// define questions as a function. The answers state is not available in static js files - so we in effect postpone using it until render time. This makes it possible to state questionConditions using Boolean operators as in ordinary js.

export const beliefQuestions = (answers, classDay, theses) => [

 
   
   {
    questionId: "whichrulesofbelief",
    questionType: "Checkbox",
    section: "belief",
    questionText: "Which of the rules of belief we've discussed do you think are true?",
    questionOptions: [
      "Good Argument -> Belief",
      "Good Argument Against -> No Belief",
      "No Good Argument -> No Belief",
      "Doubt -> No Belief",
      "Certainty -> Belief",
    ],
    questionCondition: (answers, classDay, theses) => classDay >= 15, 
  },

  // the rules of belief about arguments

  {
    questionId: "againstgoodarguments",
    questionType: "LongAnswer",
    section: "belief",
    questionText: "But it is hard to see how Good Argument -> Belief could be false. A good argument (in the sense in which we are using the term) is just a valid argument whose premises you should believe. Because it is valid, you know that if the premises are true, the conclusion must be. So why, given that you should believe the premises, shouldn't you believe the conclusion?",
    questionCondition: (answers, classDay, theses) => !showIf(answers, "whichrulesofbelief", 1) && classDay >= 15, 
  },

  {
    questionId: "goodargumentagainstnobeliefdenier",
    questionType: "LongAnswer",
    section: "belief",
    questionText: "But it is hard to see how Good Argument Against -> No Belief could be false.  A good argument (in the sense in which we are using the term) is just a valid argument whose premises you should believe. Because it is valid, you know that if the premises are true, the conclusion must be. So it seems like you should believe the conclusion of the argument. But then you should not also believe its opposite.",
    questionCondition: (answers, classDay, theses) => !showIf(answers, "whichrulesofbelief", 2) && classDay >= 15, 
  },

  {
    questionId: "requireargsforall",
    questionType: "LongAnswer",
    section: "belief",
    questionText: "But No Good Argument -> No Belief seems to lead to the result that we shouldn't believe anything. Suppose I believe P. According to your rule of belief, I should only believe this if I can give a good argument for it. But that argument will have premises. According to your rule, if the argument is good, I must have arguments for those premises. And those arguments will all have premises, all of which will require arguments which themselves have premises, etc. etc. Being a finite being, I can't run through infinitely many arguments. So how, on your view, could it ever be true that I should believe something?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "whichrulesofbelief", 3), 
  },

  {
    questionId: "deniersofdoubtnobelief",
    questionType: "LongAnswer",
    section: "belief",
    questionText: "But remember the example of the dog given in lecture. It would surely be a mistake to keep believing that the dog is a poodle once you learned that it might be a Havanese. The rule Doubt -> No Belief seems to give an explanation of this fact. How would you explain it? Or do you think that it would be reasonable to go on believing that the dog is a poddle?",
    questionCondition: (answers, classDay, theses) => !showIf(answers, "whichrulesofbelief", 4) && classDay >= 15, 
  },

  {
    questionId: "believersindoubtnobelief",
    questionType: "Radio",
    section: "belief",
    questionText: "Do you think that you should believe that you have hands?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers, classDay, theses) => showIf(answers, "whichrulesofbelief", 4), 
  },

  {
    questionId: "doubtnobeliefnonskeptic",
    questionType: "LongAnswer",
    section: "belief",
    questionText: "Here's an argument that Doubt -> No Belief implies that you should not believe that you have hands: you cannot rule out the possibility that all of your experiences of hands have been illusory; you have no source of information about your hands other than your experiences; therefore, you cannot rule out the possibility that you do not have hands. So, by the rule of belief you endorse, it follows that you should not believe that you do. Where does the argument go wrong?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "believersindoubtnobelief", 1), 
  },

  {
    questionId: "nonbelieverinhands",
    questionType: "LongAnswer",
    section: "belief",
    questionText: "My prediction is that you will go on acting as if you have hands. Is that because, despite the fact that you should not believe that you have hands, you find it impossible not to believe that you do? Or is it that you think that you should act as if you have hands even if you don't believe that you do? Either way, explain!",
    questionCondition: (answers, classDay, theses) => showIf(answers, "believersindoubtnobelief", 2), 
  },

  {
    questionId: "denierofcertaintybelief",
    questionType: "LongAnswer",
    section: "belief",
    questionText: "But Certainty -> Belief seems very plausible. If you can rule out any possibility of P being false, it seems that you can be sure that P is true. And if you can be sure of this, why wouldn't you believe it?",
    questionCondition: (answers, classDay, theses) => !showIf(answers, "whichrulesofbelief", 5) && classDay >= 15, 
  },

  // confirmation theory questions 



  // foundationalism

  {
    questionId: "isfoundationalismtrue",
    questionType: "Radio",
    questionText: "Is Foundationalism (the rule No Foundations → No Belief) true?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers, classDay, theses) => classDay >= 16, 
  },

  {
    questionId: "shouldibelievesuncomesup",
    questionType: "Radio",
    questionText: "One challenge to Foundationalism is that it makes it hard to see why we should have certain beliefs which pretty much everyone has. An example is the belief that the sun will come up tomorrow. Do you think that this is a belief we should have?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers, classDay, theses) => showIf(answers, "isfoundationalismtrue", 1), 
  },

  {
    questionId: "forwhodontbelievesuncomesup",
    questionType: "LongAnswer",
    questionText: "But the same reasoning would seem to show that we should not believe pretty much anything about the world which goes beyond our experience. Examples include: the belief that your roommate is not a zombie; the belief that you will survive to the end of the day; the belief that the food currently in North Dining Hall is not poisonous. Do you think that we should discard all beliefs like this? If not, which ones should you keep, and why? If so, do you plan to make an effort to get rid of these beliefs? Why or why not?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "shouldibelievesuncomesup", 2), 
  },

  {
    questionId: "foundationalismwhichoption",
    questionType: "Checkbox",
    questionText: "Then which of the following categories do you think that the belief that the sun will come up tomorrow falls into?",
    questionOptions: ["I can be certain that it is true", "My sense experiece tells me that it is true", "There is a valid argument for it using only premises which I can be certain of or which my sense experience tells me is true"],
    questionCondition: (answers, classDay, theses) => showIf(answers, "shouldibelievesuncomesup", 1), 
  },

  {
    questionId: "certainsuncomesup",
    questionType: "LongAnswer",
    questionText: "But to be certain of a claim, you have to be able to rule out every way the claim could be false just by thinking about it. It is surely possible that the sun not come up tomorrow -- so how can you rule this out?",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'foundationalismwhichoption', 1), 
  },

  {
    questionId: "sensessaysuncomesup",
    questionType: "LongAnswer",
    questionText: "But surely you can't see the future. So how can your senses tell you that the sun will come up tommorrow?",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'foundationalismwhichoption', 2), 
  },

  {
    questionId: "validargforsuncomesup",
    questionType: "LongAnswer",
    questionText: "But in class we saw that this faces a dilemma. On the one hand, the argument may contain premises only about past events. But then it seems that it will be invalid. On the other hand, you can make the argument valid by adding the extra premise that the future will (in some sense) resemble the past. But this extra premmise will itself neither be certain nor be such that your senses tell you that it is true. So a foundationalist has to give a good argument for it. But it is hard to do this without circularity. How do you respond to this dilemma?",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'foundationalismwhichoption', 3), 
  },



  {
    questionId: "intuitionbehindfoundationalism",
    questionType: "LongAnswer",
    questionText: "Foundationalism is based on the plausible-seeming idea that there are only two good sources of belief: the information we get from sense experience, and the beliefs we can see to be true by thinking alone. If you deny Foundationalism, you are saying that we should have some beliefs that fit into neither category. But why wouldn't any such belief just be arbitary, and based on nothing?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "isfoundationalismtrue", 2), 
  },

 // foundationalism + theism + no arguments

  {
    questionId: "foudationalisttheists",
    questionType: "LongAnswer",
    questionText: "You're a Foundationalist who believes that God exists, but doesn't base this on any sound argument you know of. That seems to imply that you think either that you have had a sensory experience of God or that you think that we can be certain that God exists. Is one of those your view? If so, explain. If neither is your view, explain why you think that your position is consistent with Foundationalism.",
    questionCondition: (answers, classDay, theses) => showIf(answers, "theismrejectallarguments", 2) && showIf(answers, "isfoundationalismtrue", 1),

  },

  // questions on induction -> belief - only for those who deny foundationalism, since proponents of foundationalism must deny induction belief

  {
    questionId: "isinductionbelieftrue",
    questionType: "Radio",
    questionText: "Do you think that Induction -> Belief is true?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers, classDay, theses) => showIf(answers, 'isfoundationalismtrue', 2), 
  },

  {
    questionId: "ravensprobleminductionbelief",
    questionType: "LongAnswer",
    questionText: "But this principle seems to imply that observation of sufficiently many non-black things which are also non-ravens will provide enough evidence for me to form the belief that all ravens are black. But this seems absurd. How do you reply?",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'isinductionbelieftrue', 1), 
  },

  /* GRUE STUFF
  {
    questionId: "ismodifiedindictiontrue",
    questionType: "Radio",
    questionText: "Do you think that some modified version of this principle -- perhaps one which prohibits use of predicates like 'grue' -- is true?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers, classDay, theses) => showIf(answers, 'isinductionbelieftrue', 2), 
  },

  {
    questionId: "spelloutmodifiedinductionbelief",
    questionType: "LongAnswer",
    questionText: "Then explain how you think the principle should be modified, and say how this modification helps with the paradox of the ravens and the problem posed by 'grue.'",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'ismodifiedindictiontrue', 1), 
  },
*/
  {
    questionId: "sciencewithoutinductionexplain",
    questionType: "LongAnswer",
    questionText: "If Induction -> Belief is false, it looks like we can't explain the difference between theories which are and theories which are not well-supported by the evidence in terms of how many instances of the relevant generalizations we have observed to be true. But there surely is a difference of this kind. How would you explain this difference?",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'isinductionbelieftrue', 2), 
  },


  // seems-belief questions

  {
    questionId: "isseemsbelieftrue",
    questionType: "Radio",
    questionText: "Is Restricted Conservatism true?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers, classDay, theses) => classDay >= 17, 
  },

  {
    questionId: "biasargagainstseemsbelief",
    questionType: "LongAnswer",
    questionText: "But Restricted Conservatism would seem to license belief in astrology or (serious) Pastafarianism. More generally, it says that people should maintain beliefs for which they have no evidence at all, so long as they know of no arguments against those beliefs. Why do you think that that this is ok?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "isseemsbelieftrue", 1), 
  },

  {
    questionId: "denierofconservatism",
    questionType: "LongAnswer",
    questionText: "Because you reject foundationalism, you think that we should at least sometimes have basic beliefs which go beyond what our senses tell us and of which we are not certain. Restricted Conservatism is one theory of the conditions under which we should do this; but you reject that as well. So try to say when you think we should have a basic belief which  goes beyond what our senses tell us and of which we are not certain, and explain how your view differs from Restricted Conservatism.",
    questionCondition: (answers, classDay, theses) => showIf(answers, "isseemsbelieftrue", 2) && showIf(answers, "isfoundationalismtrue", 2), 
      // for the person who rejects all of foundationalism, doubt no belief, and conservatism
    },

  /*
    {
      questionId: "seemsbelieffollowup",
      questionType: "Radio",
      questionText: "Do you think that Restricted Seems → Belief 2.0 is true? ",
      questionOptions: ["Yes", "No"],
      updater: function () {
        upd(showIf(answers, "isseemsbelieftrue", 2), this.id);
      },
    },

    {
      questionId: "howtocheckforbias",
      questionType: "LongAnswer",
      questionText: "If you are like most people, certain claims about political news seems true to you, and certain other claims seem false. Given that you reject Seems → Belief but accept the restricted version, it follows that you think that you should form beliefs on the basis of these seemings only if you don't have good reason to think that they are unreliable. How might you go about investigating whether they are unreliable?",
      updater: function () {
        upd(showIf(answers, "seemsbelieffollowup", 1), this.id);
      },
    },

    {
      questionId: "rejectallseemsbeliefprinciples",
      questionType: "LongAnswer",
      questionText: "You reject Foundationalism, and also reject No Doubt → No Belief. So you think that there are some basic beliefs we should have even though those beliefs are not based on experience and even though we can't rule out their falsity. This raises the question of which basic beliefs of this kind we can have. Our Seems → Belief principles are attempts to answer this question; but you reject those principles too. So how would you answer the question of which basic beliefs we should have?",
      updater: function () {
        upd(
          // applies to people who reject all seems-belief principles and reject foundationalism and no doubt- no belief
          showIf(answers, "seemsbelieffollowup", 2) &&
          showIf(answers, "isfoundationalismtrue", 2) &&
          !showIf(answers, "whichrulesofbelief", 3),
          this.id
        );
      },
    },

    */

  // puzzles for combining seems/belief with more restrictive negative rules of belief

  {
    questionId: "foundationalismplusseemsbelief",
    questionType: "LongAnswer",
    questionText: "You endorse both Foundationalism and Restricted Conservatism. But it is hard to see how both of these views could be true. That is because a basic belief might both be such that you know of no argument against it and such that you are not certain that it is true, your experience does not tell you that it is true, and you have no argument for it.  In this situation,Restricted Conservatism would tell you to keep the belief, whereas No Foundations → No Belief would tell you not to. So one must be false. How do you respond?",
    questionCondition: (answers, classDay, theses) =>
        showIf(answers, "isfoundationalismtrue", 1) &&
        showIf(answers, "isseemsbelieftrue", 1),
  },

  {
    questionId: "doubtnobeliefplusseemsbelief",
    questionType: "LongAnswer",
    questionText: "You endorse both Doubt -> No Belief and Restricted Conservatism. But it is hard to see how both of these views could be true. That is because a basic belief might both be such that you know of no argument against it and such that you cannot rule out the possibility of its falsehood.  In this situation,Restricted Conservatism would tell you to keep the belief, whereas Doubts → No Belief would tell you not to. So one must be false. How do you respond?",
  questionCondition: (answers, classDay, theses) =>
        showIf(answers, "whichrulesofbelief", 4) &&
        showIf(answers, "isseemsbelieftrue", 1),
  },

  // pascal's wager

  {
    questionId: "ispascalrightaboutexpectedutility",
    questionType: "Radio",
    questionText: "Pascal's wager is an argument that expected utility calculations show that we should believe that God exists. Is Pascal correct that the expected utility of believing in God is greater than the expected utility of non-belief?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers, classDay, theses) => classDay >= 17, 
  },

  {
    questionId: "whydidpascalnotshowthis",
    questionType: "LongAnswer",
    questionText: "Why not? Do you reject some of Pascal's assumptions about value or probabilities? Or is there some other problem?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "ispascalrightaboutexpectedutility", 2), 
  },

  {
    questionId: "doesexpectedutiiltyshowweshouldbelieve",
    questionType: "Radio",
    questionText: "Is the fact that the expected utility of belief is greater than that of non-belief good reason to believe in God?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers, classDay, theses) => showIf(answers, "ispascalrightaboutexpectedutility", 1), 
  },

  {
    questionId: "whynottrustEU",
    questionType: "LongAnswer",
    questionText: "But expected utility calculations seem to provide good reasons for making other decisions (e.g., deciding what bets to take). Why wouldn't they also provide good reasons for forming beliefs?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "doesexpectedutiiltyshowweshouldbelieve", 2), 
  },

  {
    questionId: "beliefsbasedonEUareweird",
    questionType: "LongAnswer",
    questionText: "But there is something weird about believing something based on the expected utiltity of holding the belief: the fact that holding the belief has a higher expected utility seems to have nothing to do with whether the belief is true. In fact, one might even have good reason to think that the belief is probably false. And isn't it always a mistake to form a belief that you think is probably false?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "doesexpectedutiiltyshowweshouldbelieve", 1), 
  },

  {
    questionId: "pascalwhynotbelieve",
    questionType: "LongAnswer",
    questionText: "If Pascal's wager is a good reason to believe that God exists, why don't you believe?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "doesexpectedutiiltyshowweshouldbelieve", 1) && theses["theism"] === 0,
    },
  
  
  
  
  
  



  

 


];

