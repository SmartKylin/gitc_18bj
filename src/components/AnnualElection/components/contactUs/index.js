import React, { Component } from 'react';
import flowPic from '../../assets/img/flow.png'
import TitlePic from '../../assets/img/title6.png'
import share1 from '../../assets/img/share1.png'
import share2 from '../../assets/img/share2.png'
import share3 from '../../assets/img/share3.png'
import share4 from '../../assets/img/share4.png'
import NativeShare from 'nativeshare'
const title='GITC年度竞选'
const url='http://127.0.0.1:3000/annual'
class ContactUs extends Component {
    constructor(props){
        super(props)
    
    }
    getShare = () => {
    
    }
    getShare2 = () => {
        
    }
    getShare3 = () => {
        
    }
    getShare5 = () => {
        
    }

  render() {
    return (
        <div className="ContactUs">
            <img className='main_title' src={TitlePic}/>
            <ul>
                <li>
                    <p>在线咨询</p>
                    <a style={{cursor: 'pointer'}} target='_blank' href='http://wpa.qq.com/msgrd?v=3&uin=3598724352&site=qq&menu=yes'><img onClick={this.onGetqq} src={share1}/></a>
                </li>
                <li>
                    <p>咨询热线</p>
                    <p>010-86466226</p>
                </li>
                <li>
                    <p>分享活动</p>
                    <div>
                        <a href={`https://connect.qq.com/widget/shareqq/iframe_index.html?title=${title}&url=${url}`}><img style={{cursor: 'pointer'}} onClick={this.getShare}src={share1}/></a>
                        <a href={`http://v.t.sina.com.cn/share/share.php?title=${title}&url=${url}`}><img style={{cursor: 'pointer'}} onClick={this.getShare2}src={share2}/></a>
                        <a href={`http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=${title}&url=${url}`}><img style={{cursor: 'pointer'}} onClick={this.getShare3}src={share3}/></a>
                        <a href={`http://s.jiathis.com/qrcode.php?title=${title}&url=${url}}`}><img style={{cursor: 'pointer'}} onClick={this.getShare5}src={share4}/></a>
                    </div>
                </li>
            </ul>
        </div>
    );
  }
}

export default ContactUs;

