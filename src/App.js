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
import Agenda from "./components/Agenda/index";
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      width:1200
    }
  }

  componentDidMount(){
    let width = document.body.clientWidth
    this.setState({
      width
    })
  }

  render() {
    let {width} = this.state
    return (
      <div className="App">
        <Head/>
        <AboutMeet/>
        <LightMeet/>
        {/*分会场*/}
        <Structure/>
        {/*大会议程*/}
        {width > 900 ? <Agenda/> : null}
        {/*特邀嘉宾*/}
        <ExpertGroup/>
        {/*演讲嘉宾*/}
        {/*<SpeechGuest/>*/}
        {/*动态数字*/}
        <Review/>
        {/*宽度有问题*/}
        <RollingData/>
        {/*合作伙伴*/}
        {/*<Cooperative/>*/}
        <Map/>
        <Footer/>
      </div>
    );
  }
}

export default App;
