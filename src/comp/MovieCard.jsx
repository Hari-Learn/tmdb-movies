import React from "react";

const MovieCard = ({movie}) => {
    return(
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>

        </div>
    )
}

export default MovieCard