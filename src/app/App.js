import React from 'react';
import './App.css';

import Header from '../header/Header';
import Wrap from '../wrap/Wrap';
import Company from '../company/Company';
import Article from '../article/Article';
import Slider from '../slider/Slider';
import Signup from '../signup/Signup';
import Footer from '../footer/Footer';
import TikTak from '../tiktaktoy/Tiktak';

class App extends React.Component {
    render() {
        return (
          <div className="app">
              <Header titleLeft="TO" titleRight="DO"/>
              <Wrap />
              <Company />
              <Article />
              <Slider title="Подробнее"/>
              <Signup h1="Быстрый доступ" textBtn="вход"/>
              <Footer />
          </div>
        );
    };
};

export default App;
