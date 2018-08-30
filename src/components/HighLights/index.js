import React from 'react'
import './index.scss'
import highLightsLogo from '../../assets/images2/highlight-log.png'


const HighLightItem = ({img, title, content}) => (
  <div className='high-light-item'>
    <img src={img} alt=""/>
    <div className="title">{title}</div>
    <div className="divider"/>
    <div className="content">{content}</div>
  </div>
)

export default ({list}) => (
  <div className={'high-lights'}>
  
    <div className="high-lights-logo" id='meeting-overview'>
      <img src={highLightsLogo} alt=""/>
    </div>
    <div className='high-light-list'>
      {
        (list || []).map(highLight => <HighLightItem {...highLight}/>)
      }
    </div>
  </div>
)
