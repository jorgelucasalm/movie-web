import React from 'react'
import './style.css'
import '../../assets/styles/global.css'
import Image from "../../assets/public/tenet.jpg"
const ModalContent = (props) => {

    return (
        <div className="modal-content">
            
            <div className="close-button" onClick={props.closeModalButton}><span>X</span></div>

            <img className="image-modal" src={Image} alt="" />
            <div className="title-time">
                <h1 className="title-modal">{props.title}</h1>
                <span className="time-modal">149 min</span>
            </div>

            <div className="media-content">
                <p className="genres">Ação</p>
                <p className="date">{props.year}</p>
            </div>

            <div className="elenco-modal">
                <span className="actors">Actors: </span>
                {props.actors.map(actor => {
                    return <span className="elenco-names">{actor}</span>
                })}
            </div>

            <p className="description-modal">{props.synopsis}</p>

            <a className="trailer-modal" href={props.trailer} target="_blank" rel="noreferrer">Veja o trailer aqui!</a>
        </div>
    )

}

export default ModalContent;