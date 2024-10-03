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
         <li>Name: {emoji[rand].unicodeName}</li>
         <li>Character: {emoji[rand].character}</li>
         <li>Group: {emoji[rand].group}</li>
         <li>SubGroup: {emoji[rand].subGroup}</li>
         <li>Unicode: {emoji[rand].codePoint}</li>
         </ul>
         </div>
       </>


    )
}