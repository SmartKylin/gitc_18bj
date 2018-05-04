import React, { Component } from 'react';
import Head from './containers/Head'
import AboutMeet from './containers/aboutMeet'
import LightMeet from './containers/lightMeet'
import Structure from './containers/structure'
import Map from './components/Map'
import Footer from "./components/Footer/index";
import ExpertGroup from "./containers/ExpertGroup/index";
import RollingData from "./components/RollingData/index";
import Review from "./components/Review/index";
import Cooperative from "./components/Cooperative/index";
import SpeechGuest from "./containers/SpeechGuest/index";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Head/>
        <AboutMeet/>
        <LightMeet/>
        <Structure/>
        <ExpertGroup/>
        <SpeechGuest/>
        <Review/>
        <RollingData/>
        <Cooperative/>
        <Map/>
        <Footer/>
      </div>
    );
  }
}

export default App;
