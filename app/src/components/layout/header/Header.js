import React from 'react';
import {Container} from 'react-grid-system';
import Nav from '../../Nav/Nav';
import styles from './Header.css';
// import logo from './images/logo.svg';

const Header = () => {
  return  <header className="header">
  <Container>
  {/* <img src={logo} className="logo" alt="logo" /> */}
  <div className="info">
  <div className="contacts">
    <div className="address">Украина, Харьков, ул. Пушкинская, 64 </div>
    <div className="phone"> +38 (095) 771-14-74  +38 (050) 082-54-90</div>
  </div>
  <ul className="social">
    <li>fb</li>
    <li>tw</li>
    <li>g</li>
  </ul>
  </div>
  <div className="holder">
    <h1 className="logo"><a href="">TravelTheme</a></h1>
    <Nav />
  </div>
  </Container>
</header>
}

export default Header;