
import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './Requests'

function Banner() {

    const [movie,setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    },[])


{/* truncating text description if it longer then n caracter */}
    function truncate(string, n){
        return string?.length > n ?string.substr(0, n-1) + '...' : string
        
    }

    return (
        <header 
            className="banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__btns">
                    <button className="banner__btn">Play</button>
                    <button className="banner__btn">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 100)}
                </h1>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
