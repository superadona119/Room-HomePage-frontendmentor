const wrapperSlides         = document.querySelector('.image-carousel__container');
const arrowBtnLeft          = document.querySelector('.arrow-btn--left');
const arrowBtnRight         = document.querySelector('.arrow-btn--right');
const slides                = document.querySelectorAll('.image-carousel .slide');


let index = 0;
let interval = setInterval(run, 55555000);


function run() {
    index++;

    changeImage();
}

function changeImage() {
    if(index > slides.length - 1) {
        index = 0;
    } else if(index < 0) {
        index = slides.length - 1;
    }

    let offset = `${-index * 100}%`;

    slides.forEach(function(slide) {
        slide.getAttribute('data-index');
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');

    wrapperSlides.style.transform = `translateX(${offset})`;
}


function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 55555000);
} 


arrowBtnLeft.addEventListener('click', function() {
    index--;
    changeImage();
    resetInterval();
});

arrowBtnRight.addEventListener('click', function() {
    index++;
    changeImage();
    resetInterval();
});

document.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowLeft') { 
        index--;
        changeImage();
        resetInterval();
    }

    if(e.key === 'ArrowRight') {
        index++;
        changeImage();
        resetInterval();
    }
});

