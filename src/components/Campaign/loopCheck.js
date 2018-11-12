import React from 'react'
import {Checkbox} from 'antd'
import {awardType} from './imgSrc'

export default class LoopCheck extends React.Component{
    constructor(props){
        super(props)
    }

    render (){
        const {campaignDat, onDetail, onChangeCheck} = this.props
        console.log(campaignDat, 'campaignDatcampaignDat')
        return campaignDat && <div>
            <img style={{width: '100%', marginBottom: 10}} src={awardType(campaignDat.id)}/>
            {/* <p style={{color: '#e1c277',  fontSize: 16}}>{campaignDat.name}
            <span style={{color: '#399ad4', fontSize: 12, marginLeft: 3}}>({campaignDat.other})</span></p> */}
            <Checkbox.Group style={{ width: '100%' }} onChange={(v) => onChangeCheck(v, campaignDat)}>
                <ul>
                    {/* <li span={8}><Checkbox value="A">A</Checkbox></li> */}
                    {
                        campaignDat.data.map(val => <li>
                            <div className='pic'><img src={val.pic}/></div>
                            <p className='btn' onClick={() => onDetail(val)}>查看详情</p>
                            <div className='details'>
                            <Checkbox value={val}>{val.pl_id == 117 || val.pl_id == 118 || val.pl_id == 119 ?
                            <p style={{textAlign: 'center'}}><span style={{fontSize:'15px'}}>{val.name}</span><br/>{val.position}<br/>{val.company}</p> : val.name}</Checkbox>
                            </div>
                        </li>)
                    }
                </ul>
            </Checkbox.Group>
            </div> 
    }

}

