import showIf from "../utils/showIf";

// define questions as a function. The answers state is not available in static js files - so we in effect postpone using it until render time. This makes it possible to state questionConditions using Boolean operators as in ordinary js.

export const personalIdentityQuestions = (answers, classDay, theses) => [

  {
     questionId: "whichsurvivaltheory",
     questionType: "Radio",
     questionText: "Which of the answers to the survival question do you think is most likely to be true?",
     questionOptions: [
       "materialist survival",
       "soul survival",
       "psychological survival",
       "M+S",
       "P+S",
       "M+P",
       "M+P+S",
     ],
     questionCondition: (answers, classDay, theses) => classDay >= 11, 
   },

   // brain transplant challenge to materialism

   {
     questionId: "braintransplant",
     questionType: "Radio",
     questionText: "Then you think that your survival requires the continued existence of a material thing. The example of the brain transplant poses a challenge for the view that your survival requires the survival of a human organism. What is your response to this case?",
     questionOptions: [
       "You would not survive; the person leaving the hospital after the surgery would not be you",
       "I think that the only material thing that needs to survive is the brain (or maybe just part of it)",
     ],
     questionCondition: (answers, classDay, theses) => theses["matSur"] === 1, 
   },

   {
     questionId: "doyouholdthebrainview",
     questionType: "Radio",
     questionText: "Do you think that you are a brain (or a combination of a brain and an immaterial soul?",
     questionOptions: ["Yes", "No"],
     questionCondition: (answers, classDay, theses) => showIf(answers, "braintransplant", 2), 
   },

   {
     questionId: "whatareyouifnotbrain",
     questionType: "LongAnswer",
     questionText: "Then what are you? If your answer is 'an organism' or 'a combination of an organism and an immaterial soul' explain why you can survive Brain Transplant despite such a small portion of you surviving.",
     questionCondition: (answers, classDay, theses) => showIf(answers, "doyouholdthebrainview", 2), 
   },

   {
     questionId: "easyargsagainstbrainview",
     questionType: "LongAnswer",
     questionText: "Then it would seem you have some surprising views about yourself — for example, that you weigh less than 5 pounds, and are largely gray and have a toothpaste-like texture. Do you endorse these views? If not, why not? If so, is it a cost of your view that it has these implications?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "doyouholdthebrainview", 1), 
   },

   {
     questionId: "whynotsurvivebraintransplant",
     questionType: "LongAnswer",
     questionText: "But we can even imagine a version of the case in which you never lose consciousness as your brain is transferred from one body to the other. It would certainly seem to you that you had survived; it would seem as if there was one continuous stream of consciousness, starting before the brain transfer was started, and ending after it was completed. How, given this, could you fail to survive the transplant?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "braintransplant", 1), 
   },

   // body aswapping argument against materialism

   {
     questionId: "isbodyswappingsound",
     questionType: "Radio",
     questionText: "Is the body-swapping argument against materialism sound?",
     questionOptions: ["Yes", "No"],
     questionCondition: (answers, classDay, theses) => classDay >= 12 && (theses["matSur"] === 0) &&
         (theses["psychSur"] === 1 || theses["soulSur"] === 1), 
   },

   {
     questionId: "premiserejectbodyswappingarg",
     questionType: "Checkbox",
     questionText: "Which premises of the body-swapping argument against materialism do you reject?",
     questionOptions: [
       "1. I can clearly imagine a scenario in which I exist in a different body",
       "2. If I can clearly imagine something being the case, then it is possible for it to be the case.",
       "4. If it is possible that I exist in a different body, then materialist theories of survival are false.",
     ],
     questionCondition: (answers, classDay, theses) => showIf(answers, "isbodyswappingsound", 2) || theses["matSur"] === 1, 
   },

   {
     questionId: "whynotimaginebodyswapping",
     questionType: "LongAnswer",
     questionText: "But in some sense you certainly can imagine this; you have probably seen a movie or TV show in which it is portrayed as happening! Explain the sense of 'clearly imagine' you have in mind, and explain some examples of things which you can clearly imagine, in that sense.",
     questionCondition: (answers, classDay, theses) => showIf(answers, "premiserejectbodyswappingarg", 1), 
   },

   {
     questionId: "whynoconceivabilitypossibilitylink",
     questionType: "LongAnswer",
     questionText: "But we often do take imaginability to be a guide to possibility. Is it that you think that being able to imagine something is never evidence that it is possible, or that you think we need some higher level of imaginability than we have in this case? Either way, explain.",
     questionCondition: (answers, classDay, theses) => showIf(answers, "premiserejectbodyswappingarg", 2), 
   },

   {
     questionId: "bodyswappingwithmaterialism",
     questionType: "LongAnswer",
     questionText: "But this seems to misunderstand what materialism is. Materialism is the view that your continued existence requires the continued existence of some material thing. Presumably that thing is your body or some part of it. But if you were in a different body, you could go on existing even if every part of your old body was destroyed - which contradicts materialism. How do you respond?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "premiserejectbodyswappingarg", 3), 
   },

   {
     questionId: "defendconceivabilityofswapping",
     questionType: "LongAnswer",
     questionText: "As the example of the small town barber shows, there are plenty of cases when a scenario seems superficially imaginable, but on closer examination turns out to be impossible. What makes you think that the example of body-swapping is not one of those cases?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "isbodyswappingsound", 1), 
   },

   // conceivability argument for immaterial souls

   {
     questionId: "isconceivabilityargsound",
     questionType: "Radio",
     questionText: "Is the conceivability argument for the existence of immaterial souls sound?",
     questionOptions: ["Yes", "No"],
     questionCondition: (answers, classDay, theses) => classDay >= 12, 
   },

   {
     questionId: "conceivabilitysoundpartone",
     questionType: "LongAnswer",
     questionText: "But the example of the barber in the small town seems to show that scenarios can, in some sense, be conceivable without being possible. So you must think that there is some other, more developed sense of conceivability on which being conceivable implies being possible. What is that sense of conceivability?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "isconceivabilityargsound", 1), 
   },

   {
     questionId: "conceivabilitysoundparttwo",
     questionType: "LongAnswer",
     questionText: "This argument would seem to show that all creatures that have consciousness -- for example, frogs -- have immaterial souls. Do you agree with this conclusion? Why or why not?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "isconceivabilityargsound", 1), 
   },

   {
     questionId: "premiserejectconceivabilityearg",
     questionType: "Checkbox",
     questionText: "Which independent premises of the conceivability argument do you reject?",
     questionOptions: [
       "1. It is imaginable that two beings be physically the same but differ with respect to their phenomenal properties.",
       "2. If a situation is imaginable, it is possible.",
       "5. If we are wholly physical things, then phenomenal properties are physical properties.",
       "7. If we are not wholly physical things then immaterial souls exist.",
     ],
     questionCondition: (answers, classDay, theses) => showIf(answers, "isconceivabilityargsound", 2), 
   },

   {
     questionId: "marycouldknow",
     questionType: "LongAnswer",
     questionText: "But we seem to be able to imagine  beings who are physically just like us but who are zombies or who are spectrum inverted relative to us. In what sense of 'conceivable' do you think that such beings are not conceivable?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "premiserejectconceivabilityearg", 1), 
   },

   {
     questionId: "marynewfact",
     questionType: "LongAnswer",
     questionText: "But it seems plausible that imaginability is at least sometimes a good guide to possibility. If you think that this is not true, say why. If you think that it is true, say why the kind of conceivability we have in the case of zombies and spectrum inverts is not enough to be a good guide to possibility.",
     questionCondition: (answers, classDay, theses) => showIf(answers, "premiserejectconceivabilityearg", 2), 
   },

   {
     questionId: "propertydualismwithoutsubstance",
     questionType: "LongAnswer",
     questionText: "It is possible that we are wholly physical things which have certain non-physical properties. But isn't that somewhat improbable? Wouldn't one expect that, if we are wholly physical things, phenomenal properties would be physical properties? If so, doesn't that make it seem that this premise is likely to be true?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "premiserejectconceivabilityearg", 3), 
   },

   {
     questionId: "immaterialpartsnotsouls",
     questionType: "LongAnswer",
     questionText: "What could our immaterial parts be, if not an immaterial soul?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "premiserejectconceivabilityearg", 4), 
   },

   // for weird peope who give souls no role but endorse the conceivability argument.

   {
     questionId: "soulswithoutidentityrole",
     questionType: "LongAnswer",
     questionText: "So you think that the conceivability argument shows that immaterial souls exist, but you don't think that souls play any role in answering the survival question. What are souls for, then?",
     questionCondition: (answers, classDay, theses) => theses["soulSur"] === 0 && showIf(answers, 'isconceivabilityargsound', 1), 
   },

   // interaction argument

   {
     questionId: "premiserejectinteractionarg",
     questionType: "Checkbox",
     questionText: "Which premises of the interaction argument do you reject?",
     questionOptions: [
       "1. If there are immaterial souls, they causally interact with material bodies.",
       "2. Immaterial things can’t causally interact with material things.",
     ],
     questionCondition: (answers, classDay, theses) => classDay >= 13 && theses["soulSur"] === 1, 
   },

   {
     questionId: "parallelism",
     questionType: "LongAnswer",
     questionText: "But then what explains the remarkable coincidence that similar physical events always cause similar mental events, and vice versa?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "premiserejectinteractionarg", 1), 
   },

   {
     questionId: "psychophysicallaws",
     questionType: "LongAnswer",
     questionText: "If there are causal interactions between physical things and souls, it seems as though there would have to be psychophysical laws of nature governing these interactions. Further, it seems, some of these laws would have to be fundamental - they couldn't be explained by any other laws. But it also seems like these laws would concern extremely complex physical properties (like properties of large collections of neurons). Ordinarily, when a law concerns a very complex physical property, we expect it to be explained by laws concerning more fundamental, simpler properties. But in this case they can't be. This seems to provide some evidence against the existence of immaterial souls. Do you agree? If so, why do you still believe in souls? If not, why not?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "premiserejectinteractionarg", 2), 
   },

   /*
   // questions about split brain cases

   {
     questionId: "mainsplitbrainquestion",
     questionType: "Radio",
     questionText: "Do you think that the bodies of split brain patients, when being given different visual stimuli to the different halves of their visual field, are inhabited by two different individuals?",
     questionOptions: ["Yes", "No"],
     questionCondition: (answers, classDay, theses) => classDay >= 13, 
   },
   // chain for those who reject the idea that there   are two individuals in any of the cases

   {
     questionId: "splitbrainrejecttwopeople",
     questionType: "Checkbox",
     questionText: "Which of the following assumptions about the red/blue example discussed in class do you reject?",
     questionOptions: ["In this example, there is a reddish conscious experience and a bluish conscious experience.", "For every experience, there is someone who is having the experience.", "If someone has a conscious reddish or bluish  experience, it must be possible for them to be aware of that experience."],
     questionCondition: (answers, classDay, theses) => showIf(answers, 'mainsplitbrainquestion', 2), 
   },

   {
     questionId: "rejectredblueexperiences",
     questionType: "LongAnswer",
     questionText: "If there were no conscious experiences of this kind, how did the subject manage to correctly report the colors shown to both halves of the visual field?",
     questionCondition: (answers, classDay, theses) => showIf(answers, 'splitbrainrejecttwopeople', 1), 
   },

   {
     questionId: "experienceswithnosubject",
     questionType: "LongAnswer",
     questionText: "It seems bizarre to say that there could be a conscious experience of, for example, pain, but no one having the experience. Do you think that this is possible? If so, why? If not, why is that different than the red/blue case?",
     questionCondition: (answers, classDay, theses) => showIf(answers, 'splitbrainrejecttwopeople', 2), 
   },

   {
     questionId: "consciousnesswithnoawareness",
     questionType: "LongAnswer",
     questionText: "It seems impossible to, for example, have a conscious experience of extreme pain without being able to become aware of that pain. Do you agree that this is impossible? If not, say why not. If so, say why you nonetheless think that it is possible to have conscious experiences of red or blue without being able to become aware of this?",
     questionCondition: (answers, classDay, theses) => showIf(answers, 'splitbrainrejecttwopeople', 3), 
   },

   // chain for those who think that there are two individuals

   {
     questionId: "splitbraintwopeople",
     questionType: "Radio",
     questionText: "Do you think that this is also true of split brain patients while they are not being given this kind of sensory stimulus?",
     questionOptions: ["Yes", "No"],
     questionCondition: (answers, classDay, theses) => showIf(answers, 'mainsplitbrainquestion', 1), 
   },

   {
     questionId: "doeseveryonecontaintwopeople",
     questionType: "Radio",
     questionText: "Do you think that this is also true of people who have not had their corpus callosum severed?",
     questionOptions: ["Yes", "No"],
     questionCondition: (answers, classDay, theses) => showIf(answers, 'splitbraintwopeople', 1), 
   },

   {
     questionId: "splitbrainstimuluscreate",
     questionType: "LongAnswer",
     questionText: "But then simply showing turning on some lights (or providing another such stimulus) can bring someone into existence, and turning off the lights can kill them. That sounds crazy. Explain why you think that this is nonetheless the most plausible view.",
     questionCondition: (answers, classDay, theses) => showIf(answers, 'splitbraintwopeople', 2), 
   },

   {
     questionId: "onlysplitbraintwopeople",
     questionType: "LongAnswer",
     questionText: "But then severing the corpus callosum of an epileptic patient would bring a new individual into existence; and reversing the surgery would kill that individual. That sounds crazy. Explain why you think that this is nonetheless the most plausible view.",
     questionCondition: (answers, classDay, theses) => showIf(answers, 'doeseveryonecontaintwopeople', 2), 
   },

   {
     questionId: "everyonecontainsmultiplepeople",
     questionType: "LongAnswer",
     questionText: "So you think that your body contains multiple individuals. One of them is answering this question. What is the other one doing? More generally, why do you think that the view that all human bodies contain multiple individuals is the best response to these puzzling cases?",
     questionCondition: (answers, classDay, theses) => showIf(answers, 'doeseveryonecontaintwopeople', 1), 
   },

*/


   // teletransportation argument — only for pure psychological view. not used in fall 21 since I cut that out and focused on My Division
   /*
      {
        questionId: "teletransportresponse",
        questionType: "Checkbox",
        questionText: "If you think that psychological survival is true, you must reject at least one premise of the teletransportation argument. Which premise or premises do you reject?",
        questionOptions: [
          "1. Teletransportation is possible.",
          "2. If teletransportation is possible and the psychological theory of survival is true, then it is possible that Earthy = Marsy and Earthy = Venusy and Marsy ≠ Venusy.",
          "3. It is not possible that Earthy = Marsy and Earthy = Venusy and Marsy ≠ Venusy.",
        ],
        updater: function () {
          upd(classDay >= 13 && theses["matSur"] === 0 && theses["psychSur"] === 1 && theses["soulSur"] === 0, this.id);
        },
      },

      {
        questionId: "teletransportimpossible",
        questionType: "LongAnswer",
        questionText: "But the kind of machines needed for its possibility only do three things: (i) scan one's body, (ii) transmit the information from the scan by radio, and (iii) rebuild a duplicate of that material thing from the scan. Which of these do you think is impossible?",
        updater: function () {
          upd(showIf(answers, "teletransportresponse", 1), this.id);
        },
      },

      {
        questionId: "psychnonbranch",
        questionType: "Radio",
        questionText: "Is that because you think that the only psychological connections that ensure survival must be non-branching connections?",
        questionOptions: ["Yes", "No"],
        updater: function () {
          upd(showIf(answers, "teletransportresponse", 2), this.id);
        },
      },

      {
        questionId: "denyteletransportconsequence",
        questionType: "LongAnswer",
        questionText: "But if teletransportation is possible, then in the kind of scenario described in class the psychological theory would imply that Earthy = Marsy and that Earthy = Venusy (since they stand in the right kind of psychologcial relations). And it just seems obvious that Venusy ≠ Marsy. Where does this line of reasoning go wrong?",
        updater: function () {
          upd(showIf(answers, "psychnonbranch", 2), this.id);
        },
      },

      {
        questionId: "againstnonbranchtheories",
        questionType: "LongAnswer",
        questionText: "But when we consider the question of whether some future person X is identical to you, it seems that the only things that matter are features of the relations between you and X. How some other thing, Y is, does not seem to enter into it. But on a view which adds a non-branching requirement, this is not so. How do you respond?",
        updater: function () {
          upd(showIf(answers, "psychnonbranch", 1), this.id);
        },
      },

      {
        questionId: "denytransitiveidentitiy",
        questionType: "LongAnswer",
        questionText: "But this violates the transitivity of identity. How could A be identical to B and B be identical to C without A being identical to C? It seems that if A and B are one thing, and B and C are the same thing, then A and C must be the same thing.",
        questionOptions: ["OPTION", "OPTION", "OPTION"],
        updater: function () {
          upd(showIf(answers, "teletransportresponse", 3), this.id);
        },
      },

      */

   // Brain Transplant, Hemisphere Transplant, My Divison questions 

   // Brain transplant questions only for those who have not already answered it - i.e. people w no materialist component

   {
     questionId: "braintransplantredux",
     questionType: "Radio",
     questionText: "In the example of Brain Transplant, your brain is transplanted into another human body. If the surgery is successful, do you think that the person resulting from the surgery could be you?",
     questionOptions: ["Yes", "No"],
     questionCondition: (answers, classDay, theses) => classDay >= 13 && !showIf(answers, "braintransplant", 1) && !showIf(answers, "braintransplant", 2), 
   },

   {
     questionId: "whynotsurvivebraintransplantredux",
     questionType: "LongAnswer",
     questionText: "But we can even imagine a version of the case in which you never lose consciousness as your brain is transferred from one body to the other. It would certainly seem to you that you had survived; it would seem as if there was one continuous stream of consciousness, starting before the brain transfer was started, and ending after it was completed. How, given this, could you fail to survive the transplant?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "braintransplantredux", 2), 
   },

   // Hemisphere transplant - only for people who think you could survive brain transplant

   {
     questionId: "hemispheretransplant",
     questionType: "Radio",
     questionText: "In the example of Hemisphere Transplant, one hemisphere of your brain is transplanted into another human body. If the surgery is successful, and the human being that results regain full mental functioning with all of the memories you had before the surgery, do you think that the human being resulting from the surgery could be you?",
     questionOptions: ["Yes", "No"],
     questionCondition: (answers, classDay, theses) => (showIf(answers, 'braintransplant', 2) || showIf(answers, 'braintransplantredux', 1)) && classDay >= 13, 
   },

   {
     questionId: "whynotsurivehemiredux",
     questionType: "LongAnswer",
     questionText: "But why do you think that the cases of Brain Transplant and Hemisphere Transplant are so different? In both cases there might be the same kinds of psychological connections. Do you think that you could survive the surgery if a bit more than one hemisphere were transplanted, but less than a full brain? If so, how much matter do you think is required? If not, why is it so important to have the full brain, rather than almost all of it, be transplanted?",
     questionCondition: (answers, classDay, theses) => showIf(answers, 'hemispheretransplant', 2), 
   },

   // For psychological theorists who deny that you could survive brain or hemisphere transplant -- asks them to explain how the denial is consistent w rtgeir view

   {
     questionId: "psychtheoristdenytransplant",
     questionType: "LongAnswer",
     questionText: "Your preferred view about the survival question seems inconsistent with your views about whether you could survive the transplant cases. After all, it is stipulated in both Brain Transplant and Hemisphere Transplant that the person who survives the surgery would be psychologically continuous with you. ",
     questionCondition: (answers, classDay, theses) => theses["psychSur"] === 1 && theses["matSur"] === 0 && (showIf(answers, "braintransplantredux", 2) || showIf(answers, 'hemispheretransplant', 2)), 
   },

   // My Division questions. Only for those who think you could survive hemisphere transplant

   {
     questionId: "mydivisionsurvival",
     questionType: "Radio",
     questionText: "In the example of My Division, one hemisphere of your brain is transplanted into another human body, and the other is transplanted into a different human body. If the surgeries are successful, and both human beings come out of surgery with full mental functioning and with all of the memories you had before the surgery, do you think that one or both human beings resulting from the surgery could be you?",
     questionOptions: ["Yes", "No"],
     questionCondition: (answers, classDay, theses) => showIf(answers, 'hemispheretransplant', 1), 
   },

   {
     questionId: "howsurvivemydivision",
     questionType: "Radio",
     questionText: "Which of the following do you think is true?",
     questionOptions: ["You survive as one of Lefty and Righty, but not both", "You survive as both Lefty and Righty"],
     questionCondition: (answers, classDay, theses) => showIf(answers, 'mydivisionsurvival', 1), 
   },

   // for those who say we survive as both

   {
     questionId: "howsurviveasboth",
     questionType: "Checkbox",
     questionText: "The main problem with this option is that it seems that Lefty and Righty are distinct from each other. But identity is transitive, so that if you are identical to both Lefty and Righty, they must be identical to each other. Which assumption in this argument do you reject?",
     questionOptions: ["Lefty is not identical to Righty", "Identity is transitive, so that if A=B and B=C then it must also be the case that A=C"],
     questionCondition: (answers, classDay, theses) => showIf(answers, 'howsurvivemydivision', 2), 
   },

   {
     questionId: "leftyisrighty",
     questionType: "LongAnswer",
     questionText: "But Lefty and Righty certain seem like distinct people. They are located in different places, and having different experiences. And over time they might develop very different personalities in various ways. Why do you think that they are literally one and the same person?",
     questionCondition: (answers, classDay, theses) => showIf(answers, 'howsurviveasboth', 1), 
   },

   {
     questionId: "denieroftransitivity",
     questionType: "LongAnswer",
     questionText: "But remember that our topic is numerical identity - the same relation that we symbolize in mathematics with '='. How could it be that A and B are one and the same thing, and B and C are one and the same thing, but A and C are not one and the same thing?",
     questionCondition: (answers, classDay, theses) => showIf(answers, 'howsurviveasboth', 2), 
   },

   // for those who say we survive as one

   {
     questionId: "leftyorrightnotbothnosoul",
     questionType: "LongAnswer",
     questionText: "But this is very mysterious. You before the accident might stand in exactly the same physical and psychological relations to Lefty and to Righty. Because you don't think that immaterial souls play a role in survival, it is very hard to see how anything other than physical and psychological relations can be relevant to survival. Given all of this, how could you survive as one but not the other?",
     questionCondition: (answers, classDay, theses) => showIf(answers, 'howsurvivemydivision', 1) && theses["soulSur"] === 0, 
   },

   {
     questionId: "leftyorrightnotbothwithsouls",
     questionType: "LongAnswer",
     questionText: "Because you think that immaterials souls play a role in survival, I presume that you think that after the surgery your soul is connected in the right way to one of Lefty and Righty, but not to both. So suppose that you are Lefty, and you are wondering whether you are the same person as the person whose body was fatally injured. You know that Righty is wondering the same thing. One your view, at most one of you really is the person you seem to remember being -- the other one seems to remember a bunch of stuff that never happened to them. Moreover, it seems like it will be impossible for them to discover who is right. And yet it seems to be a fact of great importance. Do you agree that your identity could be undiscoverable in this way? Why or why not?",
     questionCondition: (answers, classDay, theses) => showIf(answers, 'howsurvivemydivision', 1) && theses["soulSur"] === 1, 
   },

   {
     questionId: "leftyorrightnotbothwithsoulsfollowup",
     questionType: "LongAnswer",
     questionText: "Suppose that your soul gets connected with Lefty's body; so, after the surgery, that is who you are. Righty, while distinct from you, seems to be a normal conscious person. Does Righty have a soul which was created by the surgery? If so, is that a strange result?",
     questionCondition: (answers, classDay, theses) => showIf(answers, 'howsurvivemydivision', 1) && theses["soulSur"] === 1, 
   },

   // For those who say we do not survive My Division

   {
     questionId: "soultheoristnosurvivemydivisionwhy",
     questionType: "Radio",
     questionText: "So I assume that you think that your soul would not connect up in the right way with either Lefty or Righty after the surgery. But you think that the soul would connect up in the right way after Hemisphere Transplant. What explains the difference? Is it that the physical and/or psychological connections are non-branching in the case of Hemisphere Transplant but branching in the case of My Division?",
     questionOptions: ["Yes", "No"],
     questionCondition: (answers, classDay, theses) => showIf(answers, 'mydivisionsurvival', 2) && theses["soulSur"] === 1, 
   },

   {
     questionId: "soultheoristthenwhatexplainsthedifference",
     questionType: "LongAnswer",
     questionText: "Then what, in your view, does explain the fact that the soul is connected in the right way to the person who comes out of the surgery in Hemisphere Transplant but not to either Lefty or Righty?",
     questionCondition: (answers, classDay, theses) => showIf(answers, 'soultheoristnosurvivemydivisionwhy', 2), 
   },

   {
     questionId: "nosoulsnosurvivemydivisionwhy",
     questionType: "Radio",
     questionText: "But you think that you could survive Hemisphere Transplant. What explains the difference? Is it that the physical and/or psychological connections are non-branching in the case of Hemisphere Transplant but branching in the case of My Division?",
     questionOptions: ["Yes", "No"],
     questionCondition: (answers, classDay, theses) => showIf(answers, 'mydivisionsurvival', 2) && theses["soulSur"] === 0, 
   },

   {
     questionId: "nosoulsthenwhatexplainsthedifference",
     questionType: "LongAnswer",
     questionText: "Then what, in your view, does explain the fact that you could survive Hemisphere Transplant but not My Division?",
     questionCondition: (answers, classDay, theses) => showIf(answers, 'nosoulsnosurvivemydivisionwhy', 2), 
   },



   // questons for everyone who explains the diference between Hemisphere Transplant and My Division with a non-branching clause

   {
     questionId: "againstnonbranchingclause",
     questionType: "LongAnswer",
     questionText: "But when we consider the question of whether some future person X is identical to you, it seems that the only things that matter are features of the relations between you and X. How some other thing, Y is, does not seem to enter into it. But on a view which adds a non-branching requirement, this is not so; whether you are identical to some past person can depend upon facts about someone else entirely. How do you respond?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "nosoulsnosurvivemydivisionwhy", 1) || showIf(answers, 'soultheoristnosurvivemydivisionwhy', 1), 
   },









   // questions about the survival continuum 

   // first question for everyone besides pure soul theorists

   {
     questionId: "survivalcontinuumoptions",
     questionType: "Radio",
     questionText: "We can all agree that you would survive the leftmost end of the survival continuum, since there nothing is done to you. We can also agree that you would not survive the rightmost end of the continuum, since there you are destroyed and replaced with someone entirely different from you. So it seems that one of the following must be true:",
     questionOptions: [
       "There a sharp cut off point somewhere in the continuum. Before that point, you would survive; after that point, you would not survive, and the resulting person would not be you.",
       "On some left parts of the continuum you would clearly survive; on some right parts of the continuum you clearly would not. But, in between there are some cases in which it is simply indeterminate whether that the person that results would be you.",
     ],
     questionCondition: (answers, classDay, theses) => classDay >= 13 && (theses["matSur"] === 1 || theses["psychSur"] === 1), 
   },

   // first question for pure soul theorists

   {
     questionId: "soulsurvivalcontinuum",
     questionType: "Radio",
     questionText: "If you believe that your survival requires only the existence of your immaterial soul, the difficult questions from the survival continuum are questions about whether, at some stage in the continuum, your soul would be connected to the same body or not. We can all agree that at the the leftmost end of the survival continuum it would, since there nothing is done to you. We can also agree that at rightmost end of the continuum it would not, since there your body is destroyed and replaced with something entirely different. So it seems that one of the following must be true:",
     questionOptions: [
       "There a sharp cut off point somewhere in the continuum. Before that point, your soul would remain attached to the same body; after that point, it would not, and the resulting person would not be you.",
       "On some left parts of the continuum your soul would remain attached to the same body; on some right parts of the continuum it would not. But, in between there are some cases in which it is simply indeterminate whether your soul is the one connected to that body or not.",
     ],
     questionCondition: (answers, classDay, theses) => classDay >= 13 && (theses["soulSur"] === 1 && theses["matSur"] === 0 && theses["psychSur"] === 0), 
   },

   // long answers for two possible responses to continuum

   {
     questionId: "againstsharpcutoff",
     questionType: "LongAnswer",
     questionText: "But if there were such a sharp cutoff, it seems that it would be unknowable where it is. Suppose that you wake up after some procedure in the middle of the spectrum. It seems that you would not be able to figure out which side of the sharp cut off your procedure was. So, you would be unable to figure out if you are the same person who existed prior to the procedure, or are instead a new person who just came into existence. Would this be unknowable and, if it is, is that a bad consequence of your view?",
     questionCondition: (answers, classDay, theses) => 
         showIf(answers, "survivalcontinuumoptions", 1) || showIf(answers, "soulsurvivalcontinuum", 1),
         
   },

   {
     questionId: "indeterminatesurvival",
     questionType: "LongAnswer",
     questionText: "But it is pretty weird to think that there could be some future person of whom it would not be true either to say 'That is me' or 'That is not me.' Suppose that something very bad happens to that person, such as torture. Doesn't there have to be a determinate fact of the matter about whether you will undergo torture in the future? And, if so, doesn't that mean that there must be a determinate fact of the matter abour whether that person is you?",
     questionCondition: (answers, classDay, theses) => 
         showIf(answers, "survivalcontinuumoptions", 2) || showIf(answers, "soulsurvivalcontinuum", 2),
         
   },

   // materialist life after death

   {
     questionId: "formaterialistbelieversinlifeafterdeath",
     questionType: "LongAnswer",
     questionText: "Believers in life after death, like you, who also think that there is a materialist component to survival face the challenge of explaining how we could exist after our death despite the fact that our bodies and all of their parts decay and eventually cease to exist. How do you respond to this challenge?",
     questionCondition: (answers, classDay, theses) => classDay >= 14 && theses["matSur"] === 1 && showIf(answers, "isthereanafterlife", 1), 
   },

   // uploading paradox response

   {
     questionId: "responetouploadingparadox",
     questionType: "Checkbox",
     questionText: "Because the conclusion of the uploading paradox is a contradiction, at least one of its independent premises must be false. Which premises do you reject?",
     questionOptions: [
       "1. You can survive slow gradual destructive uploading.",
       "2. If you can survive slow gradual destructive uploading, you can survive fast gradual destructive uploading.",
       "4. You cannot survive instant non-destructive uploading.",
       "5. If you cannot survive instant non-destructive uploading, you cannot survive instant destructive uploading.",
       "7. If you cannot survive instant destructive uploading, you cannot survive fast gradual destructive uploading.",
     ],
     questionCondition: (answers, classDay, theses) => classDay >= 14, 
   },

   {
     questionId: "slowgradualupload",
     questionType: "LongAnswer",
     questionText: "But we can imagine the process going very slowly, so that only small groups of neurons (or other small groups of cells in your body) are replaced at a time. You might well remain conscious throughout the whole process. How could any such small change make a difference to whether you continue to exist?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "responetouploadingparadox", 1), 
   },

   {
     questionId: "slowtofastupload",
     questionType: "LongAnswer",
     questionText: "But it is hard to see how the speed of the replacements could matter. Is there a certain 'speed limit' to the replacements which, if exceeded, would mean that you would not survive? If so, what's special about that speed limit?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "responetouploadingparadox", 2), 
   },

   {
     questionId: "instantnondestructive",
     questionType: "LongAnswer",
     questionText: "But this is just a situation in which a clone of you is made, and you are destroyed. If there were no clone present, you would not survive. But when the clone is created, it is not you. How could it become you when your body is destroyed?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "responetouploadingparadox", 3), 
   },

   {
     questionId: "nondestructivetodestructive",
     questionType: "LongAnswer",
     questionText: "But the only difference between these cases is that in the first your body is  destroyed after the synthetic version is made, whereas in the second these events happen simultaneously. Why do you think you could survive the second but not the first?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "responetouploadingparadox", 4), 
   },

   {
     questionId: "veryveryfastuploading",
     questionType: "LongAnswer",
     questionText: "But consider a very, very fast instance of gradual uploading — say, one in which the whole process takes a fraction of a second. Why do you think that you could survive that, but not a process in which the synthetic substitution takes place all at once?",
     questionCondition: (answers, classDay, theses) => showIf(answers, "responetouploadingparadox", 5), 
    },
   
   
  // souls + atheism

  {
    questionId: "soulsplusatheism",
    questionType: "LongAnswer",
    questionText: "Most believers in immaterial souls are either theists or quasi-theists; but you're an atheist. If immaterial souls were not created by God (or quasi-God), what do you think explains their existence?",
    questionCondition: (answers, classDay, theses) => theses["soulSur"] === 1 && theses["theism"] === 1, 
  },

  // souls + free will

  {
    questionId: "soulplusfreewill",
    questionType: "LongAnswer",
    questionText: "You believe both in human free will and in the existence of immaterial souls. It is natural to think that, if we have both free will and immaterial souls, our souls should play some role in the actions we choose. Do you think this? If so, what role do you think that immaterial souls play in free actions?",
    questionCondition: (answers, classDay, theses) => theses["committedToFreeWill"] === 1 && theses["soulSur"] === 1, 
  },

  // concluding questions

   {
  questionId: "survivalconcludingwhichargument",
  questionText: 'Which argument that we talked about in this section of the class was most challenging to the beliefs that you had coming into the class? (If the argument has a name, you can just name the argument.)',
  questionType: 'LongAnswer',
  questionCondition: (answers, classDay, theses) => classDay >= 14,
},
{
  questionId: "survivalconcludingwhichbelief",
  questionText: 'What belief did it challenge? Why did you hold that belief coming into the class? (The explanation can be biographical rather than philosophical.)',
  questionType: 'LongAnswer',
  questionCondition: (answers, classDay, theses) => classDay >= 14,
  },
{
  questionId: "survivalconcludingdiditchange",
  questionText: 'In the end, did the argument cause you to weaken or change that belief?',
  questionType: 'Radio',
  questionOptions: ['Yes', 'No'],
  questionCondition: (answers, classDay, theses) => classDay >= 14,
  },
  {
    questionId: "survivalconcludingchangedmind",
    questionText: 'Explain why you think that the argument in question may be sound, by explaining why you think that each of the independent premises is likely to be true. State what you take to be the strongest objection to one of those premises, and defend the premise against the objection. (It is fine if your answer here overlaps with other answers you gave in this section.)',
    questionType: 'LongAnswer',
    questionCondition: (answers) => showIf(answers, 'survivalconcludingdiditchange', 1)
  }, {
    questionId: "survivalconcludingdidnotchange",
    questionText: 'Explain why in the end you did not find the argument convincing, by saying which independent premise you think is false, and why. Also say why in the end you think that the belief challenged by the argument is more likely to be true than false. (It is fine if your answer here overlaps with other answers you gave in this section.)',
    questionType: 'LongAnswer',
    questionCondition: (answers) => showIf(answers, 'survivalconcludingdiditchange', 2)
  },

];

