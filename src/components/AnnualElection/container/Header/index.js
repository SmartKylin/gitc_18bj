import React, { Component } from 'react';
import headerPic from '../../assets/img/header.jpg'
import product from '../../assets/img/product.png'
import person from '../../assets/img/person.png'
import company from '../../assets/img/company.png'
import TitlePic from '../../assets/img/headTIT.png'
import hedaTit from '../../assets/img/hedaTit.png'
import comBtn1 from '../../assets/img/comBtn1.png'
import comBtn2 from '../../assets/img/comBtn2.png'
import comBtn3 from '../../assets/img/comBtn3.png'

class Head extends Component {
  constructor(props){
    super(props)
  
  }

  render() {
    return (
      <div className="header">
        <img src={headerPic}/>
        <img style={{width: 290}} className='tits main_title' src={TitlePic}/>
        <ul>
            <li>
                <img src={product}/>
                <a href='http://huodong.zhaojifang.com/app/./index.php?i=3&c=entry&rid=43&op=originurl&do=index&m=silence_vote'><img src={comBtn1}/></a>
            </li>
            <li>
                <img src={person}/>
                <a href='http://huodong.zhaojifang.com/app/./index.php?i=3&c=entry&rid=41&op=originurl&do=index&m=silence_vote'><img src={comBtn2}/></a>
            </li>
            <li>
                <img src={company}/>
                <a href='http://huodong.zhaojifang.com/app/./index.php?i=3&c=entry&rid=42&op=originurl&do=index&m=silence_vote'><img src={comBtn3}/></a>
            </li>
        </ul>
        <div className='titHead' ><img src={hedaTit}/></div>
      </div>
    );
  }
}

export default Head;
