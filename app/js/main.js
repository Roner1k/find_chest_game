'use strict'

$(document).ready(function () {

    $('.events-wrap__item').hover(function () {
            $('.event-detail-button', this).addClass('active');
            $('.event-detail-button.active').fadeIn();
        },
        function () {
            $('.event-detail-button.active').fadeOut();
            $('.event-detail-button', this).removeClass('active');
        });


    // let condition = 0;
    // while (condition < 10) {
    //     console.log(`<h3> делаем что-то + $(condition) раз`);
    //     document.write(`<h3> делаем что-то + $(condition) раз`);
    //     condition++;

    //     let condition = 0;
    //     do {
    //         console.log(`<h3> делаем что-то + $(condition) раз`);
    //         document.write(`<h3> делаем что-то + $(condition) раз`);
    //         condition++;
    //     }
    // }
    // while (condition < 10) ;


    // let valueN = prompt("Введите СТОП-число. От 2 и больше (Четное)", 0);
    // valueN = parseInt(valueN);
    // for (let i = 2; i <= valueN; i++) {
    //     if (i % 2 == 0) {
    //         document.write(`<h3> Чет  ${i} раз </h3>`);
    //     }
    // }


});
