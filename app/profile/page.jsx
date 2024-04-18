"use client"

import { useState , useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

import Profile from "@components/Profile"

const page = () => {
    
    const {data:session} = useSession() ;
    const [post , setPost] = useState([]) ;

    const handelDelete = async ()=>{
         
    }

    const handelEdit =  ()=>{

    }

    useEffect(()=>{
        // The purpose of calling response.json() is to extract the JSON body content from the response and parse it into a JavaScript object.
          const fetchPrompt = async ()=>{
            const response = await fetch(`/api/users/${session?.user.id}/posts`) ;
            const data = await response.json() ;
            setPost(data) ;
          }
          if(session?.user.id){
            fetchPrompt() ;
          }
      },[])
    

  return (
    <div>
        <Profile
            name="My"
            desc="Welcome to your personalised Profile page"
            data={post}
            handelEdit={handelEdit}
            handelDelete = {handelDelete}
        />
    </div>
  )
}

export default page