import styles from '../css/about.module.css';

import React from 'react';

const About = () => {
    return (
      <div className={styles.About}>
        <div className={styles.photos}>
          <img id={styles.leftTilt} src={require("../visuals/sophisticatedMe.jpg")} />
          <img id={styles.rightTilt} src={require("../visuals/summerMe.jpg")} />
          <img id={styles.leftTilt} src={require("../visuals/collegeMe.jpg")} />
        </div>

        <div className={styles.info}>
          <h3>Greetings, I'm Kailey!</h3>
          <p>
            I write code by daylight and stories by starlight.
            More fun description of myself here.
          </p>

          <h3>Education</h3>
          <p>
            At Lander University, I tutored in both the Academic Success Center and Writing Center for 3 years.
            I was also a Presidential Ambassador for a spell, and I practically lived at the library.
          </p>

          <h3>More</h3>
          <p>
            I like 3's.
          </p>
        </div>
      </div>
    );
}

export default About;