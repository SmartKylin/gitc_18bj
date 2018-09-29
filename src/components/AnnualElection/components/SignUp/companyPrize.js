import React, { Component } from 'react';
import { Form, Input, Button, message  } from "antd";
import {getToken, createCom, onUploadImg} from  '../../../../services/create';
const FormItem = Form.Item;
const { TextArea } = Input;

class PrizePage1 extends Component {
  constructor(props){
    super(props)
    this.state = {
      award_name: '2018年度互联网最佳服务提供奖',
      images: '',
      name: "",
      company_web: "",
      address: "",
      contacts: "",
      phone: "",
      position: "",
      email: "",
      company_profile: "",
      run_situation: "",
      contribution: "",
      uploadfile: '',
      key:'',
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
      award_name: v.target.value,
    })
  }
  onSubmit = (e) => {
    const {key} = this.state
    createCom(key, {...this.state})
    .then(res => res.json())
    .then(res => {
      // notices.success(res.message)
      if(res && res.status){
        this.props.onControlFlag(false)
        // message.success(res.message)
      } else {
        this.setState({
          msgNotices: res.message
        })
        this.props.onControlFlag(true)
      }
    })
  }
  onAddLogo = (v) => {
    const {key} = this.state
    this.setState({
      uploadfile: v.target.value
    })
    onUploadImg(key, {uploadfile: v.target.value})
    .then(res => res.json())
    .then(res => {
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
    
    const {num,
    award_name,
    images,
    name,
    company_web,
    address,
    contacts,
    phone,
    position,
    email,
    company_profile,
    run_situation,
    contribution, msgNotices} = this.state
    return (<div className='page'>
        <h3>企业奖项报名表</h3>
        <table width="570" align="center">
          <tbody>
            <tr style={{height: 22, borderBottom: '1px solid #e8af0b', }}>
                  <td rowspan="4" style={{height: 30, borderRight: '1px solid #e8af0b', }}>
                      竞选奖项名称
                  </td>
                  <td colspan="5" style={{borderRight: 'none',}}>
                  <select value={award_name} onChange={this.handleChange}>
                    <option value="2018年度互联网最具价值产品奖">2018年度互联网最具价值产品奖</option>
                    <option value="2018年度互联网最具技术创新奖">2018年度互联网最具技术创新奖</option>
                    <option value="2018年度互联网最具信赖产品奖">2018年度互联网最具信赖产品奖</option>
                    <option value="2018年度互联网最具人气产品奖">2018年度互联网最具人气产品奖</option>
                  </select>
                  </td>
              </tr>

            {/*企业信息  */}
            <tr style={{height: 38}} className='firstTab'>
              <td rowspan="6" style={{height: 120}}>
                企业基本信息
              </td>
              <tr style={{width: 410}}>
                <td colspan="2" style={{textAlign: 'center'}}>
                    企业名称
                </td>
                <td colspan="3" style={{ borderBottom: '1px solid #e8af0b',borderRight: 'none', width: 422}}>
                <Input placeholder='请填写企业名称' value={name} onChange={e => this.setState({name: e.target.value})}/></td>
              </tr>
              <tr>
                <td colspan="2" style={{width: 100}}>
                    企业官网
                </td>
                <td colspan="3"><Input  placeholder='请填写企业官网地址' value={company_web}  onChange={e => this.setState({company_web: e.target.value})}/></td>
              </tr>
              <tr>
                <td colspan="2" style={{width: 100}}>
                    企业地址
                </td>
                <td colspan="3"><Input value={address}  placeholder='请填写企业地址' onChange={e => this.setState({address: e.target.value})}/></td>
              </tr>
              <tr style={{height: 38, borderBottom: 'none'}} className='firstTab'>
                <td rowspan="6" style={{height: 120, width: 40}}>
                  联系人
                </td>
                <tr style={{width: 410}}>
                  <td colspan="2" style={{width: 80}}>
                      姓名
                  </td>
                  <td colspan="3" style={{ borderBottom: '1px solid #e8af0b',borderRight: 'none', width: 422}}>
                  <Input value={contacts}  placeholder='请填写联系人姓名' onChange={e => this.setState({contacts: e.target.value})}/></td>
                </tr>
                <tr style={{width: 410}}>
                  <td colspan="2">
                      职位
                  </td>
                  <td colspan="3" ><Input placeholder='请填写联系人的职位' value={position} onChange={e => this.setState({position: e.target.value})}/></td>
                </tr>
                <tr style={{width: 410}}>
                  <td colspan="2" >
                      电话
                  </td>
                  <td colspan="3" ><Input placeholder='请填写联系人电话' value={phone} onChange={e => this.setState({phone: e.target.value})}/></td>
                </tr>
                <tr style={{width: 410, borderBottom: 'none'}}>
                  <td colspan="2">
                      邮箱
                  </td>
                  <td colspan="3" ><Input placeholder='请填写联系人的邮箱' value={email} onChange={e => this.setState({email: e.target.value})}/></td>
                </tr>
              </tr>
            </tr>
            <tr>
              <td colspan="2">
                  企业简介<br/>（不超过500字）
              </td>
              <td colspan="3"><TextArea rows={4} style={{maxHeight: 95, minHeight: 95, }} 
              value={company_profile}  onChange={e => this.setState({company_profile: e.target.value})}
              placeholder='（企业的成立时间、规模、服务理念、主营产品、荣誉、发展目标等）'/></td>
            </tr>
            <tr>
              <td colspan="2">
                  2018年度基本运营状况
              </td>
              <td colspan="3"><TextArea rows={4} style={{maxHeight: 95, minHeight: 95, }} 
              value={run_situation}  onChange={e => this.setState({run_situation: e.target.value})}
              placeholder='（简述企业主营产品、经营方式、客户范围、市场份额、盈利状况等）'/></td>
            </tr>
            <tr>
              <td colspan="2">
                  2018年度对互联网行业的贡献描述
              </td>
              <td colspan="3"><TextArea rows={4} style={{maxHeight: 95, minHeight: 95, }} 
              value={contribution}  onChange={e => this.setState({contribution: e.target.value})}
              placeholder='（简述企业产品或服务对互联网行业的影响与贡献等）'/></td>
            </tr>
          </tbody>
        </table>
        <p className='errNotices'>{msgNotices}</p>
        <div className='bom'><Button onClick={() => this.onAddLogo}>
          <input type="file" onChange={this.onAddLogo}/>点击添加企业LOGO</Button>
          <Button onClick={(e) => this.onSubmit(e)}>提交</Button></div>
      </div>
    );
  }
}

export default PrizePage1;
