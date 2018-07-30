import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

//components
import Header from "./components/header";
import Content from "./components/content";
//data
class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const {children} = this.props;
    return (  
      <div className="App">
        <Header />
      <Content body = {children}/>
      </div>
    );
  }
}

export default App;
