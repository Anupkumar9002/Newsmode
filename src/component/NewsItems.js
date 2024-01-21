import React from 'react'
 const NewsItems=(props)=> {
  
    const {title,desc,imgUrl,newsurl,author,date}=props
     
    return (
        <div>
        <div className="mt-6 w-[20rem] flex flex-col pb-6 border border-black p-3">
      <div className=" h-56">
        <img
          src={imgUrl}
          alt="img"
        />
      </div>
      <div>
        <h1 className='text-lg -mt-2 font-serif font-bold'>{title}...</h1>
      </div>
      <div className='pb-4'>
        <p>{desc}...</p>
      </div>
      <div>
      <p className='mb-3 text-orange-950'>by {!author?"Unknown":author} on {new Date(date).toTimeString()}</p>
      </div>
      
    <div className="pt-0">
      
      <a href={newsurl} rel="noreferrer" target="_blank" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
         focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2
           dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none  mt-20
           dark:focus:ring-blue-800">Read More</a>
        
      </div>
    </div>

        
      </div>
    )
  }
export default NewsItems;
