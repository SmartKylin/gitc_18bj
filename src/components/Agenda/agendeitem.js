import React from 'react'

const dateAry = ['7月5日', '7月6日']

export default class AgendeItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      activeLeft:0,
      bannerAry:[],
      agendaItem:null,
      rightDate:[]
    }
  }

  componentWillMount(){
    this.setAgendaDate()
  }

  componentWillReceiveProps(nextPorps){
    if(this.props.bannerAry != nextPorps.bannerAry){
      this.setAgendaDate(nextPorps)
    }
  }

  activeLeft  = async(item,index) => {
    this.setState({
      activeLeft:index,
      agendaItem:item,
      rightDate:item.data
    })
  }


  setAgendaDate = (props) => {
    let {bannerAry} = props || this.props
    if(bannerAry && bannerAry.length){
      this.setState({
        agendaItem:bannerAry[0],
        bannerAry,
        rightDate:bannerAry[0].data
      })
    }
  }

  render(){
    let {activeLeft,bannerAry,agendaItem,rightDate} = this.state

    return(
        <div>
          {
            agendaItem &&  <div className="agenda-background-head">
              <span>{agendaItem.name}({dateAry[this.props.days]})</span>
              <span><i/>{agendaItem.other}</span>
            </div>
          }

          <div className="agenda-body">
            <div className="agenda-body-left">
              {
                bannerAry && bannerAry.map((item,index) => {
                  return <div key={item.weight} className={activeLeft == index ?'activeA': ' leftbut'} onClick={() => this.activeLeft(item,index)}>
                    <span>{item.name}</span>
                  </div>
                })
              }
            </div>

            <div className="agenda-body-right">

              <div className="agenda-body-right-item-top">
                <div className="data-top">
                  <span>09:00 - 10:00</span>
                </div>
                <div className="line-top">
                  <div className="circle-top"></div>
                </div>
                <div className="test-top">开幕式直播</div>
              </div>

              {
                rightDate && rightDate.length && rightDate.map(item => {
                  return <div key={item.id} className="agenda-body-right-item">

                    <div className="data">
                      <span>{item.stime}</span>
                    </div>

                    <div className="line">
                      <div className="circle"/>
                    </div>

                    <div className="character">
                      <img src={item.pic} alt=""/>
                    </div>

                    <div className="introduction">
                      <span>{item.company}</span>
                      <span>{item.name}</span>
                      <span>{item.position}</span>
                    </div>
                   {/* <div className="ppt">
                      <span>ppt</span>
                    </div>*/}
                  </div>
                })
              }

            </div>
          </div>
        {/*  <div className="agenda-but">
            <div className="agenda-but-icon">批量下载PPT</div>
          </div>*/}
        </div>
    )
  }

}
