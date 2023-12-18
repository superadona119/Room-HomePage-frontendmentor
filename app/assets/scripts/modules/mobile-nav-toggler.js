
const navMenuIcon       = document.querySelector('.navigation__menu-icon');
const pageOverlay       = document.querySelector('.page-overlay');
const mobileNav         = document.querySelector('.mobile-nav');
const body              = document.querySelector('.body');

navMenuIcon.addEventListener('click', function() {
    if(!this.classList.contains('navigation__menu-icon--close-x')) {
        this.classList.add('navigation__menu-icon--close-x');
        pageOverlay.classList.add('page-overlay--active');
        body.classList.add('mobile-nav-active');
        mobileNav.classList.add('mobile-nav--active');
    } else {
        this.classList.remove('navigation__menu-icon--close-x');
        pageOverlay.classList.remove('page-overlay--active');
        body.classList.remove('mobile-nav-active');
        mobileNav.classList.remove('mobile-nav--active');
    }
});

pageOverlay.addEventListener('click', function() {
    if(this.classList.contains('page-overlay--active')) {
        this.classList.remove('page-overlay--active');
        navMenuIcon.classList.remove('navigation__menu-icon--close-x');
        body.classList.remove('mobile-nav-active');
        mobileNav.classList.remove('mobile-nav--active');
    }
});
