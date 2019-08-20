import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {Container, Row, Col} from 'react-grid-system';


import Header from './components/layout/header/Header';
// import HomeSlider from './components/HomeSlider/HomeSlider';
import Footer from './components/layout/footer/Footer';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      {/* <HomeSlider /> */}
      <div className="content">
        <Container>
          <Row>
            <Col>
              <Route path="/profile" component={Profile} />
              <Route path="/dialogs"  component={Dialogs} />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
    </BrowserRouter>

  );
}

export default App;
