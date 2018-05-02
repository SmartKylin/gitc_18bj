import React, {Component} from 'react'
import GuestItem from '../../components/GuestItem'
import {getPopleList} from "../../services/home";
import './index.scss'
export default class ExpertGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      presidentData: [],
      expertData: [],
    }
  }
  async componentWillMount () {
    
    let expertData = await getPopleList(46).then(res => res.json())
    await this.setState({
      expertData: expertData.data
    })

  }
  render () {
    let {expertData} = this.state
    return (
      <div className="all-people">
        <div className="people-group">
          {
            expertData.length
            ? expertData.map((item, index) => (
            <GuestItem data={item} key={index}/>
            ))
            : null
          }
        </div>
      </div>
    )
  }
}