import { useState } from 'react'
import {Routes, Route, Link } from "react-router-dom";
import Upload from "./components/Upload";
import SideBar from "./components/Profiling";
import ModelPredict from "./components/ModelPredict";
import BuildModel from "./components/BuildModel";
import ModelCompare from "./components/ModelCompare";
import axios from 'axios';
import './App.css'


function App() {


  return (
    <>
      <div className="App">
<SideBar />

        <div className='content'></div>
      </div>
      <Routes> 
            <Route path="/upload" component={Upload} />
            <Route path="/profiling" component={SideBar} />
            <Route path="/predict" component={ModelPredict} />
            <Route path="/build" component={BuildModel} />
            <Route path="/compare" component={ModelCompare} />
        </Routes>
      <div>  <img src="https://miro.medium.com/max/1400/1*r-8_klG8IIlRTE5zJpg6sA.png" alt="Logo" /></div>
    </>
  )
}

export default App
