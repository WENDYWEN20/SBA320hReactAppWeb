//generate a random Emoji
import {useState} from 'react'
export default function RandomEmoji({emoji, rand}){
    console.log({emoji})
    console.log(rand)
  
    return(
        <>
            <h2>Generate a random Emoji</h2>
        <div> 
            <ul>
         <li style={{'font-size': '25px'}}>Name: {emoji[rand].unicodeName}</li>
         <li style={{'font-size': '25px'}}>Character: {emoji[rand].character}</li>
         <li style={{'font-size': '25px'}}>Group: {emoji[rand].group}</li>
         <li style={{'font-size': '25px'}}>SubGroup: {emoji[rand].subGroup}</li>
         <li style={{'font-size': '25px'}}>Unicode: {emoji[rand].codePoint}</li>
         </ul>
         </div>
       </>


    )
}