import "jquery"
import React from 'react'
import './index.scss'
import "swiper/dist/css/swiper.min.css"
import "swiper/dist/js/swiper.min.js"
import Swiper from "swiper/dist/js/swiper.js"

import bj1 from './images/2017bj.png'
import bj2 from './images/2013.jpg'
import bj3 from './images/2014.jpg'
import bj4 from './images/2015.jpg'
import bj5 from './images/2016.jpg'
import bj6 from './images/2016-2.jpg'
import bj7 from './images/2017sh.jpg'
import bj8 from './images/2018-4.jpg'


const data = [
  {href:'shhg.html',src:bj7},
  {href:'http://bj.thegitc.com/news',src:bj1},
  {href:'tokyoStation.html',src:bj8},
  {href:'http://2016gitc.thegitc.com/summary/2013',src:bj2},
  {href:'http://2016gitc.thegitc.com/summary/2014',src:bj3},
  {href:'http://2016gitc.thegitc.com/summary/2015',src:bj4},
  {href:'http://2016shanghai.thegitc.com/2016shanghai/index.html',src:bj6},
  {href:'http://2016gitc.thegitc.com/summary/2016-bj',src:bj5},
]


export default class Review extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return <div className="reviewc_box">
      <div ref='container'>
        <div className="swiper-wrapper">
          {
            data.map( v => {
              return  <div className="swiper-slide" style={{width:'80px',height:'300px'}}>
                <a href={v.href} target="_blank"><img style={{width:'100%',height:'100%'}} src={v.src} alt=""/></a>
              </div>
            })
          }
        </div>
        <div className="swiper-button-prev prev" ref="prev"></div>
        <div className="swiper-button-next next" ref="next"></div>
      </div>
    </div>
  }

  componentDidMount() {
    new Swiper(this.refs.container, {
      navigation: {
        nextEl: this.refs.next,
        prevEl: this.refs.prev,
      },
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      spaceBetween: 10,
      slidesPerView: 4,
      effect: 'coverflow',
      centeredSlides: true,
      coverflow: {
        rotate: 40,
        stretch: 50,
        depth: 100,
        modifier: 1,
        slideShadows : true
      }
    })
  }
}
