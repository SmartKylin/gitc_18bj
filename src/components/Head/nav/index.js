import React, { Component } from 'react'
import navImg from '../../../assets/img/nav.png';
import './nav.scss'
import $ from 'jquery'

class Nav extends Component{
    enclistBtn(){
        window.location.href = 'https://www.bagevent.com/event/1384111'
    }
    componentDidMount(){
        $('.viewOver').click(function(){
            $("html, body").animate({
                scrollTop: $(".main").offset().top }, {duration: 500,easing: "swing"});
                return false;
        })
        $(".onSpeech").click(function(){
            $("html, body").animate({
                scrollTop: $(".speech--title").offset().top }, {duration: 600,easing: "swing"});
        })
        $('.view_nav li').not('.buttonBg').click(function(){
            console.log($(this))
            $(this).addClass('bg').siblings().removeClass('bg')

        })
    }
    render(){
        return(
            <div className='view_nav'>
                <img className='logo' src={navImg} alt=''/>
                <ul>
                    <li className='viewOver'>大会总览</li>
                    <li>特邀嘉宾</li>                  
                    <li className='onSpeech'>演讲嘉宾</li>
                    <li>会议议程</li>
                    <li>商务交流</li>
                    <li>合作招募</li>
                    <li>参会指南</li>
                    <li>联系我们</li>
                    <li onClick={this.enclistBtn.bind(this)} className='buttonBg'>立即报名</li>
                </ul>
            </div>
        )
    }
}

export default Nav