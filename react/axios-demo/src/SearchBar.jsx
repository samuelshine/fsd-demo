
import { useState } from "react"
function SearchBar({onSubmit}){
    const [term,setTerm]=useState('')
    const handleFormSubmit=(event)=>{
        event.preventDefault()
        onSubmit(term)     
        

    }

    const handleChange=(event)=>{
    setTerm(event.target.value);

    }
    
    return(
        <div className="search-bar flex items-center">
            <form className="flex flex-col items-center p-20 w-screen bg-sky-300" onSubmit={handleFormSubmit}>
                <label className="p-2 text-4xl font-bold">Enter Search Term</label>
                <input placeholder="Search..."className="text-lg border-radius-l text-center border-2 border-black" onChange={handleChange} value={term} />
            </form>
        </div>
    )
}
export default SearchBar