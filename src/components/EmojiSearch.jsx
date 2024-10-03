import {useState, useEffect} from 'react'

export default function Form({props}){
    const [formData, setFormData]=useState({
        searchterm: ""}
      );
    
    const handleChange=(event) =>{
        setFormData({...formData, [event.target.name]:event.target.value})
    }
console.log(props)
console.log({formData})
    const handleSubmit=(event)=>{
        event.preventDefault();
        props.emojiSearch(formData.searchterm)
    }


      return (
        <div> 
           <h3> Search an Emoji </h3>
           <form onSubmit={handleSubmit}>
            <input type="text" name="searchterm" onChange={handleChange} value={formData.searchterm}/>
            <input type="submit" value='submit'/>
           </form>
        </div>
      )
}