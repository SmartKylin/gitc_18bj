import React from 'react'
import CountUp from 'react-countup';
import './index.scss'
const data1 = [
  {end:820,name:'演讲嘉宾',english:'Speakers'},
  {end:3230,name:'参会企业',english:'Companies'},
  {end:72516,name:'与会者',english:'Participants'},
  {end:300661364,name:'线上传播人次',english:'Communications'},
]
const data2 = [
  {end:73,name:'会场',english:'Summit Forums '},
  {end:319,name:'合作伙伴',english:'Sponsors'},
  {end:487,name:'合作媒体',english:'Medias'},
  {end:72994,name:'展览场馆',english:'Venue Area'},
]
export default class RollingData extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return <div className="rollingData_box">
       <div className="rollingData_box_up">
         {
           data1.map( v => {
             return <div className="rollingData_box_item">
               <CountUp duration={10} start={0} end={v.end} separator="," className="countUp"/>
               <div>{v.english}</div>
               <div>{v.name}</div>
             </div>
           })
         }
       </div>
        <div className="rollingData_box_lower">
          {
            data2.map( v => {
              return <div className="rollingData_box_item">
                <CountUp   duration={10} suffix={v.name === '展览场馆' ? '㎡' : ''} start={0} end={v.end} separator="," className="countUp"/>
                <div>{v.english}</div>
                <div>{v.name}</div>
              </div>
            })
          }
        </div>
    </div>
  }
}