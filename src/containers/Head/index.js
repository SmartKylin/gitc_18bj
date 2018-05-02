import React from 'react'
import Nav from '../../components/Head/nav'
import './head.scss'
import bannerBg from '../../assets/img/bg.png';

class Head extends React.Component{
    enclistBtn(){
        window.location.href = 'https://www.bagevent.com/event/1384111'
    }
    render(){
        return(
            <header className='head'>
                <Nav/>
                <div className='banner'>
                    <div className='banner_img'><img src={bannerBg} alt=''/></div>
                    <button onClick={this.enclistBtn.bind(this)} className='enlist'>报名参会</button>
                </div>
                
            </header>
        )
    }
}

export default Head