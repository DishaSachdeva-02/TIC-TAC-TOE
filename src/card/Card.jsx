import React from 'react'
import Icon from '../i/Icon'
import './Card.css'
export default function Card({player,onPlay,index,gameend}) {
    let icon=<Icon/>
    if(player==="x"){
        icon=<Icon name="cross"/>
    }
    else if(player==="o"){
        icon=<Icon name="circle"/>
    }
  return (
    <div className='card' onClick={()=>player===" " && !gameend && onPlay(index)}>
        {icon}
    </div>
  )
}
