import React, {Component} from 'react'
import headerLogo from '../../../assets/images2/bg_logo.png'
// import navImg from '../../../assets/img/logo@2x.png';
// import changeImg from '../../../assets/img/change@2x.png';
import './nav.scss'
import $ from 'jquery'
import {signUrl} from "../../../configs";
import {
  Router,
  Route,
  Link
} from 'react-router-dom'

const headerData = [
  { title: '首页', url: 'http://www.thegitc.com/index.html' },
  { title: 'GITC北京站', url: '/' },
  { title: '大会嘉宾', url: '/' },
  { title: '年度竞选', url: 'annual' },
  { title: '大会会刊', url: '/' },
  { title: '资料下载', url: '/' },
  { title: '酒店信息', url: '/' },
  { title: '关于主办方', url: 'http://www.kylinclub.org/' },
  { title: '加入我们', url: 'http://www.thegitc.com/contact.html' }
];

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: false
    }
  }
  
  //点击跳转本页某个位置
  onTurn(node) {
    $("html, body").animate({
      scrollTop: $(node).offset().top
    }, {duration: 300, easing: "swing"});
    return false;
  }
  
  // componentDidMount(){
  //     $('.view_nav li').not('.buttonBg').click( 'a',function(){
  //         $(this).addClass('bg').siblings().removeClass('bg')
  
  //     })
  // }
  onMouseOver() {
    $('.buttonBg').addClass('changeBg')
  }
  
  onMouseOut() {
    $('.buttonBg').removeClass('changeBg')
  }
  
  onNav = () => {
    this.setState({
      flag: true
    })
  }
  onClose = () => {
    this.setState({
      flag: false
    })
  }
  
  render() {
    return (
    <div className='view_nav'>
      <img src={headerLogo} alt="" className={'header-logo'}/>
      <ul className='nav_top'>
        {
          headerData.map(item => (
            item.title == '年度竞选' ? <li><Link to={item.url || ''}><a >{item.title}</a></Link></li> :
            item.title == '首页' || item.title == '关于主办方' || item.title == '加入我们' ? <li><a href={item.url || ''}>{item.title}</a></li> :
            <li><Link to={item.url || ''}><a>{item.title}</a></Link></li>
          ))
        }
        <li className='buttonBg'><a href={signUrl} target="_blank" className='signup'>立即报名</a></li>
      </ul>
    </div>
    )
  }
}

export default Nav
