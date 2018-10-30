import React, {Component} from 'react'
import GuestItem from '../../components/GuestItem'
import $ from 'jquery'
import Title from "../../components/MeetingTitle";
import './index.scss'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasMore: false,
      clientWidth: ''
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
  
  
  getClientWidth = () => {
    const w = document.documentElement.clientWidth || document.body.clientWidth;
    this.setState({
      clientWidth: w
    })
  }
  
  render() {
    const {clientWidth, hasMore} = this.state
    const {peopleList, title, subTitle,stheme} = this.props
    
    const end = parseInt(clientWidth) > 1430 ? 15 : 16
    
    const finalList = hasMore ? peopleList : peopleList.slice(0, end)
    
    return (
    <div className='speech--guest invite_host'>
      <Title title={title} englishName={subTitle}/>
      <div className='speech--body'>
        {
          (finalList || []).map((item, index) => (
          <GuestItem stheme={stheme} key={index} speech={true} data={item} canPop={this.props.canPop} pos={ index % 5 === 4 ? 'left' : 'right'}/>
          ))
        }
      </div>
      
      {
        hasMore ?
        (
        <div className="btn--more" onClick={this.collapse}>
          <div className='collapse--btn'>收起</div>
          {/*<i className="iconfont icon-arow_up"/>*/}
        </div>
        )
        :
        (
        <div className="btn--more" onClick={this.catMore}>
          <div className="icon-more btn"/>
          <div className="icon-jiabing btn"/>
        </div>
        )
      }
    </div>
    )
  }
}
