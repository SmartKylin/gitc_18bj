import React from 'react'
import './lightMeet.scss'
import {getListImgs} from '../../services/getListNews'
import $ from 'jquery'
import "swiper/dist/css/swiper.min.css"
import "swiper/dist/js/swiper.min.js"
import Swiper from "swiper/dist/js/swiper.js"

import {data} from '../../components/Review'
class lightMeet extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            mouseoverInd: false,
            activeInd: '',
            swiperLoaded: false,
        }
    }
    progress = (progress) => {
        let _this = this;
        let that = this.certifySwiper
        for (let i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i);
            var slideProgress = this.slides[i].progress;
            let modify = 1;
            // console.log(this.certifySwiper)
            // if (Math.abs(slideProgress) > 1) {
            //     modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            // }
            this && _this.setState({
                activeInd :this.realInd
            })
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
    }
    componentDidMount(){
        let _this = this
        this.certifySwiper = new Swiper(this.refs.container, {
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopedSlides: 7,
            // loopAdditionalSlides : 7,
            // autoplay: true,
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
                        // console.log(this.certifySwiper)
                        // if (Math.abs(slideProgress) > 1) {
                        //     modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                        // }
                        
                        _this.setState({
                           activeInd: this.realInd 
                        })
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
        
                },
                // slideChange: function(){
                //     $('.swiper-slide').eq(this.activeIndex+1).find('div').addClass('fadeDown').end().siblings().removeClass('fadeDown')
                // }
            }
        
        })
        this.setState({
            activeInd:this.certifySwiper.activeIndex,
            swiperLoaded: true,
        })
        $($('.swiper-slide').attr('id')).find('div').addClass('fadeIn')
    }
    componentWillUnmount() {
        this.certifySwiper = null
    }
    onIndex(id){
        console.log(id)
    }
    async componentWillMount () {
        let lightData = await getListImgs(74).then(res => res.json())
        await this.setState({
            lightData: lightData.data
        })
    }

    render(){
        let { lightData, mouseoverInd, activeInd, swiperLoaded } = this.state
        console.log(lightData)
        let _this = this
        return(
            <div className='main_light'>
                <div className='view_tit'>
                    <span>大会亮点</span>
                    <span>HIGHT LIGHTS</span>
                </div>
                <div className="certify" ref='certify' >
                    <div className="swiper-container" ref='container'>
                        <div className="swiper-wrapper">
                           {
                               data && data.map((v, ind) => {
                                   return <div key={ind} className='swiper-slide' ref='onZindex' id={v.id}>
                                    <img src={v.src} />
                                    {/* <div className = {this.certifySwiper && v.ind ==  this.certifySwiper.activeIndex? '' : 'hiddens'}>
                                        <h2>技术风口</h2>
                                        <p>GITC2018上海站主会场将邀请到互联网行业最具影响力的人物，共同探讨分享最前沿的互联网技术信息。内容将涉及AI，大数据、区块链、AR/VR，互联网金融、 新零售、平台架构、产业升级等最新技术成果和未来发展趋势。让与会嘉宾全方位领略、感受世界领先技术。</p>
                                    </div> */}
                                   </div>
                               })
                           }
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                

                
            </div>
        )
    }
}

export default lightMeet