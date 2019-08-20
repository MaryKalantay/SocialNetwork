import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item} ><NavLink activeClassName={styles.active_link} to="/profile">Profile</NavLink></div>
      <div className={styles.item} ><NavLink activeClassName={styles.active_link} to="/dialogs">Messages</NavLink></div>
      <div className={styles.item} ><NavLink to="/">Countries</NavLink></div>
      <div className={styles.item} ><NavLink to="/">Tours</NavLink></div>
      <div className={styles.item} ><NavLink to="/">Hotels</NavLink></div>
      <div className={styles.item} ><NavLink to="/">Tikets</NavLink></div>
      <div className={styles.item} ><NavLink to="/">Services</NavLink></div>
      <div className={styles.item} ><NavLink to="/">Contacts</NavLink></div>
    </nav>
  )
}

export default Nav;