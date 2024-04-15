"use client"
import { useState } from "react" ;
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const createPrompt = () => {
   const [submitting, setsubmitting] = useState(false)
   const [post, setPost] = useState({
        prompt:'',
        tag:'',
   });

   const createPrompt = async(e)=>{
       
   }

  return (
   <Form
     type="Create"
     post = {post}
     setPost={setPost}
     submitting={submitting}
     handelSubmit = {createPrompt}
   />
 )
}

export default createPrompt