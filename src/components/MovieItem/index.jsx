import React from 'react'
import './style.css'
import Image from "../../assets/public/tenet.jpg"
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root');

const customStyles = {
    overlay: {
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    content: {
        backgroundColor: '#252537',
        padding: '2rem',
        border: 'none',
        top: '5rem',
        left: '20%',
        right: '20%',
        width: '60%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    }
}

const MovieItem = (props) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="modal-content">
                    {/* <div className="close" >
                        <span className="close-modal" onClick={closeModal}>X</span>
                    </div> */}
                    <img className="image-modal" src={Image} alt="" />
                    <h1 className="title-modal">{props.title}</h1>
                    <p className="description-modal">{props.sp}</p>
                    <a className="trailer-modal" href={props.tr} target="_blank">Veja o trailer aqui!</a>
                </div>
            </ReactModal>
            <li className="card">
                <img className="image-movie" src={Image} onClick={openModal} alt="" />
                <p className="name">{props.title}</p>
                <div className="media-content">
                    <p className="genres">Ação</p>
                    <p className="date">{props.year}</p>
                    <p className="time">149 min</p>
                </div>
            </li>


        </>
    )
}

export default MovieItem;