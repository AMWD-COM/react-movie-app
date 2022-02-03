import React from "react";
import './movieCard.css'

function MovieCard({ movie }) {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
    return (
        <div className="movieCard">
            <div className="moviePoster">
                <img
                    src={
                        movie.poster_path
                            ? `${IMAGE_PATH}${movie.poster_path}`
                            : `./img/poster.jpg`
                    }
                    alt="movie poster"
                   
                />
            </div>
           
        </div>
    );
}

export default MovieCard;
