import React from 'react'
import CampaignPhone from './CampaignPhone'
import CampaignPC from './CampaignPC'
import {getDate3} from "../../services/home";
import exist from "exist.js";

export default class Campaign extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clientWidth: '',
      campaignData:''
    }
  }

  componentDidMount() {
    this.getClientWidth()
    getDate3()
        .then(res => res && res.json())
        .then(data => {
          const campaignData = exist.get(data, 'data')
          this.setState({
            campaignData,
          })
        })
  }

  getClientWidth = () => {
    const w = document.documentElement.clientWidth || document.body.clientWidth;
    this.setState({
      clientWidth: w
    })
  }


  render() {
    let {clientWidth,campaignData} = this.state
    return <div>
      {
        clientWidth > 1000 ? <CampaignPC campaignData={campaignData}/> : <CampaignPhone campaignData={campaignData}/>
      }
    </div>
  }
}