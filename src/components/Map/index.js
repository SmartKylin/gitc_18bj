import React, {Component} from 'react'
import './index.scss'

let BMap = window.BMap
export default class extends Component {
  componentDidMount () {
    let map = new BMap.Map("container")
    // 设置中心点坐标和地图界别
    let point = new BMap.Point(121.452123, 31.286287);
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
    map.setCurrentCity("上海"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
  }
  render() {
    return (
        <div>
          <div className="map-page" id="container"/>
        </div>

    )
  }
}