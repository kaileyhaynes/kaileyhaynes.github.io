import styles from '../css/about.module.css';

import React from 'react';

const About = () => {
    return (
      <div className={styles.About}>
        <div className={styles.photos}>
          <img id={styles.leftTilt} src={require("../visuals/sophisticatedMe.jpg")} alt="me in a pink suit"/>
          <img id={styles.rightTilt} src={require("../visuals/summerMe.jpg")} alt="me in front of summer flowers"/>
          <img id={styles.leftTilt} src={require("../visuals/collegeMe.jpg")} alt="me as a college student"/>
        </div>

        <div className={styles.info}>
          <div id={styles.greetings}>
          <h3>Greetings, I'm Kailey!</h3>
          <p>
            I write code by daylight and fantastical worlds by starlight.
            I'm known for my adapatability, ambition, and love for the color pink.
            When I'm not working, I'm often found playing with numbers, watching movies,
            and using rules of three.
          </p>
          <p>
            For the past six months, I've worked diligently on a Full-Stack Software Engineering Certificate
            and my second novel in the UN- Series. I currently work at Take2 Consulting as a Junior Developer.
          </p>
          </div>

          <div id={styles.education}>
          <h3>Education</h3>
          <p>
            I graduated with a Computer Information Systems degree from Lander University in 2022.
            There, I mastered OOP, learned best programming practices, and drank my weight in coffee.
          </p>
          <p>
            In my free time, I tutored in both the Academic Success Center and Writing Center for 3 years, 
            teaching students how to become better writers and programmers.
            I was also a Presidential Ambassador for a spell, so I have lame jokes on rotation if there is
            ever a lull point in the conversation.
          </p>
          <p>
            My favorite two projects in college were my capstone project Ticketter and a Firewall utility
            application. And I'm incredibly thankful for my professors, sponsors, and friends who helped
            me every step of the way--from offering advice to M&Ms.
          </p>
          </div>

          <div id={styles.random}>
          <h3>Random talents</h3>
          <p>
            <ul>
              <li>
                I can type without looking and while holding a conversation
              </li>
              <li>
                I can write emails like it's everyone's business
              </li>
              <li>
                I can speak A2 level French
              </li>
            </ul>
          </p>
          </div>
        </div>
      </div>
    );
}

export default About;

/*
        
*/