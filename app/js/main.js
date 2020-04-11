'use strict'

//1 if
function First() {

    let NumberTest = +document.getElementById('test-number').value;
    if (NumberTest > 0) {
        document.getElementById('result-one').value = 'Положительное число!';
    }
    if (NumberTest < 0) {
        document.getElementById('result-one').value = 'Отрицательное число!';
    }
    if (NumberTest === 0) {
        document.getElementById('result-one').value = 'А это ноль!';

    }


    console.log(typeof (userAge) + userAge);
};

//2
function Second() {
    let userAge = +document.getElementById('user-age').value;
    if (userAge > 0 && userAge < 120) {
        document.getElementById('result-two').value = ' Корректный ввод! ';

    } else document.getElementById('result-two').value = ' НЕ корректный ввод! ';

};

//3
function Third() {
    let modulValue = document.getElementById('module-value').value;
    if (modulValue < 0) {
        modulValue = modulValue * -1;
        document.getElementById('result-three').value = modulValue;
    } else {
        document.getElementById('result-three').value = modulValue;

    }
};

//4

function Fourth() {
    let hourCheck = +document.getElementById('hour-value').value,
        minCheck = +document.getElementById('min-value').value,
        secCheck = +document.getElementById('sec-value').value;
    if (hourCheck >= 0 && hourCheck <= 23 && minCheck >= 0 && minCheck <= 59 && secCheck >= 0 && secCheck <= 59) {
        document.getElementById('result-four').value = `Время ok ${hourCheck}:${minCheck}:${secCheck}`;

    } else {
        document.getElementById('result-four').value = `Время введено не правильно!`;

    }
};

//5

function Fifth() {
    let xValue = +document.getElementById('x-value').value,
        yValue = +document.getElementById('y-value').value,
        result;

    if (xValue < 0 && yValue > 0) result = 'точка находится в I-й четверти';
    if (xValue > 0 && yValue > 0) result = 'точка находится в II-й четверти';
    if (xValue < 0 && yValue < 0) result = 'точка находится в III-й четверти';
    if (xValue > 0 && yValue < 0) result = 'точка находится в IV-й четверти';
    if (xValue === 0) result = 'точка находится на оси X';
    if (yValue === 0) result = 'точка находится на оси Y';
    if (xValue === 0 && yValue === 0) result = 'точка находится в начале координат';
    document.getElementById('result-five').value = result;
};

//6 switch

function Sixth() {
    let month = +document.getElementById('month').value,
        result;
    switch (month) {
        case 1:
            result = 'January';
            break;
        case 2:
            result = 'February';
            break;
        case 3:
            result = 'March';
            break;
        case 4:
            result = 'April';
            break;
        case 5:
            result = 'May';
            break;
        case 6:
            result = 'June';
            break;
        case 7:
            result = 'July';
            break;
        case 8:
            result = 'August';
            break;
        case 9:
            result = 'September';
            break;
        case 10:
            result = 'October';
            break;
        case 11:
            result = 'November';
            break;
        case 12:
            result = 'December';
            break;
        default:
            result = 'Нет такого месяца';
    }
    document.getElementById('result-six').value = result;
};

//7
function Seventh() {
    let firstNumber = +document.getElementById('first-value').value,
        secondNumber = +document.getElementById('second-value').value,
        actValue = document.getElementById('act-value').value,
        result;
    switch (actValue) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        default:
            result = 'попробуйте снова';
    }
    console.log(actValue + typeof (actValue));


    document.getElementById('result-seven').value = result;
};

//8

function Eighth() {
    let firstNumber = +document.getElementById('first-number').value,
        secondNumber = +document.getElementById('second-number').value,
        result;
    result = firstNumber > secondNumber ? result = `Первое число ${firstNumber} больше`
        :
        firstNumber < secondNumber ? result = `Второе число ${secondNumber} больше`
            :
            secondNumber === firstNumber ? result = `Числа одинаковые` : result = `Повторите попытку`;

    document.getElementById('result-eighth').value = result;
}
;


// 9
function Ninth() {

    let checkNumber = document.getElementById('check-number').value,
        result;
    result = checkNumber % 5 === 0 ? result = `Число ${checkNumber} кратно 5-ти` : checkNumber % 5 !== 0 ?
      result = result = `Число ${checkNumber} НЕ кратно 5-ти`: result = `Что-то пошло не так`;
    document.getElementById('result-ninth').value = result;

};

//10

function Tenth() {
    let namePlanet = document.getElementById('planet-name').value,
        result;
    result = namePlanet == "Земля" ||namePlanet == "земля" || namePlanet == "ЗЕМЛЯ" || namePlanet == "Earth" || namePlanet == "earth"|| namePlanet == "EARTH"? result = "Привет, землянин!": result = "Привет, инопланетянин!";

    document.getElementById('result-tenth').value = result;

}