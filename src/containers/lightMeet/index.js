import React from 'react'
import './lightMeet.scss'
import {getListImgs} from '../../services/getListNews'
import $ from 'jquery'
import "swiper/dist/css/swiper.min.css"
import "swiper/dist/js/swiper.min.js"
import Swiper from "swiper/dist/js/swiper.js"
import pic1 from './img/pic1.png'
import pic2 from './img/pic2.png'
import pic3 from './img/pic3.png'
import pic4 from './img/pic4.png'
import pic5 from './img/pic5.png'

let datas =  [
    {"weight": 1, "img":pic1 , "title": "ad453266-5", "url": "", "content": ""},
    {"weight": 1, "img": pic2, "title": "b2d63888-5", "url": "", "content": ""},
    {"weight": 1, "img": pic3, "title": "b78ab91c-5", "url": "", "content": ""}, 
    {"weight": 1, "img": pic4, "title": "bbe5913a-5", "url": "", "content": ""},
    {"weight": 1, "img": pic5, "title": "c0091520-5", "url": "", "content": ""}
]

class lightMeet extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            lightData: null,
        }
    }
    componentDidMount(){
        let certifySwiper = new Swiper(this.refs.Container, {
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopedSlides: 5,
            autoplay: true,
            pagination: {
              el: this.refs.swiperPagination,
              clickable :true,
            },
            on: {
              progress: function(progress) {
                console.log(this.slides,"222")

                for (let i = 0; i < this.slides.length; i++) {
                  let slide = this.slides.eq(i);
                  let slideProgress = this.slides[i].progress;
                  let modify = 1;
                //   if (Math.abs(slideProgress) > 1) {
                //     modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                //   }
                  let translate = slideProgress * modify * 560 + 'px';
                  let scale = 1 - Math.abs(slideProgress) / 5;
                  let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                  slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                  slide.css('zIndex', zIndex);
                  slide.css('opacity', 1);
                  if (Math.abs(slideProgress) > 2) {
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
    async componentWillMount () {
        let lightData = await getListImgs(74).then(res => res.json())
        await this.setState({
            lightData: lightData.data
        })
    }

    render(){
        let { lightData } = this.state
        console.log (lightData,'123')
        return(
            <div className='main_light'>
                <div className='view_tit'>
                    <span>大会亮点</span>
                    <span>HIGHT LIGHTS</span>
                </div>
                <div className="certify" ref='certify' >
                    <div className="swiper-container" ref='Container'>
                        <div className="swiper-wrapper">
                           {
                               datas && datas.map((v, ind) => {
                                   return <div key={ind} className='swiper-slide' ref='onZindex'>
                                    <img src={v.img} alt='' />
                                   </div>
                               })
                           }
                        </div>
                    </div>
                    <div className="swiper-pagination" ref='swiperPagination'></div>
                </div>
            </div>
        )
    }
}

export default lightMeet