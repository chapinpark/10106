// Description.js
import React from 'react';
import './CoursePages.css';
import DescriptionBoxComponent from '../components/DescriptionBoxComponent'; // Adjust the path based on your folder structure
import GradeScheme from '../components/GradeScheme';

function Description() {
  return (
    <div>
      <h1>Introduction to metaphysics & epistemology</h1>
    
        <div>
  <h2>Schedule<br /></h2>
  <p>
    Tuesday & Thursday, 12:30-1:45 in 155 DeBartolo Hall
  </p>
  
  <h2>Topic<br /></h2>
  <p>
    Metaphysics is the study of the ultimate nature of reality. Epistemology
    is the study of what we can know about reality. This introduction to
    metaphysics and epistemology will focus on a few clusters of big
    questions:
        </p>
        
        <DescriptionBoxComponent />

 

  <p>
    The focus of the class will be on learning how to formulate, defend, and
    respond to objections to your own answers to these basic questions,
    rather than on learning how others have answered these questions (though
    of course we will do some of the latter as well).<br /><br />

    The course is divided into five sections, with each section devoted to
    one of the big questions listed above. At the end of each section of the
    course, we'll meet for a discussion day, in which the class will break
    into small groups. Part of each discussion day will be devoted to
    discussion of a film or TV episode which addresses the topic of that
    section of the course. <br /><br />

    Readings for the course are very short; often they are only 1 or 2
    paragraphs. They are all available via links from the syllabus. You
    should do the readings before the lecture. Rather than spending a lot of
    time on readings before class, you should spend a lot of time thinking
    about the material after lecture.</p>

  <h2>Assignments</h2>
  <p>
    After each lecture, a series of questions will be added to a web page on
    which you'll record your developing philosophical views over the course
    of the semester. Which questions you will be asked will depend, in part, on your answers to prior questions in the course. The purpose of this is to help you to see how your views about one topic interact with your views about other topics covered in the course. If you change your mind about a topic covered earlier in the course, you're always free to go back and change your answers to those questions. You should think of this page as your attempt, over the course of the semester, to work out what you really think about the topics we will be discussing. You should spend a lot of time on it; it will be the main component of evaluations for the course. <br /><br />
          
    Ideally, you should update this "My Philosophy" page after every
    class meeting. Your work on this page will be evaluated twice: once around halfway through the semester, and once at the end of the semester. In both cases, the evaluation will have a written and oral component. The written component will be based on your answers to the "My Philosophy" questions, and the oral component will be based on  conversation with Professor Speaks or your TA about your answers to the questions. For more details on how you should approach this project, see the FAQ section of the My Philosophy page. <br /><br />
  </p>

         <h2>Honor code</h2>

      In all of their assignments, students are responsible for compliance
      with the University's honor code, information about which is available <a href="http://honorcode.nd.edu/" target="_blank" rel="noopener noreferrer">here</a>. You should
      acquaint yourself with the policies and penalties described there.<br /><br />

      Sometimes, it can be hard to know what, exactly, the honor code implies
      with respect to different disciplines. For this reason, the philosophy
      department has prepared a document explaining, using examples, what the
      honor code requires of students when writing a philosophy paper. I
      strongly recommend that you read this document, which is available <a href="http://www3.nd.edu/~jspeaks/_format/sitewide_files/philohonorcode.pdf" target="_blank" rel="noopener noreferrer">here</a>. It is
      possible to violate the honor code without intending to do so;
      the best way to avoid this is to carefully read through the philosophy
      department's guidelines. <br /><br />

      That document pre-dates generative AI. Any use of chatGPT or other AI tools in this course is a violation of the honor code.<br/><br/>

      The most common type of honor code violation occurs when a student reads
      an internet source while working on a paper and &mdash; either
      intentionally or unintentionally &mdash; uses material from that source
      in his or her paper, but does not cite the source. If you read something
      not assigned in this course as part of your work on a paper, you must
      cite the source, whether or not you quote anything from that source.
      <br /><br />

      If you are in doubt about what the honor code requires of you in a
      particular case, please ask me or your TA.

  <h2>Grading</h2>
  <p>
    Your grade will be determined as follows:
  </p>

  <ul style={{ listStyleType: 'circle' }}>
    <li>40% for your mid-semester My Philosophy evaluation</li>
    <li>45% for your end of semester My Philosophy evaluation </li>
    <li>15% for participation
    </li>
  </ul>

    If your grade on the end of semester evaluation is higher than on the mid-semester evaluation, then the weighting of the two will be 20%/65% rather than 40%/45%.<br /><br />
        

    Participation in the class will be evaluated in three main ways: (1)
    participation in discussion days, (2) participation in lecture,
    including in-class polls, and (3) participation in the Slack channel for
    your discussion group. <br /><br />

    Notre Dame has no official way of indexing numerical grades to letter
        grades. This is the system that will be used in this course:<br /><br />
        
<GradeScheme />
  
         <h2>Contact information</h2>

      You should feel free to get in touch with me or your designated teaching
      assistant if you have any questions about the course, or about how
      you're doing in the course, or if you just want to pursue some of the
      topics we're discussing further. You can always get in touch with me by
      posting to the "Ask a TA or Prof" channel on Slack, and this often the easiest
      route if you just have a quick question about the readings or
      assignments. You can book a time to meet with me <a href="https://calendly.com/jspeaks/office-hours" target="blank" rel="noopener noreferrer">here</a>. If none of the listed times work for you, just let me know and we will figure out a time that does work.<br /><br />

      The teaching assistants do most of the grading
      for the course, hold office hours, and are in general available outside
      of class to help you with the material. Contact
      information for your TA will be pinned to the top of the channel for your
      discussion group on Slack.

</div>


      </div>
  
  );
}


export default Description;

