import React from 'react'
import './index.scss'
import {getLiveUrl} from '../../services/home'
import exist from "exist.js";
export default class IiveUrl extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      liveUrl:''
    }

  }

  componentDidMount(){
    getLiveUrl().then(res => res.json()).then((data) => {
      const liveUrl = exist.get(data, 'data[0].url')
      this.setState({
        liveUrl
      })
    })
  }

  render(){
    return <div className="live-url-box">
      {
        this.state.liveUrl
            ? <a className="bj-banner-btn bottom" target='_blank' href={this.state.liveUrl}>
              <div>大会</div>
              <div>直播</div>
            </a>
            : null
      }
    </div>
  }
}

