import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY
const baseUrl = import.meta.env.VITE_TMDB_BASE_URL
console.log("---> "+tmdbApiKey);
export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery:fetchBaseQuery({
        baseUrl:baseUrl
    }),
    endpoints:(builder) => ({
        getMovies: builder.query({
            query:({ page = 1,query='' })=>{
                const url = query 
                ? `search/movie?query=${query}&page=${page}`
                : `discover/movie?page=${page}`
                return `${url}&api_key=${tmdbApiKey}`
            }
        })
    }),
    getGenures :(builder) => ({
        query : ()=>{
            
        }
    })
})

export const { useGetMoviesQuery } = tmdbApi