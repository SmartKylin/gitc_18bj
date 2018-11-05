import React from 'react'
import exist from 'exist.js'
// import Title from "../../components/IntroTitle";
import {getListImgs} from '../../services/getListNews'
// import {getPeopleList} from "../../services/home";
import {getArticles} from "../../services/getArticles";
import HighLights from '../../components/HighLights'
import MainMeeting from '../../components/MainMeeting'
import {SpecialMeetings, OtherMeetings} from '../../components/SpecialMeeting'
import {getPeopleList} from "../../services/home";
import Review from '../../components/Review/index';
import introImg from '../../assets/images2/大会简介.png'
import introLogo from '../../assets/images2/bg_dahuijianjie.png'

import RollingData from "../../components/RollingData";
import Map from '../../components/Map'
import ExpertGroup from '../ExpertGroup'
// import SpeechGuest from '../SpeechGuest'

import {BackTop} from 'antd'

// import Cooperative from "../../components/Cooperative";

import Footer from "../../components/Footer";

import './aboutMeet.scss'
import {signUrl} from "../../configs";
import ConferenceAgenda from "../../components/ConferenceAgenda";
import CooperativePartner from "../../components/CooperativePartner";

export default class aboutMeet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerImg: null,
      aboutData: null,
      highLights: null,
      mainMeeting: null,
      specialMeetings: null,
      otherMeetings: null,
      expertGroup: [],
      presidentGroup: [],
      speechers: [],
      expertShowAll: false,
      // reviewData: [],
    }
  }

  componentDidMount() {

    getListImgs(82).then(res => res.json()).then((data) => {
      const bannerImg = exist.get(data, 'data')
      this.setState({
        bannerImg,
      })
    })

    getListImgs(83).then(res => res.json()).then((data) => {
      const aboutData = exist.get(data, 'data[0]')
      // console.log(aboutData, 'fdjskajf');
      this.setState({
        aboutData,
      })
    })

    getListImgs(84).then(res => res.json()).then((data) => {
      const highLights = exist.get(data, 'data')
      this.setState({
        highLights,
      })
    })

    getListImgs(85).then(res => res.json()).then((data) => {
      // const mainMeeting = exist.get(data, 'data')
      // console.log(data, 'fdjskajf');
      this.setState({
        mainMeeting: data,
      })
    })

    // getImgs(6).then(res => res.json()).then(data => {
    //   const reviewData = exist.get(data, 'data')
    //
    //   this.setState({
    //     reviewData
    //   })
    // })

    getArticles(86).then(res => res.json()).then((data) => {
      const specialMeetings = exist.get(data, 'data')
      // console.log(specialMeetings, 'specialMeetings');
      this.setState({
        specialMeetings,
      })
    })

    getArticles(87).then(res => res.json()).then((data) => {
      const otherMeetings = exist.get(data, 'data')
      // console.log(otherMeetings, 'otherMeetings');
      this.setState({
        otherMeetings,
      })
    })

    //presidentGroup
    getPeopleList(88)
    .then(res => res && res.json())
    .then(data => {
      const presidentGroup = exist.get(data, 'data')
       //console.log(presidentGroup, '大会主席团');
      this.setState({
        presidentGroup,
      })
    })

    getPeopleList(89)
    .then(res => res && res.json())
    .then(data => {
      const expertGroup = exist.get(data, 'data')
      //console.log(expertGroup,'专家顾问团')
      this.setState({
        expertGroup,
      })
    })

    // speechers
    getPeopleList(90)
    .then(res => res && res.json())
    .then(data => {
      const speechers = exist.get(data, 'data')
      //console.log(speechers,'演讲嘉宾')
      this.setState({
        speechers,
      })
    })
  }

  render() {
    const {
      bannerImg,
      aboutData, highLights, mainMeeting, specialMeetings,
      otherMeetings,
      expertGroup,
      presidentGroup,
      speechers
    } = this.state
    return (
    <div className='main'>

      {/*大会简介*/}
      <div className="main-bg-wrapper">
        <div className="banner-wrapper">
          {
            bannerImg && bannerImg.map((val, ind) => (
            <a href={signUrl} target="_blank"><img key={ind} alt='' src={val.img} className='banner'/></a>))
          }
        </div>

        <div className="meeting-intro-block">
          <img className={'intro-logo'} src={introLogo} alt=""/>
          <div>
            <img src={introImg} alt=""/>
            <div className='describe'>
              {aboutData && aboutData.content}
            </div>
          </div>
        </div>


        {/*大会亮点*/}

        <HighLights list={highLights}/>

        {/*大会结构*/}
        {/*主会场*/}
        <MainMeeting
        data={mainMeeting}
        />
        {/* <SpecialMeetings list={specialMeetings}/> */}
        {/*<SpecialMeetings list={otherMeetings}/>*/}

        <OtherMeetings list={otherMeetings}/>

        {/*会议结构*/}
        {/*<ConferenceAgenda/>*/}


        {/*大会主席团*/}
        {
          presidentGroup && presidentGroup.length ?
          <ExpertGroup peopleList={presidentGroup} title={'大会主席团'} subTitle={'EXPERT'} canPop={true}/>
          : null
        }

        {/*专家顾问团*/}
        {
          expertGroup && expertGroup.length ?
          <ExpertGroup peopleList={expertGroup} title={'专家顾问团'} subTitle={'PRESIDIUNM'}/>
          : null
        }

        {/*演讲嘉宾*/}
        {
          speechers && speechers.length ?
          <ExpertGroup stheme={true}  peopleList={speechers} title={'演讲嘉宾'} subTitle={'SPEECHER'}/>
          : null
        }

        {/*合作伙伴*/}
        <CooperativePartner/>

        {/* 往期回顾 */}
        <Review/>


        {/*动态数字*/}
        <RollingData/>

        {/*合作伙伴*/}
        {/*<Cooperative/>*/}

        <Map/>

        <Footer/>

        <BackTop>
          <div className="ant-back-top-inner"/>
        </BackTop>
      </div>
    </div>
    )
  }
}
