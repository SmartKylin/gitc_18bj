import React from 'react'
import Head from './container/Header'
import Main from './container/Main'
import './assets/css/style.scss'

export default class Test extends React.Component{
    render() {
        return (
            <div className='appMain'>
                <Head/>
                <Main/>
            </div>
        );
    }
}