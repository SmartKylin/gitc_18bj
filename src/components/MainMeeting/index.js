import React from 'react'
import exist from 'exist.js'
import MeetingTitle from '../MeetingTitle'
import meetingStructureLogo from '../../assets/images2/bg_huiyijiegou.png'

import './index.scss'

const MeetingListItem = ({img, title}) => (
<div className='main-meeting-item'>
  <img src={img} alt=""/>
  <div className="item-title">{title}</div>
</div>
)

const MainMeetingIntro = ({intro}) => (
<div className='main-meeting-intro'>
  <div className="title">主会场简介</div>
  <div className='intro-content'>{intro}</div>
</div>
)

const MeetingList = ({list}) => (
<div className='main-meeting-list'>
  {
    (list || []).map(item => <MeetingListItem {...item}/>)
  }
</div>
)

export default ({data}) => (
<div className='main-meeting-wrapper'>
  
  <div className="structure-logo" id='meeting-structure'>
    <img src={meetingStructureLogo} alt=""/>
  </div>
  
  <div className='main-meeting-block'>
    <MeetingTitle title={'主会场'}/>
    <MeetingList list={exist.get(data, 'data')}/>
    <MainMeetingIntro intro={exist.get(data, 'other.other')}/>
  </div>
</div>

)
