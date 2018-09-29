import React, { Component } from 'react';
import { Form, Cascader, Select, Input, Button, message  } from "antd";
import {getToken, createCha} from  '../../../../services/create';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

const options = [{
  value: '2018年度互联网技术领军人物',
  label: '2018年度互联网技术领军人物'
}, {
  value: '2018年度互联网技术杰出贡献',
  label: '2018年度互联网技术杰出贡献'
}, {
  value: '2018年度互联网技术新锐力量',
  label: '2018年度互联网技术新锐力量',
  children: [{
    value: '大数据领域',
    label: '大数据领域',
  }, {
    value: '运维领域',
    label: '运维领域',
  }, {
    value: '人工智能领域',
    label: '人工智能领域',
  }, {
    value: '网络安全领域',
    label: '网络安全领域',
  }, {
    value: '架构领域',
    label: '架构领域',
  }],
}];

class PrizePage1 extends Component {
  constructor(props){
    super(props)
    this.state = {
      award_name:"2018年度互联网技术领军人物",
      award_name2:"",
      name:"",
      images:"",
      company_name:"",
      phone:"",
      position:"",
      email:"",
      company_profile:"",
      industry_status:"",
      summary:"",
      glory:"",
      experience:"",
      achievement:"",
      special_contribution:"",
      influence:"",
      responsibility:"",
      uploadfile:'',
      key: '',
      msgNotices: ''
    }  
  }
  componentWillMount(){
    getToken().then(res => res.json()).then(res => {
      res && res.message == '申请成功' && this.setState({
        key: res.data
      })
    })
  }
  handleChange = (v) => {    
    this.setState({
      award_name: v
    })
  }
  onSubmit = (e) => {
    const {key} = this.state
    createCha(key, {...this.state})
    .then(res => res.json())
    .then(res => {
      if(res && res.status){
        this.props.onControlFlag(false)
        message.success(res.message)
      } else {
        this.setState({
          msgNotices: res.message
        })
        this.props.onControlFlag(true)
      }
    })
  }
  onChangeType = (v) => {
    this.setState({
      award_name: v.target.value
    })
  }
  onChangeType2 = (v) => {
    this.setState({
      award_name2: v.target.value
    })
  }
  onAddPic = (v) => {
    this.setState({
      uploadfile: v
    })
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 14 },
      colon: false
    };
    const formItemLayout2 = {
      labelCol: { span: 5 },
      wrapperCol: { span: 14 },
      colon: false
    };
    const { award_name,award_name2,
    name,
    images,
    company_name,
    phone,
    position,
    email,
    company_profile,
    industry_status,
    summary,
    glory,
    experience,
    achievement,
    special_contribution,
    influence,
    responsibility, msgNotices} = this.state
    return (<div className='page'>
        <h3>人物奖项报名表</h3>
        <table width="570" align="center">
          <tbody>
            <tr style={{height: 22, borderBottom: '1px solid #e8af0b', }}>
                  <td rowspan="4" style={{height: 30, borderRight: '1px solid #e8af0b', }}>
                      竞选奖项名称
                  </td>
                  <td colspan="5" style={{borderRight: 'none', display: 'flex'}}>
                  <select value={award_name} onChange={this.onChangeType} >
                    <option value='2018年度互联网技术领军人物'>2018年度互联网技术领军人物</option>
                    <option value='2018年度互联网技术杰出贡献'>2018年度互联网技术杰出贡献</option>
                    <option value='2018年度互联网技术新锐力量'>2018年度互联网技术新锐力量</option>
                  </select>
                  <select value={award_name2} onChange={this.onChangeType2} style={{display: award_name == '2018年度互联网技术新锐力量' ?
                  'block' : 'none'}}>
                    <option value='大数据领域'>大数据领域</option>
                    <option value='运维领域'>运维领域</option>
                    <option value='人工智能领域'>人工智能领域</option>
                    <option value='网络安全领域'>网络安全领域</option>
                    <option value='架构领域'>架构领域</option>
                  </select>
                  {/* <Cascader value={award_name} options={options} onChange={this.onChangeType} /> */}
                  </td>
              </tr>
            {/*企业信息  */}
            <tr style={{height: 38}} className='firstTab'>
              <td rowspan="6" style={{height: 120}}>
                个人基本信息
              </td>
             
                <tr style={{width: 410}}>
                  <td colspan="2" style={{width: 100}}>
                      姓名
                  </td>
                  <td colspan="3" style={{ borderBottom: '1px solid #e8af0b',borderRight: 'none', width: 422}}>
                  <Input value={name}  placeholder='请填写您的姓名' onChange={e => this.setState({name: e.target.value})}/></td>
                </tr>
                <tr style={{width: 410}}>
                  <td colspan="2" style={{textAlign: 'center'}}>
                      企业名称
                  </td>
                  <td colspan="3" style={{ borderBottom: '1px solid #e8af0b',borderRight: 'none', width: 422}}>
                  <Input  placeholder='请填写完整的企业名称' value={company_name} onChange={e => this.setState({company_name: e.target.value})}/></td>
                </tr>
                <tr style={{width: 410}}>
                  <td colspan="2">
                      职位
                  </td>
                  <td colspan="3" ><Input  placeholder='请填写您在公司的职位' value={position} onChange={e => this.setState({position: e.target.value})}/></td>
                </tr>
                <tr style={{width: 410}}>
                  <td colspan="2" >
                      联系电话
                  </td>
                  <td colspan="3" ><Input value={phone} placeholder='请填写正确格式的号码格式' onChange={e => this.setState({phone: e.target.value})}/></td>
                </tr>
                <tr style={{width: 410, borderBottom: 'none'}}>
                  <td colspan="2">
                      邮箱
                  </td>
                  <td colspan="3" ><Input placeholder='请填写正确格式的邮箱格式'value={email} onChange={e => this.setState({email: e.target.value})}/></td>
                </tr>
            </tr>
         
            {/* 技术简介 */}
            <tr style={{height: 38}} className='firstTab'>
                <td rowspan="3" style={{height: 84}}>
                  公司&职位信息
                </td>
                <tr style={{width: 410}}>
                  <td colspan="2" style={{textAlign: 'center'}}>
                      公司概述
                  </td>
                  <td colspan="3" style={{ borderBottom: '1px solid #e8af0b',borderRight: 'none', width: 422}}>
                  <Input value={company_profile} placeholder='请填写您公司的简述'onChange={e => this.setState({company_profile: e.target.value})}/></td>
                </tr>
                <tr>
                <td colspan="2" style={{width: 100, textAlign: 'center'}}>
                    公司行业地位
                </td>
                <td colspan="3"><Input  placeholder='请填写您公司在行业里的地位' value={industry_status} onChange={e => this.setState({industry_status: e.target.value})}/></td>
                </tr>
                <tr style={{borderBottom: 'none'}}>
                  <td colspan="2" style={{textAlign: 'center'}}>
                      岗位职责
                  </td>
                  <td colspan="3"><Input placeholder='请填写您的岗位职责' value={summary} onChange={e => this.setState({summary: e.target.value})}/></td>
                </tr>
            </tr>
            <tr>
              <td colspan="2">
                  个人简介
              </td>
              <td colspan="3"><TextArea rows={4} style={{maxHeight: 95, minHeight: 95, }} 
              value={glory}  onChange={e => this.setState({glory: e.target.value})}
              placeholder='（个人的教育背景、工作经历、自我评价、专注的技术领域、发展目标等/不超过500字）'/></td>
            </tr>
            <tr>
              <td colspan="2">
                  个人荣誉
              </td>
              <td colspan="3"><TextArea rows={4} style={{maxHeight: 95, minHeight: 95, }} 
              value={experience}  onChange={e => this.setState({experience: e.target.value})}
              placeholder='（荣誉与成就、获奖情况、专利或论文发表等/不超过1000字）'/></td>
            </tr>
            <tr>
              <td colspan="2">
                  相关工作经历
              </td>
              <td colspan="3"><TextArea rows={4} style={{maxHeight: 95, minHeight: 95, }} 
              value={achievement}  onChange={e => this.setState({achievement: e.target.value})}
              placeholder='（简述近年来在互联网行业的工作经历/不超过1000字）'/></td>
            </tr>
            <tr>
              <td colspan="2">
                  2018年度工作成果
              </td>
              <td colspan="3"><TextArea rows={4} style={{maxHeight: 95, minHeight: 95, }} 
              value={special_contribution}  onChange={e => this.setState({special_contribution: e.target.value})}
              placeholder='（个人的工作成果及对公司的贡献/不超过1000字）'/></td>
            </tr>
            <tr>
              <td colspan="2">
                  2018年度个人贡献
              </td>
              <td colspan="3"><TextArea rows={4} style={{maxHeight: 95, minHeight: 95, }} 
              value={influence}  onChange={e => this.setState({influence: e.target.value})}
              placeholder='（个人对企业乃至整个行业的影响和贡献/不超过1000字）'/></td>
            </tr>
            <tr>
              <td colspan="2">
                  个人影响力
              </td>
              <td colspan="3"><TextArea rows={4} style={{maxHeight: 95, minHeight: 95, }} 
              value={responsibility}  onChange={e => this.setState({responsibility: e.target.value})}
              placeholder='（是否有个人微信公众号/微博认证账号，可标注粉丝数；是否有技术类出版读数，可标注销量；是否有线上直播或其他类型技术课程，可标注受众数/不超过1000字）'/></td>
            </tr>
          </tbody>
        </table>
        <p className='errNotices'>{msgNotices}</p>
        <div className='bom'><Button onClick={this.onAddPic}>
          <input type="file" onChange={this.onAddPic}/>点击添加个人近照</Button><Button onClick={this.onSubmit}>提交</Button></div>
      </div>
    );
  }
}

export default PrizePage1;
