import React from 'react';
import './App.css';
import Header from '../header/Header';
import Wrap from '../wrap/Wrap';

class App extends React.Component {
    render() {
        return (
          <div className="app">
              <Header />
              <Wrap />
          </div>
        );
    };
};

export default App;
