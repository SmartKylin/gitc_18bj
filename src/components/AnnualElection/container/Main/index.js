import React, { Component } from 'react';
import ActivityFlow from '../../components/activityFlow'
import Introduce from '../../components/Introduce'
import SelectRule from '../../components/selectRule'
import Awards from '../../components/awards'
import MediaSupport from '../../components/mediaSupport'
import ContactUs from '../../components/contactUs'
import Nomiee from '../../components/Nomiee'
import Parza from '../../components/Parza'
import Expert from '../../components/Expert'

class Main extends Component {
  constructor(props){
    super(props)
  
  }

  render() {
    return (
        <div className='main'>
            <Introduce/>
            <ActivityFlow/>
            <SelectRule/>
            <Awards/>
            <Nomiee/>
            {/* <MediaSupport/> */}
            <ContactUs/>
            <Parza/>
            <Expert/>
            {/* <div className='footer'>
                <img src={footPic}/>
            </div> */}
        </div>
    );
  }
}

export default Main;
