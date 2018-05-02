import React from 'react'
import './lightMeet.scss'
import fetch from '../../fetch'

class lightMeet extends React.Component{
    componentDidMount(){
        var aa = fetch.get('http://120.92.10.182:8000/api/gitc/img-74/list.json?token=de33c0eedd872976e691fc878a5e349c')
        console.log(aa.then(v => console.log(v), err => console.log(err)),'aaaaa')
    }
    render(){
        return(
            <div className='main_light'>
                <div className='view_tit'>
                    <span>大会亮点</span>
                    <span>HIGHT LIGHTS</span>
                </div>
            </div>
        )
    }
}

export default lightMeet