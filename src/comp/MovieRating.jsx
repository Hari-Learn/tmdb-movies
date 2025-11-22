import React from "react";

const MovieRating = ({ vote_average }) => {
  return (
    <div className="movie-rating">  
        <span className="rating-label">Rating:</span> {vote_average}    
    </div>
  );
}

export default MovieRating;