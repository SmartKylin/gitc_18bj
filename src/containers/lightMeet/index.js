import React from 'react'
import './lightMeet.scss'
import {getListImgs} from '../../services/getListNews'
import $ from 'jquery'
import "swiper/dist/css/swiper.min.css"
import "swiper/dist/js/swiper.min.js"
import Swiper from "swiper/dist/js/swiper.js"
import Title from "../../components/Title/index";

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
            autoplay: 2000,
            pagination: {
                el: '.swiper-pagination',
                clickable :true,
            },
            on: {
                progress: function(progress) {
                    for (let i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i);
                        var slideProgress = this.slides[i].progress;
                        let modify = 1;
                        if (Math.abs(slideProgress) > 1) {
                            // modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                        }
                        let translate = slideProgress * modify * 570 + 'px';
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
                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i)
                        slide.transition(transition);
                    }
        
                }
            }
        
        })
        let that = this
        $('.swiper-slide').mouseover(function(){
            console.log($(this))
           $(this).eq(certifySwiper.activeIndex).find('div').addClass('fadeDown')
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
                <Title Title='大会亮点' EnglishName="HIGHT LIGHTS"/>
                <div className="certify" ref='certify' >
                    <div className="swiper-container" ref='container'>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide" ref='slidePic' >
                            <img src="http://bj.thegitc.com/static/media/banner_01.b4e05dd5.png" />
                            <div ref='show'><h2>技术亮点</h2><p>非常难得又值钱的认证证书非常难得又值钱的认证证书非常难得又值钱的认证证书非常难得又值钱的认证证书非常难得又值钱的认证证书非常难得又值钱的认证证书</p></div></div>
                            <div className="swiper-slide" ref='slidePic' >
                            <img src="http://bj.thegitc.com/static/media/banner_04.21c50e03.jpg" />
                            <div><h2>技术亮点</h2><p>非常难值钱的认证证书</p></div></div>
                            <div className="swiper-slide" ref='slidePic' >
                            <img src="http://www.thegitc.com/static/img/tokyo/meeting.png" />
                            <div><h2>技术亮点</h2><p>非常难得又值钱的证书</p></div></div>
                            <div className="swiper-slide" ref='slidePic' >
                            <img src="http://www.thegitc.com/static/img/tokyo/banner.png" />
                            <div><h2>技术亮点</h2><p>非常难得又值钱认证证书</p></div></div>
                            <div className="swiper-slide" ref='slidePic' >
                            <img src="http://cms-bucket.nosdn.127.net/catchpic/e/e7/e732ef25b267cc341b43c2300924f673.png?imageView&thumbnail=550x0" />
                            <div><h2>技术亮点</h2><p>非常难得值钱的认证证书</p></div></div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}

export default lightMeet