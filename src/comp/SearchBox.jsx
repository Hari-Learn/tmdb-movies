import React, { useState } from "react";

const SearchBox = ({searchQuery,updateSearchQuery}) => {
    
    return(
        <div className="mb-6"> 
           <input type="text" 
           placeholder="Search Movies"
            value={searchQuery}
           onChange={(e)=>updateSearchQuery(e.target.value)}
          
           className="text-white w-full bg-gray-800 py-6 px-4 rounded-lg " />
        </div>
    )
}
export default SearchBox