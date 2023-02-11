import styles from '../css/project.module.css';

import React from 'react';
import { Link } from 'react-router-dom';

const RESTAPI = () => {
    return (
      <div className={styles.Project}>
        <div className={styles.details}>
            <h1>REST API</h1>
            <h2>Javascript, Express.js, PostgreSQL</h2>
            <h3>1/20/2023 - Completed in 1 week</h3>

            <p>
                A back-end application created using Javascript, Express.js, and PostgreSQL.
                HTTP request/response cycles allow the user to retrieve, create, update, or delete
                from a connected database. The database includes tables and data commonly used in ECommerce
                applications such as user information, products, and a checkout process.
            </p>

            <h4>Time Restrictions</h4>
            <ul>
                <li>Unable to create front-end application</li>
            </ul>
        </div>

        <div className={styles.demo}>
            <video autoplay muted>
            <source src={require("../visuals/Jammming Recording.mp4")} type="video/mp4"></source>
                Demo here
            </video>
 
            <Link to="/restapi_git" id={styles.projectLink}>
                Link to Github repo
            </Link>
        </div>
      </div>
    );
}

export default RESTAPI;