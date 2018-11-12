import React from 'react'
import './index.scss'
import hezuohuoban from './image/最新版本1.png'
import {getListImgs} from "../../services/getListNews";
import Title from "../../components/MeetingTitle";

export default class CooperativePartner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  componentDidMount() {

    let promiseArr = [105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115].map(item => {
      return getListImgs(item).then(res => res.json())
    })

    Promise.all(promiseArr).then((data) => {
      this.setState({data})
    })

  }

  render() {
    const {data} = this.state
    return <div  className='cooperative-partner-box-box'>
    {/*  <Title title={'合作伙伴'} englishName={'PRESIDIUNM'}/>
      <div className='cooperative-partner-box'>
        {
          data && data.length > 0 && data.map((item, key) => {
            return <div key={key} className='cooperative-partner-map'>
              <div className='cooperative-partner-title'>{item.other && item.other.name}</div>
              <div className='image-data-box-box'>
                {
                  item.data &&  item.data.map((i,j) => {
                    return <ImageData key={j} data={i}/>
                  })
                }
              </div>

            </div>
          })
        }
      </div>*/}
      <div cooperative-partner-box-box-img>
        <img src={hezuohuoban} alt=""/>
      </div>
    </div>
  }
}

const ImageData = ({data}) => {
  return <div className='image-data-box'>
      <div className='image-data-box-item'>
        <img src={data.img} alt=""/>
      </div>
  </div>
}