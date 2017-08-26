$(document).ready(function() {
    // arrow animate

    $(window).load(function() {
        /* Act on the event */
        $('.lodaing').fadeOut(2000);
        $('body').css('overflow', 'auto');
    });

    $('.main-section .arrow-icon').click(function() {

        $('html, body').animate({

            scrollTop: $('.team').offset().top

        }, 1000);

    });



    $('.single-item,.testimonials-slider').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        speed: 500,
        fade: true,
    });


    $('.responsive.partners-logo-sc').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    autoplay: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                }
            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: false,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    $('.text-input').on('change', function() {
        var input = $(this);
        if (input.val().length) {
            input.next('span').addClass('active-span');
        } else {
            input.next('span').removeClass('active-span');
        }
    });



    $('.text-massge').on('change', function() {
        var input = $(this);
        if (input.val().length) {
            $('.for-masge').addClass('active-span');
        } else {
            $('.for-masge').removeClass('active-span');
        }
    });
    new WOW().init();
});
