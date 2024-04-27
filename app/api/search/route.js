import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import User from "@models/user";

export const POST = async (request , response)=>{
   
    try {
        await connectToDB() ;
        
        const {searchText} = await request.json() ;
        
        const prompts = await Prompt.find({tag:searchText});
        const userSearch = await User.find({username:searchText});
        
        console.log(prompts) ;

        if(!prompts&&!userSearch){
            return new Response("No prompt found",{
                status:404
            })
        }
        else{
           if(prompts){
                return new Response(JSON.stringify(prompts),{
                    status:200
                })
            }
            else{
                return new Response(JSON.stringify(userSearch),{
                    status:200
                })
            }
        }

    } catch (error) {
        return new Response("Failed to fetch all prompt",{
            status:500
        })
    }
}