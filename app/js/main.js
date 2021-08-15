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
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src=".././images/arrowslider-left.svg" alt=""></button>',
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src=".././images/arrowslider-left.svg" alt=""></button>'
    })

    $('.contact-slider').slick({
        dots: true,
        arrows: false,
        slidesToScroll: 10,
        slidesToShow: 10,
        responsive: [
            {
              breakpoint: 1700,
              settings: {
                slidesToScroll: 8,
                slidesToShow: 8,
              }
            },
            {
              breakpoint: 1511,
              settings: {
                slidesToScroll: 6,
                slidesToShow: 6,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToScroll: 5,
                slidesToShow: 5,
              }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToScroll: 4,
                  slidesToShow: 4,
                }
              },
              {
                breakpoint:675,
                settings: {
                  slidesToScroll: 3,
                  slidesToShow: 3,
                }
              },
              {
                breakpoint:510,
                settings: {
                  slidesToScroll: 2,
                  slidesToShow: 2,
                }
              },
              {
                breakpoint:350,
                settings: {
                  slidesToScroll: 1,
                  slidesToShow: 1,
                }
              }

          ]
    })

    let mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });

})

