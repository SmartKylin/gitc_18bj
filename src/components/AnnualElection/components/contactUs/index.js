import React, { Component } from 'react';
import TitlePic from '../../assets/img/title6.png'
import rules11 from '../../assets/img/rules11.png'
import rules22 from '../../assets/img/rules22.jpg'
import NativeShare from 'nativeshare'
const title='GITC年度竞选'
const url='http://bj.thegitc.com/annual'

const tit = '票选阶段，参评选手根据大众投票结果晋级下一阶段，每位用户每天可以投一张票。如果用户希望助力选手晋级下一阶段，还可以通过关注二维码、分享朋友圈、赠送礼品等方式进行支持。'

class ContactUs extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
        <div className="ContactUs">
            <img className='main_title' src={TitlePic}/>
            <img style={{width: 930}} src={rules11}/>
            {/* <img src={rules22}/> */}
            <p>
                {tit}
            </p>
        </div>
    );
  }
}

export default ContactUs;

