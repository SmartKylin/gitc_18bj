import React, { Component } from 'react';
import TitlePic from '../../assets/img/title3.jpg'
import product1 from '../../assets/img/product1.png'
import person1 from '../../assets/img/person1.png'
import company1 from '../../assets/img/company1.png'
import comBtn from '../../assets/img/common.png'

class selectRule extends Component {
  render() {
    return (
      <div className="selectRule">
        <img className='main_title' src={TitlePic}/>
        <ul>
            <li>
                <img src={product1}/>
                <a href='http://huodong.zhaojifang.com/app/./index.php?i=3&c=entry&rid=43&op=originurl&do=index&m=silence_vote'><img src={comBtn}/></a>
            </li>
            <li>
                <img src={person1}/>
                <a href='http://huodong.zhaojifang.com/app/./index.php?i=3&c=entry&rid=41&op=originurl&do=index&m=silence_vote'><img src={comBtn}/></a>
            </li>
            <li>
                <img src={company1}/>
                <a href='http://huodong.zhaojifang.com/app/./index.php?i=3&c=entry&rid=42&op=originurl&do=index&m=silence_vote'><img src={comBtn}/></a>
            </li>
        </ul>
        <div className='titHead'>
            互联网年度新锐力量奖项由数据领域，运维领域，人工智能领域,网络安全领域,架构领域组成。
        </div>
      </div>
    );
  }
}

export default selectRule;

