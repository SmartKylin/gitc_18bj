import React, {Component} from 'react'
import GuestItem from '../../components/GuestItem'
import $ from 'jquery'
import {getPeopleList} from "../../services/home";
import Title from "../../components/Title/index";

export default class extends Component {
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
    getPeopleList(77)
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

    let end = parseInt(clientWidth) > 1430 ? 15 : 16

    return (
      <div className='speech--guest invite_host'>
       <Title Title="特邀嘉宾" EnglishName="GUEST OF HONOR" />
        <div className='speech--body'>
          {
            this.state.data.length && this.state.data.slice(0, end).map((item, index) => (
              <GuestItem key={index} speech={true} data={item}/>
            ))
          }
        </div>
        {
          this.state.hasMore ?
          <div className='speech--more'>
            {
              this.state.data.length && this.state.data.slice(end).map((item, index) => (
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