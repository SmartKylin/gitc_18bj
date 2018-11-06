import React from 'react'
import {Form, Modal, Checkbox} from "antd";

const CheckboxGroup = Checkbox.Group;

const FormItem = Form.Item;

class CampaignPhoneForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      detailsData:'',
      checkedValues: '',
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  showModal = (detailsData) => {
    this.setState({
      visible: true,
      detailsData
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  onChange = (checkedValues,id) => {
    console.log('checked = ', checkedValues);

    if(id == 119 && checkedValues &&  checkedValues.length < 11){
      this.setState({
        checkedValues
      })
      let {setData} = this.props
      setData(checkedValues,id)
    }else {
      if(checkedValues && checkedValues.length < 6){
        this.setState({
          checkedValues
        })

        let {setData} = this.props
        setData(checkedValues,id)

      }else {

        if(id == 119){
          alert('最多10个')
        }else {
          alert('最多5个')
        }

      }
    }

  }

  render() {
    let {data} = this.props
    const {detailsData,checkedValues} = this.state

    console.log(checkedValues,'checkedValuescheckedValues');
    const {getFieldDecorator} = this.props.form;


    return <div className='campaign-map'>
      <Form onSubmit={this.handleSubmit}>
        <div className='campaign-map-name'>{data.name}</div>
        <FormItem
            label=" "

        >
          <CheckboxGroup value={checkedValues} style={{width: '100%'}} onChange={(v) => this.onChange(v,data.id)}>
            <div className='campaign-map-box'>
              {
                data && data.data.length > 0 && data.data.map((i, j) => {
                  return <div className='campaign-map-map' key={j}>
                    <div className='campaign-map-map-box'>
                      <img src={i.pic} alt=""/>
                      <div className='xiangqing-box'>
                        <div className='ab' onClick={() => this.showModal(i)}>查看详情</div>
                        <Checkbox value={i}> {i.name}</Checkbox>
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
          </CheckboxGroup>
        </FormItem>
        <Modal
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
            style={{
              top: 0,
            }}
        >
          <div className='details-box'>
            <img src={detailsData.pic}/>
            <div className='details-box-name'>
              {detailsData.name}
            </div>
            <div className='details-box-summary'>
              {detailsData.summary}
            </div>
          </div>
        </Modal>
      </Form>
    </div>

  }
}

export default Form.create()(CampaignPhoneForm);