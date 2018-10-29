import React, { Component } from 'react';
import TitlePic from '../../assets/img/title4.jpg'
import {Modal, Button, Icon, message} from 'antd'
import ProPage from '../SignUp/productPrize'
import ChaPage from '../SignUp/characterPrize'
import ComPage from '../SignUp/companyPrize'
import goldpic from '../../assets/img/gold.png'

const datas = [
    {
        tit: '2018年度技术领军人物奖',
        content: '限CEO、CTO以上职位且从事互联网行业10年以上的从业者；是互联网行业技术的带头人，在互联网技术领域有显著能力，崇高的价值追求，卓越的领导才能；可以带领技术团队，在复杂的环境中取得巨大成就；享有较高行业美誉度的技术成功人士。'
    },
    {
        tit: '2018年度技术杰出贡献奖',
        content: '限CEO、CTO以上职位且从事互联网行业10年以上的从业者；对互联网行业和经济社会发展带来的深刻变革和影响；倡导互联网精神，具有比较突出技术研究和技术创新潜能，工作业绩突出。'
    }, 
    {
        tit: '2018年度技术新锐力量',
        content: '限技术总监、架构师以上职位且从事互联网行业7年以上的从业者；在互联网相关技术专业领域内有较高的技术壁垒，并取得创新型成果，发展前景广阔。'
    }, 
    {
        tit: '2018年度企业类奖项评选',
        content: '参评企业须具有互联网行业属性，并且借助互联网平台开展相关互联网活动或日常运营，在该领域内具有一定影响力，且在2018年度对互联网行业有着突出贡献。'
    }, 
    {
        tit: '2018年度产品类奖项评选',
        content: '具有互联网行业属性，拥有一定的行业技术壁垒，技术能力在同行业占据领先优势，并得到该领域行业用户认可的2018年度互联网产品。'
    }
]

class Awards extends Component {
  constructor(props){
    super(props)
    this.state = {
        visible: false,
        types: '',
    }
  
  }
  render() {
    return (
      <div className="Awards">
        <img className='main_title' src={TitlePic}/>
        <div className='awaUl'>
        <ul>
            {datas.map(v => <li>
                <h3>{v.tit}</h3>
                <p>{v.content}</p>
            </li>)}
        </ul>
        <img style={{height:20, width: '100%'}} src={goldpic}/></div>
      </div>
    );
  }
}

export default Awards;

