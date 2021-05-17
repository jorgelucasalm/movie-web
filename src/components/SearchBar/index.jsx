import React from 'react'
import './style.css'

const SearchBar = (props) => {
    return (
        <div className="search-box">
            <div class="search-container">
                <input type="search" id="search" placeholder="Digite o nome do filme..." onChange={props.onChange}/>
                <span class="icon"><i class="fa fa-search"></i></span>
            </div>
        </div>
    )
}

export default SearchBar;