
import React from 'react';
import Posts from '../Posts/Posts';
import styles  from './Dialogs.module.css';
import {Row, Col} from 'react-grid-system';

const Dialogs = (props) => {
  return  (
    <div className={styles.dialogs}>
      <h2>Dialogs</h2>
      <Row>
        <Col sm={3}>
        </Col>
        <Col sm={9}>
          content Dialogs
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