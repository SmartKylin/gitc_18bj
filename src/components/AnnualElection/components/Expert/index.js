import React, { Component } from 'react';
import TitlePic from '../../assets/img/title8.jpg'
import ExpertHost from '../../assets/img/hostMeet.png'

class Expert extends Component {
  constructor(props){
    super(props)
  
  }

  render() {
    return (
        <div className="expertHost">
            <img className='main_title' src={TitlePic}/>
            <p style={{color: 'rgb(199, 126, 0)', fontSize: 16, marginBottom: -68, zIndex: 99}}>GITC年度颁奖盛典专家评审团由大会主席团和专家顾问团组成</p>
            <img src={ExpertHost}/>
        </div>
    );
  }
}

export default Expert;

