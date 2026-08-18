const shareBtn = document.getElementById('share');
const popup = document.getElementById('pop-up');
const popupShareBtn = document.getElementById('share-popup');
const designer = document.querySelector('.designer');

let isOpen = false;

function togglePopup() {
    isOpen = !isOpen;
    popup.style.display = isOpen ? 'flex' : 'none';

    if (window.innerWidth <= 750) {
        designer.style.visibility = isOpen ? 'hidden' : 'visible';
    }
}

shareBtn.addEventListener('click', togglePopup);
popupShareBtn.addEventListener('click', togglePopup);

