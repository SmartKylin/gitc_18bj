import React, { Component } from 'react'
import navImg from '../../../assets/img/nav.png';
import './nav.scss'

class Nav extends Component{
    render(){
        return(
            <div className='view_nav'>
                <img className='logo' src={navImg} alt=''/>
                <ul>
                    <li>大会总览</li>
                    <li>特邀嘉宾</li>                  
                    <li>演讲嘉宾</li>
                    <li>会议议程</li>
                    <li>商务交流</li>
                    <li>合作招募</li>
                    <li>参会指南</li>
                    <li>联系我们</li>
                    <li className='buttonBg'>立即报名</li>
                </ul>
            </div>
        )
    }
}

export default Nav