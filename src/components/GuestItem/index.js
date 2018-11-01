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
      return -440;
    case 'right':
      return ref;
    default:
      return ref;
  }
}
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestBoxVisible: false,
    }
  }

  render() {
    let {data, speech, stheme} = this.props;
    //console.log(data,'data');
    return (
        <div className={'pic--guest--item'}>
          <div className={'guest--avatar--area'}>
            <div
                className={'guest--avatar'}
                // style={{background:`url(${data.pic || defaultAvatar})`,backgroundSize:"cover"}}
                onMouseEnter={
                  this.props.canPop
                      ? () => {
                        this.setState({guestBoxVisible: true})
                      }
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
                <div className='detail--name--company--position'>
                  <div className='name'>
                    {data.name}
                  </div>
                  <div className='company--position'>
                    <div className='company'>
                      {data.company}
                    </div>
                    <div className='position'>
                      {data.position}
                    </div>
                  </div>
                </div>
                <div className='detail--meetaddr--sdata'>
                  <div className='meetaddr'>
                    {data.meetaddr ? data.meetaddr : '暂无数据'}
                  </div>
                  <div>
                    {data.sdata ? data.sdata : '暂无数据'}
                  </div>
                </div>

              </div>

              <div className="guest--detail--bottom">
                个人简介 : {data.summary}
              </div>


              {
                stheme ?  <div className='guest--detail--stheme'>
                  <div className='detail--stheme-name'>
                    演讲主题 :
                  </div>
                  <div className='detail--stheme'>
                    {data.stheme ? data.stheme : ''}
                  </div>
                </div> : ''
              }

              {
                stheme ? <div className="detail--sintroduce--title">
                  主题简介 : {data.sintroduce ? data.sintroduce : ''}
                </div> : ''
              }

              {/*style={{display: stheme ? 'block' : 'none'}}*/}
            </div>


          </div>
          <div className="buju-name">{data.name}</div>
          <div className="buju">
            <div style={{marginTop: '-10px', fontSize: '12px', fontWeight: '100'}}>
              {data.company}
            </div>
            <div className="fon" style={{fontSize: '10px', fontWeight: 'lighter', fontFamily: ''}}>
              {data.position}
            </div>
          </div>
        </div>
    )
  }
}
