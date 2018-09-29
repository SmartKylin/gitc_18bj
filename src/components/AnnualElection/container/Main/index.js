import React, { Component } from 'react';
import ActivityFlow from '../../components/activityFlow'
import Introduce from '../../components/Introduce'
import SelectRule from '../../components/selectRule'
import Awards from '../../components/awards'
import MediaSupport from '../../components/mediaSupport'
import ContactUs from '../../components/contactUs'
import footPic from '../../assets/img/foortpic.png'

class Main extends Component {
  constructor(props){
    super(props)
  
  }

  render() {
    return (
        <div className='main'>
            <ActivityFlow/>
            <Introduce/>
            <SelectRule/>
            <Awards/>
            {/* <MediaSupport/> */}
            <ContactUs/>
            {/* <div className='footer'>
                <img src={footPic}/>
            </div> */}
        </div>
    );
  }
}

export default Main;
