import React from 'react'
import './lightMeet.scss'
import {getListImgs} from '../../services/getListNews'
import 'jquery'
import "swiper/dist/css/swiper.min.css"
import "swiper/dist/js/swiper.min.js"
import Swiper from "swiper/dist/js/swiper.js"

class lightMeet extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            lightData: null
        }
    }
    componentDidMount(){
        let certifySwiper = new Swiper(this.refs.container, {
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopedSlides: 5,
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
                //clickable :true,
            },
            on: {
                progress: function(progress) {
                    for (let i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i);
                        var slideProgress = this.slides[i].progress;
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
                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i)
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
        return(
            <div className='main_light'>
                <div className='view_tit'>
                    <span>大会亮点</span>
                    <span>HIGHT LIGHTS</span>
                </div>
                <div className="certify" ref='certify' >
                    <div className="swiper-container" ref='container'>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                            <img src="http://bj.thegitc.com/static/media/banner_01.b4e05dd5.png" />
                            <p>非常难得又值钱的认证证书</p></div>
                            <div className="swiper-slide">
                            <img src="http://bj.thegitc.com/static/media/banner_01.b4e05dd5.png" />
                            <p>深圳市优秀互联网企业认定证书</p></div>
                            <div className="swiper-slide">
                            <img src="http://bj.thegitc.com/static/media/banner_01.b4e05dd5.png" />
                            <p>质量管理体系认证荣誉证书</p></div>
                            <div className="swiper-slide">
                            <img src="http://bj.thegitc.com/static/media/banner_01.b4e05dd5.png" />
                            <p>计算机软件著作权登记证书</p></div>
                            <div className="swiper-slide">
                            <img src="http://bj.thegitc.com/static/media/banner_01.b4e05dd5.png" />
                            <p>增值电信业务经营许可证</p></div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                

                
            </div>
        )
    }
}

export default lightMeet