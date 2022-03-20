

//------------------Слайдер title

const imagesTitle = document.querySelectorAll('.title__slider .title__slider-line .title__slider-item');
const sliderLineTitle = document.querySelector('.title__slider-line');
let countTitle = 0;
let widthTitle;
function initTitle(){
    console.log('resize');
    widthTitle = document.querySelector('.title__slider').offsetWidth;
    console.log(widthTitle)
    sliderLineTitle.style.width = widthTitle * imagesTitle.length + 'px';
    
    imagesTitle.forEach( itemTitle =>{
        itemTitle.style.width = widthTitle + 'px';
        itemTitle.style.height = 'auto';
    });  
    rollSliderTitle();
}
window.addEventListener('resize', initTitle);
initTitle();

document.querySelector('.title__slider-prev').addEventListener('click', function(){
    countTitle--;
    if (countTitle < 0 ) {
        countTitle = imagesTitle.length - 1;
    }
    rollSliderTitle();
});

document.querySelector('.title__slider-next').addEventListener('click', function(){
    countTitle++;
    if (countTitle >= imagesTitle.length) {
        countTitle = 0;
    }
    rollSliderTitle();
});



function rollSliderTitle(){
    sliderLineTitle.style.transform = 'translate(-' + countTitle * widthTitle + 'px)'
}

//------------------ Slider services--------//

const imagesServices = document.querySelectorAll('.services__slider .services__slider-line .services__slider-item');
const sliderLineServices = document.querySelector('.services__slider-line');
let countServices = 0;
let widthServices;
function initServices(){
    console.log('resize');
    widthServices = document.querySelector('.services__slider').offsetWidth;
    console.log(widthServices)
    sliderLineServices.style.width = widthServices * imagesServices.length + 'px';
    
    imagesServices.forEach( itemServices =>{
        itemServices.style.width = widthServices + 'px';
        itemServices.style.height = 'auto';
    });  
    rollSliderServices();
}
window.addEventListener('resize', initServices);
initServices();

document.querySelector('.services__slider-prev').addEventListener('click', function(){
    countServices--;
    if (countServices < 0 ) {
        countServices = imagesServices.length - 1;
    }
    rollSliderServices();
});

document.querySelector('.services__slider-next').addEventListener('click', function(){
    countServices++;
    if (countServices >= imagesServices.length) {
        countServices = 0;
    }
    rollSliderServices();
});



function rollSliderServices(){
    sliderLineServices.style.transform = 'translate(-' + countServices * widthServices + 'px)'
}