import React, {Component} from 'react'

import Header from "../../containers/Head";

export default class extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>

        )
    }
}