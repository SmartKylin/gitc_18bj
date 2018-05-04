import React, {Component} from 'react'
import './index.scss'
import defaultAvatar from './images/default-avatar.jpg'

const detailGetLeft = (pos) => {
  let ref = -221;
  let offset = 150;
  switch (pos) {
    case 'left':
      return ref + offset;
    case 'right':
      return ref - offset;
    default:
      return ref;
  }
}
export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {
      guestBoxVisible: false,
    }
  }

  render () {
    let {data, speech} = this.props;
    return (
     <div className={'pic--guest--item'}>
       <div className={'guest--avatar--area'} >
         <div
          className={'guest--avatar'}
          style={{background:`url(${data.pic || defaultAvatar})`,backgroundSize:"cover"}}
          onMouseEnter={
            this.props.canPop
            ? () => {this.setState({guestBoxVisible: true})}
            : null
          }
         />
         <div className="guest--detail--box"
              style={{
                visibility: this.state.guestBoxVisible ? 'visible' : 'hidden',
                left: detailGetLeft(this.props.pos)
              }}
              onMouseLeave={
                this.props.canPop ?
                () => this.setState({ guestBoxVisible: false})
                :
                null
              }
          >
           <img className="small--avatar" src={data.pic|| defaultAvatar}/>
           <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
             <div style={{marginTop: '44px', fontSize: '16px'}}>{data.name}</div>
             <div style={{fontSize: '12px', marginTop: '8px'}}>{data.company} {data.position}</div>
           </div>
           {
             speech ?
             <div className={'speech--box'}>
               <div className={'addr--time'}>
                 <div>
                   <i className="iconfont icon-positioning" style={{marginRight: '5px'}}/>
                   <span style={{marginRight: '18px'}}>{data.meet}</span>
                   <span style={{marginRight: '40px'}}>{data.meetaddr}</span></div>
                 <div>
                   <i className="iconfont icon-shijian" style={{marginRight: '5px'}}/>
                   <span style={{marginRight: '18px'}}>{data.sdata}</span>
                   <span>{data.stime}</span>
                 </div>
               </div>
               <div className="speech--topic"
                    style={{marginTop: '40px', width: '100%'}}>
                 <span style={{fontWeight: 'bold'}}>演讲主题：</span>
                 {data.stheme}
               </div>
               <div className="topic--intro">
                 <span>主题介绍：</span>
                 {data.sintroduce}
               </div>
             </div> : null
           }
           <div className='guest--intro'>
             <span>个人简介：</span>
             {data.summary}
           </div>
         </div>
       </div>
       <div style={{marginBottom: '10px', fontSize: '16px'}}>{data.name}</div>
       <div>{data.company} {data.position}</div>
     </div>
    )
  }
}