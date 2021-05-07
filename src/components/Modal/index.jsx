const Modal = (props) => {
    return (
        <>
            <div className="modal none">
                <div className="modal-content">
                    <div className="close">
                        <span>X</span>
                    </div>
                    <img className="image-modal" src="" alt="" />
                    <h1 className="title-modal">NOME DO FILME</h1>
                    <p className="description-modal">DESCRIÇÃo</p>
                    <a className="trailer-modal" href="">LINK PARA TRAiLER</a>
                </div>
            </div>
        </>
    )
}

export default Modal;