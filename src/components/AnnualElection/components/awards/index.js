import React, { Component } from 'react';
import flowPic from '../../assets/img/flow.png'
import TitlePic from '../../assets/img/title4.png'
import PrizePic1 from '../../assets/img/prize1.png'
import PrizePic2 from '../../assets/img/prize2.png'
import PrizePic3 from '../../assets/img/prize3.png'
import listPic from '../../assets/img/listType.png'
import {Modal, Button, Icon, message} from 'antd'
import ProPage from '../SignUp/productPrize'
import ChaPage from '../SignUp/characterPrize'
import ComPage from '../SignUp/companyPrize'

const prodata = [
    '互联网最具价值产品奖',
    '互联网最具技术创新奖',
    '互联网最具信赖产品奖',
]
const chaData = [
    '互联网技术领军人物奖',
    '互联网技术杰出贡献奖',
    '互联网年度技术新锐力量',
]
const comData = [
    '互联网最佳服务提供奖',
    '互联网最佳合作伙伴奖',
    '互联网最具影响力企业奖',
]
       
const pic = [
    PrizePic1, 
    PrizePic2,
    PrizePic3
]

class Awards extends Component {
  constructor(props){
    super(props)
    this.state = {
        visible: false,
        types: ''
    }
  
  }
  onSignUp (val) {
      this.setState({
          visible: true,
          types: val
      })
  }
  onControlFlag = (v) => {
    v ? message.success('填写成功') : ''
    this.setState({
      visible: v
    })
  }
  render() {
      const {visible, types} = this.state
    return (
      <div className="Awards">
        <img className='main_title' src={TitlePic}/>
        <ul className='prizeType'>
            <li>
                <h5><img className='typeIcon' src={pic[0]}/>产品类年度奖</h5>
                <div className='awardsType'>
                    {
                        prodata.map((val, k) => 
                        <p key={k}><img className='listType' src={listPic}/> {val}</p>)
                    }
                </div>
                <Button onClick={() => this.onSignUp('pro')}>立即报名</Button>
            </li>
            <li>
                <h5><img className='typeIcon' src={pic[1]}/>人物类年度奖</h5>
                <div className='awardsType'>
                    {
                        chaData.map((val, k) => 
                        <p key={k}><img className='listType' src={listPic}/> {val}</p>)
                    }
                </div>
                <Button onClick={() => this.onSignUp('cha')}>立即报名</Button>
            </li>
            <li>
                <h5><img className='typeIcon' src={pic[2]}/>企业类年度奖</h5>
                <div className='awardsType'>
                    {
                        comData.map((val, k) => 
                        <p key={k}><img className='listType' src={listPic}/> {val}</p>)
                    }
                </div>
                <Button onClick={() => this.onSignUp('com')}>立即报名</Button>
            </li>
        </ul>

        <div className='modal' style={{display: visible ? 'block' : 'none'}}>
            
            <div className='signUpDrog'>
                <div className='closeIcon'>
                    <span className='anticon' style={{cursor: 'pointer'}} onClick={() => this.setState({visible: false})} type="close" theme="outlined">×</span>
                </div>
                {types && types == 'com' ? <ComPage onControlFlag={this.onControlFlag}/> :  types == 'cha' ? <ChaPage onControlFlag={this.onControlFlag}/> : <ProPage onControlFlag={this.onControlFlag}/> }

            </div>
        </div>
      </div>
    );
  }
}

export default Awards;

