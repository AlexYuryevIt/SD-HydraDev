const OPENED_CLASSNAME = 'hydra-tech_open';

const hydraTech = document.querySelector('.js-hydra-tech');
const hydraTechArrowsBtn = document.querySelector('.js-hydra-tech-arrows__btn');

hydraTechArrowsBtn.addEventListener('click', toggleSlider);

function toggleSlider(){
    hydraTech.classList.toggle(OPENED_CLASSNAME);
    
    if(hydraTech.classList.contains(OPENED_CLASSNAME)){
        hydraTechArrowsBtn.src = "file:///C:/Users/Honor/Desktop/hydra/resources/icon/arrow-down.png";
    }

    else{
        hydraTechArrowsBtn.src = "file:///C:/Users/Honor/Desktop/hydra/resources/icon/arrow-upwards.png";
    };
};