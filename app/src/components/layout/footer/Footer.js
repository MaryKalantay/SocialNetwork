import React from 'react';
import {Container} from 'react-grid-system';
import styles  from './Footer.module.css';

const Footer = () => {
  return  <footer className={styles.footer}>
  <Container>
    <div className="about">
      <h2>Footer</h2>
      <p>Lipsum</p>
    </div>
  </Container>
</footer>
}

export default Footer;