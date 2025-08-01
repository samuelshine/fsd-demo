
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
        <div className="search-bar flex sticky top-0 items-center">
            <form className="flex flex-col items-center p-5 w-screen bg-sky-300" onSubmit={handleFormSubmit}>
                <label className="p-2 text-4xl font-bold">Enter Search Term</label>
                <input placeholder="Search..."className="text-lg text-center border-2 rounded-lg border-black" onChange={handleChange} value={term} />
            </form>
        </div>
    )
}
export default SearchBar