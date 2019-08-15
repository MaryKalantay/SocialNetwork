import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <div><a  className={styles.item} href="/profile">Profile</a></div>
      <div><a  className={styles.item} href="/dialogs">Dialogs</a></div>
      <div><a  className={styles.item} href="#">Countries</a></div>
      <div><a  className={styles.item} href="#">Tours</a></div>
      <div><a  className={styles.item}  href="#">Hotels</a></div>
      <div><a   className={styles.item} href="#">Tikets</a></div>
      <div><a   className={styles.item} href="#">Services</a></div>
      <div><a   className={styles.item} href="#">Contacts</a></div>
    </nav>
  )
}

export default Nav;