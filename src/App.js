import React, { Component } from 'react';
import Head from './containers/Head'
import Map from './components/Map'
import Footer from "./components/Footer/index";
import ExpertGroup from "./containers/ExpertGroup/index";
import RollingData from "./components/RollingData/index";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Head/>
        <RollingData/>
        <ExpertGroup/>
        <Map/>
        <Footer/>
      </div>
    );
  }
}

export default App;
