import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (request , response)=>{
   
    try {
        await connectToDB() ;
        
        const {searchText} = await request.json() ;
        
        const prompts = await Prompt.find({tag:searchText}).populate('creator') ;
        
        console.log(prompts) ;

        if(!prompts){
            return new Response("No prompt found",{
                status:404
            })
        }
        else{
            return new Response(JSON.stringify(prompts),{
                status:200
            })
        }

    } catch (error) {
        return new Response("Failed to fetch all prompt",{
            status:500
        })
    }
}