import React, { Component } from 'react';
import TitlePic from '../../assets/img/title7.jpg'
import prizaTable from '../../assets/img/prizaTable.png'
import prize12 from '../../assets/img/prize12.jpg'

class Nomiee extends Component {
  constructor(props){
    super(props)
  
  }

  render() {
    return (
        <div className="MediaSupport">
            <img className='main_title' src={TitlePic}/>
            <p>参评选手晋级到不同阶段后，参评选手、提名人可获得不同的奖励，而参评选手支持排行榜TOP10的大众支持者也可以获得不同的奖励。</p>
            <p style={{color: '#c77e00', marginTop: 20, fontSize: 14}}>*本奖励制度仅适用于人物类奖项，且奖励仅限产品选手本人使用，不得赠与、转借、出售与他人使用。投票奖励名单将于大众票选结束后统一对外公布。</p>
            {/* <img src={prize12} style={{marginBottom: 35}}/> */}
            <img src={prizaTable} style={{width: 930, marginTop: 15}}/>
        </div>
    );
  }
}

export default Nomiee;

