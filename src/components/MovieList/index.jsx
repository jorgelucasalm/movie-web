import React, { useState, useEffect } from 'react'
import './style.css'
import '../../assets/styles/global.css'
import MovieItem from '../MovieItem'
import api from '../../services/api'
import SearchBar from '../SearchBar'

function MovieList() {

    const [movies, setMovies] = useState([]);

    // Ler a api e salva em movies
    useEffect(()=>{
        api.get('').then((response)=>{
            setMovies(response.data);
        });
    }, []);

    return (
        <>
            <SearchBar/>
            <div className="list rm">
                {/* Mostrando todos os dados dentro de movies */}
                {movies.map(movie =>{
                    return <MovieItem key={movie._id} title={movie.title} year={movie.year} sp={movie.synopsis} tr={movie.trailer}/>;
                })}
            </div>
        </>
    )

}

export default MovieList;