import React, { Component } from 'react';
import flowPic from '../../assets/img/flow.png'
import TitlePic from '../../assets/img/title5.png'

class MediaSupport extends Component {
  constructor(props){
    super(props)
  
  }

  render() {
    return (
        <div className="MediaSupport">
            <img className='main_title' src={TitlePic}/>
        </div>
    );
  }
}

export default MediaSupport;

