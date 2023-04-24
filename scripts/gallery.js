const ACTING_SLIDE_CLASSNAME = 'reveal-slide';

const imagesNodes = Array.from(document.querySelectorAll('.hydra-tech__img'));
console.log(imagesNodes);
const prevBtnNode = document.querySelector('.gallery__btn-prev');
const nextBtnNode = document.querySelector('.gallery__btn-next');
let validId;

initialization();

function initialization() {
    validId = 0;
    
    prevBtnNode.addEventListener('click', () => {
        establishActiveSlideById(receivePrevId());
    });
    
    nextBtnNode.addEventListener('click', () => {
        establishActiveSlideById(receiveNextId());
    });
}

function establishActiveSlideById(id) {
    const currId = validId;
    validId = id;

    imagesNodes[currId].classList.remove(ACTING_SLIDE_CLASSNAME)
    imagesNodes[validId].classList.add(ACTING_SLIDE_CLASSNAME)
}

function receivePrevId() {
    return validId === 0 ? imagesNodes.length - 1 : validId - 1;
}

function receiveNextId() {
    return validId === (imagesNodes.length - 1) ? 0: validId + 1;
}