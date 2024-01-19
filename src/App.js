import React, { Component } from 'react'
import './App.css'
import News  from './component/News'
import { Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import Navbar from './component/Navbar'





export default class App extends Component {
  apikey="9f08b5f9b5b8419281938ad0f7fd08ec"
  
  //apikey=process.env.REACT_APP_API_KEY
  pagesize=20
  state={
    progress:0
  }
setProgress=(progress)=>{
this.setState({progress:progress})
 }
  render() {
    
 
    return (
      <div>
      
      <Routes>  
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />      
      
      <Route exact path="/" element={<News apikey={this.apikey}  setProgress={this.setProgress}  keys="general" country="in" pagesize={this.pagesize} category="general"/>}/>
      <Route exact path="/business" element={<News apikey={this.apikey}  setProgress={this.setProgress}  keys="business" country="in" pagesize={this.pagesize} category="business"/>}/>
      <Route exact path="/sports" element={<News apikey={this.apikey}   setProgress={this.setProgress}  keys="sports" country="in" pagesize={this.pagesize} category="sports"/>}/>
      <Route exact path="/entertainment" element={<News apikey={this.apikey}  setProgress={this.setProgress}  keys="entertainment" country="in" pagesize={this.pagesize} category="entertainment"/>}/>
      <Route exact path="/health" element={<News apikey={this.apikey} setProgress={this.setProgress}  keys="health" country="in" pagesize={this.pagesize} category="health"/>}/>
      <Route exact path="/science" element={<News apikey={this.apikey}  setProgress={this.setProgress}  keys="science" country="in" pagesize={this.pagesize} category="science"/>}/>
      <Route exact path="/technology" element={<News apikey={this.apikey}  setProgress={this.setProgress}  keys="technology" country="in" pagesize={this.pagesize} category="technology"/>}/>      
      </Routes>
      </div>
    )
  }
}


