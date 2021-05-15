import React, { Component } from 'react'
import './style.css'
import '../../assets/styles/global.css'
import MovieItem from '../MovieItem'
import api from '../../services/api'

export default class MovieList extends Component {
    
    state = {
        movies: [],
    }

    // Ler a api e salva em movies
    constructor() {
        super();
        api.get('').then(movie => {
            this.setState({ movies: movie.data });
        })

    }

    render() {
        
        return (
            <> 
                <div className="list rm">
                    {/* Mostrando todos os dados dentro de movies */}
                    {this.state.movies.map(movie => <MovieItem key={movie._id} title={movie.title} year={movie.year} sp={movie.synopsis} tr={movie.trailer} />)}
                </div>
            </>
        )
    }

}