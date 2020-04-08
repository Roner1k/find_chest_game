'use strict'

//1
function First() {

    let userAge = +document.getElementById('user-age').value;
    switch (true) {

        case  (userAge >= 0 && userAge <= 12):
            userAge = 'Вы ребенок';
            break;
        case (userAge > 12 && userAge <= 18):
            userAge = 'Вы подросток';
            break;
        case (userAge > 18 && userAge < 60):
            userAge = 'Вы взрослый';
            break;
        case (userAge >= 60 && userAge <= 120):
            userAge = 'Вы пенсионер';
            break;
        case (userAge > 120):
            userAge = 'R.I.P.';
            break;

        default:
            userAge = 'попробуйте снова';

    }

    document.getElementById('result-one').value = userAge;
    console.log(typeof (userAge) + userAge);
};

//2
function Second() {
    let userNumber = +document.getElementById('user-number').value;
    switch (true) {
        case (userNumber === 0):
            userNumber = '0 - )';
            break;
        case (userNumber === 1):
            userNumber = '1 - !';
            break;
        case (userNumber === 2):
            userNumber = '2 - @';
            break;
        case (userNumber === 3):
            userNumber = '3 - #';
            break;
        case (userNumber === 4):
            userNumber = '4 - $';
            break;
        case (userNumber === 5):
            userNumber = '5 - %';
            break;
        case (userNumber === 6):
            userNumber = '6 - ^';
            break;
        case (userNumber === 7):
            userNumber = '7 - &';
            break;
        case (userNumber === 8):
            userNumber = '8 - *';
            break;
        case (userNumber === 9):
            userNumber = '9 - (';
            break;
        default:
            userNumber = 'ЧИСЛО ОТ 0 до 9 !'

    }
    document.getElementById('result-two').value += userNumber + ' ';
};

//3
function Third() {
    let threeDigitNumber = document.getElementById('three-digit-number').value,
        checkedNumber = +document.getElementById('check-number').value;

    for (let i = 0; i < threeDigitNumber.length; i++) {
        if (+threeDigitNumber[i] === checkedNumber) {
            document.getElementById('result-three').value = 'число присутствует';
            return;
        } else {
            document.getElementById('result-three').value = 'число отсутствует';
        }
    }
};

//4

function Fourth() {
    let yearCheck = +document.getElementById('year-check').value;

    let result = yearCheck % 400 === 0 || yearCheck % 4 === 0 || yearCheck % 100 === !0 ?
        document.getElementById('result-four').value = 'Год высокосный' :
        document.getElementById('result-four').value = 'Год НЕ высокосный';
};

//5

function Fifth() {
    let poliCheck = document.getElementById('poli-check').value,
        myCounter = poliCheck.length - 1,
        reverseNumber = ' ';
    for (let i = 0; i <= myCounter; myCounter--) {
        reverseNumber += poliCheck[myCounter];
    }
    poliCheck = parseInt(poliCheck);
    reverseNumber = parseInt(reverseNumber);
    let result = reverseNumber === poliCheck ? ' Это Полиндром! ' : ' Это не полиндром! ';

    document.getElementById('result-five').value = result;
};

//6

function Sixth() {
    let USD = +document.getElementById('USD').value,
        currency = +document.getElementById('select-currency').value,
        currencyName = $('#select-currency').find(':selected').attr('data-currencyName'),
        result = USD * currency;

    document.getElementById('result-six').value = result.toFixed(2) + currencyName;
};

//7
function Seventh() {
    let buySum = +document.getElementById('buy-sum').value,
        discount,
        discountValue;

    discount = buySum > 0 && buySum <= 199 ? discount = null : buySum >= 200 && buySum <= 300 ? discount = 3 : buySum > 300 && buySum <= 500 ? discount = 5 : buySum > 500 ? discount = 7 : discount = 0;
    discountValue = (buySum / 100) * discount;
    document.getElementById('result-seven').value = buySum - discountValue + ' грн. ';
};

//8

function Eighth() {
    let circleLength = +document.getElementById('circle-length').value,
        squareS = +document.getElementById('square-p').value,
        circleD,
        squareA;
    const pi = 3.14;

    circleD = (circleLength / pi).toFixed(2);
    squareA = (squareS / 4).toFixed(2);

    if (circleD <= squareA) {
        document.getElementById('result-eighth').value = `Поместиться! Так как диаметр круга: ${circleD} а длинна стороны квадрата: ${squareA} `;
    } else {
        document.getElementById('result-eighth').value = `НЕ поместиться!  Так как диаметр круга: ${circleD} а длинна стороны квадрата: ${squareA} `;
    }
    ;
};

// 9
function Ninth() {

    let question1Value = +document.querySelector('input[name="que1"]:checked').value,
        question2Value = +document.querySelector('input[name="que2"]:checked').value,
        question3Value = +document.querySelector('input[name="que3"]:checked').value,
        result;

    if (question1Value === 1 || question2Value === 1 || question3Value === 1) {
        modalo();
        document.getElementById('result-ninth').value = 'Сделайте выбор , пожалуйста!';
        return 0;
    } else {
        result = question1Value + question2Value + question3Value;
        switch (true) {
            case (result === 6):
                document.getElementById('result-ninth').value = 'Вы набрали ' + result + ' балов , Молодчинка!';
                break;
            case (result === 4):
                document.getElementById('result-ninth').value = 'Вы набрали ' + result + ' балов , Можно и лучше!';
                break;
            case (result === 2):
                document.getElementById('result-ninth').value = 'Вы набрали ' + result + ' балов , Мда...!';
                break;
            case (result === 0):
                document.getElementById('result-ninth').value = 'Вы набрали ' + result + ' балов , Это печально...!';
                break;
            default:
                document.getElementById('result-ninth').value = 'Что-то пошло не так...';

        }
        modalo();
    }

    function modalo() {
        $('#open-door').click(function () {
            $('.modal-wrap').fadeIn();
        });
        $('.close-me').click(function () {
            $('.modal-wrap').fadeOut();
        });
    }
};

//10

function Tenth() {
    let dateValue = +document.getElementById('date-value').value,
        monthValue = +document.getElementById('month-value').value,
        yearValue = +document.getElementById('year-value').value,
        dateLimit,
        monthLimit = 12,
        februaryLimit;

    //сколько дней в феврале
    februaryLimit = yearValue % 400 === 0 || yearValue % 4 === 0 || yearValue % 100 === !0 ?
        februaryLimit = 29 : februaryLimit = 28;

    //лимит дней в месяце
    switch (monthValue) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dateLimit = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            dateLimit = 30;
            break;
        case 2:
            dateLimit = februaryLimit;
        default:
            document.getElementById('result-tenth').value = `Что-то пошло не так`;
    }

    if (dateValue <= dateLimit){
        dateValue++;
    } if(dateValue > dateLimit) {
        dateValue = 1;
        monthValue++;
    } if(monthValue > monthLimit){
        monthValue = 1;
        yearValue++;
    }
    document.getElementById('result-tenth').value = `След День: ${dateValue} / ${monthValue} / ${yearValue} `

}