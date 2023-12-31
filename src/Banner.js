import React, { useState, useEffect, useContext } from "react";
import axios from "./axios";
import requests from "./requests";
import { BaseUrl } from "./contexts/Base_urlContext";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);
  const base_url = useContext(BaseUrl);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " . . ." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "${base_url}${movie.backdrop_path}"
        )`,
        backgroundPosition: "center center,",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>

        {/* buttons */}
        {/* desc */}
      </div>
      <div className="banner_fadeBottom"/>
    </header>
  );
}

export default Banner;
