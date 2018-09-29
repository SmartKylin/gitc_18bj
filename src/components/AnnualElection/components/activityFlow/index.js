import React, { Component } from 'react';
import flowPic from '../../assets/img/flow.png'
import TitlePic from '../../assets/img/title1.png'

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

