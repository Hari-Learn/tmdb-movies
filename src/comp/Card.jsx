import React from "react";

const Card = ({ movie }) => {
  const { title, poster_path, release_date, vote_average } = movie;
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";    
    return(
    <div className="card">
      <img src={posterUrl} alt={title} className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-release-date">Release Date: {release_date}</p>
        <p className="card-vote-average">Rating: {vote_average}</p>
      </div>
    </div>      
    )

    }

    export default Card;