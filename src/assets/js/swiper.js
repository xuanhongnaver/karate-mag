
var swiper =  new Swiper(".carousel-blog", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
    loop:false,
    slidesPerView: 1,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 30,
        },
    },
});
