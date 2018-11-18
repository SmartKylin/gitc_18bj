import React, {Component} from 'react'
import './index.scss'

let bannerImg = require('./images/summary_01.png')

const generateImgAry = () => {
  let ary = []
  for (var i = 1; i < 8; i ++) {
    ary.push(require(`./images/summary_0${i + 1}.png`));
  }
  return ary
}

const imgAry = generateImgAry()

export default class extends Component {
  render () {
    return (
      <div className="news-summary">
        <div className="imgs-wrapper">
          <img src={bannerImg} alt=""/>
          {
            imgAry.map((item, index) => (
            <img src={item} alt="" className="text-img"/>
            ))
          }
        </div>
      </div>
    )
  }
}