import React from 'react'

export default function products_list_intro(props) {
  return (
    <div className='product_list_intro'>

        <div className='product_list_intro_container'>
            <p className='product_list_intro_title' style={{color: props.color}}> {props.title}</p>
            <p className='product_list_intro_text'>{props.text}</p>
        </div>
        <div style={{ display : "flex", justifyContent : "center" , alignItems : "center"}}>
            <img src={props.url} style={{width: props.size.width, height: props.size.height}}/>
        </div>
    </div>
  )
}
