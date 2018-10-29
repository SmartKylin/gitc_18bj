import React, {Component} from 'react'
import './index.scss'
import defaultAvatar from './images/default-avatar.jpg'
import avatarWrapper from '../../assets/images2/bg_touxiang.png'

const detailGetLeft = (pos) => {
  let ref = 170;
  // let offset = 150;
  switch (pos) {
    case 'left':
      // return ref + offset;
      return -240;
    case 'right':
      return ref;
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
    let {data, speech,stheme} = this.props;
    console.log(stheme,'sthemestheme');
    return (
     <div className={'pic--guest--item'}>
       <div className={'guest--avatar--area'} >
         <div
          className={'guest--avatar'}
          // style={{background:`url(${data.pic || defaultAvatar})`,backgroundSize:"cover"}}
          onMouseEnter={
            this.props.canPop
            ? () => {this.setState({guestBoxVisible: true})}
            : null
          }
         >
           <img src={avatarWrapper} alt="" className='avatar--wrapper'/>
           <img src={data.pic || defaultAvatar} alt=""/>
         </div>
         
         <div
          className="guest--detail"
          style={{
            left: detailGetLeft(this.props.pos)
          }}
         >
           <div className='guest--detail--top'>
             <div className='detail--name'>{data.name}</div>
             <div className='detail--com'>{data.company}{data.position}</div>
           </div>
           <div className="guest--detail--bottom">{data.summary}</div>
           <div className='guest--detail--top' style={{display: stheme ? 'block' : 'none'}}>
             <div className='detail--com'>{data.stheme? `主题 :  ${data.stheme}`: ''}</div>
           </div>
           <div className="guest--detail--bottom" style={{display:stheme ? 'block' : 'none'}}>{data.sintroduce ? data.sintroduce: '' }</div>
         </div>
        {/* <div className="guest--detail--box"
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
         </div>*/}
       </div>
       <div className="buju-name">{data.name}</div>
       <div className="buju">
         <div style={{marginTop:'-10px',fontSize:'12px',fontWeight:'100'}}>
           {data.company}
         </div>
         <div className="fon" style={{fontSize:'10px',fontWeight:'lighter',fontFamily:''}}>
           {data.position}
         </div>
       </div>
     </div>
    )
  }
}
