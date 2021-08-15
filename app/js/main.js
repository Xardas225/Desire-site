$(function () {
    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });

    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    $('.header__btn-menu').on('click', function () {
        $('.menu').toggleClass('menu--open');
    });


    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src=".././images/arrowslider-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src=".././images/arrowslider-right.svg" alt=""></button>'
    })

    $('.contact-slider').slick({
        dots: true,
        arrows: false,
        slidesToScroll: 10,
        slidesToShow: 10
    })

    let mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });

})

