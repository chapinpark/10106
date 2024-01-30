import showIf from "../utils/showIf";

// define questions as a function. The answers state is not available in static js files - so we in effect postpone using it until render time. This makes it possible to state questionConditions using Boolean operators as in ordinary js. Every questionCondition must take answers as its first argument, and some can take clasDay as a second argument.

export const godQuestions = (answers, classDay, theses) => [

// #region kalam argument
    {
    questionId: "iskalamsound",
    questionType: "Radio",
    questionText: "Is the kalam argument sound?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers, classDay) => classDay >= 2
  },

  {
    questionId: "defendkalam",
    questionType: "LongAnswer",
    questionText: "The kalam argument has as a premise that everything that begins to exist at some time must have a cause. Why do you think that that is true? Couldn't something just pop into existence, with no cause at all?",
    //questionCondition: (answers, classDay) => classDay >= 2
     questionCondition: (answers) => showIf(answers, 'iskalamsound', 1)
    },
  {
  questionId: "whynoinfiniteseries",
  questionType: "LongAnswer",
  questionText: "Given that the idea of an infinite series makes sense, why do you think that there are not any infinite causal chains?",
  questionCondition: (answers) => showIf(answers, 'iskalamsound', 1)
},
{
  questionId: "kalamrejectedpremises",
  questionType: "Checkbox",
  questionText: "Which independent premises of the kalam argument do you think are false? (Pick as many as you think are false.)",
  questionOptions: [
    "1. If something were the cause of itself, it would be prior to itself.",
    "2. Nothing is prior to itself.",
    "4. There are no infinite causal chains.",
    "5. Everything which begins to exist at a time has a cause.",
    "6. Every causal chain must be (i) circular, (ii) infinite, or (iii) have a first cause.",
    "8. The universe and everything in it began to exist at some time.",
    "10. If there is a beginningless first cause of the universe and everything in it, then God exists."
  ],
  questionCondition: (answers) => showIf(answers, 'iskalamsound', 2)
},
{
  questionId: "nobackwardcausation",
  questionType: "LongAnswer",
  questionText: "If you are rejecting premise (1), you are thinking that sometimes causes come after their effects. This is called ‘backwards causation.’ But if we look around us, causes always seem to precede their effects. If backwards causation is possible, how come we never observe any instances of it?",
  questionCondition: (answers) => showIf(answers, 'kalamrejectedpremises', 1)
},
{
  questionId: "nothingprior",
  questionType: "LongAnswer",
  questionText: "The problem with denying premise (2) is that, if you think about it, the idea of a thing existing prior to itself does not seem to make a lot of sense. Suppose that the first year you existed was 2002. What would it take for you to be prior to yourself? Presumably for you to have existed before 2002 - say, 1985. But then 2002 would not have been the first year you existed after all - it would have been 1985. Can you explain how a thing could be prior to itself?",
  questionCondition: (answers) => showIf(answers, 'kalamrejectedpremises', 2)
},
{
  questionId: "defendinfinitechain",
  questionType: "LongAnswer",
  questionText: "In class, we used the idea of an infinite library to try to argue against the idea that there could be an infinite collection of things existing in space and time. Do you think that there could be an infinite library of that kind? If so, why? If not, why doesn't that show that there could not be an infinite causal chain?",
  questionCondition: (answers) => showIf(answers, 'kalamrejectedpremises', 3)
},
{
  questionId: "againstpopintoexistence",
  questionType: "LongAnswer",
  questionText: "How could something come into existence at a certain time if something else, existing prior to that time, did not cause it to exist?",
  questionCondition: (answers) => showIf(answers, 'kalamrejectedpremises', 4)
},
{
  questionId: "chainshapes",
  questionType: "LongAnswer",
  questionText: "Describe a causal chain which would be a counterexample to premise (6).",
  questionCondition: (answers) => showIf(answers, 'kalamrejectedpremises', 5)
},
{
  questionId: "bigbangnoteternal",
  questionType: "LongAnswer",
  questionText: "According to contemporary cosmology, the universe is about 14 billion years old. Why doesn’t that imply that it came into existence at some time - namely, a time which is about 14 billion years prior to the present time?",
  questionCondition: (answers) => showIf(answers, 'kalamrejectedpremises', 6)
},
{
  questionId: "kalamquasi",
  questionType: "LongAnswer",
  questionText: "Traditional theism claims that there is a being with the unusual property that it has always existed and that it caused our entire universe to exist. The kalam argument seems to show that there is a being with just these special properties. Why isn’t the most reasonable response that that being is God?",
  questionCondition: (answers) => showIf(answers, 'kalamrejectedpremises', 7)
},

//#endregion

// #region cosmological argument
    {
  questionId: "iscosmologicalsound",
  questionType: "Radio",
  questionText: "Is the cosmological argument sound?",
  questionOptions: ["Yes", "No"],
  questionCondition: (answers, classDay) => classDay >= 3
},
{
  questionId: "cosmologicalrejectedpremises",
  questionType: "Checkbox",
  questionText: "Which independent premises of the cosmological argument do you think are false? (Pick as many as you think are false.)",
  questionOptions: [
    "(1) The existence of contingent things is contingent.",
    "2) Every contingent fact has an explanation. (The Principle of Sufficient Reason)",
    "(4) The fact that there are contingent things can't be explained by any contingent thing.",
    "(8) If there is a necessary thing which explains the existence of contingent things, then God exists."
  ],
  questionCondition: (answers) => showIf(answers, 'iscosmologicalsound', 2)
},
{
  questionId: "contingentcontingent",
  questionType: "LongAnswer",
  questionText: "It certainly seems possible that there could have been one less contingent thing than there is. (For example, one pencil could have failed to exist.) But it looks like we can keep on imagining worlds with ever fewer contingent things. If you reject premise (1), it seems like you must think that at some point removing one more contingent thing would be impossible. But at what point and why?",
  questionCondition: (answers) => showIf(answers, 'cosmologicalrejectedpremises', 1)
},
{
  questionId: "sciencepsr",
  questionType: "LongAnswer",
  questionText: "Modern science spends its time looking for explanations of contingent facts about our world. But if the PSR is false, there is no general reason to think that such explanations exist. Is that a problem for the method of modern science? Why or why not?",
  questionCondition: (answers) => showIf(answers, 'cosmologicalrejectedpremises', 2)
},
{
  questionId: "nocircular",
  questionType: "LongAnswer",
  questionText: "It seems, in general, like there is something wrong with circular explanations. If I tried to explain why the sun comes up in the morning, and part of my explanation was that the sun comes up every morning, it looks I would have failed to explain anything. But the idea that we can explain the existence of all contingent things in terms of some contingent thing or other seems circular in just that way. Is it that you think that circular explanations are ok in general, or that this explanation is not circular? Explain.",
  questionCondition: (answers) => showIf(answers, 'cosmologicalrejectedpremises', 3)
},
{
  questionId: "cosmoquasi",
  questionType: "LongAnswer",
  questionText: "A necessary being which explained the existence of contingent thing would be a pretty extraordinary kind of being. Not only would it explain the existence of all contingent things - including presumably the entire universe - it would also have the extraordinary property that it is literally impossible for it not to exist. Most atheists certainly don't believe that anything with that extraordinary property exists. What could such a being be, if not God?",
  questionCondition: (answers) => showIf(answers, 'cosmologicalrejectedpremises', 4)
},
{
  questionId: "doespsrimplydeterminism",
  questionType: "Radio",
  questionText: "So you must think that the principle of sufficient reason is true. Determinism is the thesis that every event is determined by (i) the prior state of the world and (ii) the laws of nature. If the PSR is true, then every event has an explanation. But it looks like an explanation of an event would have to be given in terms of the prior state of the world and the laws of nature. So, it seems, if every event has an explanation (as the PSR says) then every event must be determined by the prior state of the world and the laws of nature. So, because you accept the PSR, it looks like you also must endorse determinism. Do you agree?",
  questionOptions: ["Yes, I think that determinism is true", "No, I don't think that determinism is true"],
  questionCondition: (answers) => showIf(answers, 'iscosmologicalsound', 1) || (!showIf(answers, 'cosmologicalrejectedpremises', 2) && (showIf(answers, 'cosmologicalrejectedpremises', 1) || showIf(answers, 'cosmologicalrejectedpremises', 3) || showIf(answers, 'cosmologicalrejectedpremises', 4)))
},
{
  questionId: "psrwithoutdeterminism",
  questionType: "LongAnswer",
  questionText: "Then explain what is wrong with the preceding argument. How could the PSR be true without determinism being true?",
  questionCondition: (answers) => showIf(answers, 'doespsrimplydeterminism', 2)
},
{
  questionId: "collapsequestion",
  questionType: "Radio",
  questionText: "You think that God explains the existence of contingent things. Is this fact - the fact that God explains the existence of contingent things - itself necessary, or contingent?",
  questionOptions: ["It is necessary.", "It is contingent."],
  questionCondition: (answers) => showIf(answers, 'iscosmologicalsound', 1)
},
{
  questionId: "godexplainsisnecessary",
  questionType: "LongAnswer",
  questionText: "But if it is necessary that God explains the existence of contingent things, then it is necessary that there are contingent things. And that would make premise (1) of the cosmological argument false, contradicting your view that the argument is sound. How do you respond?",
  questionCondition: (answers) => showIf(answers, 'collapsequestion', 1)
},
{
  questionId: "godexplainsiscontingent",
  questionType: "LongAnswer",
  questionText: "Then, since you think that every contingent fact has an explanation, you must think that the fact that God explains the existence of contingent things has an explanation. What is this explanation?",
  questionCondition: (answers) => showIf(answers, 'collapsequestion', 2)
},
{
  questionId: "collapsequestionfollowup",
  questionType: "Radio",
  questionText: "In the preceding answer, you described some fact which, in your view, explains the fact that God explains the existence of contingent things. Is that fact - the one you described in the preceding answer - itself necessary or contingent?",
  questionOptions: ["It is necessary.", "It is contingent."],
  questionCondition: (answers) => showIf(answers, 'collapsequestion', 2)
},
{
  questionId: "secondgodexplainsisnecessary",
  questionType: "LongAnswer",
  questionText: "But if that fact is necessary - and it explains the fact that God explains the existence of contingent things - that would seem to imply that the fact that God explains the existence of contingent things is itself necessary, which contradicts the view you stated above. How do you respond?",
  questionCondition: (answers) => showIf(answers, 'collapsequestionfollowup', 1)
},
{
  questionId: "explainsregress",
  questionType: "LongAnswer",
  questionText: "But then, by the PSR, this fact too must have an explanation. And it seems that this will just keep on going; we’ll have a never-ending series of contingent facts, each one explaining the next. Do you think that you are committed to the existence of such an infinite series? Explain why or why not. Further, it seems that no matter how far we extend this series of contingent facts, the existence of the series would itself be contingent, and hence (if the PSR is true) need an explanation. What could this explanation be?",
  questionCondition: (answers) => showIf(answers, 'collapsequestionfollowup', 2)
},

// #endregion

// #region fine-tuning argument

  {
    questionId: "finetuningsound",
    questionType: "Radio",
    questionText: "Is the fine-tuning argument sound?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers, classDay) => classDay >= 4
  },
  {
    questionId: "defendcurrentphysics",
    questionType: "LongAnswer",
    questionText: "This argument relies on the assumption that the claims of current physics about the laws of nature and about the improbability of the physical constants having life-permitting values given those laws are true. But many of our past best theories have turned out to be false; why should current physics be any different?",
    questionCondition: (answers) => showIf(answers, 'finetuningsound', 1)
  },
  {
    questionId: "nomultiverse",
    questionType: "LongAnswer",
    questionText: "Just as our solar system is not the only solar system, so our universe might not be the only universe. And if there are enough universes, it is surely not improbable that some have life-permitting physical constants. That seems to count against premise (2) of the fine-tuning argument. How do you respond?",
    questionCondition: (answers) => showIf(answers, 'finetuningsound', 1)
  },
  {
    questionId: "finetuningunsound",
    questionType: "Checkbox",
    questionText: "Which independent premises of the fine-tuning argument do you think are false?",
    questionOptions: ["I reject one or more of the assumptions about probabilities made in premises (1)-(3)", "(4) Bayes' theorem", "(6) Life exists", "(8) If the universe was created by an intelligent designer, then God exists"],
    questionCondition: (answers) => showIf(answers, 'finetuningsound', 2)
  },
  {
    questionId: "finetuningprobreject",
    questionType: "Checkbox",
    questionText: "Using Bayes' theorem, we can derive the probability of the design hypothesis given the fact of life from three other probabilities. Which of the assumptions about these three probabilties do you reject? (You can select more than one.)",
    questionOptions: ["(1) Pr(life |design) =0.5", "(2) Pr (life | non-design) = 1 / 10^120", "(3) Pr(design) = Pr(non-design) = 0.5"],
    questionCondition: (answers) => showIf(answers, 'finetuningunsound', 1)
  },
  {
    questionId: "finetuningp1",
    questionType: "LongAnswer",
    questionText: "If all of the premises of the argument other than (1) are true, then we can still get the conclusion unless the probabilty of life given the design hypothesis is 0 (or extremely close to it). But that seems bizarre; how can you be sure that an intelligent designer would not create a universe with life in it?",
    questionCondition: (answers) => showIf(answers, 'finetuningprobreject', 1) && !showIf(answers, 'finetuningprobreject', 2) && !showIf(answers, 'finetuningprobreject', 3)
  },
  {
    questionId: "convincedatheistobj",
    questionType: "LongAnswer",
    questionText: "As stated, the argument assumes that the prior probability of design = 0.5. But, if we keep all of the other assumptions about probabilities, even if we lower the probability of design to 1 / 1 million, the result of the argument is pretty much the same. So it seems that to reject this premise you have to think that the probability of design is 0 or very, very close to it. But that seems unreasonable, since it is hard to see how you can be sure that the universe was not created by an intelligent being. How do you respond?",
    questionCondition: (answers) => !showIf(answers, 'finetuningprobreject', 1) && !showIf(answers, 'finetuningprobreject', 2) && showIf(answers, 'finetuningprobreject', 3)
  },
  {
    questionId: "finetuningp2",
    questionType: "Checkbox",
    questionText: "Why do you think that the probability of life conditional on non-design is higher than this? (Click all that apply.)",
    questionOptions: ["I think that there is a pretty good chance that current physics is on the wrong track, and so don't believe its claims about the laws or the physical constants.", "I think that there is a pretty good chance that there are huge number of universes, and that given the sheer number of universes there is good reason to think that some will, just by chance, have constants in the life-permitting range.", "Some other reason."],
    questionCondition: (answers) => showIf(answers, 'finetuningprobreject', 2)
  },
  {
    questionId: "forpeopleagainstphysics",
    questionType: "LongAnswer",
    questionText: "Physics is probably our most advanced science. Given this, why do you think that current physics is on the wrong track? Is this a concern special to physics, or do you think the same about all scientific findings? Explain.",
    questionCondition: (answers) => showIf(answers, 'finetuningp2', 1)
  },
  {
    questionId: "formultiversefans",
    questionType: "LongAnswer",
    questionText: "No one has ever obtained any experimental verification of the existence of another universe, and it is hard to see how we ever could. Given this, why do you think that other universes are more likely to exist than, say, fairies or the Loch Ness monster?",
    questionCondition: (answers) => showIf(answers, 'finetuningp2', 2)
  },
  {
    questionId: "extrap2doubtersfinetuning",
    questionType: "LongAnswer",
    questionText: "What’s your other reason for doubting premise (2)?",
    questionCondition: (answers) => showIf(answers, 'finetuningp2', 3)
  },
  {
    questionId: "bayescalculatecredence",
    questionType: "LongAnswer",
    questionText: "Say what you think the prior probability of design, the probability of life conditional on the design hypothesis, and the probability of life conditional on the non-design hypothesis are. Given a brief explanation of why you have these views. Then, using the formula explained in lecture, calculate the probability of the design hypothesis conditional on life.",
    questionCondition: (answers) => showIf(answers, 'finetuningp2', 1) || showIf(answers, 'finetuningp2', 2) || showIf(answers, 'finetuningp2', 3) || (showIf(answers, 'finetuningprobreject', 1) && showIf(answers, 'finetuningprobreject', 3))
  },
  {
    questionId: "rejectbayestheorem",
    questionType: "LongAnswer",
    questionText: "Then you must either reject Bayes’ definition of conditional probability, or find a flaw with the proof of Bayes’ theorem given on the last lecture slide. Explain which is your view, and why.",
    questionCondition: (answers) => showIf(answers, 'finetuningunsound', 2)
  },
  {
    questionId: "lifeexistspremise",
    questionType: "LongAnswer",
    questionText: "Then who is filling out this document?",
    questionCondition: (answers) => showIf(answers, 'finetuningunsound', 3)
  },
  {
    questionId: "designbutnotgod",
    questionType: "LongAnswer",
    questionText: "Just who do you think that the intelligent designer of the universe is, if not God?",
    questionCondition: (answers) => showIf(answers, 'finetuningunsound', 4)
  },


// #endregion

// #region argument from evil
  

  {
    questionId: "argumentfrompointlessevil",
    questionType: "Radio",
    questionText: "Is the argument from pointless evil 2.0 sound?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers, classDay) => classDay >= 5
  },
  {
    questionId: "evilargumentrejectedpremises",
    questionType: "Checkbox",
    questionText: "Which independent premises of the argument from pointless evil 2.0 do you think are false?",
    questionOptions: ["(1) If God exists, then God is omnipotent.", "(2') If something is omnipotent, it can bring about any possible situation.", "(4) If God exists, the God is wholly good.", "(5*) If something is wholly good, it always eliminates as much pointless evil as it can.", "(9*) Some pointless evil that it is possible to eliminate exists."],
    questionCondition: (answers) => showIf(answers, 'argumentfrompointlessevil', 2)
  },
  {
    questionId: "omnipotencedeniers",
    questionType: "LongAnswer",
    questionText: "The classical conception of God is the conception of a perfect being — a being which is such that there couldn’t be a greater being. But if God were not omnipotent, then God would not be perfect, since it is better to be powerful than not powerful. How do you respond?",
    questionCondition: (answers) => showIf(answers, "evilargumentrejectedpremises", 1)
  },
  {
    questionId: "alternateomnipotence",
    questionType: "LongAnswer",
    questionText: "If you deny premise (2'), what do you think omnipotence is?",
    questionCondition: (answers) => showIf(answers, "evilargumentrejectedpremises", 2)
  },
  {
    questionId: "possibilitiesthatgodcantmake",
    questionType: "LongAnswer",
    questionText: "So you think that there are possible situations that God can’t bring about. If they are possible, then it seems like something can bring them about. But isn’t it a little odd to think that something can bring about situations that God can’t bring about?",
    questionCondition: (answers) => showIf(answers, "evilargumentrejectedpremises", 2)
  },
  {
    questionId: "godnotgood",
    questionType: "LongAnswer",
    questionText: "The classical conception of God is the conception of a perfect being — a being which is such that there couldn’t be a greater being. But if God were not perfectly good, then God would not be perfect, since it is better to be good than not good. How do you respond?",
    questionCondition: (answers) => showIf(answers, "evilargumentrejectedpremises", 3)
  },
  {
    questionId: "pointlessevilsok",
    questionType: "LongAnswer",
    questionText: "Remember what a pointless evil is: it is an evil which is such that there is no good that outweighs the evil and which is such that the individual in question couldn’t bring about the good without the evil. Given this definition, why wouldn’t a perfectly good thing always eliminate the pointless evil? Give an example of a pointless evil which you think a perfectly good being might not eliminate.",
    questionCondition: (answers) => showIf(answers, "evilargumentrejectedpremises", 4)
  },
  {
    questionId: "denialofpointlessevil",
    questionType: "LongAnswer",
    questionText: "In the next couple of classes, we will talk about some evils which seem to be pointless. But, in advance of that, describe a few different kinds of evil which you think exist, and say why those evils are not pointless. Or, if you think that there are no evils at all in the world, say why you think that some of the things which seem to be evils are not really evils.",
    questionCondition: (answers) => showIf(answers, "evilargumentrejectedpremises", 5)
  },
  {
    questionId: "examplesofpointlessevils",
    questionType: "LongAnswer",
    questionText: "Give examples of some kinds of evil in the world which you think are pointless, in the sense defined in class. Why do you think, in each case, that there’s no outweighing good such that the good could not exist without that evil?",
    questionCondition: (answers) => showIf(answers, 'argumentfrompointlessevil', 1)
  },


  
    // #endregion

 // #region free will defense
  
  
  {
    questionId: "doesfreewillexplain",
    questionType: "Radio",
    questionText: "The free will defense says that the good of human free will explains why God would allow at least some of the evil we find in the world. This requires that (i) human beings have free will, (ii) having free will is a good thing, (iii) having the ability to freely cause evil is a good thing, and (iv) even God could not give us the kind of free will we have while ensuring that we bring no evil into the world. Do you think that all of (i)-(iv) are true?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers, classDay) => classDay >= 6
  },
  {
    questionId: "mackiefwd",
    questionType: "Checkbox",
    questionText: "Then how to you respond to Mackie’s argument against the free will defense?",
    questionOptions: ["I think that it is impossible for all people to have free will and yet never bring about any evil, so that premise (1) of his argument is false.", "I think that there are some possible situations that even God cannot bring about, so that premise (2) of his argument is false."],
    questionCondition: (answers) => showIf(answers, 'doesfreewillexplain', 1)
  },
  {
    questionId: "makiefwdp1reject",
    questionType: "LongAnswer",
    questionText: "But, as Mackie points out, there is nothing impossible in me doing the right thing on one occasion, or two occasions. How could it be impossible then for me to do the right thing on every occasion?",
    questionCondition: (answers) => showIf(answers, 'mackiefwd', 1)
  },
  {
    questionId: "mackiefwdp2reject",
    questionType: "LongAnswer",
    questionText: "But then there are things that you can do that God cannot do - for example, making it the case that you freely scratch your nose. But if you can do things that God can't do, wouldn't that make God less than omnipotent?",
    questionCondition: (answers) => showIf(answers, 'mackiefwd', 2)
  },
  {
    questionId: "fwdelementstoreject",
    questionType: "Checkbox",
    questionText: "Which of the four elements of the free will defense do you think are false? (You can pick more than one.)",
    questionOptions: ["Human beings have free will.", "Free will is a good thing.", "Having the ability to freely cause evil is a good thing.", "Even God could not give us the kind of free will we have while ensuring that we bring no evil into the world."],
    questionCondition: (answers) => showIf(answers, 'doesfreewillexplain', 2)
  },
  {
    questionId: "whyfreelycauseevilgood",
    questionType: "LongAnswer",
    questionText: "Why do you think that having the ability to freely cause evil is a good thing? Wouldn't it be better to have free will, but only ever have good choices?",
    questionCondition: (answers) => showIf(answers, 'doesfreewillexplain', 1) || (showIf(answers, 'doesfreewillexplain', 2) && !showIf(answers, 'fwdelementstoreject', 3))
  },
  {
    questionId: "bestargfromparticularevil",
    questionType: "Radio",
    questionText: "In class, we considered three arguments for atheism based on specific kinds of evils we find in the world. Which of these arguments do you think is strongest?",
    questionOptions: ["The argument from natural evils", "The argument from Rowe's fawn", "The argument from especially horrific evils"],
    questionCondition: (answers, classDay) => classDay >= 6
  },
  {
    questionId: "whyistthisevilargumentbest",
    questionType: "LongAnswer",
    questionText: "Explain why you think that this is the strongest of the three arguments.",
    questionCondition: (answers) => showIf(answers, "bestargfromparticularevil", 1) || showIf(answers, "bestargfromparticularevil", 2) || showIf(answers, "bestargfromparticularevil", 3)
  },
  
    {
    questionId: "naturalevilsound",
    questionType: "Radio",
    questionText: "Do you think that the argument from natural evil is sound?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers) => showIf(answers, 'bestargfromparticularevil', 1)
  },
  {
    questionId: "rowesfawnsound",
    questionType: "Radio",
    questionText: "Do you think that the argument from Rowe’s fawn is sound?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers) => showIf(answers, 'bestargfromparticularevil', 2)
  },
  {
    questionId: "horrrificevilsound",
    questionType: "Radio",
    questionText: "Do you think that the argument from horrific evils is sound?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers) => showIf(answers, 'bestargfromparticularevil', 3)
  },
  {
    questionId: "againstskepticaltheism",
    questionType: "LongAnswer",
    questionText: "A premise of that argument says that there is no good which both outweighs that evil and is such that God cannot bring about the good without the evil. Maybe you can’t think of any such good. But how would you argue that there isn’t one?",
    questionCondition: (answers) => showIf(answers, 'naturalevilsound', 1) || showIf(answers, 'rowesfawnsound', 1) || showIf(answers, 'horrrificevilsound', 1)
  },
  {
    questionId: "naturalevilpremises",
    questionType: "Checkbox",
    questionText: "Which premises of the argument from natural evil do you reject?",
    questionOptions: ["1. The 2004 Indian Ocean tsunami is an evil.", "2. There is no good which outweighs this event and which is such that an omnipotent being could not have brought about the good without that evil.", "3. A perfectly good being would eliminate every evil unless there was a good which outweighed that evil and it was impossible for that being to eliminate the evil without eliminating the good.", "5. If there is no omnipotent and perfectly good being, God does not exist."],
    questionCondition: (answers) => showIf(answers, "naturalevilsound", 2)
  },
  {
    questionId: "rowesfawnpremises",
    questionType: "Checkbox",
    questionText: "Which premises of the argument from Rowe's fawn do you reject?",
    questionOptions: ["1. Some instance of pre-human animal suffering is an evil.", "2. There is no good which outweighs this event and which is such that an omnipotent being could not have brought about the good without that evil.", "3. A perfectly good being would eliminate every evil unless there was a good which outweighed that evil and it was impossible for that being to eliminate the evil without eliminating the good.", "5. If there is no omnipotent and perfectly good being, God does not exist."],
    questionCondition: (answers) => showIf(answers, "rowesfawnsound", 2)
  },
  {
    questionId: "horrificevilpremises",
    questionType: "Checkbox",
    questionText: "Which premises of the argument from horrific do you reject?",
    questionOptions: ["1. Some instance of rape, torture, murder, or child abuse is a great evil.", "2. There is no good which outweighs this event and which is such that an omnipotent being could not have brought about the good without that evil.", "3. A perfectly good being would eliminate every evil unless there was a good which outweighed that evil and it was impossible for that being to eliminate the evil without eliminating the good.", "5. If there is no omnipotent and perfectly good being, God does not exist."],
    questionCondition: (answers) => showIf(answers, "horrrificevilsound", 2)
  },
  {
    questionId: "naturalevilsareevil",
    questionType: "LongAnswer",
    questionText: "But remember what we mean by ‘evil’. An evil is just a thing that the world would have been better off without, and surely the world would have been better off without the 2004 tsunami and the many deaths that it caused. One argument for this is that, if you had the chance to stop it from happening, you clearly would have. How do you respond?",
    questionCondition: (answers) => showIf(answers, 'naturalevilpremises', 1)
  },
  {
    questionId: "animalsufferingsareevil",
    questionType: "LongAnswer",
    questionText: "But remember what we mean by ‘evil’. An evil is just a thing that the world would have been better off without, and surely the world would have been better off without a given instance of animal suffering. One argument for this is that, if you had the chance to stop it from happening, you clearly would have. How do you respond?",
    questionCondition: (answers) => showIf(answers, 'rowesfawnpremises', 1)
  },
  {
    questionId: "horrificevilsareevil",
    questionType: "LongAnswer",
    questionText: "But remember what we mean by ‘evil’. An evil is just a thing that the world would have been better off without, and surely the world would have been better off without some individual instance of child abuse, rape, or some other comparably bad thing. One argument for this is that, if you had the chance to stop it from happening, you clearly would have. How do you respond?",
    questionCondition: (answers) => showIf(answers, 'horrificevilpremises', 1)
    },
   {
    questionId: "findtheoutweighinggood",
    questionType: "LongAnswer",
    questionText: "Do you know what the outweighing good is? If so, explain what it is, and why even God could not bring it about without this evil. If not, explain why, despite not knowing what the outweighing good is, you're confident that there is one.",
    questionCondition: (answers) => showIf(answers, 'naturalevilpremises', 2) || showIf(answers, 'rowesfawnpremises', 2) || showIf(answers, 'horrificevilpremises', 2)
  },
  {
    questionId: "whyallowpointlessevils",
    questionType: "LongAnswer",
    questionText: "So then you think that a perfectly good being could allow some evils to exist even if they serve no good purpose at all. Why would a perfectly good being do this? When (if ever) do you think that one is obligated to stop an evil from occurring? Is there any limit to the amount of pointless evil a perfectly good being could allow?",
    questionCondition: (answers) => showIf(answers, 'naturalevilpremises', 3) || showIf(answers, 'rowesfawnpremises', 3) || showIf(answers, 'horrificevilpremises', 3)
  },
  {
    questionId: "confusedquasievilresponse",
    questionType: "LongAnswer",
    questionText: "But this forgets that we’ve agreed, to avoid confusion, to use ‘God’ to stand for the classical conception of God. Given this, (5) seems obviously true. If you are a quasi-theist who denies that this argument shows that some being other than the classical God exists, you should still agree that (5) is true. So, I think that you should probably unclick (5). But, if you think that I am wrong, say why!",
    questionCondition: (answers) => showIf(answers, 'naturalevilpremises', 4) || showIf(answers, 'rowesfawnpremises', 4) || showIf(answers, 'horrificevilpremises', 4)
    },
  
  // #endregion

  // #region contradiction for those who think that there is both a sound argument for god's existence and a sound argument against it


  {
    questionId: "atheismtheismcontradiction",
    questionType: "Contradiction",
    questionText: "There can't both be a sound argument for the existence of God and a sound argument against the existence of God. (The conclusion of a sound argument is always true.) Think about how best to resolve this contradiction in your views.",
    questionCondition: (answers, classDay, theses) => (theses["soundargumentfortheism"] === 1 & theses["soundargumentagainsttheism"] === 1)
  },

  // #endregion

    // #region life after death
    
   {
    questionId: "isthereanafterlife",
    questionType: "Radio",
    questionText: "Do you believe in life after death?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers, classDay) => classDay >= 7
  },
  {
    questionId: "traditionalafterlife",
    questionType: "Radio",
    questionText: "Do you think that the traditional doctrine of the afterlife, as laid out in lecture, is true?",
    questionOptions: ["Yes", "No"],
    questionCondition: (answers) => showIf(answers, "isthereanafterlife", 1)
  },
  {
    questionId: "rejecttraditionalafterlife",
    questionType: "Checkbox",
    questionText: "Which of the five elements of that traditional doctrine do you reject?",
    questionOptions: [
      "Non-universality: some people go to heaven, and some to hell.",
      "Divine control: it is up to God who goes to heaven and who goes to hell.",
      "Dichotomy: there are exactly two states in the afterlife, heaven and hell.",
      "Badness: people in hell are very, very much worse off than people in heaven",
      "Justice: God’s judgement about who goes to heaven & hell is just",
    ],
    questionCondition: (answers) => showIf(answers, "traditionalafterlife", 2)
  },
  {
    questionId: "universalism",
    questionType: "LongAnswer",
    questionText: "Most religions that have doctrines of the afterlife are pretty explicit in their claims that some peope go to hell. The Christian Bible seems to suggest that some do. Is it that you don't think that any such religion is true, or that you think that the teachings of your religion are compatible with universalism?",
    questionCondition: (answers) => showIf(answers, "rejecttraditionalafterlife", 1)
    },
  {
    questionId: "nodivinecontrol",
    questionType: "LongAnswer",
    questionText: "Some people say that individuals determine whether they go to heaven or hell, rather than God. For example, maybe some people choose to go to heaven or hell. But doesn't God still have to decide to let that decision be the thing which ultimately determines the person's fate in the afterlife? If that is right, how can you reject Divine Control?",
    questionCondition: (answers) => showIf(answers, "rejecttraditionalafterlife", 2)
  },
  {
    questionId: "isitpurgatory",
    questionType: "Radio",
    questionText: "Is this because you think that some people go to Purgatory after their death, or for some other reason?",
    questionOptions: ["Yes", "No, some other reason"],
    questionCondition: (answers) => showIf(answers, "rejecttraditionalafterlife", 3)
  },
  {
    questionId: "purgatorysolution",
    questionType: "LongAnswer",
    questionText: "On the traditional view of Purgatory, everyone who goes to Purgatory eventually goes to heaven. If so, then it looks like people in Purgatory are vastly - even infinitely - better off than people in Hell. Given this, how can Purgatory solve the problem posed in class for the traditional doctrine of the afterlife?",
    questionCondition: (answers) => showIf(answers, "isitpurgatory", 1)
  },
  {
    questionId: "nonstandardafterlife",
    questionType: "LongAnswer",
    questionText: "What's your conception of the afterlife, and how does it get around the problems for the traditional doctrine discussed in class?",
    questionCondition: (answers) => showIf(answers, "isitpurgatory", 2)
  },
  {
    questionId: "againstbadness",
    questionType: "LongAnswer",
    questionText: "Really? Then what's the point of the distinction between heaven and hell?",
    questionCondition: (answers) => showIf(answers, "rejecttraditionalafterlife", 4)
  },
  {
    questionId: "againstjustice",
    questionType: "LongAnswer",
    questionText: "But God is perfectly good, and surely a perfectly good being would make such consequential decisions in a just way. How do you respond?",
    questionCondition: (answers) => showIf(answers, "rejecttraditionalafterlife", 5)
  },
  {
    questionId: "defensesoftradtionalafterlife",
    questionType: "Checkbox",
    questionText: "But, as we saw in class, one only needs two assumptions to construct a valid argument against the traditional view of the afterlife. Which do you reject?",
    questionOptions: ["Proportionality", "Continuity"],
    questionCondition: (answers) => showIf(answers, "traditionalafterlife", 1)
    },
    {
    questionId: "againstproportionality",
    questionType: "LongAnswer",
    questionText: "But in at least some cases, we seem to think that justice requires similar treatment of similar individuals. (Just think about the example of the dichotomous professor discussed in class.) Is it that you think that justice never requires proportionality, or just that it doesn't in this case? Explain.",
    questionCondition: (answers) => showIf(answers, "defensesoftradtionalafterlife", 1)
  },
  {
    questionId: "againstcontinuity",
    questionType: "LongAnswer",
    questionText: "So you must think that there is, or someday will be, a way of dividing all of humanity into two separate groups such that no one in one group is very similar in their relevant properties to anyone in the other group. But when we think about what the relevant properties could be, it looks like they are all properties that one can have at some times and lack at others, or have to varying degrees. Do you agree? If not, why not? If so, why doesn't that just show that Continuity is true?",
    questionCondition: (answers) => showIf(answers, "defensesoftradtionalafterlife", 2)
  },
  {
    questionId: "theismwithoutlifeafterdeath",
    questionType: "LongAnswer",
    questionText: "You believe that God exists, but that there is no life after death. But consider the problem posed by tragic cases of children born with debilitating conditions which lead to their death soon after their birth. Wouldn't a perfectly good God make everyone's life worth living? And how is that possible for such a child without the possibility of life after death?",
    questionCondition: (answers, classDay, theses) => showIf(answers, "isthereanafterlife", 2) && theses["soundargumentfortheism"] === 1
  },
  
    // #endregion

  // #region closing questions for god section
  
  {
  questionId: "nosoundarguments",
  questionType: "Radio",
  questionText: "It looks like you don't think that any of the arguments we've discussed for the existence of God are sound, and also don't think that any of the arguments that we've discussed against the existence of God are sound. Do you believe that God exists?",
  questionOptions: ["Yes", "No"],
  questionCondition: (answers, classDay, theses) => showIf(answers, "argumentfrompointlessevil", 2) &&
      (
        showIf(answers, "naturalevilsound", 2) ||
        showIf(answers, "rowesfawnsound", 2) ||
        showIf(answers, "horrrificevilsound", 2)
      ) &&
      (
        showIf(answers, "iskalamsound", 2) &&
        showIf(answers, "iscosmologicalsound", 2) &&
        showIf(answers, "finetuningsound", 2)
      ),
},
{
  questionId: "theismrejectallarguments",
  questionType: "Radio",
  questionText: "Is that because you think that there's a sound and persuasive argument for the existence of God that we haven't discussed in this class?",
  questionOptions: ["Yes", "No"],
  questionCondition: (answers, classDay, theses) => showIf(answers, "nosoundarguments", 1),
},
{
  questionId: "novetheisticargument",
  questionType: "LongAnswer",
  questionText: "Explain what the argument is, and why you think that it is sound.",
  questionCondition: (answers, classDay, theses) => showIf(answers, "theismrejectallarguments", 1),
},
{
  questionId: "theismnoargument",
  questionType: "LongAnswer",
  questionText: "Later on in the class, we'll talk about whether and when you should believe something despite not knowing of any good argument for it. How would you explain why you believe that God exists? Imagine that you are trying to explain this to someone who does not believe in God.",
  questionCondition: (answers, classDay, theses) => showIf(answers, "theismrejectallarguments", 2),
  },

   {
    questionId: "theistwhothinksabilitytodoevilisimportant",
    questionType: "LongAnswer",
    questionText: "You think that God exists, and you also think that having the ability to freely do evil is an important good. Here's a worry about that combination of views. First, many people have thought that God is not only perfectly good,  but also necessarily perfectly good. After all, wouldn't it be better to be so perfect that it is literally impossible for you to do wrong? But if that is true, then it is impossible for God to do evil, from which it seems to follow that God can't freely do evil. But then how can it be a very important good for us to be able to freely cause evil? Isn't God the greatest possible being? If God lacks this good, how can it be so important for us?",
    questionCondition: (answers, classDay, theses) => theses["theism"] === 1 && (showIf(answers, "doesfreewillexplain", 1) || (showIf(answers, "doesfreewillexplain", 2) && !(showIf(answers, "fwdelementstoreject", 3)))), 
  },

{
  questionId: "theismalternatives",
  questionType: "Radio",
  questionText: "You don't believe that the classical God exists. How would you describe your view?",
  questionOptions: [
    "I believe simple atheism",
    "I'm a quasi-theist",
    "I'm an agnostic. I don't believe any of these views because I can't decide which is true.",
  ],
  questionCondition: (answers, classDay, theses) => showIf(answers, "nosoundarguments", 2) || theses["soundargumentagainsttheism"] === 1,
},
{
  questionId: "atheismrejectallarguments",
  questionType: "Radio",
  questionText: "Is that because you think that there's a sound and convincing argument for atheism that we haven't discussed in this class?",
  questionOptions: ["Yes", "No"],
  questionCondition: (answers, classDay, theses) => showIf(answers, "theismalternatives", 1),
},
{
  questionId: "novelatheisticargument",
  questionType: "LongAnswer",
  questionText: "Explain what the argument is, and why you think that it is sound.",
  questionCondition: (answers, classDay, theses) => showIf(answers, "atheismrejectallarguments", 1),
},
{
  questionId: "atheismnoargument",
  questionType: "LongAnswer",
  questionText: "Later on in the class, we'll talk about whether and when you should believe something despite not knowing of any good argument for it. How would you explain why you believe that atheism is true? Imagine that you are trying to explain this to someone who believes in God.",
  questionCondition: (answers, classDay, theses) => showIf(answers, "atheismrejectallarguments", 2),
},
{
  questionId: "twokindsquasitheism",
  questionType: "Radio",
  questionText: "Most quasi-theists believe that some being exists, which has some but not all of the properties which the classical conception attributes to God. Is your view like that?",
  questionOptions: ["Yes", "No"],
  questionCondition: (answers, classDay, theses) => showIf(answers, "theismalternatives", 2),
},
{
  questionId: "definingquasigod",
  questionType: "Checkbox",
  questionText: "Let's call that being 'quasi-God.' Which of the properties that the classical conception ascribes to God do you think that quasi-God does not have?",
  questionOptions: [
    "omnipotent",
    "perfectly good",
    "omniscient",
    "creator of the universe",
  ],
  questionCondition: (answers, classDay, theses) => showIf(answers, "twokindsquasitheism", 1),
},
{
  questionId: "whyquasigod",
  questionType: "LongAnswer",
  questionText: "Why do you think that it is more likely that quasi-God, so defined, exists, rather than the classical God?",
  questionCondition: (answers, classDay, theses) => showIf(answers, "twokindsquasitheism", 1),
},
{
  questionId: "novelquasitheism",
  questionType: "LongAnswer",
  questionText: "Then explain your preferred version of quasi-theism, and say why you think that it is more likely to be true than either of simple theism or simple atheism.",
  questionCondition: (answers, classDay, theses) => showIf(answers, "twokindsquasitheism", 2),
},
{
  questionId: "questionforagnostic",
  questionType: "LongAnswer",
  questionText: "When thinking about a question as big and complex as the question of whether God exists, it's not unreasonable to have some doubts about any of the answers. But if you think about it, we have beliefs about all sorts of things about which we cannot be completely certain. For example, I believe that Notre Dame will win more football games than it loses next year, even though of course it might turn out that they won't. Is there one of the options above that you think is most likely to be true? If so, pick that one. If not, explain why the question of God's existence is particularly hard for you to form any beliefs at all about.",
  questionCondition: (answers, classDay, theses) => showIf(answers, "theismalternatives", 3),
},


    // #endregion
];

