import React, {Component} from 'react'
import GuestItem from '../../components/GuestItem'
import './index.scss'
import $ from 'jquery'
import {getSpeecherList} from "../../services/home";

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
      data: []
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
  }
  render () {
    return (
      <div className={'speech--guest'}>
        <div className='speech--title'>演讲嘉宾</div>
        <div className='speech--body'>
          {
            this.state.data.length && this.state.data.slice(0, 15).map((item, index) => (
              <GuestItem key={index} speech={true} data={item} canPop={true} pos={getPosByInd(index)}/>
            ))
          }
        </div>
       
        {
          this.state.hasMore ?
          <div className='speech--more'>
            {
              this.state.data.length && this.state.data.slice(15).map((item, index) => (
              <GuestItem key={index} speech={true} data={item} canPop={true} pos={getPosByInd(index)}/>
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
            <span>查看更多</span>
            <i className="iconfont icon-arow_down-copy"/>
          </div>
        }
      </div>
    )
  }
}