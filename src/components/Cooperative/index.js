import React from 'react'
import './index.scss'
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

  render(){
    return <div className="cooperative_box">
      {
        data.map( (v, i) => {
          return <div className="cooperative_box_row">
            {
              v.column.map( j => <div className="cooperative_box_item">
                {j.img}
              </div>)
            }
          </div>
        })
      }
    </div>
  }
}
