import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState({}); // Using an object to track open FAQs

  const toggleFAQ = (id) => {
    setOpenFAQ(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // NB each q and a pair contains two keys - these need not be sequential. but most be unique among the other q and a's.

  return (
    <div className='FAQ-container'>
      <div className="FAQdiv" onClick={() => toggleFAQ(1)}>
        <div className="FAQquestion">
          What is this thing?
        </div>
        <div className={`FAQanswer ${openFAQ[1] ? 'open' : ''}`}>
          You can think of it as an online philosophy journal in which you record your thoughts about the big questions we will be thinking about over the course of the semester. However, it is unlike an ordinary journal in that you'll get objections to your views that will help you test those views and figure out what you really think. (You will get challenging objections no matter what your views are.)<br /><br />

          The point of this is to help you see what the main arguments for and against various views are. It will also help you to see the connections between what seem like very different topics. The questions you will be asked will depend upon all of your thoughts about the topics previously discussed in the course. It is kind of like a Choose Your Own Adventure book (though admittedly a strangely difficult one).
        </div>
      </div>

      <div className="FAQdiv" onClick={() => toggleFAQ(2)}>
        <div className="FAQquestion">
          Why are we doing this rather than more typical papers and exams?
        </div>
        <div className={`FAQanswer ${openFAQ[2] ? 'open' : ''}`}>
          This assignment is not so different than a long paper that you write over the course of the semester. Just as with an ordinary essay, you should edit your answers and make your writing as clear and well-structured as possible. <br /><br />

          It differs from an ordinary essay in three ways. First, you will work on it over a much longer period of time than an ordinary paper. Second, it covers many more topics than an ordinary essay. Third, and most important, the structure of this project requires you to respond to questions about the views you endorse.<br /><br />
          
          My main hope is that you will come out of the course knowing what you believe, and why you believe it, better than you did coming in. The questions you will be asked are tailored toward your views, and so will help you to see the distinctive strengths and weaknesses of the positions on these topics you find plausible. All of your time will be spent trying to figure out what you think, how you can defend your views, and how you should reply to arguments for opposing views.
        </div>
      </div>

      
      <div className="FAQdiv" onClick={() => toggleFAQ(3)}>
        <div className="FAQquestion">
          What if I'm not sure which answer I think is right?
        </div>
        <div className={`FAQanswer ${openFAQ[3] ? 'open' : ''}`}>
          Philosophy is hard. You may find two arguments individually plausible even though they support contradictory views, and it may be very hard to decide which argument you think is better. That is fine. In that kind of case, don’t pretend to be more sure than you are. You can even say things like ‘I am very unsure whether X or Y is true. I am tempted to believe X because of consideration A. But in the end I think that Y is somewhat more likely to be true because of B.’ That is a sign of someone who has understood both sides of an issue and tried to think it through to discover the truth!<br /><br />
          
          In cases of uncertainty, you should decide what answer you think is most likely to be true, and go for that one. In general, the views you end up with on your My Philosophy page should be thought of as your best attempt to figure out the truth, not things that you are certain of or would stake your life on.
        </div>
      </div>

      
      <div className="FAQdiv" onClick={() => toggleFAQ(4)}>
        <div className="FAQquestion">
          What if I change my mind about one of the questions I answered earlier in the course?
        </div>
        <div className={`FAQanswer ${openFAQ[4] ? 'open' : ''}`}>
          If you find yourself changing your answers to prior questions, that is perfectly fine; that is a sign that you are thinking through the connections between these issues! In fact, if you never change your mind about any prior answers, that may be a sign that you aren't spending enough time thinking them through.<br /><br />
          
          Many students have found this page useful in part because it is a way of "trying out" certain combinations of views. You can see very quickly what the main objections are to certain positions you might take, which is one good way to figure out what views you think are most likely to be true.<br /><br />
          
          If you change your answers to questions where you have to pick from a list of options, that will change which  essay questions are visible to you. However, it will not delete information that you have already written in answer to an essay question. So, for example, suppose that you click option A, which causes a certain essay question to appear. Suppose that you write a lot in response to this question. If you switch from option A to option B, that may cause the  essay question to temporarily disappear. However, if you switch back to A, everything you wrote originally will still be there. So you can try out changes in views without worrying about losing your work.
        </div>
      </div>

      
      <div className="FAQdiv" onClick={() => toggleFAQ(5)}>
        <div className="FAQquestion">
          What does it mean if a contradiction notification pops up?
        </div>
        <div className={`FAQanswer ${openFAQ[5] ? 'open' : ''}`}>
            Two views are contradictory if it is impossible for them both to be true. Your goal is to come up with the consistent -- non-contradictory -- combination of views which you think is most likely to be true. If a contradiction notification pops up, it will explain which answers of yours create the contradiction. (If you are confused about this explanation, just ask me or your TA.) You should think about how to revise your views to remove the contradiction. 
        </div>
      </div>

      
      <div className="FAQdiv" onClick={() => toggleFAQ(6)}>
        <div className="FAQquestion">
          Should I use outside sources to help me answer these questions?
        </div>
        <div className={`FAQanswer ${openFAQ[6] ? 'open' : ''}`}>
          You should not use any outside sources. Spend the time that you would have spent trying to look up the answer by thinking instead. If you do get any ideas from outside sources, you must put together a bibliography containing every source used, and email that to your TA when you hand in your My Philosophy answers. Failure to do this is a violation of the Honor Code. <br /><br />
          
          You should also not use chatGPT, or any other AI system, to assist you in answering these questions. Doing so is a violation of the Honor Code.
        </div>
      </div>

      
      <div className="FAQdiv" onClick={() => toggleFAQ(7)}>
        <div className="FAQquestion">
          How will my work be graded?
        </div>
        <div className={`FAQanswer ${openFAQ[7] ? 'open' : ''}`}>
          You will not be evaluated on what your views are. You will be evaluated on how clearly you explain your views and how well you defend them. So (with two exceptions) you will not be graded on the basis of your answers to multiple choice questions, since your answers to those questions just say what your views are. The two exceptions are (i) multiple choice questions which you do not answer and (ii) multiple choice answers which are contradictory (see above for more info on the latter).<br /><br />

          Your essay questions will be graded on the basis of how clearly you explain your views and how well you defend them. Each of your essay questions will be graded from 1-10. An answer which receives a 10 has the following five characteristics:

          <ul>
       <li>It answers the question.</li>
      <li>It gives a defense of that answer.</li>
      <li>It is clear what the defense is, and how it supports the answer given.</li>
      <li>That defense is strong, in one of the following senses: (a) If the defense given is one we have discussed in class: a reasonable person could think that, of the defenses of the answer we have discussed in class, this is the strongest. (b) If the answer given is not a position we have discussed in class: the defense shows thought, a reasonable person could believe the premises of the defense, and the premises support the answer given.</li>
      <li>The defense in some way, which need not be earth-shattering, goes beyond material discussed in class.</li>
          </ul>
          
          An answer which has four of these characteristics but not five gets a 9; one which has three gets an 8; and so on. An unanswered essay question receives a 0. <br /><br />
          
          The grade for your written work is then calculated as follows: <br /><br />
          
          (average of the grades for your essay questions) - (5 * # of unresolved contradictions) - (5 * # of unanswered multiple choice questions)
        </div>
      </div>

      
      <div className="FAQdiv" onClick={() => toggleFAQ(8)}>
        <div className="FAQquestion">
          How can I improve my answers?
        </div>
        <div className={`FAQanswer ${openFAQ[8] ? 'open' : ''}`}>
          You are being evaluated on the clarity of your answers and the quality of your arguments. So let's talk about how you can improve on each of these dimensions. <br /><br />

          There are two main dimensions of clarity. The first is making it as clear as possible what each sentence of your answer says. The best way to do this is to use simple sentences and simple, clear language. <br /><br />

          The second dimension of clarity is making clear how the different parts of your answer fit together. If you are giving a positive argument, is it clear how your premises lead to the conclusion? If you are objecting to an argument, is it clear which premise of that argument you are objecting to? Take step back and ask yourself whether another student in the class would be able to look at your answer and understand what your argument is and how it fits together. As much as possible, be specific rather than general. <br /><br />

          How can you improve the quality of your arguments? Here there are three main answers.<br /><br />

          First, make it clear that your argument is valid. Explain in your own words why the truth of the premises would make the falsity of the conclusion impossible. <br /><br />

          Second, explain why you think that the premises of your argument are true. Imagine someone who does not think that they are true. How would you explain to that person why you think that they are true? <br /><br />

          Third, consider objections to your argument. These might be objections to premises of your argument or objections to the conclusion. Why is your argument more plausible than arguments for the contrary position? Again, it is useful to imagine yourself trying to convince someone with a view opposite to your own. How would you reply to their objections? <br /><br />

        </div>
      </div>

      
     
    </div>
  );
};

export default FAQ;




