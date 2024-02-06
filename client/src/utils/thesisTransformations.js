// this determines the user's attitude toward various theses for ease of reference in setting the question logic. Here "1" means "is committed to" and 0 means "is not committed to." It does not mean "user thinks is 1" or "user thinks is 0." We need separate variables for theses and their negations to allow for indecision and set the contradiction logic.
export const transformAnswersToTheses = (answers) => {

  const yes = (questionId, number) => {
    const numberAsString = number.toString();
    return answers[questionId] && answers[questionId].includes(numberAsString) ? 1 : 0;
  };


  const
    soundargumentfortheism = (yes("iskalamsound", 1) || yes("iscosmologicalsound", 1) || yes("finetuningsound", 1)) ? 1 : 0;
  
  const
    soundargumentagainsttheism = (yes("argumentfrompointlessevil", 1) || yes("naturalevilsound", 1) || yes("rowesfawnsound", 1) || yes("horrrificevilsound", 1)) ? 1 : 0;
  
  const
    theism = (yes("nosoundarguments", 1) || yes("iskalamsound", 1) || yes("iscosmologicalsound", 1) || yes("finetuningsound", 1)) ? 1 : 0;
  
  const atheism =
    yes("theismalternativesthreechoices", 1) ? 1 : 0;
  
  const quasitheism =
    yes("theismalternativesthreechoices", 2) ? 1 : 0;

  const committedToFreeWill =
    (
  yes("isresponsibilityargsound", 1) ||
  yes("islovingargsound", 1) ||
  yes("isseemingargsound", 1) ||
  yes("doesfreewillexplain", 1) ||
  yes('freewillnosoundarguments', 1)
) ? 1 : 0;

  const deniesFreeWill =
    (
  yes("ismasterargsound", 1) ||
  yes("isforeknowledgesound", 1) ||
  yes("isfatalistsound", 1) ||
  yes('freewillnosoundarguments', 2)
) ? 1 : 0;

  const matSur =
    (
  yes("whichsurvivaltheory", 1) ||
  yes("whichsurvivaltheory", 4) ||
  yes("whichsurvivaltheory", 6) ||
  yes("whichsurvivaltheory", 7)
) ? 1 : 0;

  const soulSur =
    (
  yes("whichsurvivaltheory", 2) ||
  yes("whichsurvivaltheory", 4) ||
  yes("whichsurvivaltheory", 5) ||
  yes("whichsurvivaltheory", 7)
) ? 1 : 0;

  const psychSur =
    (
  yes("whichsurvivaltheory", 3) ||
  yes("whichsurvivaltheory", 5) ||
  yes("whichsurvivaltheory", 6) ||
  yes("whichsurvivaltheory", 7)
) ? 1 : 0;
  
  const nihilism =
    (
  yes("whattheoryofvalue", 1) 
) ? 1 : 0;  
  
  const realism =
    (
  yes("whattheoryofvalue", 2) 
  ) ? 1 : 0;  

  const relativism =
    (
  yes("whattheoryofvalue", 3) 
) ? 1 : 0;  
  

    

  // Construct the new theses object
  // Include other theses transformation logic here if needed
 const newTheses = {
  soundargumentfortheism,
  soundargumentagainsttheism,
  theism,
  atheism,
  quasitheism,
  committedToFreeWill,
  deniesFreeWill,
  matSur,
  soulSur,
   psychSur,
   nihilism,
   realism,
  relativism,
  // ...otherThesesLogic (if there are other theses to compute)
};
    //console.log('transform theses function called');
    //console.log(answers["iskalamsound"]);
   
  return newTheses;
};
