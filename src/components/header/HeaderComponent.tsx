import * as React from 'react';
import {NavLink} from "react-router-dom";
import styles from './HeaderComponent.module.css'

const HeaderComponent = () => {
    return (
        <div className={styles.header}>
            <ul>
                <li><NavLink to={'/'} className={styles.part}>auth page</NavLink></li>
                <li><NavLink to={'/registration'} className={styles.part}>registration page</NavLink></li>
            </ul>


            <hr/>
        </div>
    );
};

export default HeaderComponent;