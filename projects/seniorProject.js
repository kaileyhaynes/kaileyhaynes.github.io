import styles from '../css/project.module.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Ticketerr = () => {
    return (
      <div className={styles.Project}>
        <div className={styles.details}>
            <h1>TICKETERR</h1>
            <h2>PHP, HTML&CSS, MySQL</h2>
            <h3>05/01/2022 - Completed in 6 months</h3>

            <p>
            We use PHP, HTML, and CSS to create an application for our ITS Department.
            It includes a log-in system for ITS employees, an external form for 
            Lander students to request work tickets to ITS, and an internal site where 
            those tickets and others created by ITS staff are located, manipulated, and stored.
            </p>

            <h4>Time Restrictions</h4>
            <ul>
                <li>Tighten web appearance</li>
                <li>Strengthen web security</li>
                <li>Use a framework</li>
            </ul>
        </div>

        <div className={styles.demo}>
            <video autoplay muted>
            <source src={require("../visuals/Jammming Recording.mp4")} type="video/mp4"></source>
                Demo here
            </video>
 
            <Link to="/ticketerr_git" id={styles.projectLink}>
                Link to Github repo
            </Link>
        </div>
      </div>
    );
}

export default Ticketerr;