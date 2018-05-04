import React from 'react'
import './structure.scss'
import { dat, datas } from '../../a.js'
import $ from 'jquery'
import Title from "../../components/Title/index";

class structure extends React.Component{
    toggleShow(ind,node){
        let list = $(node).children()
        list.eq(ind).addClass('on')
    }
    toggleOut(ind,node){
        let list = $(node).children()
        list.eq(ind).removeClass('on')
    }
    onMouseOver(ind,node){
        this.toggleShow(ind,node)
    }
    onMouseOut(ind,node){
        this.toggleOut(ind,node)
    }
    onMouseOvers(ind,node){
        this.toggleShow(ind,node)
    }
    onMouseOuts(ind,node){
        this.toggleOut(ind,node)
    }
    render(){
        return(
            <div className='main_structure'>
              <Title  Title="会议结构" EnglishName="STRUCTURE"/>
                <div className='tit_lead'>主会场</div>
                <div className='stru_content'>
                    <ul className='lead_content'>
                        {
                            dat && dat.map((val, ind) => {
                                return <li key={ind} onMouseOver={() => {this.onMouseOver(ind,'.lead_content')}} onMouseOut={() => {this.onMouseOut(ind,'.lead_content')}}>
                                    <div className='lead_pic'><img src={val.img} alt=''/></div>
                                    <p>
                                        <span>{val.tit}</span>
                                        <span>时代大厦</span>
                                    </p>
                                </li>
                            })
                        }
                    </ul>
                    <ul className='lead_contents'>
                        {
                            dat && dat.map((val, ind) => {
                                return <li key={ind} onMouseOver={() => {this.onMouseOvers(ind,'.lead_contents')}} onMouseOut={() => {this.onMouseOuts(ind,'.lead_contents')}}>
                                    <div className='lead_pic'><img src={val.img} alt=''/></div>
                                    <p>
                                        <span>{val.tit}</span>
                                        <span>时代大厦</span>
                                    </p>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className='hotWord'>
                    <h2>AI（人工智能）、区块链、AR/VR、新零售是当今互联网行业的四大绝对热词。</h2>
                    <p>AI是谷歌、微软等诸多互联网巨头重码押注的未来方向，而区块链将要重构全世界的信用和金融体系，AR/VR凭借其所提供的超凡的视听体验，即将成为下个时代的“MP4格式”，而新零售，则是马云、刘强东等电商大佬厮杀的战场，号称“新零售”之后再无“电商”。不仅如此，未来技术的主要基石大数据和平台架构、主要导向产业升级、核心应用互联网金融也都在即将举办的GITC2018·上海站。GITC主会场将尽揽行业顶级大咖，包容上述所有核心方向，结合宝贵的实践经验，助你拨开迷雾，乘风破浪。</p>
                </div>
                <div className='stru_parallel'>
                    <div className='tit_lead'>分会场</div>
                    <ul className='parallel_content'>
                        {
                             datas && datas.map((val, ind) => {
                                return <li key={ind}>
                                    {
                                        ind % 2 == 0 ? <div>
                                            <div className='text'><h3>{val.tit}</h3><p>{val.content}</p></div>
                                            <div className='pic'><img src={val.img} alt=''/></div>
                                        </div>: <div>
                                            <div className='pic'><img src={val.img} alt=''/></div>
                                            <div className='text'><h3>{val.tit}</h3><p>{val.content}</p></div>
                                        </div>
                                    }
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default structure