import React from 'react'
import './style.css'
import '../../assets/styles/global.css'
import Image from "../../assets/public/tenet.jpg"

const MovieItem = (props) => {
    return (
        <>
            <div class="list">
                <li class="card">
                    <img src={Image} alt="" />
                    
                    <p class="name">Vingadores</p>
                    <div class="media-content">
                        <p class="genres">Ação</p>
                        <p class="date">2020</p>
                        <p class="time">149 min</p>
                    </div>
                </li>
                <li class="card">
                    <img src={Image} alt="" />
                    <p class="name">O Estranho Mundo de Jack</p>
                    <div class="media-content">
                        <p class="genres">Ação</p>
                        <p class="date">2020</p>
                        <p class="time">149 min</p>
                    </div>
                </li>
            </div>
        </>
    )
}

export default MovieItem;