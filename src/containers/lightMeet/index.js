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
import Title from "../../components/Title/index";


let datas =  [
    {"weight": 1, "img":pic1 ,"title": "技术风口", "url": "", "content": "GITC 2018·上海站主会场将邀请到互联网行业最具影响力的人物，共同探讨分享最前沿的互联网技术信息。内容将涉及AI、大数据、区块链、AR/VR、互联网金融、新零售、平台架构、产业升级等最新技术成果和未来发展趋势。让与会嘉宾全方位领略、感受世界领先技术。"},
    {"weight": 1, "img": pic2, "title": "GITC PARTY", "url": "", "content": "打造顶级商务社交平台，为参会企业及嘉宾提供高质量交流与接洽机会，真正实现零距离交流，共同畅谈行业前景，营造技术交流分享合作的PARTY。"},
    {"weight": 1, "img": pic3, "title": "全新体验", "url": "", "content": "在精彩的演讲之余，大会同时开设了趣味科技体验区、路演互动、讲师见面会、新书签售会、全方位的互动环节为参会嘉宾带来全新的参会体验。"}, 
    {"weight": 1, "img": pic4,"title": "最佳实践", "url": "", "content": "GITC 2018·上海站秉承着推动技术行业发展的宗旨，聚焦互联网IT领域的最新技术成果与最佳实践，将针对运维、基础架构、大数据应用和人工智能、前端技术、区块链、产品和运营、智能制造等专题，打造专业的技术交流。"},
    {"weight": 1, "img": pic5,  "title": "精彩展区", "url": "", "content": "展现惊艳的视觉效果与创新产品体验，开发团队与嘉宾进行亲密沟通交流，让嘉宾在轻松愉悦的氛围中玩味互联网前沿技术。"}
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
        return(
            <div className='main_light'>
                <Title  Title="大会亮点" EnglishName="HIGHT LIGHTS"/>
                <div className="certify" ref='certify' >
                    <div className="swiper-container" ref='Container'>
                        <div className="swiper-wrapper">
                           {
                               datas && datas.map((v, ind) => {
                                   return <div key={ind} className='swiper-slide' ref='onZindex'>
                                    <img src={v.img} alt='' />
                                    <div>
                                        <h2>{v.title}</h2>
                                        <p>{v.content}</p>
                                    </div>
                                   </div>
                               })
                           }
                        </div>
                    </div>
                    <div className="swiper-pagination" ref='swiperPagination'></div>
                </div>
                <div className='light-show'>
                <div className='show1'><img src={pic1}/><p>邀请互联网行业最具影响力的人物，共同探讨分享前沿的技术信息</p></div>
                <dl className='show2'><dt><img src={pic2}/><p>打造顶级商务平台，真正实现零距离交流</p></dt><dt><img src={pic3}/><p>聚焦互联网领域最新技术成果与最佳实践</p></dt></dl>
                <dl className='show2 show3'><dt><img src={pic4}/><p>全方位互动，全新的参会体验</p></dt><dt><img src={pic5}/><p>体验创新产品，玩味前沿技术</p></dt></dl>

                </div>
            </div>
        )
    }
}

export default lightMeet