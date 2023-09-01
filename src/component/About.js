import React from 'react';
import about from "./about.css"
const About = () => {
  return (
    <div about={about} className="about-container" >
      <h2 className="about-heading">About Inotebook App</h2>
      <p className="about-paragraph">
        Inotebook is a simple note-taking app that helps you keep track of your ideas, tasks, and important information.
        With Inotebook, you can quickly jot down notes and access them anytime, anywhere.
      </p>
      <div className="feature-list">
        <p className="feature-heading">Features:</p>
        <ul className="feature-items">
          <li id='aa'>Easy and intuitive note-taking interface</li>
          <li id='aa'>Notes are securely stored in your local storage</li>
          <li id='aa'>Login functionality to keep your notes private</li>
        </ul>
      </div>
      <p className="about-paragraph">
        Whether you're a student, professional, or anyone who needs to organize their thoughts, Inotebook is here to simplify
        your note-taking process. Start using Inotebook today and never forget a brilliant idea again!
      </p>
    </div>
  );
};

export default About;
