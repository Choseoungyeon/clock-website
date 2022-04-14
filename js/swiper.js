const win_w = window.innerWidth;

var swiper01 = new Swiper('.main_info', {
    loop: true,
    speed: 1000,
    autoplay: true,
    pagination: {
        el: ".main_info-pagination_progress",
        clickable: false,
        type: "progressbar",
    },
});

var progressSwiper = new Swiper('.main_info', {
    loop: true,
    pagination: {
        el: ".main_info-pagination",
        clickable: false,
        type: "fraction",
    },
});

progressSwiper.controller.control = swiper01;
swiper01.controller.control = progressSwiper;

if (win_w > 1300) {
    var swiper02 = new Swiper('.collection_swipe', {
        slidesPerView: 3,
        spaceBetween: 40,
        loop: true,
        speed: 1000,
        autoplay: true,
        pagination: {
            el: ".collection-pagination_progress",
            clickable: false,
            type: "progressbar",
        },
    });
} else {
    var swiper02 = new Swiper('.collection_swipe', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        speed: 1000,
        autoplay: true,
        pagination: {
            el: ".collection-pagination_progress",
            clickable: false,
            type: "progressbar",
        },
    });
}

var swiper01 = new Swiper('.menu_swipe', {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    speed: 1000,
    autoplay: true,
    pagination: {
        el: ".menu_swipe-pagination",
        clickable: false,
        type: "progressbar",
    },
});