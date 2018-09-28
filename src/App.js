import React, { Component } from 'react';

import Head from './containers/Head'
import AboutMeet from './containers/aboutMeet'

import RouterMap from './router'
import './app.scss'
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
    // let {width} = this.state
    return (
      <div className="App">
          <RouterMap/>
      </div>
    );
  }
}

export default App;
