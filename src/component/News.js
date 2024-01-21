import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
const  News =(props)=> {
   const [articles,setArticles]=useState([]);
   const [page,setPage]=useState(1);
   const [loading,setLoading]=useState(false);
   const [totalResults,setTotalresult]=useState(0);
  
  document.title=(`${props.category}-Newsmode`)

  const update = async()=>{
   props.setProgress(0)
   let url=`http://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}&category=${props.category}`
      setLoading(true);
      let api= await fetch(url)    
      let parsedApi=await api.json();
      props.setProgress(75)
      //console.log(parsedApi);
      setArticles(parsedApi.articles);
      setTotalresult(parsedApi.totalResults);
      setLoading(false);
      props.setProgress(100);
      
  }
  
  useEffect(()=>{
   update()
  },[]);
      
   const Next= async ()=>{
     
         //console.log("next")
     setPage(page+1);
     if(page+1>Math.ceil(totalResults/20)){
      
     }
     else{
      update();
     }

      
   
     
  }
  const prev = async()=>{
  // console.log("prev")
   setPage(page-1)
    
      update()
   }
   
  

 
   
    return (
      <>     
        <h2 className=' mt-4 text-[30px] mx-auto flex items-center justify-center'>News-Top Headline</h2>
       {loading && <Spinner />} 
      
      <div className="px-[310px] lg:mx-auto lg:grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
      { !loading && articles && articles.map((element)=>{
         return <div key={element.url}> <NewsItems author={element.author} date={element.publishedAt} newsurl={element.url} 
         title={element.title?element.title.slice(0,45):""} 
         desc={element.description?element.description.slice(0,88):"Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the..."}
          imgUrl={element.urlToImage?element.urlToImage:"https://www.livelaw.in/h-upload/2022/05/16/417928-gyanvapi-mosque-and-sc.jpg"}/> </div>
      })}
      </div>

      <div className='flex flex-row pb-10 justify-between  px-20'>
      
      <button onClick={prev} disabled={page<=1} className="text-white bg-black hover:bg-black focus:ring-4
         focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 me-2
             focus:outline-none mb-3 mt-20
           dark:focus:ring-white">Prev</button>
      <button onClick={Next} disabled={page+1>Math.ceil(totalResults/20) } className="text-white bg-black hover:bg-black focus:ring-4
         focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 me-2
            focus:outline-none mb-3 mt-20
           dark:focus:ring-white">Next</button>
      </div>
      </>
    )
  }

export default  News;