const bigImg = () => {
    const imgModal = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img');
    
    imgModal.classList.add('popup');
    workSection.appendChild(imgModal);

    imgModal.style.justifyContent = 'center';
    imgModal.style.alignItems = 'center';
    imgModal.style.display = 'none';

    imgModal.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target && e.target.classList.contains('preview')) {
            imgModal.style.display = 'flex';
            const path = e.target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            bigImg.style.maxWidth = '700px';
            bigImg.style.maxHeight = '900px';
        } 

        if (e.target && e.target.matches('div.popup')) {
            imgModal.style.display = 'none';
        }
    });
    
};

export default bigImg;