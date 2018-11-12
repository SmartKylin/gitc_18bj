import React from 'react'
import HeadPc from '../Campaign/images/header.png'
import HeadPhone from '../Campaign/images/header.jpg'
import './index.scss'

export default class Campaign extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          clientWidth: '',
        }
    }
    
    componentDidMount() {
        this.getClientWidth()
    }
    
    getClientWidth = () => {
        const w = document.documentElement.clientWidth || document.body.clientWidth;
        this.setState({
          clientWidth: w
        })
      }
    render(){
        const {clientWidth} = this.state
        return(
            <div className='success'>
                <div className='header'>
                    <img src={clientWidth > 800 ? HeadPc : HeadPhone}/> 
                </div>
                <p>
                    感谢您的参与，投票结果将在GITC2018全球互联网技术大会现场公布，敬请期待！
                </p>
            </div>
        )
    }
}