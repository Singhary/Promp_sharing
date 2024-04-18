import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//when we make dynamic route we can access them in different place by using "paramas" and to access it we can write paramas.id;

export const GET = async (request,{params})=>{
    try {
        await connectToDB();
        
        const prompts = await Prompt.find({
            creator:params.id
        }).populate('creator') ;
        console.log(prompts) ;
        
        return new Response(JSON.stringify(prompts),{
            status:200,
        })
    } catch (error) {
        return new Response("Failed to fetch all prompt",{
            status:500
        })
    }
}