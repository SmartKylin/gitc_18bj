import React from 'react'
import $ from 'jquery'
export default class RollingData extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    //this.startRun()
  }

   startRun = () => {
     this.refs.counter1.countUp({
      // delay: 10,
      time: 2000
    });
     this.refs.counter2.countUp({
      // delay: 10,
      time: 3000
    });
     this.refs.counter3.countUp({
      // delay: 10,
      time: 3800
    });
     this.refs.counter4.countUp({
      // delay: 10,
      time: 6000
    });
     this.refs.counter5.countUp({
      // delay: 10,
      time: 800
    });
     this.refs.counter6.countUp({
      // delay: 10,
      time: 1200
    });
     this.refs.counter7.countUp({
      // delay: 10,
      time: 2200
    });
     this.refs.counter8.countUp({
      // delay: 10,
      time: 5000
    });
    let time = setTimeout(this.startRun, 13000);
  }

  render(){
    return <div className="s-promo-block-v2 js__parallax-window">
      <div className="container g-padding-y-40--xs g-padding-y-100--md">
        <div className="row">
          <div className="col-md-2 col-xs-3  g-margin-b-0--lg">
            <div className="">
              <span ref="counter1"> 820</span>
              <h4 className="">Speakers<br/>演讲嘉宾</h4>
            </div>
          </div>
          <div className="">
            <div className="">
              <span ref="counter2">3,230</span>
              <h4 className="">Companies<br/>参会企业</h4>
            </div>
          </div>
          <div className="">
            <div className="">
              <span ref="counter3">72,516</span>
              <h4 className="">Participants<br/>与会者</h4>
            </div>
          </div>
          <div className="">
            <div className="">
              <span ref="counter4">300,661,364</span>
              <h4 className="">Online Communications<br/>线上传播人次</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-xs-4  g-margin-b-0--lg">
            <div className="">
              <span ref="counter5">73</span>
              <h4 className="">Summit Forums <br/>会场</h4>
            </div>
          </div>
          <div className="">
            <div className="">
              <span ref="counter6">319</span>
              <h4 className="">Sponsors<br/>合作伙伴</h4>
            </div>
          </div>
          <div className="col-md-3 col-xs-4  g-margin-b-0--sm">
            <div className="">
              <span ref="counter7"> 487</span>
              <h4 className="">Medias<br/>合作媒体</h4>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="">
                <span ref="counter8">72,994</span>
                <span className="g-font-size-40--xs g-color--white">m<sup>2</sup></span>
              </div>

              <h4 className="">Venue Area <br/> 展览场馆</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}