import React from 'react'
import './CampaignPC.scss'
import {Form, Input, Button, Checkbox, Modal} from 'antd'
import LoopCheck from './loopCheck'
import {getDate5} from '../../services/home'
import HeadPic from './images/header.png'
const FormItem = Form.Item;

class CampaignPC extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      visible: false,
      detailData: null,
      checkedVal: '',
      checkedData: [],
      checkedData2: [],
      checkedData3: [],
      checkedData4: [],
      checkedData5: [],
      checkedData6: [],
      checkedData7: [],
      checkedData8: [],
      checkedData9: [],
      isFlag: false
    }
  }
  handleSubmit = (e) => {
    const confirm = window.confirm;
    const {checkedData, checkedData2, checkedData3, checkedData4, checkedData5, checkedData6, 
      checkedData7, checkedData8, checkedData9} = this.state
    let arr = checkedData.concat(checkedData2).concat(checkedData3)
    .concat(checkedData4).concat(checkedData5).concat(checkedData6).concat(checkedData7)
    .concat(checkedData8).concat(checkedData9)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      let params = {
        ppl: 18,
        voter: values.voter,
        company: values.company,
        position: values.position,
        phone: values.phone,
        vlist: arr
      }
      arr.length >= 50 && values.voter && values.company && values.position && values.phone && this.setState({isFlag: true})
      // checkedData.length >= 5 ? checkedData2.length >= 5 ? checkedData3.length >= 10 ? 
      // checkedData4.length >= 5 ? values.voter && values.company && values.position && values.phone
      // ? getDate5(params)
      // .then(res => res.json())
      // .then(v => alert(v.message)) : '': alert('最具影响力企业奖项至少选择5项，请完成选择后再提交信息。'): alert('技术新锐力量奖至少选择10个'): 
      // alert('技术杰出贡献奖项至少选择5项，请完成选择后再提交信息。'): alert('技术领军人物奖项至少选择5项，请完成选择后再提交信息。')
      checkedData.length >= 5 ?  checkedData2.length >= 5 ? checkedData3.length >= 10 ? checkedData4.length >= 5 ?
      checkedData5.length >= 5 ? checkedData6.length >= 5 ? checkedData7.length >= 5 ? checkedData8.length >= 5 ?
      checkedData9.length >= 5 ? values.voter && values.company && values.position && values.phone && 
      getDate5(params)
      .then(res => res.json())
      .then(v => {if(confirm(v.message)){window.location = '/success'} this.setState({isFlag: false})}) : alert('最具技术创新奖项至少选择5项，请完成选择后再提交信息。') : alert('最具信赖产品奖项至少选择5项，请完成选择后再提交信息。')  : 
      alert('最具价值产品奖项至少选择5项，请完成选择后再提交信息。') : alert('最佳服务提供奖项至少选择5项，请完成选择后再提交信息。') : alert('最佳合作伙伴奖项至少选择5项，请完成选择后再提交信息。') :
       alert('最具影响力企业奖项至少选择5项，请完成选择后再提交信息。') : alert('技术新锐力量奖项至少选择10项，请完成选择后再提交信息。')
       :alert('技术杰出贡献奖项至少选择5项，请完成选择后再提交信息。') :  alert('技术领军人物奖项至少选择5项，请完成选择后再提交信息。')
    });
  }
  onDetail = (val) => {
    this.setState({
      visible: true,
      detailData: val
    })
  }
  onChangeCheck = (v, total) => {
    if(total.id == 117) {
      if(v.length > 5){
        alert('此奖项只能投五票');
        v.pop()
        this.setState({
          checkedData: v,
        })
        return;
      } else {
        this.setState({
          checkedData: v
        })
      }
    } else if(total.id == 118) {
      if(v.length > 5){
        alert('此奖项只能投五票');
        v.pop()
        this.setState({
          checkedData2: v,
        })
        return;
      } else {
        this.setState({
          checkedData2: v
        })
      }
    } else if(total.id == 119) {
      if(v.length > 10){
        alert('此奖项只能投十票');
        v.pop()
        this.setState({
          checkedData3: v,
        })
        return;
      } else {
        this.setState({
          checkedData3: v
        })
      }
    } else if(total.id == 120) {
      if(v.length > 5){
        alert('此奖项只能投五票');
        v.pop()
        this.setState({
          checkedData4: v,
        })
        return;
      } else {
        this.setState({
          checkedData4: v
        })
      }
    } else if(total.id == 121) {
      if(v.length > 5){
        alert('此奖项只能投五票');
        v.pop()
        this.setState({
          checkedData5: v,
        })
        return;
      } else {
        this.setState({
          checkedData5: v
        })
      }
    } else if(total.id == 122) {
      if(v.length > 5){
        alert('此奖项只能投五票');
        v.pop()
        this.setState({
          checkedData6: v,
        })
        return;
      } else {
        this.setState({
          checkedData6: v
        })
      }
    } else if(total.id == 123) {
      if(v.length > 5){
        alert('此奖项只能投五票');
        v.pop()
        this.setState({
          checkedData7: v,
        })
        return;
      } else {
        this.setState({
          checkedData7: v
        })
      }
    } else if(total.id == 124) {
      if(v.length > 5){
        alert('此奖项只能投五票');
        v.pop()
        this.setState({
          checkedData8: v,
        })
        return;
      } else {
        this.setState({
          checkedData8: v
        })
      }
    } else if(total.id == 125) {
      if(v.length > 5){
        alert('此奖项只能投五票');
        v.pop()
        this.setState({
          checkedData9: v,
        })
        return;
      } else {
        this.setState({
          checkedData9: v
        })
      }
    }
  }

  render(){
    const {campaignData,} = this.props
    const {detailData, isFlag} = this.state
    return <div className='CampaignPC'>
      <Header/>
      <div className='sctions'> 
        <div className='title_sec'>
          <p className='tit'>投票规则</p>
          <p className='tit'>为确保GITC2018年度评选投票公正公平性，专家投票时应遵守以下规定：</p>  
          <p>1、投票时间：2018年11月10日至11月13日。</p>  
          <p>2、投票方法：在候选名单中选择获奖选手，进行统一投票。</p>  
          <p>3、投票限制：每位专家仅且只拥有一次投票机会，多次投票无效。</p>
          <p>4、权重分配：专家投票权重占整体票数的60%；大众投票权重占整体票数的40%。</p>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <div className='choose'>
          {
            campaignData && campaignData.map((v, k)=> 
              <LoopCheck key={k} campaignDat={v} 
              onChangeCheck={this.onChangeCheck} onDetail={this.onDetail}/>
              )
          }
          </div>
          <Vote handleSubmit={this.handleSubmit} {...this.props} isFlag={isFlag}/>
        </Form>
      </div>
      <Modal
          className='pcModal'
          visible={this.state.visible}
          onOk={() => this.setState({
            visible: false
          })}
          onCancel={() => this.setState({
            visible: false
          })}
        > 
          {
            detailData && <div className='specific'>
              <div className='detailPic'><img src={detailData.pic}/></div>
              {/* <p className='name'>{detailData.name}</p> */}
              <p className='company' style={{fontSize:'17px'}}>{detailData.name}</p>
              {detailData.pl_id == 117 || detailData.pl_id == 118 || detailData.pl_id == 119 ? 
              <p style={{textAlign: 'center', margin: '4px 0'}} >{detailData.position}<br/>{detailData.company}</p> : ''}
              <p className='detailCont'>{detailData.summary}</p>
            </div>
          }
         
      </Modal>
    </div>
  }
}

const Header = () => {
  return <div className='header'>
        <img src={HeadPic}/>
  </div>
}
const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 12 },
  // colon: false
};
const Vote = (props) => { 
  const { form: {getFieldDecorator},isFlag } = props;
  return <div className='form_submit'>
      <div className='center_form'>
        <FormItem {...formItemLayout} label='姓名'>
        {getFieldDecorator('voter', {
            rules: [{
              required: true,
              message: '请输入您的姓名',
            }],
          })(
          <Input/>)}
        </FormItem>
        <FormItem {...formItemLayout} label='公司'>
        {getFieldDecorator('company', {
            rules: [{
              required: true,
              message: '请输入您所在的公司',
            }],
          })(
          <Input/>)}
        </FormItem>
        <FormItem {...formItemLayout} label='职务'>
          {getFieldDecorator('position', {
              rules: [{
                required: true,
                message: '请输入您在公司的职务',
              }],
            })(
            <Input/>)}
        </FormItem>
        <FormItem {...formItemLayout} label='手机'>
          {getFieldDecorator('phone', {
              rules: [{
                required: true,
                message: '请输入您的手机号',
              }],
            })(
            <Input/>)}
        </FormItem>
        <FormItem className='btn'>
          <Button loading={isFlag} type="primary" htmlType="submit">
            投票
          </Button>
        </FormItem>  
      </div>
      </div>
}


export default Form.create()(CampaignPC)