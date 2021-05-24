
// function showModalInTime(modalSelector, timer) {
//     setTimeout(() => {
//         openModal(modalSelector);
//     }, timer);
// }

function modal(triggerSelector, modalSelector, closeClickOverlay = true) {
    const modalBtn = document.querySelectorAll(triggerSelector),
          modalWindow = document.querySelector(modalSelector),
          windows = document.querySelectorAll('[data-modal]');
    
    modalBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            windows.forEach(window => {
                window.style.display = 'none';
            });
            modalWindow.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

    });

    modalWindow.addEventListener('click', (evt) => {
        if (evt.target === modalWindow && closeClickOverlay || evt.target.getAttribute('data-close') == '') {
            modalWindow.style.display = 'none';
            document.body.style.overflow = '';
            windows.forEach(window => {
                window.style.display = 'none';
                document.body.style.overflow = '';
            });
        }
    });
}

const closeAllModal = () => {
    const windows = document.querySelectorAll('[data-modal]');
    windows.forEach(window => {
        window.style.display = 'none';
    });
    document.body.style.overflow = '';
};

export default modal;
export {closeAllModal};
// export {showModalInTime};
