'use strict'
let myCar = {};

myCar = {
    manufacturer: 'Toyota',
    model: 'AE86',
    year: 1987,
    weight: 923 + ' kg',
    engine: '1.6 L 4A-GEU I4 130 HP ',
    topSpeed: 200 + " km/h",
    averageSpeed: 100 + " km/h",
};

function autoInfo() {

    let myCarInfo = document.createElement('div');
    myCarInfo.className = 'car-information';
    myCarInfo.style.display = "grid";
    myCarInfo.style.gridTemplateColumns = "1fr 2fr";
    myCarInfo.style.alignSelf = 'center';
    myCarInfo.style.justifyItems = 'center';
    myCarInfo.style.border = "1px solid black";
    myCarInfo.style.width = "666px";
    myCarInfo.style.height = "340px";
    myCarInfo.style.margin = "10px auto";

    for (let key in myCar) {
        let carProperty = document.createElement('div'),
            carPropValue = document.createElement('div');
        carProperty.style.border = '1px solid black';
        carProperty.style.width = '100%';
        carProperty.style.padding = '10px';
        carPropValue.style.border = '1px solid black';
        carPropValue.style.width = '100%';
        carPropValue.style.padding = '10px';

        carProperty.innerText = key[0].toUpperCase() + key.slice(1) + ":";
        carPropValue.innerText = myCar[key];

        myCarInfo.append(carProperty);
        myCarInfo.append(carPropValue);

        console.log(carProperty + typeof (carProperty));
    }
    document.querySelector('figure').append(myCarInfo);
};

function AverageSpeedCalc() {
    let averageSpeed = parseInt(myCar.averageSpeed),
        distance = +document.querySelector('input').value,
        nTime,
        t;

    nTime = distance / averageSpeed;
    t = nTime;

    for (let i = 4; i <= t; t -= 4) {
        nTime++;
    }
    alert('You need to ride: ' + Math.floor(nTime) + ' Hour(s)');
};

//2

function secondFunction() {
    let firstNumbTop = +document.getElementById('f-n-top').value,
        firstNumbBottom = +document.getElementById('f-n-bottom').value,
        secNumbTop = +document.getElementById('s-n-top').value,
        secNumbBottom = +document.getElementById('s-n-bottom').value,
        actValue = document.getElementById('act-value').value;

    let firstObj = {
        topNumber: firstNumbTop,
        bottomNumber: firstNumbBottom,
    };
    let secondObj = {
        topNumber: secNumbTop,
        bottomNumber: secNumbBottom,
    };
    let resultObj = {
        resultTop: null,
        resultBottom: null,
    };

    if (actValue !== "+" && actValue !== "-" && actValue !== "*" && actValue !== "/") {
        alert("Проверьте ввод!")
    } else {
        switch (actValue) {
            case "+":
                sum();
                break;
            case "-":
                subtraction();
                break;
            case "*":
                multiplication();
                break;
            case "/":
                segmentation();
                break;
            default:
                alert("vse poshlo ne tak");
        }

        function sum() {
            if (firstObj.bottomNumber === secondObj.bottomNumber) {
                resultObj.resultTop = firstObj.topNumber + secondObj.topNumber;
                resultObj.resultBottom = firstObj.bottomNumber;
            } else {
                resultObj.resultTop = (firstObj.topNumber * secondObj.bottomNumber) + (secondObj.topNumber * firstObj.bottomNumber);
                resultObj.resultBottom = firstObj.bottomNumber * secondObj.bottomNumber;
            }
        }

        function subtraction() {
            if (firstObj.bottomNumber === secondObj.bottomNumber) {
                resultObj.resultTop = firstObj.topNumber - secondObj.topNumber;
                resultObj.resultBottom = firstObj.bottomNumber;
            } else {
                resultObj.resultTop = (firstObj.topNumber * secondObj.bottomNumber) - (secondObj.topNumber * firstObj.bottomNumber);
                resultObj.resultBottom = firstObj.bottomNumber * secondObj.bottomNumber;
            }
        }

        function multiplication() {
            resultObj.resultTop = firstObj.topNumber * secondObj.topNumber;
            resultObj.resultBottom = firstObj.bottomNumber * secondObj.bottomNumber;
        }

        function segmentation() {
            resultObj.resultTop = firstObj.topNumber * secondObj.bottomNumber;
            resultObj.resultBottom = firstObj.bottomNumber * secondObj.topNumber;
        }

        if (resultObj.resultTop < 0) {
            resultObj.resultTop = resultObj.resultTop * -1;
            document.getElementById('result-int').innerText = "-";
        }

        if (resultObj.resultTop % resultObj.resultBottom === 0) {
            let resultInt = resultObj.resultTop / resultObj.resultBottom;
            resultObj.resultTop = 0;
            resultObj.resultBottom = 0;
            document.getElementById('result-int').innerText += resultInt;
        }

        document.getElementById('res-top').value = resultObj.resultTop;
        document.getElementById('res-bottom').value = resultObj.resultBottom;
    }
    ;
};

// function reduceFrac(numerator, denomerator) {
//     let a = numerator, b = denomerator;
//     while (a) {
//         let c = b % a;
//         b = a;
//         a = c;
//     }
//     return [numerator / b, denomerator / b]
// }


//3

let currentTime = new Date,
    timeStart,
    timeButton = document.querySelector('.add-time'),
    myTimeObj = {
        hours: 23,
        minutes: 58,
        seconds: 56,
    };

timeStart = setInterval(tick, 1000);

timeButton.onclick = function () {
    let addHour = +document.getElementById('hours').value,
        addMinute = +document.getElementById('minutes').value,
        addSecond = +document.getElementById('sec').value;
    if (addTime(myTimeObj.seconds, addSecond) > 59) {
        myTimeObj.seconds = (myTimeObj.seconds + addSecond) - 60;
        let minuteCounter = myTimeObj.seconds;
        for (let i = 0; minuteCounter > 0; minuteCounter -= 60) {
            myTimeObj.minutes++;
        }

    } else {
        myTimeObj.seconds += addSecond;

    }
}

function addNull(check) {
    if (check < 10) {
        return '0' + check;
    }
    return check;
}

function addTime(a, b) {
    return a + b;
}


function tick() {
    if (myTimeObj.seconds < 60) myTimeObj.seconds++;
    if (myTimeObj.seconds >= 60) {
        myTimeObj.seconds = 0;
        myTimeObj.minutes++;
        if (myTimeObj.minutes >= 60) {
            myTimeObj.minutes = 0;
            myTimeObj.hours++;
            if(myTimeObj.hours >= 24){
                myTimeObj.hours = 0;
            }
        }
    }
    document.getElementById('clock').innerText = `${addNull(myTimeObj.hours)} : ${addNull(myTimeObj.minutes)} : ${addNull(myTimeObj.seconds)}`;
}


