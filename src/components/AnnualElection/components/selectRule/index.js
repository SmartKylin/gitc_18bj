import React, { Component } from 'react';
import TitlePic from '../../assets/img/title3.jpg'
import product1 from '../../assets/img/product1.png'
import person1 from '../../assets/img/person1.png'
import company1 from '../../assets/img/company1.png'
import comBtn from '../../assets/img/common.png'
import secTit from '../../assets/img/secTit.jpg'

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
        <img src={secTit} style={{ marginRight: -550, marginTop: 15, width: 239}}/>
      </div>
    );
  }
}

export default selectRule;

