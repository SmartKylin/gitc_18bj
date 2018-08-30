import React from 'react'
import './index.scss'

export default class Title extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let {name, englishName} = this.props
    return <div className="introduce-header">
      
      {/*<img src={img} alt=""/>*/}
      
      <div className='title'>
        <span className='title-english'>{englishName}</span>
        <span className='title-name'>{name}</span>
      </div>
    </div>
  }
}
