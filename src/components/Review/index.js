import "jquery"
import React from 'react'
import './index.scss'
import "swiper/dist/css/swiper.min.css"
import "swiper/dist/js/swiper.min.js"
// import { getReview } from '../../services/home'
import {getImgs} from "../../services/getListNews";
import Swiper from "swiper/dist/js/swiper.js"
import reviewLogo from '../../assets/images2/review_logo.png'

// import bj1 from './images/2017bj.png'
// import bj2 from './images/2013.jpg'
// import bj3 from './images/2014.jpg'
// import bj4 from './images/2015.jpg'
// import bj5 from './images/2016.jpg'
// import bj6 from './images/2016-2.jpg'
// import bj7 from './images/2017sh.jpg'
// import bj8 from './images/2018-4.jpg'

//
// export const data = [
//   {href: 'http://www.thegitc.com/shhg.html', src: bj7, id: 0},
//   {href: 'http://bj.thegitc.com/news', src: bj1, id: 1},
//   {href: 'http://www.thegitc.com/tokyoStation.html', src: bj8, id: 2},
//   {href: 'http://2016gitc.thegitc.com/summary/2013', src: bj2, id: 3},
//   {href: 'http://2016gitc.thegitc.com/summary/2014', src: bj3, id: 4},
//   {href: 'http://2016gitc.thegitc.com/summary/2015', src: bj4, id: 5},
//   {href: 'http://2016shanghai.thegitc.com/2016shanghai/index.html', src: bj6, id: 6},
//   {href: 'http://2016gitc.thegitc.com/summary/2016-bj', src: bj5, id: 7},
// ]


export default class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewData: ''
    }
  }
  
  render() {
    let {reviewData } = this.state
    
    return <div className="reviewc_box">
      <div className="meeting-review-logo" id='meeting-review'>
        <img src={reviewLogo} alt=""/>
      </div>
      
      <div className="certifyA" ref='certify'>
        <div className="swiper-container" ref='container'>
          <div className="swiper-wrapper">
            {
              (reviewData || []).map((v, index) => {
                return <div className="swiper-slide" key={index}>
                  <a target="_open" href={v.url}><img src={v.img}/></a>
                </div>
              })
            }
          </div>
        </div>
        
        <div className="swiper-pagination" ref='swiperPagination'/>
      </div>
    
    
    </div>
  }
  
  fetch = () => {
    getImgs(6).then(res => res.json()).then(v => {
      const reviewData = v && v.data
      console.log(reviewData, 'fjdksaf');
      this.setState({
        reviewData
      })
      this.initialSwiper()
    })
  }
  
  initialSwiper = () => {
    new Swiper(this.refs.container, {
      autoplay: {
        stopOnLastSlide: true,
        disableOnInteraction: false
      },
      speed: 1000,
      // autoplay: 4000,
      loop: true,
      spaceBetween: 10,
    
      effect: 'coverflow',
      slidesPerView: 3,
      // centeredSlides: true,
      coverflowEffect: {
        // rotate: 45,
        // stretch: 10,
        // depth: 60,
        // modifier: 2,
        // slideShadows: true
      
        rotate: 40,
        stretch: 50,
        depth: 100,
        modifier: 1,
        slideShadows : true
      },
    
      // pagination: {
      //   el: this.refs.swiperPagination,
      // },
    })
  }
  
  componentDidMount() {
    this.fetch()
    // this.initialSwiper()
  }
}
