import React, { Component } from 'react';
import headerPic from '../../assets/img/header.jpg'
class Head extends Component {
  constructor(props){
    super(props)
  
  }

  render() {
    return (
      <div className="header">
        <img src={headerPic}/>
      </div>
    );
  }
}

export default Head;
