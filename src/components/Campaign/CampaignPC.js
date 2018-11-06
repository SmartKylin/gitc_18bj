import React from 'react'
import './CampaignPC.scss'
import {Form, Input, Button, Checkbox, Modal} from 'antd'
import LoopCheck from './loopCheck'
import {getDate5} from '../../services/home'
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
      totalChecked: []
    }
  }
  handleSubmit = (e) => {
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
      arr.length ? values.voter && values.company && values.position && values.phone
      ? getDate5(params)
      .then(res => res.json())
      .then(v => alert(v.message)) : '' : alert('请按要求投票')
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
    const {detailData, } = this.state
    return <div className='CampaignPC'>
      <Header/>
      <div className='sctions'> 
        <Form onSubmit={this.handleSubmit}>
          <div className='choose'>
          {
            campaignData && campaignData.map((v, k)=> 
              <LoopCheck key={k} campaignDat={v} 
              onChangeCheck={this.onChangeCheck} onDetail={this.onDetail}/>
              )
          }
          </div>
          <Vote handleSubmit={this.handleSubmit} {...this.props}/>
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
              <p className='company'>{detailData.name}</p>
              <p className='detailCont'>{detailData.summary}</p>
            </div>
          }
         
      </Modal>
    </div>
  }
}

const Header = () => {
  return <div>
        dddds
  </div>
}
const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 12 },
};
const Vote = (props) => { 
  const { form: {getFieldDecorator} } = props;
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
          <Button type="primary" htmlType="submit">
            投票
          </Button>
        </FormItem>  
      </div>
      </div>
}


export default Form.create()(CampaignPC)