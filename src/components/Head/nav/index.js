import React, { Component } from 'react'
import navImg from '../../../assets/img/nav.png';
import './nav.scss'
import $ from 'jquery'

class Nav extends Component{
    enclistBtn(){
        window.location.href = 'https://www.bagevent.com/event/1384111'
    }
    onTurn(node){
        $("html, body").animate({
                scrollTop: $(node).offset().top }, {duration: 300,easing: "swing"});
                return false;
    }
    componentDidMount(){
        let that = this
        $('.viewOver').click(function(){
           that.onTurn('.main')
        })
        $(".onSpeech").click(function(){
            that.onTurn('.speech_host')
        })
        $('.view_nav li').not('.buttonBg').click(function(){
            $(this).addClass('bg').siblings().removeClass('bg')

        })
        $(".speInvite").click(function(){
            that.onTurn('.invite_host')
        })
    }
    onMouseOver(){
        $('.buttonBg').addClass('changeBg')
    }
    onMouseOut(){
        $('.buttonBg').removeClass('changeBg')
    }
    render(){
        return(
            <div className='view_nav'>
                <img className='logo' src={navImg} alt=''/>
                <ul>
                    <li className='viewOver bg'>大会总览</li>
                    <li className='speInvite'>特邀嘉宾</li>                  
                    {/* <li className='onSpeech'>演讲嘉宾</li> */}
                    <li>会议议程</li>
                    <li>商务交流</li>
                    <li>合作招募</li>
                    <li>参会指南</li>
                    <li>联系我们</li>
                    <li onClick={this.enclistBtn.bind(this)} className='buttonBg' onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>立即报名</li>
                </ul>
            </div>
        )
    }
}

export default Nav