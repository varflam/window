
// function showModalInTime(modalSelector, timer) {
//     setTimeout(() => {
//         openModal(modalSelector);
//     }, timer);
// }

function modal(triggerSelector, modalSelector, closeClickOverlay = true) {

    const calcScroll = () => {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflow = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        const scrollValue = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollValue;
    };

    const modalBtn = document.querySelectorAll(triggerSelector),
          modalWindow = document.querySelector(modalSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scrollValue = calcScroll();
    
    modalBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            windows.forEach(window => {
                window.style.display = 'none';
            });
            modalWindow.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scrollValue}px`;
        });

    });

    modalWindow.addEventListener('click', (evt) => {
        if (evt.target === modalWindow && closeClickOverlay || evt.target.getAttribute('data-close') == '') {
            modalWindow.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '';
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
    document.body.style.marginRight = '';
};

export default modal;
export {closeAllModal};
// export {showModalInTime};
