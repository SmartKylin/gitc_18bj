import React, { Component } from 'react';
import TitlePic from '../../assets/img/title5.jpg'
import nomiee_btn from '../../assets/img/nomiee_btn.jpg'

const tit = '在评选报名&提名阶段，所有人都可以提名自己认为最符合评选条件的企业、个人和产品参加评选，并成为该“选手”的提名人。成为提名人不仅可以招募提名助手和提名队员，并且可以与“选手”共享礼物提成。除此之外，评选所得收益将全部用于公益活动，为贫困山区的希望小学捐赠学习用品。'

class Nomiee extends Component {
  constructor(props){
    super(props)
  
  }

  render() {
    return (
        <div className="MediaSupport">
            <img className='main_title' src={TitlePic}/>
            <p className='artTit'>
                {tit}
            </p>
            <a target="_blank" 
            href='https://mp.weixin.qq.com/s/sfsBj4rub2H9LUCIeN-Erw'>
            <img className='nom_btn'  style={{display: 'flex', width: 330, height: 66}} src={nomiee_btn}/></a>
        </div>
    );
  }
}

export default Nomiee;

