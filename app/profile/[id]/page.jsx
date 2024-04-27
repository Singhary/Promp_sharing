"use client" ;
import Profile from "@components/Profile";
import { useEffect, useState } from "react";

const page = ({params}) => {
    const [data , setData] = useState([]) ;
    const [name,setName] = useState("") ;

    useEffect(()=>{
        const fetchedPrompt = async()=>{
            const response = await fetch(`/api/users/${params.id}/posts`);
            const data = await response.json();
            console.log(data) ;
            setName(data[0]?.creator.username.toUpperCase()) ;
            setData(data) ;
        }
        fetchedPrompt() ;
    
    },[params.id]) ;
   
  return (
    <Profile
        name={name}
        desc={`Welcome to ${name}'s personalized profile page.`}
        data={data}
    />
  )
}

export default page