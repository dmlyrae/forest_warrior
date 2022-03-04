window.onload = function() {
    let mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        width: 438,
        spaceBetween: 10,
        navigation: {
            nextEl: '.arrow',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            595: {
                slidesPerView: 2,
            },
        },
    });

    let menu = document.querySelector('.menu-mobile');
    let menuButton = document.querySelector('.menu-button');
    let header = document.querySelector('.header');
    menu.addEventListener ('click', (event) => {
        header.classList.toggle('header-active');
        menuButton.classList.toggle('menu-button-active');
    })
}
