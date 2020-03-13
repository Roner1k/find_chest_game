$(document).ready(function () {

    //slick background

    $('.bg-images').slick({
        // autoplay: true,
        // autoplaySpeed: 10000,
        dots: true,
        appendDots: $('.slick-dots'),
        vertical: true,
        verticalSwiping: true

    });


//calc

    $('.calc-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        edgeFriction: 0.15,
        prevArrow: '<i class="fal fa-chevron-left"></i>',
        nextArrow: '<i class="fal fa-chevron-right"></i>',
        // responsive: [
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 2,
        //         }
        //     },
        //     {
        //         breakpoint: 991,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1
        //         }
        //     },
        //     {
        //         breakpoint: 575,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    });

    $('.check-form').magnificPopup({
        showCloseBtn: true
    });

    $('.calc-items2').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: '4px',
        focusOnSelect: true,
        edgeFriction: 0.15,
        prevArrow: '<i class="fal fa-chevron-left"></i>',
        nextArrow: '<i class="fal fa-chevron-right"></i>',

    });

    //Animation hamburger
    $(".hamburger").click(function () {
        $("#Hamburger-menu").slideToggle();
        $("#Hamburger-menu").toggleClass('active');
    });

    //Activation hamburger-menu
    $('#Hamburger-menu #hamburger__sidebar li a').click(function () {
        $("#Hamburger-menu").slideUp();
        $('.hamburger').removeClass('is-active');
    });

    //Smooth Scrolling
    $("a.scrollto").click(function () {
        var elementClick = '#'+$(this).attr("href").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
        return false;
    });

    //mask
    $("#tel").mask("+38(999)-99-9999");


//carculator_)

    // ВОТ это оно считает и работает , когда раскоментировать!!!!!!!!!!!!!!!!!!!!!!

    let typeWindowText = "Rehau Delight";
    let typeWindowPrice = 1000;
    let typeAppName = 'Дополнительная функция 1';
    let typeAppPrice = 100;


    $('.calc-items').on('afterChange', function (event, slick, currentSlide) {
        typeWindowText = $('.calc-items .slick-current .windows').data('typewindow');
        typeWindowPrice = $('.calc-items .slick-current .windows').data('typewindowprice');

        $('.selected-window__container .selected-window__type .window-name').text(typeWindowText);
        $('#window-price').val(typeWindowPrice);

        //calculator ();

        console.log('Значение выбора окна typeWindowText = ' + typeWindowText);
        console.log('Значение выбора окна typeWindowPrice = ' + typeWindowPrice);
    });

    $('.calc-items2').on('afterChange', function (event, slick, currentSlide) {
        typeAppName = $('.calc-items2 .slick-current .windows').data('typeappname');
        typeAppPrice = $('.calc-items2 .slick-current .windows').data('typeappprice');

        $('section#prices .selected-window__apps .apps .apps-name').text(typeAppName);
        $('#app-price').val(typeAppPrice);

        // calculator ();

        console.log('Значение выбора окна typeAppName = ' + typeAppName);
        console.log('Значение выбора окна typeAppPrice = ' + typeAppPrice);
    });

    $('section#prices .calcwrap button').on('click', function () {
        calculator();
    });

    //PLUS minus counter

    $('.minus').click(function () {
        let $input = $(this).parent().find('input');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        let $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    //console.log('nenenenen = ' + count);
    // let currentQuantity = 1;
    //
    // currentQuantity = $('section#prices .counter input').val();
    // $('#plus').click(function () {
    //     currentQuantity++;
    // });
    // $('#minus').click(function () {
    //     if (currentQuantity > 0) {
    //         currentQuantity--;
    //     }
    // });
    // $('#curval').val(currentQuantity);


    function calculator() {

        let price = typeWindowPrice * typeAppPrice;
        $('#total-price').val(price);
        console.log("total" + price);
        console.log("window" + typeWindowPrice);
        $('#price').val(price);
        $('#window-type').val(typeWindowText);
        $('#app-type').val(typeAppName);
    }

    //Validating and sending form data

    $('[data-submit]').on('click', function (e) {
        //e.preventDefault();
        $(this).parent('form').submit();
    })
    $.validator.addMethod(
        "regex",
        function (value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );

    function valEl(el) {
        el.validate({
            rules: {
                tel: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                },
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            submitHandler: function (form) {
                $('#loader').fadeIn();
                var $form = $(form);
                // var $formId = $(form).attr('id'),
                f = $form[0],
                    fd = new FormData(f);
                $.ajax({
                    type: $form.attr('method'),
                    url: $form.attr('action'),
                    data: fd,
                    processData: false,
                    contentType: false
                })
                    .always(function (response) {
                        setTimeout(function () {
                            $('#preloader').fadeIn(400);
                        }, 10);

                        $('#exampleModal').modal('hide');

                        setTimeout(function () {
                            $('#preloader').fadeOut(400);
                        }, 6500);

                        setTimeout(function () {
                            $('#overlay').fadeIn(400);
                        }, 7510);

                        $('#overlay').on('click', function () {
                            $(this).fadeOut();
                        })
                    });
            }
        })
    }

    $('.output-form').each(function () {
        valEl($(this));
    });

});
