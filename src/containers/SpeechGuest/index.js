import React, {Component} from 'react'
import GuestItem from '../../components/GuestItem'
import './index.scss'
import $ from 'jquery'
import {getSpeecherList} from "../../services/home";
import Title from "../../components/Title/index";

const getPosByInd = ind => {
  switch (ind % 5 ) {
    case 0:
      return 'left';
    case 4:
      return 'right';
    default:
      return 'normal';
  }
}
export default class SpeechGuest extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasMore: false,
      data: [],
      clientWidth:''
    }
  }
  // 产看更多
  catMore = () => {
    this.top = $(document).scrollTop();
    this.setState({
      hasMore: true
    })
  }
  // 收起
  collapse = () => {
    this.setState({
      hasMore: false
    })
    $(document).scrollTop(this.top)
  }
  componentWillMount () {
    getSpeecherList()
    .then(res => res && res.json())
    .then(data => {
      this.setState({
        data: data && data.data
      })
    })
    this.getClientWidth()
  }

  getClientWidth = () => {
    let w = document.documentElement.clientWidth || document.body.clientWidth;
    this.setState({
      clientWidth:w
    })
  }

  render () {
    let {clientWidth} = this.state

    let and = parseInt(clientWidth) > 1400 ? 15 : 16
    return (
      <div className={'speech--guest speech_host'}>
        <Title Title="演讲嘉宾" EnglishName="PRESIDIUNM"/>
        <div className='speech--body'>
          {/*<GuestItem key={index} speech={true} data={item} canPop={true} pos={getPosByInd(index)}/>*/}
          {
            this.state.data.length && this.state.data.slice(0, and).map((item, index) => (
              <GuestItem key={index} speech={true} data={item}/>
            ))
          }
        </div>

       
        {
          this.state.hasMore ?
          <div className='speech--more'>
            {
              this.state.data.length && this.state.data.slice(and).map((item, index) => (
              <GuestItem key={index} speech={true} data={item}/>
              ))
            }
          </div> : null
        }
        
        {
          this.state.hasMore ?
          <div className="btn--more" onClick={this.collapse}>
            <span>收起</span>
            <i className="iconfont icon-arow_up"/>
          </div>
          :
          <div className="btn--more" onClick={this.catMore}>
            <span>更多嘉宾</span>
            <i className="iconfont icon-arow_down-copy"/>
          </div>
        }
      </div>
    )
  }
}