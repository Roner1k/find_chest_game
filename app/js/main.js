$(document).ready(function () {

    $('.events-wrap__item').hover(function () {
            $('.event-detail-button', this).addClass('active');
            $('.event-detail-button.active').fadeIn();
        },
        function () {
            $('.event-detail-button.active').fadeOut();
            $('.event-detail-button', this).removeClass('active');
        });

});
