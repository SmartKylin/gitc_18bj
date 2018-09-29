import React, { Component } from 'react';
import flowPic from '../../assets/img/flow.png'
import TitlePic from '../../assets/img/title3.png'

const data = [
    {
        'tit': '1、报名——',
        'content': '参评企业或个人根据评选要求在线提交奖项申请报名表。'
    },
    {
        'tit': '2、综合评分——',
        'content': '进入大众票选阶段后，通过大众投票的方式评选出二十位奖项入围选手。'
    },
    {
        'tit': '3、公布入围名单——',
        'content': '大会组委会在评选官网中公布奖项入围名单，突出评选的公开、公平、公正。'
    }, {
        'tit': '4、专家评审——',
        'content': '由“专家评审团”投票选出最终五位获奖者，并在GITC大会现场颁奖。'
    }
]


class selectRule extends Component {
  render() {
    return (
      <div className="selectRule">
        <img className='main_title' src={TitlePic}/>
        <div className='titleType'>
            <span>报名</span>
            <span>综合评分</span>
            <span>公布入围名单</span>
            <span>专家评审</span>
        </div>
        <div className='detailType'>
            {
                data.map((v, i)=> 
                    <p key={i}>
                        <span>{v.tit}</span>
                        {v.content}
                    </p>
                )
            }
        </div>
      </div>
    );
  }
}

export default selectRule;

