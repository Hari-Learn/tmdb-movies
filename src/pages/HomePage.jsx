import React, { useState } from "react";
import { useGetMoviesQuery } from "../api/tmdbAPI";
import MovieCard from "../comp/MovieCard";
import Skeleton from "../comp/Skeleton";
import SearchBox from "../comp/SearchBox";
import GenreFilter from "../comp/GenreFilter";

const HomePage = () => {
    const [page, setPage] = useState(1)
    const [searchQuery,setSearchQuery] = useState("")
    const { data,isLoading,isFetching,refetch } = useGetMoviesQuery({ page: page,query:searchQuery })
    

    const updateSearchQuery = (value) => {
        setSearchQuery(value)
    }

    const movies = data?.results || data?.data?.results || [];
    console.log("RTK data:", data);
    console.log("results:", data?.results);
    console.log("data.data.results:", data?.data?.results);
    const totalPages = data?.total_pages || 1;
    return (
        <>
            <div>
                <div>
                    <SearchBox searchQuery={searchQuery} updateSearchQuery={updateSearchQuery}></SearchBox>
                    <GenreFilter></GenreFilter>
                </div>
            {isLoading ? (
                <Skeleton/>)
                :(
                    <div>
                        <p>Movies count: {movies.length}</p>
                        {movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                )}
            
            {totalPages > 1 && (
                <div className="flex justify-center  mt-8 gap-3">
                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                        className="rounded text-white px-4 py-2 bg-blue-600 disabled:opacity-50"
                    >
                        Prev </button>
                    <span>Page {page} of {totalPages}</span>
                    <button
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                        className="rounded text-white px-4 py-2 bg-blue-600 disabled:opacity-50">
                        Next</button>
                </div>
            )}
        </div>
        </>
    )
}

export default HomePage