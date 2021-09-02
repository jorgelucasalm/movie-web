import React, { useState, useEffect } from 'react'
import './style.css'
import '../../assets/styles/global.css'
import MovieItem from '../MovieItem'
import api from '../../services/api'
import SearchBar from '../SearchBar'

function MovieList() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([]);

    // Ler a api e salva em movies
    useEffect(() => {
        api.get('').then((response) => {
            setMovies(response.data);
        });
    }, []);

    // Filtro por nome
    useEffect(() => {
        setFilter(
            movies.filter(movie => {
                return movie.title.toLowerCase().includes( search.toLowerCase() );
            })
        )
    }, [search, movies]);

    return (
        <>
            <SearchBar onChange={e => setSearch(e.target.value)} />
            <ul className="list">
                {/* Mostrando todos os dados dentro de movies */}
                {filter.map(movie => {
                    return <MovieItem key={movie._id} {...movie} />
                })}
            </ul>
        </>
    )

}

export default MovieList;