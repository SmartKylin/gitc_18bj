import React, { Component } from 'react';
import { Form, Cascader, Input, Button, notification, message, DatePicker } from "antd";
import {getToken, createPro} from  '../../../../services/create';
const FormItem = Form.Item;
const { TextArea } = Input;

class PrizePage1 extends Component {
  constructor(props){
    super(props)
    this.state = {
      award_name: '2018年度互联网最具价值产品奖',
      name: '',
      p_type:"服务器及网络设备",
      marke_time:'',
      related_patent:"",
      certification_or_awards:"",
      company_name:"",
      address:"",
      contacts:"",
      phone:"",
      position:"",
      email:"",
      product_profile:"",
      industry_location:"",
      user_location:"",
      goal:"",
      case_analysis:"",
      feedback:"",
      coverage:"",
      ue:"",
      key: '',
      msgNotices: '',
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
    const dat = ['2018年度互联网最具价值产品奖', '2018年度互联网最具技术创新奖', 
    '2018年度互联网最具信赖产品奖', '2018年度互联网最具人气产品奖']
    this.setState({
      award_name: v.target.value,
    })
  }
  onSubmit = (e) => {
    const {key} = this.state
    createPro(key, {...this.state})
    .then(res => res.json())
    .then(res => {
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
    const {award_name, name, p_type, marke_time, related_patent, certification_or_awards, company_name, 
      address, contacts, phone, position, email, product_profile, industry_location, user_location, goal, 
      case_analysis, feedback, coverage, ue, msgNotices} = this.state
    const {getFieldDecorator} = this.props.form
    return (<div className='page'>
        <h3>产品奖项报名表</h3>
        <Form>
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
                <tr style={{height: 38}} className='firstTab'>
                  <td rowspan="5" style={{height: 120}}>
                      产品基本信息
                  </td>
                  <tr style={{width: 410}}>
                    <td colspan="2" style={{textAlign: 'center', width: 100}}>
                        名称
                    </td>
                    <td colspan="3" style={{ borderBottom: '1px solid #e8af0b',borderRight: 'none', width: 422}}>
                      <Input value={name} onChange={(e) => {
                        this.setState({name: e.target.value}) }} placeholder='请填写产品的名称'/>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style={{width: 100, textAlign: 'center'}}>
                        类型
                    </td>
                    <td colspan="3">
                      <select  value={p_type} onChange={(e) => this.setState({p_type: e.target.value})}>
                        <option value="服务器及网络设备">服务器及网络设备</option>
                        <option value="CDN服务">CDN服务</option>
                        <option value="网络安全">网络安全</option>
                        <option value="IT基础设施">IT基础设施</option>
                        <option value="云服务">云服务</option>
                        <option value="企业级软件服务">企业级软件服务</option>
                        <option value="其它">其它</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style={{textAlign: 'center'}}>
                        上线时间
                    </td>
                    <td colspan="3">
                      <Input placeholder='如2018-08-01'  value={marke_time} onChange={e => 
                     this.setState({emarke_time: e})}/></td>
                  </tr>
                  <tr>
                      <td colspan="2" style={{textAlign: 'center'}}>
                          相关专利
                      </td>
                      <td colspan="3"><Input value={related_patent} placeholder='请填写产品的相关专利' 
                      onChange={e => this.setState({related_patent: e.target.value})}/></td>
                  </tr>
                  <tr style={{borderBottom: 'none'}}>
                      <td colspan="2" style={{textAlign: 'center'}}>
                          认证&amp;奖项
                      </td>
                      <td colspan="3"><Input placeholder='请填写产品已认证的奖项' value={certification_or_awards} onChange={e => this.setState({certification_or_awards: e.target.value})}/></td>
                  </tr>
                </tr>

              {/*企业信息  */}
              <tr style={{height: 38}} className='firstTab'>
                <td rowspan="6" style={{height: 120}}>
                  企业&amp;联系人信息
                </td>
                <tr style={{width: 410}}>
                  <td colspan="2" style={{textAlign: 'center'}}>
                      企业名称
                  </td>
                  <td colspan="3" style={{ borderBottom: '1px solid #e8af0b',borderRight: 'none', width: 422}}>
                  <Input value={company_name} placeholder='请填写企业全称' onChange={e => this.setState({company_name: e.target.value})}/></td>
                </tr>
                <tr>
                  <td colspan="2" style={{width: 100}}>
                      企业地址
                  </td>
                  <td colspan="3"><Input value={address} placeholder='请填写企业地址' onChange={e => this.setState({address: e.target.value})}/></td>
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
                    <Input value={contacts} placeholder='请填写联系人的姓名' onChange={e => this.setState({contacts: e.target.value})}/></td>
                  </tr>
                  <tr style={{width: 410}}>
                    <td colspan="2">
                        职位
                    </td>
                    <td colspan="3" ><Input placeholder='请填写联系的职位' value={position} onChange={e => this.setState({position: e.target.value})}/></td>
                  </tr>
                  <tr style={{width: 410}}>
                    <td colspan="2" >
                        电话
                    </td>
                    <td colspan="3" ><Input placeholder='请填写联系人手机号' value={phone} onChange={e => this.setState({phone: e.target.value})}/></td>
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
                    产品简介
                </td>
                <td colspan="3"><TextArea rows={4} style={{maxHeight: 95, minHeight: 95, }} 
                value={product_profile}  onChange={e => this.setState({product_profile: e.target.value})}
                placeholder='（产品的品牌、型号、类别、功能、适用范围、使用技术、特色、发展前景）'/></td>
              </tr>
              {/* 技术简介 */}
              <tr style={{height: 38}} className='firstTab'>
                  <td rowspan="4" style={{height: 120}}>
                      技术简介
                  </td>
                  <tr style={{width: 410}}>
                    <td colspan="2" style={{textAlign: 'center'}}>
                        行业定位
                    </td>
                    <td colspan="3" style={{ borderBottom: '1px solid #e8af0b',borderRight: 'none', width: 422}}>
                    <Input value={industry_location}  placeholder='请简述行业定位' onChange={e => this.setState({industry_location: e.target.value})}/></td>
                  </tr>
                  <tr>
                  <td colspan="2" style={{width: 100, textAlign: 'center'}}>
                      用户定位
                  </td>
                  <td colspan="3"><Input value={user_location}  placeholder='请简述产品的用户定位' onChange={e => this.setState({user_location: e.target.value})}/></td>
                  </tr>
                  <tr>
                    <td colspan="2" style={{textAlign: 'center'}}>
                        发展目标
                    </td>
                    <td colspan="3"><Input value={goal}  placeholder='请简述产品的发展目标' onChange={e => this.setState({goal: e.target.value})}/></td>
                  </tr>
                  <tr style={{borderBottom: 'none'}}>
                    <td colspan="2" style={{textAlign: 'center'}}>
                        案例分析
                    </td>
                    <td colspan="3"><TextArea placeholder='请简述对产品的分析' value={case_analysis} onChange={e => this.setState({case_analysis: e.target.value})}
                    rows={4} style={{maxHeight: 95, minHeight: 95, }}/></td>
                  </tr>
              </tr>
              {/* 运营数据 */}
              <tr style={{height: 38, borderBottom: 'none'}} className='firstTab'>
                <td rowspan="3" style={{height: 92}}>
                  运营数据<br/>（非必填）
                </td>
                <tr style={{width: 410}}>
                  <td rowspan="2">
                      基本数据反馈
                  </td>
                  <td style={{borderRight: 'none'}} colspan="3"><Input value={feedback} onChange={e => this.setState({feedback: e.target.value})}/></td>
                </tr>
                <tr>
                  <td colspan="2">
                    用户覆盖率
                  </td>
                  <td colspan="3" style={{ borderBottom: '1px solid #e8af0b',borderRight: 'none', width: 422}}>
                  <Input value={coverage} onChange={e => this.setState({coverage: e.target.value})}/></td>
                </tr>
                <tr style={{borderBottom: 'none'}}>
                  <td colspan="2" style={{width: 100}}>
                    用户体验
                  </td>
                  <td style={{borderRight: 'none'}} colspan="3">
                  <Input value={ue} onChange={e => this.setState({ue: e.target.value})}/></td>
                </tr>
              </tr> 
            </tbody>
          </table>
          <p className='errNotices'>{msgNotices}</p>
          <div className='bom'><Button onClick={(e) => this.onSubmit(e)}>提交</Button></div>
        </Form>
      </div>
    );
  }
}
const WrappedApp = Form.create()(PrizePage1);

export default WrappedApp;
