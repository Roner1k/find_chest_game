'use strict'

//slider after header
$('.banners-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

//second slider
$('.offers-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
    appendDots: $('.my-slider-dots'),
    centerPadding: '0px',
    centerMode: true,
    speed: 300,
    slidesToShow: 1,
   // adaptiveHeight: true,

    //nextArrow: $(".slick-slide .slick-current .slick-active img"),


});

// third slider

(function () {

    let gal_car = $('.catalog-slider .carousel'),
        $status = $('.pagingInfo');

    gal_car.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i);
    });

    gal_car.slick({
        speed: 1000,
        centerPadding: '0px',
        centerMode: true,
        slidesToShow: 3,
        focusOnSelect: true,
        variableWidth: false,
        dots: false,
        adaptiveHeight: true,
        prevArrow: $(".gal-m-prev"),
        nextArrow: $(".gal-m-next"),
        //autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '28%',
                }
            }
        ]
    });

})();
document.querySelector('.catalog-wrap').addEventListener('click', (e) => {
    document.querySelector('.about-image').innerText = document.querySelector('.slick-slide.slick-current.slick-active .image-info').innerText;
})
document.querySelector('.catalog-wrap').addEventListener('touchend', (e) => {
    document.querySelector('.about-image').innerText = document.querySelector('.slick-slide.slick-current.slick-active .image-info').innerText;
})

$('footer .footer-wrapper .footer-menu li').append('<span>/</span>');
