import React, { useState } from 'react'
import Card from '../card/Card'
import './Grid.css'
import IsWinner from '../helper/IsWinner'
export default function Grid({number}) {
  let [board,setBoard]=useState(Array(number).fill(" "))
  let [turn,setTurn]=useState(true)
  let [winner,setWinner]=useState(null)
  const play=(index)=>{
      if(turn===true){
        board[index]="o"
      }
      else{
        board[index]="x"
      }
      const win=IsWinner(board,(turn) ? "o":"x")
      if(win==="x"||win==="o"){
        setWinner(win)
      }
      setBoard([...board])
      setTurn(!turn)
  }
  const reset=()=>{
    setBoard(Array(number).fill(" "))
    setTurn(true)
    setWinner(null)
  }
  return (
    <div>
      {
        winner && (
          <>
            <h1>Winner is:{winner}</h1>
            <button onClick={reset}>Reset</button>
          </>
        )
      }
         <h1>Current Turn:{(turn)?"o":"x"}</h1>
        <div className="grid">
            
            {board.map((value,index)=><Card gameend={(winner)?true:false} player={value} key={index} onPlay={play} index={index}/>)}
       </div>
    </div>
  )
}
