import React from 'react'
import Head from './container/Header'
import Main from './container/Main'
import './assets/css/style.scss'
import erweim from './assets/img/erweim.jpg'
import Footer from './components/Footer'
import AllBg from  './assets/img/allBg.jpg'

export default class Test extends React.Component{
    render() {
        return (
            <div className='appMain'>
                <img style={{width: '100%'}} src={AllBg}/>
                {/* <Head/>
                <Main/>
                <Footer/>
                <img className='qrCode' src={erweim}/> */}
            </div>
        );
    }
}