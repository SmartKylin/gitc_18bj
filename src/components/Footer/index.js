import React from 'react'
import './index.scss'
import logo from '../../assets/images2/gitc_logo.png'

import facebookImg from './images/ic_facebook.png'
import googleImg from './images/ic_google.png';
import twitterImg from './images/ic_twitter.png';
import youTubeImg from './images/ic_youtube.png'

const footerLinks = [
  {
    title: '首页',
    url: 'http://www.thegitc.com/home.html'
  },{
    title: '东京站',
    url: 'http://www.thegitc.com//tokyoStation.html'
  },{
    title: '上海站',
    url: 'http://www.thegitc.com//shhg.html'
  },{
    title: '北京站',
    url: '#'
  },{
    title: '关于主办方',
    url: 'http://www.kylinclub.org'
  },{
    title: '联系我们',
    url: 'http://www.thegitc.com/contact.html'
  },
]

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
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
          {/*<div>
            GITC
          </div>
          <div>
            GITC全球互联网技术大会始终走在互联网技术交流分享的最前端，是目前国内规模最大、资源最成熟的技术峰会，同时也是中国互联网一年一度的行业盛事。
          </div>*/}
          
        </div>
        <div className="footer_box_right">
          <ul className="ul-3">
            <li><img src={facebookImg}/><span>facebook</span></li>
            <li><img src={twitterImg}/><span>twitter</span></li>
            <li><img src={googleImg}/><span>google</span></li>
            <li><img src={youTubeImg}/><span>YouTube</span></li>
          </ul>
        </div>
        
        <div className='footer-link'>
          <ul>
            {
              footerLinks.map(item => (
                <li><a href={item.url} target={'_blank'}>{item.title}</a></li>
              ))
            }
          </ul>
        </div>
  
        <div className='footer-intro-gitc'>
          <div className='footer-intro-title'>
            GITC
          </div>
          <div>
            GITC全球互联网技术大会始终走在互联网技术交流分享的最前端，是目前国内规模最大、资源最成熟的技术峰会，同时也是中国互联网一年一度的行业盛事。
          </div>
        </div>
        
      </div>
      <div className="record">
        <div className="footer_box_right-box">
          <div><img src={logo} alt=""/></div>
          <div><span>京CP备14035833号-1</span> <span>京公网安备11010200322</span></div>
        </div>
      </div>
    </div>
  }
  
}
