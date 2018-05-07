import React from 'react'
import './index.scss'
import Title from "../Title/index";
import { getCooperative } from '../../services/home'

const data = [
  {row:1,column:[
    {img:1},
    {img:2},
    {img:3},
    {img:4},
    {img:5},
    {img:6},
    {img:7},
    {img:8},
  ]},
  {row:2,column:[
    {img:1},
    {img:2},
    {img:3},
    {img:4},
    {img:5},
    {img:6},
    {img:7},
    {img:8},
  ]},
  {row:3,column:[
    {img:1},
    {img:2},
    {img:3},
    {img:4},
    {img:5},
    {img:6},
  ]},
  {row:4,column:[
    {img:1},
    {img:2},
    {img:3},
    {img:4},
    {img:5},
    {img:6},
  ]},
  {row:5,column:[
    {img:1},
    {img:2},
    {img:3},
    {img:4},
    {img:5},
    {img:6},
    {img:7},
    {img:8},
  ]},
  {row:6,column:[
    {img:1},
    {img:2},
    {img:3},
    {img:4},
    {img:5},
    {img:6},
    {img:7},
    {img:8},
  ]},
  {row:7,column:[
    {img:1},
    {img:2},
    {img:3},
    {img:4},
    {img:5},
    {img:6},
  ]},
  {row:8,column:[
    {img:1},
    {img:2},
    {img:3},
    {img:4},
    {img:5},
    {img:6},
  ]},
]
export default class Cooperative extends React.Component{

  constructor(props){
    super(props)
  }

  componentWillMount(){
    getCooperative(81).then(res => res && res.json()).then(v => {

    })
  }

  render(){
    return <div className="cooperative_box">
      <Title Title="合作伙伴" EnglishName="PARTNERS"/>
      <div style={{marginTop:'100px'}}></div>
      {
        data.map( (v, i) => {
          return <div className="cooperative_box_row" key={i}>
            {
              v.column.map( (j, ind) => <div key={ind} className="cooperative_box_item">
                {j.img}
              </div>)
            }
          </div>
        })
      }
    </div>
  }
}
