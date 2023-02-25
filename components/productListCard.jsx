import React from 'react'
import { useState } from 'react'

export default function productListCard(props) {
  let [visible,setVisible]= useState(false)
  return (
    <div className='productCard' onClick={()=>{setVisible(!visible)}}>
      <div className='productCardContents'>
      <div className='productCardHead' style={props.color ? { color : props.color} : {} }>{props.title}</div>
      <div className='productCardText' style={ visible ? { display : 'block'}:{ display : "none"}}>{props.text}</div>
      </div>
      <div className='productCardImg'>
      {props.image ? <div></div> : <div></div> }
      </div>
      
    </div>
  )
}
