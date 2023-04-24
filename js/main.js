const btnAnimals = document.querySelector('#btnAnimals');
const photoAnimals = document.querySelector('#photoAnimals');

const btnClick = (gallery) => {
    if (gallery.classList.contains('hide')) {
        gallery.classList.remove('hide');
        gallery.classList.add('show');
    } else {
        gallery.classList.remove('show');
        gallery.classList.add('hide');
    }
}

btnAnimals.addEventListener('click', () => {
    if (photoAnimals.classList.contains('hide')) {
        photoAnimals.classList.remove('hide');
        photoAnimals.classList.add('show');
    } else {
        photoAnimals.classList.remove('show');
        photoAnimals.classList.add('hide');
    }
});

// смена цвета header при прокрутке
/* $(window).on("scroll", function () {
    $('.header').toggleClass("header__active", $(this).scrollTop() > $(window).height());
}); */

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

    $(".twentytwenty__container_vertical").twentytwenty({
        orientation: 'vertical',
        before_label: 'ДО',
        after_label: 'ПОСЛЕ',
        no_overlay: true,
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







