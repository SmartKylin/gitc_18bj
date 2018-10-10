import React, { Component } from 'react';
import flowPic from '../../assets/img/flow.jpg'
import TitlePic from '../../assets/img/title2.jpg'

class ActivityFlow extends Component {
  render() {
    return (
      <div className="activityFlow">
        <img className='main_title' src={TitlePic}/>
        <img src={flowPic}/>
      </div>
    );
  }
}

export default ActivityFlow;

