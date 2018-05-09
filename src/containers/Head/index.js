import React from 'react'
import Nav from '../../components/Head/nav'
import './head.scss'
import {getListImgs} from '../../services/getListNews'


class Head extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            headData: null
        }
    }
    async componentWillMount () {
        let headData = await getListImgs(73).then(res => res.json())
        await this.setState({
            headData: headData.data
        })
    }
    render(){
        let { headData } = this.state
        return(
            <header className='head'>
                <Nav/>
                <div className='banner'>
                    <div className='banner_img'>
                        {
                            headData && headData.map((val, ind) => {
                                return <img key={ind} alt='' src={val.img}/>
                            })
                        }
                    </div>
                    <button className='enlist'><a href='https://www.bagevent.com/event/1384111' target="_blank">报名参会</a></button>
                </div>
            </header>
        )
    }
}

export default Head