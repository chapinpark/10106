import showIf from "../utils/showIf";

// define questions as a function. The answers state is not available in static js files - so we in effect postpone using it until render time. This makes it possible to state questionConditions using Boolean operators as in ordinary js.

export const ethicsQuestions = (answers) => [


  
   {
    questionId: "whattheoryofvalue",
    questionType: "Radio",
    questionText: "Which theory of moral value do you think is most likely to be true?",
    questionOptions: ["Moral nilism", "Moral realism", "Moral relativism"],
    questionCondition: (answers, classDay, theses) => classDay >= 18,
  },

  // nihilism

  {
    questionId: "motivatenihilism",
    questionType: "LongAnswer",
    questionText: "Imagine that you were trying to convince a moral realist that moral nihilism is true. How would you do it?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "whattheoryofvalue", 1), 
  },

  {
    questionId: "optionsforthenihilist",
    questionType: "Radio",
    questionText: "So you think that there are no facts about what is right and wrong or good and bad. So when we use moral language, we are doing something other than correctly describing the moral facts.",
    questionOptions: [
      "I think that we're just speaking falsely; I'm an error theorist.",
      "I'm an emotivist; I think that when we use moral language we are expressing emotions or issuing imperatives rather than trying to describe the facts",
      "I have a view which is different than either of those options",
    ],
    questionCondition: (answers, classDay, theses) => showIf(answers, "whattheoryofvalue", 1), 
  },

  {
    questionId: "qfortheerrortheorist",
    questionType: "LongAnswer",
    questionText: "On your view, the sentences 'Slavery is bad' and 'Slavery is good' should be on par; both are, equally, false. But it's hard to resist the idea that there is something better about the first one than the second one. Is this just a mistake? Or can you explain why endorsing the first of these would be better than endorsing the second? In answering this question, be careful to remember that you are a moral nihilist who does not think that there are really any facts about goodness and badness!",
    questionCondition: (answers, classDay, theses) => showIf(answers, "optionsforthenihilist", 1), 
  },

  {
    questionId: "secondqforerrortheory",
    questionType: "LongAnswer",
    questionText: "If error theory is true, then all of our claims about right and wrong, good and bad, are false. So it seems that the error theorist should simply stop using that vocabulary (much as grown people stop using 'Santa Claus' in a serious way). Do you plan to do this? Why or why not?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "optionsforthenihilist", 1), 
  },

  {
    questionId: "qfortheemotivist",
    questionType: "LongAnswer",
    questionText: "The main puzzle for the emotivist is to explain what sentences like 'Murder is wrong' mean when they are embedded in more complicated sentences. Consider, for example, the sentence 'If murder is wrong, then convincing someone to murder is wrong.' It seems that the first occurrence of 'murder is wrong' can't mean what the emotivist thinks it usually means, since 'If Boo! murder, then convincing someone to muder is wrong' does not seem to make sense. But if it means something different than what it usually means, then we can't explain why arguments like the following one are valquestionId: 'If murder is wrong, then convincing someone to murder is wrong; murder is wrong; therefore, convincing someone to murder is wrong.' How do you respond to this dilemma?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "optionsforthenihilist", 2), 
  },

  {
    questionId: "moralnihilsimthirdoption",
    questionType: "LongAnswer",
    questionText: "Then explain what your view of moral language is, and why you think that it is superior to error theory or emotivism.",
    questionCondition: (answers, classDay, theses) => showIf(answers, "optionsforthenihilist", 3), 
  },

  // questions about moral realism
  {
    questionId: "motivaterealism",
    questionType: "LongAnswer",
    questionText: "What do you think is the best argument for moral realism? How would you convince someone who does not believe in objective moral facts that there really are such things?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "whattheoryofvalue", 2), 
  },

  {
    questionId: "moralrealismq2",
    questionType: "LongAnswer",
    questionText: "We seem to find much more disagreement about morality than about other topics about which there are objective facts. Do you agree with this, and if so why do you think that it is so?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "whattheoryofvalue", 2), 
  },

  {
    questionId: "moralrealismq3",
    questionType: "LongAnswer",
    questionText: "Why (if there really are objective facts about right and wrong) are moral disagreements so surprisingly difficult to resolve?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "whattheoryofvalue", 2), 
  },

  // questions for the moral relativist

  {
    questionId: "motivatemoralrelativism",
    questionType: "LongAnswer",
    questionText: "Imagine that you were trying to convince a moral realist that moral relativism is true. How would you do it?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "whattheoryofvalue", 3), 
  },

  {
    questionId: "moralrelativismq2",
    questionType: "LongAnswer",
    questionText: "Moral relativism says that claims about right and wrong are true only relative to the standards of a certain group. But all of us are part of many groups. What determines which of these groups is relevant to a given moral claim?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "whattheoryofvalue", 3), 
  },

  {
    questionId: "moralrelativismq3",
    questionType: "LongAnswer",
    questionText: "Relativism seems to have the consequence that when I say 'X is wrong' what I say is true only if most people in my community disapprove of X. But that seems to imply that one can never be, morally speaking, ahead of one's time — if you do develop a view about morality which most of your society disagrees with, relativism seems to imply that your view is automatically false. This seems implausible. How should the relativist respond?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "whattheoryofvalue", 3), 
  },

  // THEORIES IN NORMATIVE ETHICS

  // for realists and relativists

  {
    questionId: "moraltheorychoice",
    questionType: "Radio",
    questionText: "Which of the three approaches to moral theory we discussed do you think is most likely to be true?",
    questionOptions: ["consequentialism", "deontology", "virtue ethics", "some combination of these views", "some other view entirely"],
    questionCondition: (answers, classDay, theses) => classDay >= 19 && (theses["realism"] === 1 || theses["relativism"] === 1), 

  },

  // for emotivists

  {
    questionId: "emotivistmoraltheorychoice",
    questionType: "Radio",
    questionText: "As a moral nihilist, you don't think that any of  the three approaches to moral theory we discussed is true. But as an emotivist, you think that we use moral language to express positive or negative attitudes toward actions. An emotivists can then ask the question: which types of actions should we be in favor of, and which should we be against? And we can then reinterpret our moral theories as answers to this question. For example, an emotivist consequentialist would be in favor of actions which bring about the best consequences. Thought of in this way, which of the following views do you endorse?",
    questionOptions: ["consequentialism", "deontology", "virtue ethics", "some combination of these views", "some other view entirely"],
    questionCondition: (answers, classDay, theses) => classDay >= 19 && showIf(answers, 'optionsforthenihilist', 2), 
  },

  // for nohilists who are not emotivists

  {
    questionId: "nihilistnotemotivistmoraltheorychoice",
    questionType: "LongAnswer",
    questionText: "As a nihilist, you think that all of the moral theories we discussed today are false, because there are no facts about rightness and wrongness for them to describe. But if there really are no facts about rightness and wrongness, what explains the fairly impressive level of agreement among people who consider various versions of the trolley example?",
    questionCondition: (answers, classDay, theses) => classDay >= 19 && (showIf(answers, 'optionsforthenihilist', 1) || showIf(answers, 'optionsforthenihilist', 3)), 
  },

  // for people who endorse a combination

  {
    questionId: "whichcombinationofmoraltheories",
    questionType: "LongAnswer",
    questionText: "Explain which of our theories you would combine, and how you would combine them. Explain how your combined theory would handle cases in which the individual theories you are combining would say different things.",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'moraltheorychoice', 4) || showIf(answers, 'emotivistmoraltheorychoice', 4), 
  },

  {
    questionId: "benefitsofcombinationofmoraltheories",
    questionType: "LongAnswer",
    questionText: "Explain why the combined view you endorse is preferable to any of the individual theories we discussed, with reference to at least one example of an action.",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'moraltheorychoice', 4) || showIf(answers, 'emotivistmoraltheorychoice', 4), 
  },

  // for people who endorse none of the above

  {
    questionId: "whichnovelmoraltheory",
    questionType: "LongAnswer",
    questionText: "Explain the view of right and wrong you prefer, and explain how it differs from the theories discussed in class.",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'moraltheorychoice', 5) || showIf(answers, 'emotivistmoraltheorychoice', 5), 
  },

  {
    questionId: "benefitsofnovelmoraltheory",
    questionType: "LongAnswer",
    questionText: "Explain why the view you endorse is preferable to any of the individual theories we discussed, with reference to at least one example of an action.",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'moraltheorychoice', 5) || showIf(answers, 'emotivistmoraltheorychoice', 5), 
  },

  //consequentialism

  {
    questionId: "hedonismyesorno",
    questionType: "Radio",
    questionText: "Consequentialists say that one should always act so as to bring about the best available outcome. So, they owe some account of what makes one outcome better than others. Hedonists say that outcomes are better insofar as they include more pleasure, and worse insofar as they include more pain. Do you think that hedonism is true?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers, classDay, theses) => showIf(answers, 'moraltheorychoice', 1) || showIf(answers, 'emotivistmoraltheorychoice', 1), 
  },

  {
    questionId: "hedonistexperiencemachine",
    questionType: "LongAnswer",
    questionText: "Consequentialists who are also hedonists seem forced to say that you would be morally obliged to put others into the experience machine even if they very much did not want this. This strikes many people as a bad result. Do you agree that one should put unwilling people into the experience machine when doing so would maximize pleasure and minimize pain? If so, how would you reply to people to whom this seems like a terrible thing to do? If not, how is this consistent with your view?",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'hedonismyesorno', 1), 
  },

  {
    questionId: "questionforantihedonist",
    questionType: "LongAnswer",
    questionText: "So you think that some things other than pleasure or pain can make an outcome better or worse. Which things do you think are goods, other than pleasure? Do you think that pleasure is a good? If there is more than one type of good, explain how you think we should think about choices between actions which would bring about diffferent types of goods.",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'hedonismyesorno', 2), 
  },

  {
    questionId: "consequentialismdavidthesurgeon",
    questionType: "LongAnswer",
    questionText: "One objection to consequentialism is that it implies that David the surgeon should kill someone to harvest their organs, thereby saving five lives. Does your version of consequentialism imply that David should do this? If so, explain why you think that this result is not a problem for your view. If not, explain why not, and say whether you think that other examples of rights violations which lead to apparently better consequences are a problem for your view.",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'moraltheorychoice', 1) || showIf(answers, 'emotivistmoraltheorychoice', 1), 
  },

  // deontology

  {
    questionId: "Whichtypeofdeontology",
    questionType: "Radio",
    questionText: "A deontological approach to ethics is one which attempts to give non-consequentialist rules for distinguising right from wrong. Kant's law of humanity is one such view. But there are other possibilities, which might or might not include the law of humanity alongside other rules. Which of the following do you think is true?",
    questionOptions: ["Kant's theory", "some other deontological theory"],
    questionCondition: (answers, classDay, theses) => showIf(answers, 'moraltheorychoice', 2) || showIf(answers, 'emotivistmoraltheorychoice', 2), 
  },

  {
    questionId: "questionforkantian",
    questionType: "LongAnswer",
    questionText: "But Kant's theory does not seem to cover all cases in which there seems to be a difference between right and wrong. It does not, for example, seem to imply that cruelty to animals or destructon of a natural environment is wrong. How do you respond?",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'Whichtypeofdeontology', 1), 
  },

  {
    questionId: "questionfornonkantiandeontologist",
    questionType: "LongAnswer",
    questionText: "Explain your deontological theory of right and wrong, and why you think that it is preferable to Kant's theory.",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'Whichtypeofdeontology', 2), 
  },

  {
    questionId: "rightsviolationswithgreatconsequences",
    questionType: "LongAnswer",
    questionText: "One challenge to any deontological approach to ethics is that we can imagine cases in which the only way to prevent some massive catastrophe, like a nuclear explosion, would be to violate someone's rights (or break some other moral rule). In these cases the consequentialist idea that we should act so as to bring about the best consequences (and so avoid the worst consequences) can seem plausible. How do you respond to cases like this?",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'moraltheorychoice', 2) || showIf(answers, 'emotivistmoraltheorychoice', 2), 
  },

  // virtue theory

  {
    questionId: "virtuetheorywhatisthebestlife",
    questionType: "LongAnswer",
    questionText: "Virtue theorists suggest that we think about choices of what to do in the context of a whole human life; we should act in the way which will contribute to us leading the best life. So, virtue theorists owe some account of what features the best human life would have. This is a big question; but say some things about what features you think a good human life should have.",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'moraltheorychoice', 3) || showIf(answers, 'emotivistmoraltheorychoice', 3), 
  },

  {
    questionId: "virtuetheorymushy",
    questionType: "LongAnswer",
    questionText: "A common criticism of virtue theory is that it doesn't provide us with the kind of clear instructions about what we ought and ought not to do that some consequentialist or deontological theories provide. But surely an explanation of the distinction between right and wrong should at least sometimes help us to figure out what we should do. Try to think of a difficult choice in which virtue theory might help us to see which course of action we should take.",
    questionCondition: (answers, classDay, theses) => showIf(answers, 'moraltheorychoice', 3) || showIf(answers, 'emotivistmoraltheorychoice', 3), 
  },

  // puzzles based on views about value + views about God

  {
    questionId: "theistnihilist",
    questionType: "LongAnswer",
    questionText: "You believe that God exists. On the classical conception of God, God is perfectly good. But you are a moral nihilist, and so don't believe that there is such a thing as perfect goodness. How do you reconcile this apparent contradiction in your views?",
    questionCondition: (answers, classDay, theses) => theses["theism"] === 1 && theses["nihilism"] === 1, 
  },

  {
    questionId: "theistrelativist",
    questionType: "LongAnswer",
    questionText: "You believe that God exists. On the classical conception of God, God is perfectly good. But you are a moral relaivist, and so don't believe that there is such a thing as objective perfect goodness. Is your view that God is good relative to some standards or societies but not others? Explain.",
    questionCondition: (answers, classDay, theses) => theses["theism"] === 1 && theses["relativism"] === 1, 
  },

  {
    questionId: "atheistrealist",
    questionType: "LongAnswer",
    questionText: "Some have thought that the existence of objective moral facts is evidence for the existence of God. The idea is that there would be no explanation for why these moral facts exist if there were no God. But you are an atheist and a moral realist. What, if anything, do you think explains the existence of moral facts?",
    questionCondition: (answers, classDay, theses) => theses["theism"] === 1 && theses["realism"] === 1, 
  },

  // THEORIES OF JUSTICE

  {
    questionId: "whichtheoryofjustice",
    questionType: "Radio",
    questionText: "Which theory of justice is most likely to be true?",
    questionOptions: [
      "egalitarianism",
      "utilitarianism",
      "justice as fairness",
      "libertarianism",
      "some theory different from any of the above",
    ],
    questionCondition: (answers, classDay, theses) => classDay >= 20, 
  },

  {
    questionId: "qforegalitarian",
    questionType: "LongAnswer",
    questionText: "Rawls argued against egalitarianism that we would all prefer a society in which there was some inequality but the worst were better off to a society in which there was equality but everyone has less goods than even the worst off people in the other society. How would you respond to this argument?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "whichtheoryofjustice", 1), 
  },

  {
    questionId: "qforutilitarian",
    questionType: "LongAnswer",
    questionText: "The utilitarian holds that the just society is the one with the most total happiness, no matter how that happiness is distributed. So this view would seem to license a society with slavery, so long as the work of the slaves increased total happiness in the society. Do you think that the view has this implication? If not, why not? If so, how do you respond to the argument that no society which enslaves some people could be just? ",
    questionCondition: (answers, classDay, theses) => showIf(answers, "whichtheoryofjustice", 2), 
  },

  {
    questionId: "qforrawlsian",
    questionType: "LongAnswer",
    questionText: "Nozick's 'Wilt Chamerlain argument' tries to show that all patterned theories of distributive justice are wrong. In the example discussed in class, how do you think the society goes from being just to being unjust via the free decisions of people to give some of their justly possessed money to Wilt?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "whichtheoryofjustice", 3), 
  },

  {
    questionId: "q1forlibtertarian",
    questionType: "LongAnswer",
    questionText: "The libertarian owes an answer to the question of what justice requires a society to do when some of the people in that society have acquired goods through unjust appropriatons or transfers of goods. What is your view on this?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "whichtheoryofjustice", 4), 
  },

  {
    questionId: "q2forlibtertarian",
    questionType: "LongAnswer",
    questionText: "Libertarianism seems to imply that a society in which there is truly vast inequality, in which some small percentage of the people control almost all of the goods, can be just so long as that situation was reached by just appropriations and just transfers. Do you agree that the view has this implication? If not, why not? If so, defend the view that such a society could be just.",
    questionCondition: (answers, classDay, theses) => showIf(answers, "whichtheoryofjustice", 4), 
  },

  {
    questionId: "qjusticenoneoftheabove",
    questionType: "LongAnswer",
    questionText: "Explain, at least in outline, what you think a just society would have to be like. Explain how your view differs from the four we discussed, and say why you think that your view is more likely to be true.",
    questionCondition: (answers, classDay, theses) => showIf(answers, "whichtheoryofjustice", 5), 
  },



];

