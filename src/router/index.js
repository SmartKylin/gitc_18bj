import React, { Component } from 'react';

import {
    Router,
    Route
} from 'react-router-dom'
import Wrapper from 'components/Wrapper'
import createBrowserHistory from 'history/createBrowserHistory'
import AboutMeet from '../containers/aboutMeet'
import AnnualElection from '../components/AnnualElection'
import Campaign from '../components/Campaign'
import SuccessPage from '../components/SuccessPage'
import news from '../components/news'
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
                    <Route path="/annual" component={AnnualElection}></Route>
                    <Route path='/campaign' component={Campaign}/>
                    <Route path='/success' component={SuccessPage}/>
                    {/*盛况回顾*/}
                    <Route path='/news' component={news}/>
                </Wrapper>
            </Router>
        )
    }
};
export default RouterMap
