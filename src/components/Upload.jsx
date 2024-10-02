import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

//   const [file, setFile] = useState(null);
//   const handleFileChange=(e)=>{
//     setFile(e.target.files[0])
//   };
//   const handleSubmit=async(e)=>{
//     e.preventDefault();
//     const formData=new FormData();
//     formData.append('file', file)}


   const url=`https://raw.githubusercontent.com/yimeiwen/automatedMLapp/main/Home_n_Map.csv`
   const url2=`https://raw.githubusercontent.com/yimeiwen/InstrumentPerformanceEvaluation/main/waters_pass_fail_column.csv`

//    const getData = async () => {
   
//     try {
//         const response = await fetch(url2);
//         const data = await response.json();

//       } catch (error) {
//         console.error("Error uploading file:", error);
//       }
// console.log(data)
// }

// useEffect(()=>{getData(url2)}, []);


export default function Upload(){
    return (
        <div>
          <h2>Upload your data for modeling</h2>
          <form >
            <input type="file"  />
            <button type="submit">Upload</button>
          </form>
        </div>
      );
}