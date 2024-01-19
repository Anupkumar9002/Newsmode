import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    return (
    <>
      <div className="w-full flex items-center justify-between bg-slate-900 text-white h-[50px]">
        <div className='flex  flex-row text-lg'>
            <div className="mx-2  font-sans text-orange-200" to="/">Newsmode</div>
            <div className=' mx-2'>
           <Link className='mx-3' to="/">General</Link>
            <Link className='mx-3' to="/business">Business</Link>
            <Link className='mx-3' to="/sports">Sports</Link>
           <Link className='mx-3' to="/entertainment">Entertainment</Link> 
            <Link className='mx-3' to="/health">Health</Link>
            <Link className='mx-3' to="/science">Science</Link>
           <Link className='mx-3' to="/technology">Technology</Link>
            </div>
            </div>
        </div>  
    </>
        
       
   
                
       
   
  )
}
}

