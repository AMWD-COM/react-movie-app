import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import "./home.css";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [selectMovie, setSelectMovie] = useState({});
    const [searchValue, setSearchValue] = useState("");
    const [searchKey, setSearchKey] = useState("");

    const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
    const API_URL = "https://api.themoviedb.org/3";
    const API_URL_TYPE = searchKey ? "/search" : "/discover";
    const config = {
        method: "get",
        url: `${API_URL}${API_URL_TYPE}/movie`,
        params: {
            api_key: process.env.REACT_APP_MOVIE_API_KEY,
            query: searchKey,
        },
    };

    const fetchMovies = async (searchKey) => {
        const {
            data: { results },
        } = await axios(config);
        // console.log('Response', response.data.results);
        // console.log(results);
        setSelectMovie(results[0]);
        setMovies(results);
    };
    useEffect(() => {
        fetchMovies();
    });

    const displayMovises = () =>
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

    const inputValue = (e) => {
        setSearchValue(e.target.value);
    };

    const searchMovies = (e) => {
        e.preventDefault();
        fetchMovies();
    };
    return (
        <div>
            <header className="header">
                <h1>MOVIES APP</h1>
                <form onSubmit={searchMovies} className="searchMovies">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        onChange={inputValue}
                    />
                    <input
                        type="submit"
                        value="Search"
                        onClick={(e) => setSearchKey(searchValue)}
                    />
                </form>
            </header>
            {/* Trailer & Desception */}
            <div
                className="hero"
                style={{
                    backgroundImage: `url('${IMAGE_PATH}${selectMovie.backdrop_path}')`,
                }}
            >
                {/* //TODO: to continue ... */}
                <button className="btnTrailer">Play Trailer</button>
                <h1 className="heroTitle">{selectMovie.title}</h1>
                {selectMovie.overview ? (
                    <p className="heroOverview">{selectMovie.overview}</p>
                ) : null}
            </div>
            {/* Discover movie & Search */}
            <div className="container">{displayMovises()}</div>
        </div>
    );
};

export default Home;
