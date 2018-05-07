import React from 'react'
import './index.scss'
export default class Footer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div className="footer_box">
      <ul>
        <li>赞助大会&展览展示咨询 :</li>
        <li>合作单位&合作媒体咨询 :</li>
        <li>麒麟会会员申请咨询 :</li>
        <li>票务咨询 :</li>
        <li>致电我们 :</li>
      </ul>
      <ul>
        <li>business@kylinclub.org</li>
        <li>gitc@kylinclub.org</li>
        <li>member@kylinclub.org</li>
        <li>ticket@kylinclub.org</li>
        <li>010-86466226</li>
      </ul>
    </div>
  }

}
