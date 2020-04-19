//Animation hamburger
$(".hamburger").click(function () {
    $("#Hamburger-menu").slideToggle();
    $("#Hamburger-menu").addClass('active');
    $("body").css('position', 'fixed');
});

//Activation hamburger-menu
$('#Hamburger-menu #hamburger__sidebar li a').click(function () {
    $("body").attr('style', '');
    $("#Hamburger-menu").slideUp();
    $('.hamburger').removeClass('is-active');
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

//Smooth Scrolling
$("a.scrollto").click(function () {
    let elementClick = '#' + $(this).attr("href").split("#")[1]
    let destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
});