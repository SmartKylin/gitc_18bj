import React from 'react'
import Title from "../Title/index";
import './index.scss'
import {getDate1, getDate2} from "../../services/home";
import AgendeItem from "./agendeitem";

const TimeData = [
  {id:0,head:'全部',tail:'全部议程'},
  {id:1,head:'第一天',tail:'7月5日'},
  {id:2,head:'第二天',tail:'7月6日'},
]

export default class Agenda extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      active:0,
      data:[],
      whichDay: 0,
      topicIndex: 1,
      bannerAry: [],
      topicGroup: {
        0: [],
        1: []
      },
      topicGroupTemp: {
        0: [],
        1: []
      },

    }
  }


  async componentWillMount () {
    let topicGroup = {}
    await getDate1()
        .then(res => res && res.json())
        .then(data => {
          topicGroup[0] = data.data
        })

    await getDate2()
        .then(res => res && res.json())
        .then(data => {
          topicGroup[1] = data.data
        })
    await this.setState({
      topicGroup,
      topicGroupTemp:topicGroup
    })
  }

  onChangeTime = (e,item) => {
    let divLeft = '8px'
    let {topicGroup} = this.state
    let obj = {...topicGroup}
    switch(item.id)
    {
      case 0:
        break;
      case 1:
        divLeft = '210px'
        Reflect.deleteProperty(obj, '1')
        break;
      case 2:
        divLeft = '410px'
        Reflect.deleteProperty(obj, '0')
        break;

    }
    this.mobileBackground.style.left = divLeft
    this.setState({
      topicGroupTemp:obj,
      active:item.id,
    })
  }

  render(){
    let {active,topicGroupTemp} = this.state

    return (
      <div className="agenda-box">
         <Title Title="大会议程" EnglishName="AGENDA"/>
         <div className="agenda-box-time">
           <div className="mobile-background" ref={ref => this.mobileBackground = ref}></div>
           {
             TimeData.map((item) => {
                return <div key={item.id} className={active == item.id ? 'active':''} onClick={(e) => this.onChangeTime(e,item)}>
                  <span>{item.head}</span>
                  <span>{item.tail}</span>
                </div>
             })
           }
         </div>
        {
          topicGroupTemp && Object.keys(topicGroupTemp).map(key => {
            return <AgendeItem key={key} days={key}  bannerAry={topicGroupTemp[key]}/>
          })
        }

      </div>
    )
  }
}
