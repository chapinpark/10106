const readingsArray = [
    {
        day: 1,
        text: "No readings for today!",
        source: ""},
    {
        day: 2,
        text: "The second way is from the nature of efficient cause. In the world of sensible things we find there is an order of efficient causes. There is no case known (neither, indeed, is it possible) in which a thing is found to be the efficient cause of itself; for so it would be prior to itself, which is impossible. Now in efficient causes it is not possible to go on to infinity, because in all efficient causes following in order, the first is the cause of the intermediate cause, and the intermediate is the cause of the ultimate cause … Now to take away the cause is to take away the effect. Therefore, if there be no first cause among efficient causes, there will be no ultimate, nor any intermediate, cause. But if in efficient causes it is possible to go on to infinity, there will be no first efficient cause, neither will there be an ultimate effect, nor any intermediate efficient causes; all of which is plainly false. Therefore it is necessary to admit a first cause, to which everyone gives the name of God.",
        source: "the 'Second Way' from Aquinas' Summa Theologica",
    },
    {
        day: 3,
        text: "Why is there any world at all, and why is it the way that it is? ... we cannot find in any of the individual things, or even in the entire collection and series of things, a sufficient reason for why they exist.<br><br>Let us suppose that a book on the elements of geometry has always existed, one copy always made from another. It is obvious that although we can explain a present copy of the book from the previous book from which it was copied, this will never lead us to a complete explanation, no matter how many books back we go, since we can always wonder why there have been such books. <br><br>What is true of these books is also true of the different states of the world ...however far back we might go into previous states, we will never find in those states a complete explanation for why there is a world at all, and why it is the way it is.<br><br>I certainly grant that you can imagine that the world is eternal. However, since you assume only a succession of states, and since no reason for the world can be found in any of them ... it is obvious that the reason must be found elsewhere. ... even if we assume the eternity of the world, we cannot escape the ultimate and extramundane reason for things, God. ",
        source: "Leibniz, \"The ultimate origination of things\" (1697)"
    },
    
    {
        day: 4,
        text: "The standard model of physics presents a theory of the electromagnetic, weak, and strong forces, and a classification of all known elementary particles. The standard model specifies numerous physical laws, but that's not all it does. According to the standard model there are roughly two dozen dimensionless constants that characterize fundamental physical quantities...<br><br>Physicists have determined the (approximate) values of the fundamental constants by measurement. (There's no way to derive the values of the fundamental constants from other aspects of the standard model. Any quantities that could be so derived wouldn't be fundamental.) Still, the underlying theory favored some sorts of parameter-values over others. ... Physicists made the startling discovery that –– given antecedently plausible assumptions about the nature of the physical world –– the probability that a universe with general laws like ours would be habitable was staggeringly low.<br><br> We thus focus on a package of three propositions: (i) the proposition that given the general laws, only a minute fraction of values of the cosmological constant (as judged by any of the physically-respectable measures) are life-permitting; (ii) the proposition that quasi-theism is false; and (iii) the proposition that physical reality consists of a single universe. We will call this \"the package.\" Our core argument is that if one supposes the package to be true, then theism is significantly more plausible than atheism. We are not claiming that we know that the package is true; we're just trying to figure out what its ... significance would be.&nbsp;<br><br>We should emphasize just how small we take the life- permitting parameter values to be according to the physically-respectable measures. “Small” here doesn’t mean “1 in 10,000” or “1 in 1,000,000”. It means the kind of fraction that one would resort to exponents to describe, as in “1 in 10 to the 120”. The kind of package that we have in mind tells us that only a fantastically small range is life permitting.&nbsp; <br><br> So ... how does atheism fare conditional on the package plus [the fact that life exists]? It is quite easy to make the case that it fares badly. The central thought is that the package plus life is fantastically unlikely conditional on atheism but not nearly as unlikely conditional on theism. Let's suppose that theism was not anything like fantastically unlikely to begin with. The result will be that, conditional on the package plus life, theism will be substantially more probable than atheism.",
        source: "Hawthorne &amp; Isaacs, \"Fine-tuning fine-tuning\" (2017)"
    },
    {
        day: 5,
        text: "In its simplest form the problem is this: God is omnipotent; God is good; and yet evil exists. There seems to be some contradiction between these three premises, so that if any of them were true the third would be false. But at the same time all three are essential parts of most [theist] positions: the [theist], it seems, at once <em>must</em> and <em>cannot</em> consistently adhere to all three.",
        source: "Mackie, \"Evil and omnipotence\""
    },
    {
        day: 6,
        text: "There seems to me to be only one defense [against the argument from evil] that has any hope of succeeding, and that is the so-called free-will defense:&nbsp; <br>God made the world and it was very good. An indispensable part of its goodness was the existence of rational beings: self-aware beings capable of abstract thought and love and having the power of free choice between contemplated alternative courses of action. This last feature of rational beings, free choice or free will, is a good. But even an omnipotent being is unable to control the exercise of free choice, for a choice that was controlled would ...&nbsp; not be free. In other words, if I have a free choice between x and y, even God cannot ensure that I choose x. To ask God to give me a free choice between x and y and to see to it that I choose x instead of y is to ask God to bring about the intrinsically impossible; it is like asking him to create a round square or a material body with no shape. Having this power of free choice, some or all human beings misused it and produced a certain amount of evil. But free will is a sufficiently great good that its existence outweighs the evils that have resulted and will result from its abuse; and God foresaw this.",
        source: "van Inwagen, The Problem of Evil"
    },
    {
        day: 6,
        text: "if God has made men such that in their free choices they sometimes prefer what is good and sometimes what is evil, why could he not have made men such that they always freely choose the good? If there is no logical impossibility in a man's freely choosing the good on one, or several occasions, there cannot be a logical impossibility in his freely choosing the good on every occasion. God was not, then, faced with a choice between making innocent automata and making beings who, in acting freely, would sometimes go wrong: there was open to him the obviously better possibility of making beings who would act freely but always go right.",
        source: "Mackie, \"Evil and omnipotence\""
    },
    {
        day: 6,
        text: "Suppose that in some distant forest lightning strikes a dead tree, resulting in a forest fire. In the fire a fawn is trapped, horribly burned, and lies in terrible agony for several days before death relieves its suffering.  ...  So far as we can see, the fawn's intense suffering is pointless. For there does not appear to be any greater good such that the prevention of the fawn's suffering would require either the loss of that good or the occurrence of an evil equally bad or worse.",
        source: "Rowe, \"The Problem of Evil and Some Varieties of Atheism\""
    },
    {
        day: 6,
        text: "Traditional free-will approaches – with their move to shift responsibility and/or blame for evil away from God and onto personal creatures – are stalemated by horrendous evil. Human radical vulnerability to horrors cannot have its origin in misused created freedom, because – even if one accepted the story of Adam’s fall as historical (which I do not) – the way it is told, humans were radically vulnerable to horrors from the beginning, even in Eden. The framework within which the primal ancestors made their choices was such that obedient choices meant persistence of the status quo, while disobedient choices would result in the horrendous disarray such as humans have experienced ever since. Even if Adam’s and Eve’s choices are supposed to be somehow self-determined, the fact that the consequences amplify far beyond their capacity to conceive and hence to intend – viz., to horrors of which ex hypothesi they had no prior experience and of which they could therefore have no adequate conception – is not something for which humans are responsible. Rather it is a function of the interaction between human agency and the wider framework within which it is set, and God is responsible for creating human beings in such a framework!",
        source: "Marilyn McCord Adams"
    },
    {
        day: 7,
        text: "A certain traditional conception of the afterlife is binary. After death one proceeds either to heaven or hell. Heaven is very, very good; hell is very, very bad. There are no possibilities for the afterlife other than heaven and hell, and membership in heaven or hell is never indeterminate or a matter of degree. The problem with the binary conception is that it contradicts God's justice. God must employ some criterion to decide who goes to heaven and who goes to hell. No reasonable criterion would be sharp; any reasonable criterion will have borderline cases. But the binary conception of the afterlife allows for no corresponding fuzziness in how the dead are to be treated. Hell must therefore contain people who are nearly indiscernible in relevant respects from people in Heaven. No just God would allow such a monstrously unfair thing.",
        source: "Sider, \"Hell and vagueness\""
    },
    {
        day: 8,
        text: "... all propositions whether positive or negative are either true or false . . . so if one man affirms that an event of a given character will take place and another denies it, it is plain that the statement of the one will correspond with reality and that of the other will not.<br><br>[T]o say that neither the affirmation nor the denial is true, maintaining, let us say, that an event neither will take place nor will not take place, is to take up a position impossible to defend. ... if an event is neither to take place nor not to take place the next day ... it would be necessary that a sea-fight should neither take place nor fail to take place on the next day.",
        source: "Aristotle, <u>On Interpretation</u>"
    },
    {
        day: 8,
        text: "Having proved that God has a certain prescience of the act of the will of moral agents, I come now, in the second place, to show the consequence; to show how it follows that these events are necessary. <br><br>I would observe the following things:<br><br>1. I observed before, in explaining the nature of necessity, that in thins which are past, their past existence is now necessary: having already made sure of existence, it is too late for any possibility of alteration in that respect … <br><br>2. If there be any such thing as a divine foreknowledge of the volitions of free agents, that foreknowledge … is a thing which already has, and long ago had, existence; and so, now its existence is necessary ….<br><br>3. It is also very manifest, that those things which are indissolubly connected with other things that are necessary, are themselves necessary. …<br><br>4. It is no less evident, that if there be a full, certain, and infallible foreknowledge of the future existence of the volitions of moral agents, then there is a certain infallible and indissoluble connection between those events and that foreknowledge.",
        source: "Edwards, <u>Freedom of the Will</u>"
    },
    {
        day: 8,
        text: "Although contingent things become actual successively, nevertheless God knows contingent things not successively, as they are in their own being, as we do, but simultaneously. The reason is because His knowledge is measured by eternity, as is also His being; and eternity being simultaneously whole comprises all time, as said above ... Hence all things that are in time are present to God from eternity  ...  because His glance is carried from eternity over all things as they are in their presentiality",
        source: "Aquinas, <u>Summa Theologica</u>"
    },
    {
        day: 9,
        text: "Determinism is the thesis that only one continuation of the state of things at a given moment is consistent with the laws of nature.<br><br>Let us suppose that determinism is true ... [and] consider the two statements<br><br><ul class=\"bullet-list\"><li> Things were thus and so 10 million years ago.</li><li>If things were thus and so 10 million years ago, then I am working on this book now.</li></ul><br>(Here 'thus and so' is a sort of gesture at a complete description of the way things were 10 million years ago.) Each of these statements is true. And it is true that no [human being] has, or ever had, any choice about the truth of either. It is obvious that no human being has or ever had any choice about whether things <i> were</i> thus and so 10 million years ago, since at that time the first human beings were still 10 million years in the future.<br><br>And no human being has any choice about whether the second statement is true because this statement is a consequence of the laws of nature, and no ... human being ... has any choice about what the laws of nature are.<br><br>But if both of these statements are true, then .... neither I nor anyone else has ever had any choice about whether I write this book. ... How could I have a choice about anything that is an inevitable consequence of something I have no choice about?",
        source: "van Inwagen, \"The powers of rational beings\""
    },
    {
        day: 9,
        text: "It is commonly allowed that mad-men have no liberty. But were we to judge by their actions, these have less regularity and constancy than the actions of wise men, and consequently are farther removed from necessity. Our way of thinking in this particular is, therefore, absolutely inconsistent.",
        source: "Hume, <u>Treatise on Human Nature</u>"
    },
    {
        day: 9,
        text: "Imagine, if you will, that Black is a quite nifty (and even generally nice) neurosurgeon. But in performing an operation on Jones to remove a brain tumor, Black inserts a mechanism into Jones’s brain which enables Black to monitor and control Jones’s activities. Jones, meanwhile, knows nothing of this. Black exercises this control through a sophisticated computer which he has programmed so that, among other things, it monitors Jones’s voting behavior. If Jones were to show any inclination to vote for Bush, then the computer, through the mechanism in Jones’s brain, intervenes to ensure that he actually decides to vote for Clinton and does so vote. But if Jones decides on his own to vote for Clinton, the computer does nothing but continue to monitor — without affecting the goings-on — in Jones’s head.",
        source: "An example of a 'Frankfurt case,' from John Martin Fischer"
    },
    {
        day: 10,
        watch: "Our main topic for this class will be a famous series of experiments by the neuroscientist Benjamin Libet, which many take to show either that we have no free will or that the scope of our free will is radically limited. There's no required reading on this topic, though you can watch a quick overview of the experiments <a href=\"https://www.youtube.com/watch?v=OjCt-L0Ph5o\"  target=\"_blank\">here</a>.",
    },
    {
        day: 10,
        text: "Suppose there were an experience machine that would give you any experience you desired. Superduper neuropsychologists could stimulate your brain so that you would think and feel you were writing a great novel, or making a friend, or reading an interesting book. All the time you would be floating in a tank, with electrodes attached to your brain ... Would you plug in? What else can matter to us, than how our lives feel from the inside?<br><br>We learn that something matters to us in addition to experience by imagining an experience machine and then realizing we would not use it. ... Perhaps what we desire is to live ourselves, in contact with reality. (And this, machines cannot do for us.)",
        source: "Robert Nozick, \"The experience machine\""
    },
    {
        day: 11,
        text: "Suppose first that I am one of a pair of identical twins, and that both my body and my twin’s brain have been fatally injured. Because of advances in neuro-surgery, it is not inevitable that these injuries willcause us both to die. We have between us one healthy brain and one healthy body. Surgeons can put these together.<br /><br />If all of my brain continues both to exist and to be the brain of one living person, who is psychologically continuous with me, I continue toexist. This is true whatever happens to the rest of my body. ...<br /><br /> It is in fact true that one hemisphere is enough. There are many people who have survived, when a stroke or injury puts out of action one of their hemispheres. With his remaining hemisphere, such a person may need to re-learn certain things, such as adult speech, or how to control both hands. But this is possible. ... [So] I would survive if my brain was successfully transplanted into my twin’s body. And I could survive with only half my brain, the other half having been destroyed. Given these two facts, it seems clear that I would survive if half my brain was successfully transplanted into my twin’s body, and the other half was destroyed.",
        source: "Parfit, <u>Reasons and Persons</u>"
    },
    {
        day: 11,
        text: "Should ... the consciousness of the prince’s past life, enter and inform the body of a cobbler ... , everyone sees, he would be the same person with the prince, accountable only for the prince’s actions.",
        source: "Locke, <u>Essay on Human Understanding</u>"
    },
    {
        day: 12,
        text: "The hard problem of consciousness is the problem of experience. Humans beings have subjective experience: there is something it is like to be them. We can say that a being is conscious in this sense – or is phenomenally conscious, as it is sometimes put — when there is something it is like to be that being. A mental state is conscious when there is something it is like to be in that state. Conscious states include states of perceptual experience, bodily sensation, mental imagery, emotional experience, occurrent thought, and more. There is something it is like to see a vivid green, to feel a sharp pain, to visualize the Eiffel tower, to feel a deep regret, and to think that one is late. Each of these states has a phenomenal character, with phenomenal properties characterizing what it is like to be in the state.<br><br>There is no question that experience is closely associated with physical processes in systems such as brains. It seems that physical processes give rise to experience, at least in the sense that producing a physical system (such as a brain) with the right physical properties inevitably yields corresponding states of experience. But how and why do physical processes give rise to experience? Why do not these processes take place 'in the dark,' without any accompanying states of experience? This is the central mystery of consciousness.<br><br> ... it is conceivable that there be a system that is physically identical to a conscious being, but that lacks at least some of that being’s conscious states. Such a system might be a zombie: a system that is physically identical to a conscious being but that lacks consciousness entirely. It might also be an invert, with some of the original being’s experiences replaced by different experiences, or a partial zombie, with some experiences absent, or a combination thereof. These systems will look identical to a normal conscious being from the third-person perspective: in particular, their brain processes will be molecule-for-molecule identical with the original, and  their behavior will be indistinguishable. But things will be different from the first-person point of view. What it is like to be an invert or a partial zombie will differ from what it is like to be the original being. Andthere is nothing it is like to be a zombie. <br><br> From the conceivability of zombies, proponents of the argument infer their possibility. ... zombies could have existed, perhaps in a very different sort of universe. For example, it is sometimes suggested that God could have created a zombie world, if he had so chosen. From here, it is inferred that consciousness must be nonphysical. If there is a ... possible universe that is physically identical to ours but that lacks consciousness, then consciousness must be a further, nonphysical component of our universe. If God could have created a zombie world, then ... after creating the physical processes in our world, he had to do more work to ensure that it contained consciousness.",
        source: "Chalmers, \"Consciousness and its place in nature\""
    },
    {
        day: 12,
        text: "it seems every determination of movement happens from the impulsion of a thing moved, according to the manner in which it is pushed by that which moves it ... Contact is required for [this]. ... contact seems to me incompatible with the idea of an immaterial thing.",
        source: "Princess Elisabeth of Bohemia"
    },
    {
        day: 13,
        text: "<i>My Division</i>. My body is fatally injured, as are the brains of my two brothers. My brain is divided, and each half is successfully transplanted into the body of one of my brothers. Each of the resulting people believes that he is me, seems to remember living my life, has my character, and is in every other way psychologically continuous with me.  And he has a body that is very like mine.",
        source: "Parfit, <u>Reasons and Persons</u>"
    },
    {
        day: 13,
        text: "At the near end of this spectrum is the normal case in which a future person would be fully continuous with me as I am now, both physically  and psychologically. This person would be me in just the way that, in my actual life, it will be me who wakes up tomorrow. At the far end of this spectrum the resulting person would have no continuity with me as I am now, either physically or psychologically. In this case the scientists would destroy my brain and body, and then create, out of new organic matter, a perfect Replica of someone else. Let us suppose this person to be Greta Garbo. We can suppose that, when Garbo was 30, a group of scientists recorded the states of all the cells in her brain and body.<br /><br />[One] assumes that, in each of these cases, the resulting person either would or would not be me. This is not so. The resulting person would be  me in the first few cases. In the last case he would not be me. In many  of the intervening cases, neither answer would be true. I can always  ask, ‘Am I about to die? Will there be some person living who will be me?’ But, in the cases in the middle of this Spectrum, there is no answer to this question.",
        source: "Parfit, <u>Reasons and Persons</u>"
    },
    {
        day: 14,
        text: "The necessity of holding the resurrection arises from this — that man may obtain the last end for which he was made. This cannot be accomplished in this life, nor in the life of the separated soul … it is necessary for the selfsame man to rise again; and this is effected by the selfsame soul being united to the selfsame body. For otherwise there would be no resurrection properly speaking, if the same man were not reformed.",
        source: "Aquinas, <u>Summa Theologica</u>"
    },
    {
        day: 14,
        text: "\"We ought,\" said Socrates, \"to ask ourselves this: what sort of thing is it that would naturally suffer the fate of being dispersed? For what sort of thing should we fear this fate, and for what should we not? When we have answered this, we should next consider to which class the soul belongs; and then we shall know whether to feel confidence or fear about the fate of our souls.\"<br><br>\"Quite true.\"<br><br>\"Would you not expect a composite object or a natural compound to be liable to break up where it was put together? And ought not anything which is really incomposite be the one thing of all others which is not affected in this way?\"",
        source: "Plato, <u>Phaedo</u>"
    },
    {
        day: 14,
        text: "What is incorruptible must also be ingenerable. The soul, therefore, if immortal, existed before our birth. And if the former existence nowise concerned us, neither will the latter.",
        source: "David Hume, <u>Dialogues Concerning Natural Religion</u>"
    },
    {
        day: 14,
        text: "If it happens that people are to suffer unhappiness and pain in the future, they themselves must exist at that future time for harm to be able to befall them. Since death takes away this possibility by preventing the existence of those who might have been visited by troubles, you may be sure that there is nothing to fear in death. Those who no longer exist cannot become miserable, and it makes not one speck of difference whether or not they have ever been born once their mortal life has been snatched away by deathless death.<br /><br /> ... Look back at the time before our birth. In this way Nature holds before our eyes the mirror of our future after death. Is this so grim, so gloomy?",
        source: "Lucretius, <u>On the Nature of Things</u>"
    },
    {
        day: 15,
        text: "Some years ago I was struck by the large number of falsehoods which I had accepted as true in my childhood, and by the highly doubtful nature of the whole edifice that I had subsequently based on them. I realized that it was necessary, once in the course of my life, to demolish everything completely and start again right from the foundations if I wanted to establish anything at all ... that was stable and likely to last.<br><br>Reason now leads me to believe that I should hold back my assent from opinions which are not completely certain and indubitable just as carefully as I do from those which are patently false. So, for the purpose of rejecting my opinions, it will be enough if I find in each of them some reason for doubt.",
        source: "Descartes, <u>Meditations on First Philosophy</u>"
    },
    {
        day: 15,
        text: "I can now give a large number of different proofs, each of which is a perfectly rigorous proof; and at many other times I have been in a position to give many others. I can prove now, for instance, that two human hands exist. How? By holding up my two hands and saying, as I make a certain gesture with the right hand, “Here is one hand,” and adding, as I make a certain gesture with the left, “and here is another.” And if, by doing this, I have proved the existence of external things, you will all see that I can also do it now in numbers of other ways; there is no need to multiply examples.<br><br>I certainly did at the moment know that which I expressed by the combination of certain gestures with saying the words ‘There is one hand and here is another.’ ... How absurd it would be to suggest that I did not know it, but only believed it, and that perhaps it was not the case! You might as well suggest that I do not know that I am now standing up and talking — that perhaps after all I’m not, and that it’s not quite certain that I am.",
        source: "Moore, \"Proof of an external world\""
    },
    {
        day: 16,
        text: "It is wrong always, everywhere, and for anyone to believe anything on insufficient evidence.",
        source: "W.K. Clifford, \"The Ethics of Belief\""
    },
    {
        day: 16,
        text: "There are two ways of looking at our duty in the matter of opinion ... We must know the truth, and we must avoid error. These are are first and great commandments as would-be knowers; but they are not two ways of stating an identical commandment, they are two separable laws.<br><br>Clifford's exhortation has to my ears a thoroughly fantastic sound. It is like a general informing his soldiers that it is better to keep out of battle forever than to risk a single wound. Not so are victories either over enemies or over nature gained. Our errors are surely not such awful solemn things. In a world where we are so certain to incur them in spite of all our caution, a certain lightness of heart seems healthier than this excessive nervousness on their behalf.",
        source: "William James, \"The will to believe\""
    },
    {
        day: 17,
        text: "...since there is an equal chance of gain and loss, if you stood to win only two lives for one you could still wager, but supposing you stood to win three? ...it would be unwise of you, since you are obliged to play, not to risk your life in order to win three lives at a game in which there is an equal chance of winning and losing. ... But here there is an infinity of happy life to be won, one chance of winning against a finite number of chances of losing, and what you are staking is finite. That leaves no choice; wherever there is infinity, and where there are not infinite chances of losing against that of winning, there is no room for hesitation, you must give everything. And thus, since you are obliged to play, you must be renouncing reason if you hoard your life rather than risk it for an infinite gain, just as likely to occur as a loss  amounting to nothing.",
        source: "Blaise Pascal, <u>Pensees</u>"
    },
    {
        day: 18,
        text: "We do not any longer make the mistake of deriving the morality of our locality and decade directly from the inevitable constitution of human nature. ... We recognize that morality differs in every society, and is a convenient term for socially approved habits. Mankind has always preferred to say 'It is morally good' rather than 'It is habitual' .... [b]ut historically the two phrases are synonymous.",
        source: "Ruth Benedict, \"Anthropology and the abnormal\""
    },
    {
        day: 18,
        text: "If I say 'Stealing is wrong' I produce a sentence with no factual meaning ... It is as if I had written 'Stealing money!!' where the shape and thickness of the exclamation marks show ... a special sort of moral disapproval.<br><br>... We certainly do engage in disputes which are ordinarily regarded as disputes about questions of value. But, in all such cases, we find, if we consider the matter closely, that the dispute is not really about a question of value,  but about a question of fact.",
        source: "A. J. Ayer, <u>Language, Truth, and Logic</u>"
    },
    {
        day: 19,
        text: "The creed which accepts as the foundation of morals ... the Greatest Happiness Principle, holds that actions are right in proportion as they tend to produce happiness, wrong as they tend to produce the reverse of happiness. By happiness is intended pleasure, and the absence of pain; by unhappiness, pain and the privation of pleasure.",
        source: "John Stuart Mill, <u>Utilitarianism</u>"
    },
    {
        day: 19,
        text: "Suppose there were an experience machine that would give you any experience you desired. Superduper neuropsychologists could stimulate your brain so that you would think and feel you were writing a great novel, or making a friend, or reading an interesting book. All the time you would be floating in a tank, with electrodes attached to your brain ... Would you plug in? What else can matter to us, other than how our lives feel from the inside?",
        source: "Robert Nozick, <u>Anarchy, State, and Utopia</u>"
    },
    {
        day: 19,
        text: "David is a great transplant surgeon. Five of his patients need new parts?one needs a heart, the others need, respectively, liver, stomach, spleen, and spinal cord?but all are of the same, relatively rare, blood-type. By chance, David learns of a healthy specimen with that very blood-type. David can take the healthy specimen's parts, killing him, and install them in his patients, saving them. Or he can refrain from taking the healthy specimen's parts, letting his  patients die. <br><br>Edward is the driver of a trolley, whose brakes have just failed. On the track ahead of him are five people; the banks are so steep that they will not be able to get off the track in time. The track has a spur leading off to the right, and Edward can turn the trolley onto it. Unfortunately there is one person on the right-hand track. Edward can turn the trolley, killing the one; or he can refrain from turning the trolley, killing the five.<br><br>Frank is a passenger on a trolley whose driver has just shouted that the trolley's brakes have failed, and who then died of the shock. On the track ahead are five people; the banks are so steep that they will not be able to get off the track in time. The track has a spur leading off to the right, and Frank can turn the trolley onto it.  Unfortunately there is one person on the right hand track. Frank can turn the trolley, killing the one; or he can refrain from turning the trolley, letting the five die.<br><br> George is on a footbridge over the trolley tracks. He knows trolleys, and can see that the one approaching the bridge is out of control. On the track back of the bridge there are five people; the banks are so steep that they will not be able to get off the track in time. George knows that the only way to stop an out-of-control trolley is to drop a very heavy weight into its path. But the only available, sufficiently heavy weight is a fat man, also watching the trolley from the footbridge. George can shove the fat man onto the track in the path of the trolley, killing the fat man; or he can refrain from doing this, letting the five die.",
        source: "Judith Jarvis Thomson, 'Killing, letting die, and the trolley problem'"
    },
    {
        day: 19,
        text: "Act in such a way that you always treat humanity, whether in your own person or the person of any other, never simply as a means, but always at the same time as an end.",
        source: "Immanuel Kant",
    },
    {
        day: 20,
        text: "Utilitarianism is the consequence of extending to society the principle of choice for one man, and then, to make this extension work, conflating all persons into one. ... Utilitarianism does not take seriously the distinction between persons.",
        source: "John Rawls",
    },
    {
        day: 20,
        text: "Now suppose that Wilt Chamberlain is greatly in demand by basketball teams, being a great gate attraction. ... In each home game, twenty‐​five cents from the price of each ticket of admission goes to him. ... The season starts, and people cheerfully attend his team’s games; they buy their tickets, each time dropping a separate twenty‐​five cents of their admission price into a special box with Chamberlain’s name on it. They are excited about seeing him  play; it is worth the total admission price to them. Let us suppose that in one season one million persons attend his home games, and Wilt Chamberlain winds up with $250,000, a much larger sum than the average income and larger even than anyone else has. Is he entitled to this income? ... If the people were entitled to dispose of their resources to which they were entitled, didn't this include their being entitled to give it to ... Wilt Chamberlain? Can anyone else complain on grounds of justice? <br><br> The general point illustrated by the Wilt Chamberlain example ... is that no distributional patterned principle of justice can be continuously realized without continuous interference with people's lives.",
        source: "Robert Nozick, <u>Anarchy, State, and Utopia</u>"
    },
];

export default readingsArray;
