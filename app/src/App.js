import React from 'react';
import Header from './components/layout/header/Header';
import HomeSlider from './components/home-slider/HomeSlider';
import PageContent from './components/layout/content/Content';
import Footer from './components/layout/footer/Footer';
import './App.css';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <HomeSlider />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
