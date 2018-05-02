import React from 'react'
import Nav from '../../components/Head/nav'
import './head.scss'
import bannerBg from '../../assets/img/bg.png';

class Head extends React.Component{
    render(){
        return(
            <header className='head'>
                <Nav/>
                <img style={{marginTop:'50px'}} src={bannerBg} alt=''/>
            </header>
        )
    }
}

export default Head