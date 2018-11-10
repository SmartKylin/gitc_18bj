import React from 'react'
import {getDate1, getDate2} from "../../services/home";
import moren from './images/moren.jpg'
import './index.scss'
import meetingStructureLogo from "../../assets/images2/bg_dahuiyicheng.png";
import Title from "../MeetingTitle";

const dateAry = ['11月22日', '11月23日']

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
          topicGroup[0] = decorateAry(data.data).filter(item => item.name !== '不显示')
        })

    await getDate2()
        .then(res => res && res.json())
        .then(data => {
          topicGroup[1] = decorateAry(data.data).filter(item => item.name !== '不显示')
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

    console.log(topicGroup,'topicGrouptopicGroup');

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
           {/*
           //这个还需要写一下,弹出一个二维码就可以,可以根据2017年北京站,GitHub地址react-pc
           <div className='piliangxiazai-box'>
              <div className='xiazai'>
                批量下载PPT
              </div>
            </div>*/}
          </div>

        </div>

      </div>
    </div>
  }
}

const MainMeeting = ({data}) => {
  let jsonObj = data && data.json && JSON.parse(data.json)
  return <div className='main-meeting-box'>
    <div className='main-meeting-box-title'>
      <div className='name'>
        {data.name}
      </div>
       <div className='address'>
         {jsonObj && jsonObj.addr ? jsonObj.addr  : '未知楼层'}
       </div>
      <div className='jies'>
        {
          jsonObj && jsonObj.description
        }
      </div>
    </div>
    <div className='main-meeting-box-body'>
      {
        data && data.data  && data.data.map((item,key) => {


          let obj = []
          if(item.id === 1460) {
            console.log(item.id,'item.iditem.id');
            obj = item && item.sintroduce && JSON.parse(item.sintroduce)
            console.log(obj,'obj');
          }

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
                  <img src={item.pic ? item.pic  : moren} alt=""/>
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

            {/*

            //这个可以打开可以直接使用
            <div className='item-document'>
                {
                  item.file
                      ? <a href={item.file}>
                        ppt
                      </a>
                      : null
                }
              </div>*/}

            </div>

          </div>

        })
      }
    </div>
  </div>
}

