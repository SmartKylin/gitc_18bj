import React from 'react'
import CountUp from 'react-countup';
import './index.scss'

const data1 = [
  {end: 942, name: '演讲嘉宾', english: 'Speakers'},
  {end: 4230, name: '参会企业', english: 'Companies'},
  {end: 94023, name: '与会者', english: 'Participants'},
  {end: 400661364, name: '线上传播人次', english: 'Communications'},
]
const data2 = [
  {end: 87, name: '会场', english: 'Summit Forums '},
  {end: 361, name: '合作伙伴', english: 'Sponsors'},
  {end: 601, name: '合作媒体', english: 'Medias'},
  {end: 92994, name: '展览场馆', english: 'Venue Area'},
]
export default class RollingData extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
    16000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick = () => {
    let countA = this.state.count
    this.setState({
      count: countA + 1
    })
  }
  
  render() {
    let {count} = this.state
    return <div className="rollingData_box">
      <div className="rollingData_box_up">
        {
          data1.map((v, ind) => {
            return <div className="rollingData_box_item" key={ind}>
              <CountUp key={count} duration={10} suffix="" start={0} end={v.end} separator="," className="countUp"/>
              <div>{v.english}</div>
              <div>{v.name}</div>
            </div>
          })
        }
      </div>
      <div className="rollingData_box_lower">
        {
          data2.map((v, ind) => {
            return <div className="rollingData_box_item" key={ind}>
              <CountUp key={count} duration={10} suffix={v.name === '展览场馆' ? '㎡' : v.name === '会场' ? '' : ''} start={0}
                       end={v.end} separator="," className="countUp"/>
              <div>{v.english}</div>
              <div>{v.name}</div>
            </div>
          })
        }
      </div>
    </div>
  }
}
