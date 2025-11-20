import React from "react";

const Skeleton = () => {
    return(
        <>
        {/* {Array(10).fill(0).map(_,i) => ()} */}
            <div className="bg-gray-800 rounded overflow-hidden shadow animate">
            <div className="h-48 bg-gray-700"></div>
            <div className="p-4">
                <div className="h-4 bg-gray-600 rounded mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-600 rounded mb-2 w-3/4"></div>
            </div>         
            
        </div>
    
        </>
        
        
    )    
}

export default Skeleton