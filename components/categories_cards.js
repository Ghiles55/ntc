import React from 'react'
import { useRouter } from "next/router";

export default function 
(props) {
  console.log(props)
  let router= useRouter()
  console.log(router.push)
  return (
    <div className='H_Categories_Card' onClick={()=>{router.push(props.link)}} >
        <img style={{ height :props.image.height , width: props.image.width }} src={props.image.url} ></img>
        <p>{props.text}</p>
    </div>
  )
}
