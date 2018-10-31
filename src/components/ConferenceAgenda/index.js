import React from 'react'
import {getDate1, getDate2} from "../../services/home";

import './index.scss'
import meetingStructureLogo from "../../assets/images2/bg_dahuiyicheng.png";
import Title from "../MeetingTitle";

const dateAry = ['11月23日', '11月24日']

const decorateAry = (ary) => {
  let arr = []
  return arr.concat(ary[ary.length - 1], ary, ary[0])
}

export default class ConferenceAgenda extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      whichDay: 0,
      topicIndex: 1,
      bannerAry: [],
      topicGroup: {
        0: [],
        1: []
      },
    }
  }

  async componentWillMount() {
    let topicGroup = {}
    await getDate1()
        .then(res => res && res.json())
        .then(data => {
          topicGroup[0] = decorateAry(data.data)
        })

    await getDate2()
        .then(res => res && res.json())
        .then(data => {
          topicGroup[1] = decorateAry(data.data)
        })
    await this.setState({
      topicGroup
    })

    this.setState({
      bannerAry: this.state.topicGroup[this.state.whichDay][1]
    })
  }


  // 改变日期
  switchDay = async (index) => {
    await this.setState({
      whichDay: index,
      topicIndex:1
    })
    await this.setState({
      bannerAry: this.state.topicGroup[this.state.whichDay][1]
    })
  }

  // 改变焦点
  changeFocus = async (index,item) => {
    await this.setState({
      topicIndex: index,
      bannerAry:item,
    })
  }


  render() {
    let {bannerAry, topicGroup, whichDay} = this.state

    return <div className='conference-agenda-box-box'>
      <div className="conference-agenda-box-logo">
        <img src={meetingStructureLogo} alt=""/>
      </div>
      <div className='conference-agenda-box'>

        <Title title={'大会议程'} englishName={'AGENDA'}/>
        {/*日期控制*/}
        <div className='date--control'>
          {
            dateAry.map((date, index) => (
                <div
                    key={index}
                    className={'agenda--date ' + (this.state.whichDay === index ? 'active' : '')}
                    onClick={() => this.switchDay(index)}
                >{date}</div>
            ))
          }
        </div>


        <div className='conference-agenda-box-body'>
          {/*会场名称*/}
          <div className='topic--group'>
            {
              this.state.topicGroup[this.state.whichDay].map((item, index) => (
                  (index > 0 && index < (this.state.topicGroup[this.state.whichDay].length - 1)) ? <div key={index}className={'topic--box ' + (this.state.topicIndex === index ? 'active' : '')} onClick={() => this.changeFocus(index,item)}>
                    {item.name}
                  </div> : null
              ))
            }
          </div>

          <div className='conference-agenda-box-body-right'>
            <MainMeeting data={bannerAry}/>
            <div className='piliangxiazai-box'>
              <div className='xiazai'>
                批量下载PPT
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  }
}

const MainMeeting = ({data}) => {
  return <div className='main-meeting-box'>
    <div className='main-meeting-box-title'>
      <div className='name'>
        {data.name}
      </div>
       <div className='address'>
         {data.other}
       </div>
      <div className='jies'>
        土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。
        如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。 —— 别林斯基
      </div>
    </div>
    <div className='main-meeting-box-body'>
      {
        data && data.data  && data.data.map((item,key) => {

          return <div className='main-meeting-box-body-item' key={key}>

            <div className='stime-stheme'>
              <div className='stime'>
                {item.stime}
              </div>
              <div className='stheme'>
                {item.stheme}
              </div>
            </div>

            <div className='head-portrait-boy'>
              <div className='pic-name'>
                <div className='pic'>
                  <img src={item.pic} alt=""/>
                </div>
                <div className='head-portrait-boy-name'>
                  {item.name}
                </div>
              </div>
              <div className='company-position'>
                <div className='company'>
                  {item.company}
                </div>
                <div className='position'>
                  {item.position}
                </div>
              </div>

              <div className='item-document'>
                {
                  item.file
                      ? <a href={item.file}>
                        ppt
                      </a>
                      : null
                }
              </div>

            </div>

          </div>

        })
      }
    </div>
  </div>
}

