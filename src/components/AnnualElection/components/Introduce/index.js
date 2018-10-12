import React, { Component } from 'react';
import TitlePic from '../../assets/img/title1.jpg'
import activity from '../../assets/img/activity.jpg'

const data = [
    'GITC颁奖盛典作为互联网技术领域最具权威性和代表性的颁奖盛会，旨在对过去一年中表现杰出的互联网企业、做出突出贡献的技术领袖以及独具匠心的互联网产品进行表彰。',
    '评选过程通过大众海选、票选以及200余位互联网顶尖专家的严格评审，保障了GITC颁奖盛典奖项的含金量。同时，可以为广大互联网企业提供更多优质企业级产品的选型借鉴，更多服务选择的参考依据，让优秀的产品及服务帮助更多用户，进一步促进互联网行业的技术发展。',
]
class Introduce extends Component {
  render() {
    return (
      <div className="Introduce">
        <img className='main_title' src={TitlePic}/>
        <div className='intro_info'>
          <dl>
            <dt>
              <img src={activity}/>
            </dt>
            <dd>{
              data.map((v, i) => 
                  <p key={i}>{v}</p>
              )}
          </dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default Introduce;

