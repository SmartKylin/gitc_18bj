import React from 'react'
import './index.scss'

export default ({title, englishName}) => <div className='meeting-block-title'>
  {title}
  {englishName ? <div className='english-title'>{englishName}</div> : null}
</div>
