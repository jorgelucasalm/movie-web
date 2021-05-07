window.onload = function () {
    const toggleModal = () => {
        document.querySelector('.modal').classList.toggle('none');
    };

    document.querySelector('.show-modal').addEventListener('click', toggleModal);

    document.querySelector('.close span').addEventListener('click', toggleModal);

}