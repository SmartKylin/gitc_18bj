import React from 'react'
import {Checkbox} from 'antd'

export default class LoopCheck extends React.Component{
    constructor(props){
        super(props)
    }

    render (){
        const {campaignDat, onDetail, onChangeCheck} = this.props
        return campaignDat && <div>
            <p>{campaignDat.name}</p>
            <Checkbox.Group style={{ width: '100%' }} onChange={(v) => onChangeCheck(v, campaignDat)}>
                <ul>
                    {/* <li span={8}><Checkbox value="A">A</Checkbox></li> */}
                    {
                        campaignDat.data.map(val => <li>
                            <div className='pic'><img src={val.pic}/></div>
                            <p className='btn' onClick={() => onDetail(val)}>查看详情</p>
                            <div className='details'>
                            <Checkbox value={val}>{val.name}</Checkbox>
                            </div>
                        </li>)
                    }
                </ul>
            </Checkbox.Group>
            </div> 
    }

}
