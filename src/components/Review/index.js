import "jquery"
import React from 'react'
import './index.scss'
import "swiper/dist/css/swiper.min.css"
import "swiper/dist/js/swiper.min.js"
import { getReview } from '../../services/home'
import Swiper from "swiper/dist/js/swiper.js"

import bj1 from './images/2017bj.png'
import bj2 from './images/2013.jpg'
import bj3 from './images/2014.jpg'
import bj4 from './images/2015.jpg'
import bj5 from './images/2016.jpg'
import bj6 from './images/2016-2.jpg'
import bj7 from './images/2017sh.jpg'
import bj8 from './images/2018-4.jpg'
import Title from "../Title/index";


export const data = [
  {href:'http://www.thegitc.com/shhg.html',src:bj7,id:0},
  {href:'http://bj.thegitc.com/news',src:bj1,id:1},
  {href:'http://www.thegitc.com/tokyoStation.html',src:bj8,id:2},
  {href:'http://2016gitc.thegitc.com/summary/2013',src:bj2,id:3},
  {href:'http://2016gitc.thegitc.com/summary/2014',src:bj3,id:4},
  {href:'http://2016gitc.thegitc.com/summary/2015',src:bj4,id:5},
  {href:'http://2016shanghai.thegitc.com/2016shanghai/index.html',src:bj6,id:6},
  {href:'http://2016gitc.thegitc.com/summary/2016-bj',src:bj5,id:7},
]


export default class Review extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dataA:''
    }
  }

  componentWillMount(){
    getReview(74).then(res => res && res.json()).then(v => {
      console.log(v,"74vvvv");
      this.setState({
        dataA:v.data
      })

    })
  }

  render(){
    let {dataA } = this.state
    console.log(dataA,"dataA");
    return <div className="reviewc_box">
      <Title Title="往期回顾" EnglishName="REVIEV"/>

      <div className="certify" ref='certify' >
        <div className="swiper-container" ref='container'>
          <div className="swiper-wrapper">
            {
              data.map( (v,index) => {
                return <div className="swiper-slide" key={index}>
                    <a target="_open" href={v.href}><img src={v.src} /></a>
                </div>
              })
            }
          </div>

        {/*  <div className="swiper-wrapper">
              <div className="swiper-slide" key={1}>
                <a target="_open"><img src={'http://www.thegitc.com/static/sh2018/images/ad45a7dc-51b6-11e8-b321-fa163e6c852e.png'} /></a>
              </div>

              <div className="swiper-slide" key={2}>
              <a target="_open"><img src={'http://www.thegitc.com/static/sh2018/images/ad45a7dc-51b6-11e8-b321-fa163e6c852e.png'} /></a>
              </div>
              <div className="swiper-slide" key={3}>
                <a target="_open"><img src={'http://www.thegitc.com/static/sh2018/images/ad45a7dc-51b6-11e8-b321-fa163e6c852e.png'} /></a>
              </div>
            <div className="swiper-slide" key={4}>
              <a target="_open"><img src={'http://www.thegitc.com/static/sh2018/images/ad45a7dc-51b6-11e8-b321-fa163e6c852e.png'} /></a>
            </div>
          </div>*/}
        </div>

        <div className="swiper-pagination" ref='swiperPagination'></div>
      </div>
    </div>
  }

  componentDidMount() {
    let certifySwiper = new Swiper(this.refs.container, {
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      loopedSlides: 5,
      autoplay: true,
      pagination: {
        el: this.refs.swiperPagination,
        //clickable :true,
      },
      on: {
        progress: function(progress) {
          for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            let slideProgress = this.slides[i].progress;
            let modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            }
            let translate = slideProgress * modify * 260 + 'px';
            let scale = 1 - Math.abs(slideProgress) / 5;
            let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
            slide.css('zIndex', zIndex);
            slide.css('opacity', 1);
            if (Math.abs(slideProgress) > 3) {
              slide.css('opacity', 0);
            }
          }
        },
        setTransition: function(transition) {
          for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i)
            slide.transition(transition);
          }

        }
      }

    })
  }
}
