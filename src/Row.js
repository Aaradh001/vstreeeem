import React, { useState, useEffect, useContext } from "react";
import axios from "./axios";
import "./Row.css";
import { BaseUrl } from "./contexts/Base_urlContext";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'


function Row({ title, fetchURL, isLargeRow }) {
  const base_url = useContext(BaseUrl)
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  // A snippet of code which runs on a specific condition
  useEffect(() => {
    // if [], Run once when the Row loads and don't run it again
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }

  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('');
    }else{
      console.log(movie?.name);
      movieTrailer(movie?.title || movie?.name || movie?.original_name || " ")
      // movieTrailer(null, {tmdbId: movie.id})
      .then(url => {
        console.log(url);
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log('heloooo  ',urlParams);
        setTrailerUrl(urlParams.get('v'));
        console.log(trailerUrl); 
      }).catch(error => console.log('the error is :',error));
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {/* row posters */}
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;
