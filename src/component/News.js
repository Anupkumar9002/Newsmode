import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export default class News extends Component {
  constructor(props){
    super(props);
    this.state={
      articles:this.articles,
      page:1,
      loading:false
      
    }
    document.title=(`${this.props.category}-Newsmode`)
  }

  async update(){
   this.props.setProgress(0)
   let url=`http://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}&category=${this.props.category}`
      this.setState({loading:true})
      let api= await fetch(url)    
      let parsedApi=await api.json();
      this.props.setProgress(75)
      //console.log(parsedApi);
      this.setState({
         articles:parsedApi.articles,
         totalResults:parsedApi.totalResults,
         loading:false
      })
      this.props.setProgress(100)
      
  }
  
  async componentDidMount(){
      // let url=`http://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=9f08b5f9b5b8419281938ad0f7fd08ec&page=1&pagesize=${this.props.pagesize}&category=${this.props.category}`
      // this.setState({loading:true})
      // let api= await fetch(url)    
      // let parsedApi=await api.json();
      
      // console.log(parsedApi);
      // this.setState({
      //    articles:parsedApi.articles,
      //    totalResults:parsedApi.totalResults,
      //    loading:false
      // })
      this.update()
  }

   Next= async ()=>{
      //console.log("next")
      this.setState({page:this.state.page+1})
      if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

      }
      else{
        
         this.update()
      }
     
  }
  prev=async ()=>{
  // console.log("prev")
   this.setState({page:this.state.page+1})
      // let url=`http://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=9f08b5f9b5b8419281938ad0f7fd08ec&page=${this.state.page-1}&pagesize=${this.props.pagesize}&category=${this.props.category}`
      // this.setState({loading:true})
      // let api= await fetch(url)
      // let parsedApi=await api.json();
      // //console.log(parsedApi);
      // this.setState({
      //    articles:parsedApi.articles,
      //    page:this.state.page-1,
      //    loading:false
      //    //totalResults:parsedApi.totalResults
      // })
      this.update()
   }
   
  

  render() {
   
    return (
      <>     
        <h2 className=' mt-4 text-[30px] mx-auto flex items-center justify-center'>News-Top Headline</h2>
       {this.state.loading && <Spinner />} 
      
      <div className="px-[310px] lg:mx-auto lg:grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
      { !this.state.loading && this.state.articles && this.state.articles.map((element)=>{
         return <div key={element.url}> <NewsItems author={element.author} date={element.publishedAt} newsurl={element.url} title={element.title?element.title.slice(0,45):""} desc={element.description?element.description.slice(0,88):"Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the..."} imgUrl={element.urlToImage?element.urlToImage:"https://www.livelaw.in/h-upload/2022/05/16/417928-gyanvapi-mosque-and-sc.jpg"}/> </div>
      })}
      </div>

      <div className='flex flex-row pb-10 justify-between  px-20'>
      
      <button onClick={this.prev} disabled={this.state.page<=1} className="text-white bg-black hover:bg-black focus:ring-4
         focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 me-2
             focus:outline-none mb-3 mt-20
           dark:focus:ring-white">Prev</button>
      <button onClick={this.Next} disabled={this.state.page+1>Math.ceil(this.state.totalResults/20) } className="text-white bg-black hover:bg-black focus:ring-4
         focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 me-2
            focus:outline-none mb-3 mt-20
           dark:focus:ring-white">Next</button>
      </div>
      </>
    )
  }
}
