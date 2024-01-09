// this determines the user's attitude toward various theses for ease of reference in setting the question logic. Here "1" means "is committed to" and 0 means "is not committed to." It does not mean "user thinks is true" or "user thinks is false." We need separate variables for theses and their negations to allow for indecision and set the contradiction logic.
export const transformAnswersToTheses = (answers) => {

  const yes = (questionId, number) => {
    const numberAsString = number.toString();
    return answers[questionId] && answers[questionId].includes(numberAsString) ? 1 : 0;
  };


    const soundargumentfortheism = (yes("iskalamsound", 1) || yes("iscosmologicalsound", 1)|| yes("finetuningsound",1)) ? 1 : 0;
    const soundargumentagainsttheism = (yes("argumentfrompointlessevil", 1) || yes("naturalevilsound", 1) || yes("rowesfawnsound", 1) || yes("horrrificevilsound", 1)) ? 1 : 0;
    const theism = (yes("nosoundarguments", 1) || soundargumentfortheism === true) ? true : false;
const atheism = yes("theismalternatives", 1) ? true : false;
const quasitheism = yes("theismalternatives", 2) ? true : false;

const committedToFreeWill = (
  yes("isresponsibilityargsound", 1) ||
  yes("islovingargsound", 1) ||
  yes("isseemingargsound", 1) ||
  yes("doesfreewillexplain", 1) ||
  yes('freewillnosoundarguments', 1)
) ? true : false;

const deniesFreeWill = (
  yes("ismasterargsound", 1) ||
  yes("isforeknowledgesound", 1) ||
  yes("isfatalistsound", 1) ||
  yes('freewillnosoundarguments', 2)
) ? true : false;

const matSur = (
  yes("whichsurvivaltheory", 1) ||
  yes("whichsurvivaltheory", 4) ||
  yes("whichsurvivaltheory", 6) ||
  yes("whichsurvivaltheory", 7)
) ? true : false;

const soulSur = (
  yes("whichsurvivaltheory", 2) ||
  yes("whichsurvivaltheory", 4) ||
  yes("whichsurvivaltheory", 5) ||
  yes("whichsurvivaltheory", 7)
) ? true : false;

const psychSur = (
  yes("whichsurvivaltheory", 3) ||
  yes("whichsurvivaltheory", 5) ||
  yes("whichsurvivaltheory", 6) ||
  yes("whichsurvivaltheory", 7)
) ? true : false;

    

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
  psychSur
  // ...otherThesesLogic (if there are other theses to compute)
};
    //console.log('transform theses function called');
    //console.log(answers["iskalamsound"]);
   
  return newTheses;
};
