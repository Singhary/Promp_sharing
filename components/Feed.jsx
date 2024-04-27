"use client"
import { useState , useEffect } from "react" ;
import PromptCard from "./PromptCard";

const PromptCardList = ({data , handelTagClick})=>{
    return(
      <div className="mt-16 prompt_layout">
          {
            data.map((post)=>(
              <PromptCard
                key={post._id}
                post={post}
                handelTagClick={handelTagClick}
              />
            ))
          }
      </div>
    )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('') ;
  const [post, setPost] = useState([]);

  const handelSearchChange = async(e)=>{

    e.preventDefault() ;
    setSearchText(e.target.value) ;
    console.log(searchText) ;
  
    const response = await fetch('/api/search',{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({searchText}),
    })
    const data = await response.json() ;
    setPost(data) ;
  }

  useEffect(()=>{
    // The purpose of calling response.json() is to extract the JSON body content from the response and parse it into a JavaScript object.
      const fetchPrompt = async ()=>{
        const response = await fetch('/api/prompt') ;
        const data = await response.json() ;
        setPost(data) ;
      }
      fetchPrompt() ;
  },[])


  return (
    <section className='feed'>
       <form className="relative w-full flex-center">
         <input
           type="text"
           placeholder="search for tag or a username"
           value={searchText}
           onChange={handelSearchChange}
           required
           className='search_input peer'
         />
       </form>
      
      <PromptCardList
        data={post}
        handelTagClick={()=>{}}
      />

    </section>
  )
}

export default Feed