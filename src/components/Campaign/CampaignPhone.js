import React from 'react'

import './CampaignPhone.scss'
import {Form, Input, Button} from 'antd';
import header from './images/header.png'
import CampaignPhoneForm from './CampaignPhoneForm'

const FormItem = Form.Item;

class CampaignPhone extends React.Component {

  constructor(props) {
    super(props)
    this.arr = []
    this.state = {
      vlist: [],
      objectArr1: [],
      objectArr2: [],
      objectArr3: [],
      objectArr4: [],
      objectArr5: [],
      objectArr6: [],
      objectArr7: [],
      objectArr8: [],
      objectArr9: [],
    }
  }

  componentDidMount() {
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let {objectArr1, objectArr2, objectArr3, objectArr4, objectArr5, objectArr6, objectArr7, objectArr8, objectArr9} =this.state
        let vlist = objectArr1.concat(objectArr2).concat(objectArr3).concat(objectArr4).concat(objectArr5).concat(objectArr6).concat(objectArr7).concat(objectArr8).concat(objectArr9)

        let param = {
          ppl: 18,
          ...values,
          vlist,
        }

        console.log(param,'paramparamparam');
      }
    });
  }


  dataLength = (objectArr) => {

  }


  setData = (data, id) => {
    switch (id) {
      case 117 :
        this.setState({
          objectArr1: data
        })
        break;
      case 118 :
        this.setState({
          objectArr2: data
        })
        break;
      case 119 :
        this.setState({
          objectArr3: data
        })
        break;
      case 120 :
        this.setState({
          objectArr4: data
        })
        break;
      case 121 :
        this.setState({
          objectArr5: data
        })
        break;
      case 122 :
        this.setState({
          objectArr6: data
        })
        break;
      case 123 :
        this.setState({
          objectArr7: data
        })
        break;
      case 124 :
        this.setState({
          objectArr8: data
        })
        break;
      case 125 :
        this.setState({
          objectArr9: data
        })
        break;
    }

  }


  render() {
    let {
      objectArr, vlist,
      objectArr1, objectArr2, objectArr3, objectArr4, objectArr5, objectArr6, objectArr7, objectArr8, objectArr9,
    } = this.state

    console.log('objectArr1', objectArr1, 'objectArr2', objectArr2, 'objectArr3', objectArr3, objectArr4, objectArr5, objectArr6, objectArr7, objectArr8, objectArr9);
    const {campaignData} = this.props

    const {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 6},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 14},
      },
    };

    return <div className='campaign-phone-box'>
      <div className='campaign-phone-banner'>
        <img src={header} alt=""/>
      </div>

      <div className='campaign-phone-selection-rules'>
        <div>
          <div>
            评选投票的规则
          </div>
          <div>
            投票限制：一人只能头一次票；活动共有9个奖项和个人信息都是必填项，只有全部选择和填写后才能提交
          </div>
        </div>

        <div>
          <div>
            为确保GITC2018年度评选投票公正公平性，专家投票时应遵守以下规定：
          </div>
        </div>
        <ul>
          <li>1、投票时间：2018年11月10日至11月13日</li>
          <li>2、投票方法：在候选名单中选择获奖选手，进行统一投票。</li>
          <li>3、投票限制：每位专家仅且只拥有一次投票机会，多次投票无效</li>
          <li>4、权重分配：专家投票权重占整体票数的60%；大众投票权重占整体票数的40%。</li>
        </ul>
      </div>


      {
        campaignData && campaignData.map((item, key) => {

          return <CampaignPhoneForm data={item} setData={this.setData}/>
        })
      }

      <div className='campaign-phone-information'>
        <div className='gerenxinxi'>
          个人信息
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
              label='姓名'
              {...formItemLayout}
          >
            {getFieldDecorator('voter', {
              rules: [{required: true, message: '请输入您的姓名', whitespace: true}],
            })(
                <Input/>
            )}
          </FormItem>

          <FormItem
              label='公司'
              {...formItemLayout}
          >
            {getFieldDecorator('company', {
              rules: [{required: true, message: '请输入您所在的公司', whitespace: true}],
            })(
                <Input/>
            )}
          </FormItem>

          <FormItem
              label='职务'
              {...formItemLayout}
          >
            {getFieldDecorator('position', {
              rules: [{required: true, message: '请输入您在公司的职务', whitespace: true}],
            })(
                <Input/>
            )}
          </FormItem>

          <FormItem
              label="手机"
              {...formItemLayout}
          >
            {getFieldDecorator('phone', {
              rules: [{required: true, message: '请输入您的手机号'}],
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