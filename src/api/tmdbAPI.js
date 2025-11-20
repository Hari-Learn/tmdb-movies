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
            query:({ page = 1 })=>{
                return `discover/movie?page=${page}&api_key=${tmdbApiKey}`
            }
        })
    })
})

export const { useGetMoviesQuery } = tmdbApi