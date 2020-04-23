//Animation hamburger
$(".hamburger").click(function () {
    if ($('#Hamburger-menu').hasClass('active')) {
        $('#Hamburger-menu').removeClass('active');
        $("#Hamburger-menu").slideUp();
        $("html").attr('style', '');
    } else {
        $("#Hamburger-menu").slideToggle();
        $("#Hamburger-menu").addClass('active');
        $("html").css('overflow-y', 'hidden');
    }
});

//Remove class when click on link
$('#Hamburger-menu #hamburger__sidebar li a').click(function () {
    $("html").attr('style', '');
    $('#Hamburger-menu').removeClass('active');
    $('.hamburger').removeClass('is-active');
    $("#Hamburger-menu").slideUp();

});

//Animation of hamburger
let forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t)) for (let c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
};
let hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}

function removeOpenedClass() {
    $('.btn-read-more.opened').removeClass('opened');
}
//mask
$("#tel").mask("+38(999)-99-9999");

//Smooth Scrolling
$("a.scrollto").click(function () {
    let elementClick = '#' + $(this).attr("href").split("#")[1]
    let destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
});

//Validating and sending form data

$('[data-submit]').on('click', function (e) {
    //e.preventDefault();
    $(this).parent('form').submit();
})
$.validator.addMethod(
    "regex",
    function (value, element, regexp) {
        let re = new RegExp(regexp);
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
            lastName: {
                required: true
            },
            companyName: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        submitHandler: function (form) {
            $('#loader').fadeIn();
            let $form = $(form);
            // let $formId = $(form).attr('id'),
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

$('.consultation-form').each(function () {
    valEl($(this));
});
