import React from 'react'
import CampaignPhone from './CampaignPhone'
import CampaignPC from './CampaignPC'

export default class Campaign extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clientWidth: ''
    }
  }

  componentDidMount() {
    this.getClientWidth()
  }

  getClientWidth = () => {
    const w = document.documentElement.clientWidth || document.body.clientWidth;
    this.setState({
      clientWidth: w
    })
  }


  render() {
    let {clientWidth} = this.state
    return <div>
      {
        clientWidth > 1000 ? <CampaignPC/> : <CampaignPhone/>
      }
    </div>
  }
}