import React from 'react'
import {Form, Modal, Checkbox, message} from "antd";
import {awardType} from './imgSrc'
const CheckboxGroup = Checkbox.Group;

const FormItem = Form.Item;

class CampaignPhoneForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      detailsData: '',
      checkedValues: '',
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
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
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  onChange = (checkedValues, id) => {
    message.config({
      top: 200,
      duration: 1,
    });
    if (id == 119 && checkedValues && checkedValues.length < 11) {
      this.setState({
        checkedValues
      })
      let {setData} = this.props
      setData(checkedValues, id)
    } else {
      if (checkedValues && checkedValues.length < 6) {
        this.setState({
          checkedValues
        })

        let {setData} = this.props
        setData(checkedValues, id)

      } else {

        if (id == 119) {
          message.info('此奖项只能投十票')
        } else {
          message.info('此奖项只能投五票')
        }

      }
    }

  }

  render() {
    let {data} = this.props
    const {detailsData, checkedValues} = this.state
    return <div className='campaign-map'>
      <Form onSubmit={this.handleSubmit}>
        <div className='campaign-map-name'>
        {/* <span>{data.name}</span><span>{`(${data.other})`}</span> */}
        <img src={awardType(data.id)}/>
        <p  style={{color: '#bfbfbf', textAlign: 'center'}}>（以下名单按照拼音首字母排序）</p>
        </div>
        <FormItem label=" ">
          <CheckboxGroup value={checkedValues} style={{width: '100%'}} onChange={(v) => this.onChange(v, data.id)}>
            <div className='campaign-map-box'>
              {
                data && data.data.length > 0 && data.data.map((i, j) => {
                  return <div className='campaign-map-map' key={j}>
                    <div className='campaign-map-map-box'>
                      <img src={i.pic} alt="" onClick={() => this.showModal(i)}/>
                      <div className='xiangqing-box'>
                        {/*<div className='ab' onClick={() => this.showModal(i)}>查看详情</div>*/}

                          <span>{i.name}</span>
                          <div style={{fontSize: '10px'}}>
                            {(data.id == 117 || data.id == 118 || data.id == 119) ?
                                <span style={{marginRight: '5px'}}>{i.company ? i.company : ''}</span> : null}

                            {(data.id == 117 || data.id == 118 || data.id == 119) ?
                                <span>{i.position ? i.position : ''}</span> : null}
                          </div>
                        <Checkbox value={i} style={{marginTop:'5px'}}/>
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
            centered={true}
        >
          <div className='details-box'>
            <img src={detailsData.pic}/>
            <div className='details-box-name'>
              {detailsData.name}
            </div>
            {
              detailsData.company !== '公司' ? <div className='details-box-company'>
                {detailsData.company}
              </div> : null
            }
            {
              detailsData.position !== '公司' ? <div className='details-box-position'>
                {detailsData.position}
              </div> : null
            }

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