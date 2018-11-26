import React from 'react'
import {getDate1, getDate2} from "../../services/home";
import moren from './images/moren.jpg'
import './index.scss'
import meetingStructureLogo from "../../assets/images2/bg_dahuiyicheng.png";
import Title from "../MeetingTitle";
import KongPic from './images/kong.png'
import LiPic from './images/li.png'
import ShengPic from './images/sheng.png'
import SuPic from './images/su.png'
import YuPic from './images/yu.png'
import qrImg from './images/pc_qr_code.png'
import canclePic from './images/cancle.png'
const dateAry = ['11月22日', '11月23日']


const decorateAry = (ary) => {
  let arr = []
  return arr.concat(ary[ary.length - 1], ary)
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
      flag: false,
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
  onLoadAllPPT = () => {
    this.setState({
      flag: true
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
                    className={'agenda--date ' + (whichDay === index ? 'active' : '')}
                    onClick={() => this.switchDay(index)}
                >{date}</div>
            ))
          }
        </div>


        <div className='conference-agenda-box-body'>
          {/*会场名称*/}
          <div className='topic--group'>
            {
              this.state.topicGroup[whichDay].map((item, index) => (

                  index > 0 && <div key={index}className={'topic--box ' + (this.state.topicIndex === index ? 'active' : '')} onClick={() => this.changeFocus(index,item)}>
                    {item.name}
                  </div>
              ))
            }
          </div>

          <div className='conference-agenda-box-body-right'>
            <MainMeeting data={bannerAry}/>
           {/*
           //这个还需要写一下,弹出一个二维码就可以,可以根据2017年北京站,GitHub地址react-pc*/}
           <div className='piliangxiazai-box'>
              <div className='xiazai' onClick={this.onLoadAllPPT}>
                批量下载PPT
              </div>
            </div>
          </div>

        </div>

      </div>
      {
        this.state.flag ? <div className="banner-pop">
        <img src={qrImg} alt=""/>
        <img className='canclePic' src={canclePic} onClick={() => this.setState({flag: false})}/>
      </div> : ''
      }
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


          let objData = null
          if(item.id === 1461) {
            objData = item && item.sintroduce && JSON.parse(item.sintroduce)
          }

          return objData ? <GetAward objData={objData}/> : <div className='main-meeting-box-body-item' key={key}>

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
                  <p>{item.name}</p>
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
                      ? <a href={item.file} target="_blank">
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
const peopleData = [
  {
    name: '孔令欣',
    pic: KongPic,
    file: '',
    company: '贝壳金服',
    position: 'CEO'
  },{
    name: '盛国军',
    file: 'https://pan.baidu.com/s/1lpZhiKyYElx-8tmrPmMdTA',
    pic: ShengPic,
    company: '海尔电器集团',
    position: 'CTO'
  }, {
    name: '苏万松',
    file: 'https://pan.baidu.com/s/1KjWGYh5wwsK40m5FsPmMOg',
    pic: SuPic,
    company: '尚德机构',
    position: '技术副总裁&首席架构师'
  }
]
const productData = {
  name: '于游',
  file: 'https://pan.baidu.com/s/1qnQdYmL90rAFU9KOrFijKA',
  pic: YuPic,
  company: '育学园',
  position: 'CTO'
}
const companyData = {
  name: '李玉峰',
  file: 'https://pan.baidu.com/s/1IpLj_9TUMvPSmEiSvS-YgA',
  pic: LiPic,
  company: 'LuckinCoffee（瑞幸咖啡）',
  position: 'CTO'
}
const GetAward = ({objData}) => {
  return <div className='main-award'>
    <div className='main-time'>
      {objData.time}
    </div>
    <div className='main-content'>
      {
        objData.awardArr.map(v => 
            v.award == '2018年度互联网技术人物类奖项揭晓' ? 
            <div className='totalAward main-award-type'>
              <div className='main-award-tit'>{v.award}<br/>获奖人物代表主题演讲</div>
              <div className='main-award-cont'>
              {
                peopleData.map(item => 
                  <MainMeet item={item}/>
                )
              }
            </div></div> : <div className='singleAward main-award-type'>
            <div className='main-award-tit'>{v.award}<br/>获奖{v.award == "2018年度互联网技术产品类奖项揭晓" ?  
            '产品'  : '企业'}代表主题演讲</div>
            <MainMeet item={v.award == "2018年度互联网技术产品类奖项揭晓" ? productData : companyData}/>
            </div>
        )
      }
    </div>
  </div>
}

const MainMeet = (val) => {
  const {item} = val
return  <div className='head-portrait-boy'>
      <div className='pic-name'>
        <div className='pic'>
          <img src={item.pic ? item.pic  : moren} alt=""/>
        </div>
        <div className='head-portrait-boy-name'>
          <p>{item.name}</p>
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
              ? <a href={item.file} target="_blank">
                ppt
              </a>
              : null
        }
      </div>
  </div>
}

