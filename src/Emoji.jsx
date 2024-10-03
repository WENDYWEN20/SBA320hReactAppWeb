import { useState, useEffect } from 'react'
import SideBar from "./components/SideBar";
import RandomEmoji from './components/RandomEmoji.jsx'
import './Emoji.css'

export default function Emoji() {

const [emojiAPI, setEmojiAPI]=useState([])
const getEmojiAPI = async () => {
    try {
      const response = await fetch(
        // Make fetch request and store the response
        `https://emoji-api.com/emojis?access_key=058c1bec33b9cec69c624b9f03ad0db388266e92` 
      );
      // Parse JSON response into a JavaScript object
  
      const dataAPI = await response.json();
      console.log(dataAPI);
     setEmojiAPI(dataAPI)
    }catch (error) {
        console.error(error);
}
}
useEffect(() => {
    getEmojiAPI();
  }, []);


  const min = 1;
  const max = 1858;
  const randNum = min + Math.floor(Math.random() * (max - min));


const [newRand, setRand]=useState(randNum)
const newRandom=()=>{
    setRand(min + Math.floor(Math.random() * (max - min)))
}
  
//   console.log(randnew)
  
  return (
    <>
      <div className="App">

      <SideBar /> 
          
      </div>
            <div>  <p style={{'font-size': '50px'}} > 🔍 😉{'\u{1F44d}'}🥹🏊 &#129303; &#127862; 🥰🤖 &#128541; 😁 👺💪🚙  &#x1F916;🤠 {'\u{1F615}'} 🥳⛪😎🔥👍😀🚁💩 🗿🦬 🏀 </p> 
            </div>
            <div> <button onClick={newRandom}>Click for New Emoji</button></div>
            <div>  {emojiAPI.length>0 ? <div> <RandomEmoji emoji={emojiAPI} rand={newRand}/></div> : <p>Loading()</p>}</div>

    </>
  )
}


