import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Profile from '../../profile/Profile';

const PageContent = () => {
  return  <section className="page-content">
  <Container>
    <Row>
      <Col>
       <Profile />
      </Col>
    </Row>
  </Container>
</section>
}

export default PageContent;