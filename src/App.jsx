import React from 'react'
import Navbar from './components/Navbar'
import MovieItem from './components/MovieItem'
import SearchBar from './components/SearchBar'

export default (props) =>(
   <>
    <Navbar placeholder="Digite o nome do filme" handleChange={(e) => console.log(e)}/>
    <MovieItem />
    
   </>

);