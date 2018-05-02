import React, { Component } from 'react';
import Head from './containers/Head'
import AboutMeet from './containers/aboutMeet'
import LightMeet from './containers/lightMeet'
import Structure from './containers/structure'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Head/>
        <AboutMeet/>
        <LightMeet/>
        <Structure/>
      </div>
    );
  }
}

export default App;
