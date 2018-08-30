import React, {Component} from 'react'
import './index.scss'
import Title from '../MeetingTitle'

const BMap = window.BMap

export default class extends Component {
  componentDidMount() {
    if(BMap) {
      this.createBMap()
    }
    
  }
  
  createBMap = () => {
    let map = new BMap.Map("container")
    // 设置中心点坐标和地图界别
    let point = new BMap.Point(116.3964578368, 40.0061267192);
    map.centerAndZoom(point, 15);
    // 开启滚轮缩放
    //map.enableScrollWheelZoom(true);
  
    // 标注
    var marker = new BMap.Marker(point);        // 创建标注
    map.addOverlay(marker);
  
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl());
    map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
  }
  
  render() {
    return (
    <div className='meeting-address' id={'meeting-address'}>
      <Title title="会议地址" englishName="LOCATION"/>
      <div className="map-page" id="container"/>
    </div>
    
    )
  }
}
