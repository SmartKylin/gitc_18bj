import React, { Component } from 'react';

import {
    Router,
    Route
} from 'react-router-dom'
import Wrapper from 'components/Wrapper'
import createBrowserHistory from 'history/createBrowserHistory'
import AboutMeet from '../containers/aboutMeet'
import NewHome from '../components/test'
let history = createBrowserHistory();

const RouterMap = class extends Component {
    render() {
        history.openPop = this.props.openPop
        history.setLoginCb = this.props.setLoginCb
        history.closePop = this.props.closePop
        return (
            <Router history={history}>
                <Wrapper openPop={this.props.openPop} history={history} setLoginCb={this.props.setLoginCb}>
                    <Route exact path="/" component={AboutMeet}/>
                    <Route path="/home" component={NewHome}></Route>

                </Wrapper>
            </Router>
        )
    }
};
export default RouterMap
