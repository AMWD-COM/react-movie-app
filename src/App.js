import './App.css';
import React, {useEffect } from 'react';
import axios, { Axios } from 'axios';

function App() {
  const API_URL = "https://api.themoviedb.org/3/";
  const fetchMovies = async () => {
    const data = await axios.get({
        url: `{$API_URL}/discover/movie`,
        config: {
            params: {
                api_key: process.env.REACT_APP_MOVIE_API_KEY,
            },
        },
    });
  }
  useEffect(() => {
  
    
  }, []);
  
  return (
    <div >
      <h1>Hello </h1>
    </div>
  );
}

export default App;
