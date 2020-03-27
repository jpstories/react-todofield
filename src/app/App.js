import React from 'react';
import './App.css';

import Header from '../header/Header';
import Wrap from '../wrap/Wrap';
import Company from '../company/Company';
import Article from '../article/Article';
import Slider from '../slider/Slider';
import Signup from '../signup/Signup';
import Footer from '../footer/Footer';

class App extends React.Component {
    render() {
        return (
          <div className="app">
              <Header />
              <Wrap />
              <Company />
              <Article />
              <Slider />
              <Signup />
              <Footer />
          </div>
        );
    };
};

export default App;
