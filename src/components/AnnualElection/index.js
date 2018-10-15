import React from 'react'
import Head from './container/Header'
import Main from './container/Main'
import './assets/css/style.scss'
import erweim from './assets/img/erweim.png'
import Footer from './components/Footer'

export default class Test extends React.Component{
    render() {
        return (
            <div className='appMain'>
                <Head/>
                <Main/>
                <Footer/>
                <img className='qrCode' src={erweim}/>
            </div>
        );
    }
}