import React, { useState } from 'react'
import './App.css'
import News  from './component/News'
import {Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Navbar from './component/Navbar'

const App =()=> {
 const apikey="9f08b5f9b5b8419281938ad0f7fd08ec";
  
  //apikey=process.env.REACT_APP_API_KEY
  const pagesize=20
  const [progress,setProgress]=useState(0);
// setProgress=(progress)=>{
// setState({progress:progress})
//  }
 
    return (
      <div>
      
  <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />      


      <Routes>  
      <Route exact path="/" element={<News apikey={apikey}  setProgress={setProgress}  keys="general" country="in" pagesize={pagesize} category="general"/>}/>
      <Route exact path="/business" element={<News apikey={apikey}  setProgress={setProgress}  keys="business" country="in" pagesize={pagesize} category="business"/>}/>
      <Route exact path="/sports" element={<News apikey={apikey}   setProgress={setProgress}  keys="sports" country="in" pagesize={pagesize} category="sports"/>}/>
      <Route exact path="/entertainment" element={<News apikey={apikey}  setProgress={setProgress}  keys="entertainment" country="in" pagesize={pagesize} category="entertainment"/>}/>
      <Route exact path="/health" element={<News apikey={apikey} setProgress={setProgress}  keys="health" country="in" pagesize={pagesize} category="health"/>}/>
      <Route exact path="/science" element={<News apikey={apikey}  setProgress={setProgress}  keys="science" country="in" pagesize={pagesize} category="science"/>}/>
      <Route exact path="/technology" element={<News apikey={apikey}  setProgress={setProgress}  keys="technology" country="in" pagesize={pagesize} category="technology"/>}/>      
   
      </Routes>
      
      
      </div>
    )
  }
export default App;
