import React from 'react'
import MeetingTitle from '../MeetingTitle'
import './index.scss'

const MeetingListItem = ({img, name, summary}) => (
<div className='meeting-list-item' style={{background: `url(${img}) no-repeat center`, backgroundSize: 'cover'}}>
  {/*<img src={img} alt=""/>*/}
  <div className="item-title">{name}</div>
  <div className="item-summary">{summary}</div>
</div>
)

const MeetingList = ({list}) => (
<div className='meeting-list'>
  {
    (list || []).map(item => <MeetingListItem {...item}/>)
  }
</div>
)

export const SpecialMeetings = ({list}) => (
<div className='meeting-block special'>
  <MeetingTitle title={'特色专场'}/>
  <MeetingList list={list}/>
</div>
)


export const OtherMeetings = ({list}) => (
<div className='meeting-block'>
  <MeetingTitle title={'分会场'}/>
  <MeetingList list={list}/>
</div>
)
