import React from 'react'
import './style.css'
import '../../assets/styles/global.css'
import Image from "../../assets/public/23848-cartaz.jpg"

const MovieItem = (props) => {
    return (
        <>
            <div className="movie">
                <img src="" alt=""/>
                <div className="details">
                    <span className="name"></span>
                    <span className="genres"></span>
                    <span className="date"></span>
                </div>
            </div>
        </>
    )
}

export default MovieItem;