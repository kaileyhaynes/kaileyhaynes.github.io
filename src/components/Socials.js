import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Link, Route} from 'react-router-dom';

import styles from '../css/socials.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Link to="/linkedIn">
                <img src={require("../visuals/linkedIcon.png")}></img>
            </Link>
            <Link to="/gitHub">
                <img src={require("../visuals/githubIcon.png")}></img>
            </Link>         
        </div>
    );
  }
  
  export default Footer;