import React from 'react'
import './style.css'
import Image from "../../assets/public/tenet.jpg"

const MovieItem = (props) => {
    return (
        <li className="card">
            <img className="show-modal" src={Image} alt="" />
            <p className="name">{props.title}</p>
            <div className="media-content">
                <p className="genres">Ação</p>
                <p className="date">{props.year}</p>
                <p className="time">149 min</p>
            </div>
        </li>
    )
}

export default MovieItem;