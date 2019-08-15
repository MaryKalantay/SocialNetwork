import React from 'react';
import Posts from '../Posts/Posts';
import styles  from './Profile.module.css';
import {Row, Col} from 'react-grid-system';

const Profile = (props) => {
  return  (
    <div className="profile">
      <h2>Profile</h2>
      <Row>
        <Col sm={3}>
          <img src="https://static.tildacdn.com/tild3031-3035-4337-a365-333531306630/4.png" className={styles.avatar} alt="avatar"/>
        </Col>
        <Col sm={9}>
          <h3><a href="#" className="name">Mary K</a></h3>
          <p className="bdate">September 19, 1987</p>
          <p className="location">Ukraine, Kharkiv</p>
          <p><a href="#" className="web-site">http://marykalantay.tilda.ws</a></p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Posts/>
        </Col>
      </Row>
    </div>
  ) 
}

export default Profile;