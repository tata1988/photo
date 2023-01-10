$(document).ready(function () {
    /* Плавная прокрутка меню */
    $('.header a[href^="#"]').click(function () {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        $('.header a[href^="#"]').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('.menu__mobile .menu').toggle(500);
        $('.menu__burger').toggleClass('close');
        return false;
    });

    /* Мобильное меню */
    $('.menu__burger').click(function () {
        $('.menu__mobile .menu').toggle(500);
        $(this).toggleClass('close');
    });

    //инициализация плагина twentytwenty jQuery
    $("#box").twentytwenty({
        default_offset_pct: 0.7,
        before_label: 'ДО',
        after_label: 'ПОСЛЕ',
    });

});


// Initialize Swiper

let swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});




