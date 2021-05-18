import React from 'react'
import './style.css'
import '../../assets/styles/global.css'
import Image from "../../assets/public/tenet.jpg"
import Modal from 'react-modal'
import ModalContent from '../Modal'

Modal.setAppElement('#root');

const customStyles = {
    overlay: {
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    content: {
        backgroundColor: '#252537',
        padding: '0 2rem 2rem 2rem',
        border: 'none',
        top: '5rem',
        left: '25%',
        right: '25%',
        width: '50%',
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
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <ModalContent {...props} closeModalButton={closeModal}></ModalContent>
            </Modal>
            
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