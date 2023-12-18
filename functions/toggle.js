const body = document.body;

const menuBurguer = document.getElementById("icon-burguer");
const menuClose = document.getElementById("close-menu");
const menuMain = document.getElementById("menu");

const bgImg = document.getElementById("square1-img");

const previousImg = document.getElementById("previous-img");
const nextImg = document.getElementById("next-img");

const firstTxt = document.getElementById("text1");
const secondTxt = document.getElementById("text2");
const thirdTxt = document.getElementById("text3");

document.getElementById("hover-link").addEventListener("mouseover", function() {
    document.getElementById("arrow-link").src = "images/icon-arrow-hover.svg";
});

document.getElementById("hover-link").addEventListener("mouseout", function() {
    document.getElementById("arrow-link").src = "images/icon-arrow.svg";
});

function mobileDevice(){

    menuBurguer.addEventListener("click", () =>{
        menuMain.style.display = menuMain.style.display === 'none' ? 'block' : 'none';
        body.classList.toggle('menu-opened');
    });

    menuClose.addEventListener("click", () =>{
        menuMain.style.display = menuMain.style.display === 'block' ? 'none' : 'block';
        body.classList.toggle('menu-opened');
    });

    previousImg.addEventListener("click", () =>{
        if(window.getComputedStyle(bgImg).backgroundImage.includes("mobile-image-hero-1.jpg")){
            bgImg.style.backgroundImage = "url('images/mobile-image-hero-3.jpg')";
            firstTxt.style.display = "none";
            secondTxt.style.display = "none";
            thirdTxt.style.display = "block";
        }else if(window.getComputedStyle(bgImg).backgroundImage.includes("mobile-image-hero-2.jpg")){
            bgImg.style.backgroundImage = "url('images/mobile-image-hero-1.jpg')";
            firstTxt.style.display = "block";
            secondTxt.style.display = "none";
            thirdTxt.style.display = "none";
        }else{
            bgImg.style.backgroundImage = "url('images/mobile-image-hero-2.jpg')";
            firstTxt.style.display = "none";
            secondTxt.style.display = "block";
            thirdTxt.style.display = "none";
        }
    });

    nextImg.addEventListener("click", () =>{
        if(window.getComputedStyle(bgImg).backgroundImage.includes("mobile-image-hero-1.jpg")){
            bgImg.style.backgroundImage = "url('images/mobile-image-hero-2.jpg')";
            firstTxt.style.display = "none";
            secondTxt.style.display = "block";
            thirdTxt.style.display = "none";
        }else if(window.getComputedStyle(bgImg).backgroundImage.includes("mobile-image-hero-2.jpg")){
            bgImg.style.backgroundImage = "url('images/mobile-image-hero-3.jpg')";
            firstTxt.style.display = "none";
            secondTxt.style.display = "none";
            thirdTxt.style.display = "block";
        }else{
            bgImg.style.backgroundImage = "url('images/mobile-image-hero-1.jpg')";
            firstTxt.style.display = "block";
            secondTxt.style.display = "none";
            thirdTxt.style.display = "none";
        }
    });

}

function desktopDevice(){

    previousImg.addEventListener("click", () =>{
        if(window.getComputedStyle(bgImg).backgroundImage.includes("desktop-image-hero-1.jpg")){
            bgImg.style.backgroundImage = "url('images/desktop-image-hero-3.jpg')";
            firstTxt.style.display = "none";
            secondTxt.style.display = "none";
            thirdTxt.style.display = "block";
        }else if(window.getComputedStyle(bgImg).backgroundImage.includes("desktop-image-hero-2.jpg")){
            bgImg.style.backgroundImage = "url('images/desktop-image-hero-1.jpg')";
            firstTxt.style.display = "block";
            secondTxt.style.display = "none";
            thirdTxt.style.display = "none";
        }else{
            bgImg.style.backgroundImage = "url('images/desktop-image-hero-2.jpg')";
            firstTxt.style.display = "none";
            secondTxt.style.display = "block";
            thirdTxt.style.display = "none";
        }
    });

    nextImg.addEventListener("click", () =>{
        if(window.getComputedStyle(bgImg).backgroundImage.includes("desktop-image-hero-1.jpg")){
            bgImg.style.backgroundImage = "url('images/desktop-image-hero-2.jpg')";
            firstTxt.style.display = "none";
            secondTxt.style.display = "block";
            thirdTxt.style.display = "none";
        }else if(window.getComputedStyle(bgImg).backgroundImage.includes("desktop-image-hero-2.jpg")){
            bgImg.style.backgroundImage = "url('images/desktop-image-hero-3.jpg')";
            firstTxt.style.display = "none";
            secondTxt.style.display = "none";
            thirdTxt.style.display = "block";
        }else{
            bgImg.style.backgroundImage = "url('images/desktop-image-hero-1.jpg')";
            firstTxt.style.display = "block";
            secondTxt.style.display = "none";
            thirdTxt.style.display = "none";
        }
    });
}


function windowSize(){
    const viewportWidth = window.innerWidth;

    if(viewportWidth <= 375){
        mobileDevice();
    }else if(viewportWidth <= 1440){
        desktopDevice();
    }
}

window.addEventListener("resize", windowSize);

windowSize();