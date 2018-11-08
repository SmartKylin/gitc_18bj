import React, {Component} from 'react'

import Header from "../../containers/Head";

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHeader: true
    }
  }

  componentDidMount() {
    let pathname = window.location.pathname;
    if(pathname === '/campaign' || pathname === '/success'){
      this.setState({
        isHeader:false
      })
    }
  }

  render() {
    let {isHeader} = this.state
    return (
        <div>
          {isHeader ? <Header/> :  null}

          {this.props.children}

        </div>

    )
  }
}