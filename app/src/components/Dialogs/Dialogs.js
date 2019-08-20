
import React from 'react';
import {NavLink} from 'react-router-dom';

import Posts from '../Posts/Posts';
import styles  from './Dialogs.module.css';
import {Row, Col} from 'react-grid-system';

const Dialogs = (props) => {
  return  (
    <div className={styles.messanger}>
      <h2>Messages</h2>
      <Row>
        <Col sm={3}>
          <ul className={styles.users}>
            <li>
              <div className={styles.avatar}>
                avatar
              </div>
              <div className={styles.info}>
                  <div className={styles.name}><span className={styles.status}></span>Ilon Mask</div>
                  <div className={styles.time}>5 nim ago</div>
              </div>
            </li>
          </ul>
        </Col>
        <Col sm={7}>
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

export default Dialogs;