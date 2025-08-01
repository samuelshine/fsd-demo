import axios from "axios"

const SearchImages=async (term)=>{
    const response=await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID 1d8IQlysKErskIa4e4yLL97abGPXjGLiVHz998_yRgU'
        },
        params:{
            query:term
        }
                
    })
    
    return response.data.results
}
export default SearchImages