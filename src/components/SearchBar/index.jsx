import React from 'react'
import './style.css'

const SearchBar = (props) => {
    return (
        <div className="search-box">
            <div class="container-1">
                <input type="search" id="search" placeholder="Digite o nome do filme..." />
                <span class="icon"><i class="fa fa-search"></i></span>
            </div>
        </div>
    )
}

export default SearchBar;