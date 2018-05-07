import React, { Component } from 'react'
import navImg from '../../../assets/img/nav.png';
import './nav.scss'
import $ from 'jquery'

class Nav extends Component{
    //点击跳转本页某个位置
    onTurn(node){
        $("html, body").animate({
                scrollTop: $(node).offset().top }, {duration: 300,easing: "swing"});
                return false;
    }

    // componentDidMount(){        
    //     $('.view_nav li').not('.buttonBg').click( 'a',function(){
    //         $(this).addClass('bg').siblings().removeClass('bg')

    //     })
    // }
    onMouseOver(){
        $('.buttonBg').addClass('changeBg')
    }
    onMouseOut(){
        $('.buttonBg').removeClass('changeBg')
    }
    render(){
        return(
            <div className='view_nav'>
                {/* <img className='logo' src={navImg} alt=''/> */}
                <ul>
                    <li><a href="http://www.thegitc.com/index.html">首页</a></li>                  
                    <li><a href="http://www.thegitc.com/tokyoStation.html">GITC东京站</a></li>                  
                    <li><a href="#">GITC上海站</a></li>                  
                    <li><a href="http://www.kylinclub.org/" target="_blank">主办方</a></li>
                    <li><a href="http://www.thegitc.com/contact.html">加入我们</a></li>
                    <li className='buttonBg'><a href="https://www.bagevent.com/event/1384111" target="_blank">立即报名</a></li>
                </ul>
            </div>
        )
    }
}

export default Nav