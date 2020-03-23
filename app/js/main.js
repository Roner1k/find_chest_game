'use strict'

//1 четные

function myFunc1() {

    let valueN = document.getElementById("inputData").value;
    let outVal = document.getElementById("myOutData");
    valueN = parseInt(valueN);

    console.log(`где мое число  ${valueN}`);

    for (let i = 2; i <= valueN; i++) {

        if (i % 2 == 0) {
            outVal.innerHTML += i + '<br>четное число<br><hr>';
        }
    }
}

//2 нечетные

function myFunc2() {

    let valueN = document.getElementById("inputData").value;
    let outVal = document.getElementById("myOutData");
    valueN = parseInt(valueN);

    console.log(`где мое число  ${valueN}`);

    for (let i = 1; i <= valueN; i++) {

        if (i % 2 !== 0) {
            outVal.innerHTML += i + '<br>нечетное число<br><hr>';
        }
    }
}


//3 деление
function myFunc3() {

    let valueN = document.getElementById("inputData").value;
    let outVal = document.getElementById("myOutData");
    valueN = parseInt(valueN);

    console.log(`где мое число  ${valueN}`);

    for (let i = 1; i <= valueN; i++) {

        if (valueN % i == 0) {
            outVal.innerHTML += i + '<br>делится на ваше число<br><hr>';
        }
    }
}

//4 депозит
function myFunc4() {

    let valueN = document.getElementById("inputData").value;
    let outVal = document.getElementById("myOutData");
    valueN = parseInt(valueN);

    console.log(`где мое число  ${valueN}`);

    let q;
    q = 100 / valueN;

    let w = 0;

    for (let i = 0; i < q; i++) {
        w++;
    }
    outVal.innerHTML += 'С ' + valueN + '%-й ставкой,<br> вклад удвоится через ' + w + ' лет(год)<hr>';
}

//Задание 5.

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум
}

function myFunc5() {
    let outVal = document.getElementById("myOutData");
    let counter = 0;
    let randomNumber = 0;

    while (counter <= 9) {
        randomNumber = getRandomIntInclusive(10, 20);

        if (randomNumber % 4 !== 0) {
            counter++;
            outVal.innerHTML += counter + '-e cлучайное число ( ' + randomNumber + ' ) <br> от 10 до 20, которое не делится на 4 <hr>';

        }
    }
}

//6 вода

function myFunc6() {

    let valueN = document.getElementById("inputData").value;
    let outVal = document.getElementById("myOutData");
    valueN = parseInt(valueN);

    let days = 0;
    while (valueN > 10) {
        days++;
        valueN -= valueN * 0.1; // 0.1 = 10%
    }
    outVal.innerHTML += 'На ' + days + ' дня<br>хватит воды<br><hr>';

}
