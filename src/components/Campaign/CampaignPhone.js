import React from 'react'

import './CampaignPhone.scss'
import {Form, Input,Button} from 'antd';

const FormItem = Form.Item;

class CampaignPhone extends React.Component {

  constructor(props) {
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;

    return <div className='campaign-phone-box'>
      <div className='campaign-phone-banner'>
        <img src="" alt=""/>
      </div>
      <div className='campaign-phone-selection-rules'>

      </div>
      <div className='campaign-phone-character'>

      </div>
      <div className='campaign-phone-enterprise'>

      </div>
      <div className='campaign-phone-product'>

      </div>
      <div className='campaign-phone-information'>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
              label='姓名'
          >
            {getFieldDecorator('name', {
              rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
            })(
                <Input/>
            )}
          </FormItem>

          <FormItem
              label='公司'
          >
            {getFieldDecorator('gs', {
              rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
            })(
                <Input/>
            )}
          </FormItem>

          <FormItem
              label='职务'
          >
            {getFieldDecorator('zw', {
              rules: [{required: true, message: 'Please input your nickname!', whitespace: true}],
            })(
                <Input/>
            )}
          </FormItem>

          <FormItem
              label="手机"
          >
            {getFieldDecorator('phone', {
              rules: [{required: true, message: 'Please input your phone number!'}],
            })(
                <Input/>
            )}
          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit">提交</Button>
          </FormItem>


        </Form>
      </div>
    </div>
  }
}

export default Form.create()(CampaignPhone);