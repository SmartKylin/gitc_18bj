import React from 'react'
import './CampaignPC.scss'
import {Form, Input, Button, Checkbox} from 'antd'
const FormItem = Form.Item;

class CampaignPC extends React.Component{
  constructor(props){
    super(props)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
    });
  }

  render(){
    return <div className='CampaignPC'>
      <Header/>
      <Pic/>
      <Vote handleSubmit={this.handleSubmit} {...this.props}/>
    </div>
  }
}

const Header = () => {
  return <div>
        dddds
  </div>
}
const Pic = () => {
  return <div>
        <ul className='personage'>
          <li>
            <button>查看详情</button>
            <Checkbox/>
          </li>
        </ul>
        <ul className='company'></ul>
        <ul className='product'></ul>
  </div>
}
const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 12 },
};
const Vote = (props) => { 
  const { form: {getFieldDecorator}, handleSubmit } = props;
  return <div className='form_submit'>
  <Form onSubmit={handleSubmit}>
        <FormItem {...formItemLayout} label='姓名'>
        {getFieldDecorator('username', {
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
          {getFieldDecorator('post', {
              rules: [{
                required: true,
                message: '请输入您在公司的职务',
              }],
            })(
            <Input/>)}
        </FormItem>
        <FormItem {...formItemLayout} label='手机'>
          {getFieldDecorator('number', {
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
      </Form></div>
}

export default Form.create()(CampaignPC)