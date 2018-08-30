import React from 'react'
import './index.scss'
import logo from '../../assets/images2/gitc_logo.png'

import facebookImg from './images/ic_facebook.png'
import googleImg from './images/ic_google.png';
import twitterImg from './images/ic_twitter.png';
import youTubeImg from './images/ic_youtube.png'

export default class Footer extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return <div className="footer_box" id='contact-us'>
      <div className="footer_box_A">
        <div className="footer_box_left">
          <ul className="ul-1">
            <li>赞助大会&展览展示咨询 :</li>
            <li>合作单位&合作媒体咨询 :</li>
            <li>麒麟会会员申请咨询 :</li>
            <li>票务咨询 :</li>
            <li>致电我们 :</li>
          </ul>
          <ul className="ul-2">
            <li>business@kylinclub.org</li>
            <li>gitc@kylinclub.org</li>
            <li>member@kylinclub.org</li>
            <li>ticket@kylinclub.org</li>
            <li>010-86466226</li>
          </ul>
        </div>
        <div className="footer_box_right">
            {/*<div>
              GITC
            </div>
            <div>
              GITC全球互联网技术大会始终走在互联网技术交流分享的最前端，是目前国内规模最大、资源最成熟的技术峰会，同时也是中国互联网一年一度的行业盛事。
            </div>*/}
            
            <ul className="ul-3">
              <li><img src={facebookImg}/></li>
              <li><img src={twitterImg}/></li>
              <li><img src={googleImg}/></li>
              <li><img src={youTubeImg}/></li>
            </ul>
        </div>
      </div>
      <div className="record">
        <div className="footer_box_right-box">
          <div><img src={logo} alt=""/> </div><div><span>京CP备14035833号-1</span>   <span>京公网安备11010200322</span></div>
        </div>
      </div>
    </div>
  }

}
