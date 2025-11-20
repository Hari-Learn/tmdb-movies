import React from "react";

const MainLayout = ({children}) => {
    return(
        <>
        <div className="min-h-screen bg-gray-900 text-white ">
          <header className="bg-gray-800 py-4 px-6 shahow">
            <h1 className="text-2xl font-bold text-center">TMDB Movies</h1>
            </header>  
        </div>
        <main className="container mx-auto px-4 py-6">
            {children}
        </main>
        </>
    )
}

export default MainLayout