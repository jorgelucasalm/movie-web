import React, { Component, useState } from 'react'
import './style.css'
import '../../assets/styles/global.css'
import MovieItem from '../MovieItem'
import api from '../../services/api'

export default class MovieList extends Component {

    state = {
        movies: [],
    }

    constructor() {
        super();
        api.get('').then(movie =>{
            this.setState({movies: movie.data});
        })
        
    }

    render() {
        return (
            <>  
                <div className="list">
                    {this.state.movies.map(movie => <MovieItem title={movie.title} year={movie.year} />) }
                </div>
            </>
        )
    }

}