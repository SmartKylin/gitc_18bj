import React, { Component } from 'react';
import Footers from '../../assets/img/footer.png'

class Footer extends Component {
  constructor(props){
    super(props)
  
  }

  render() {
    return (
        <div className="footer">
            <img src={Footers}/>
        </div>
    );
  }
}

export default Footer;

