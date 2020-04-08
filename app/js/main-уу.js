//'use strict'

// palmThree();
//
// function palmThree() {
//     let n = prompt("Количество повторений 'p' ");
//     if (isNaN(n)) {
//         alert(`вы ввели не число!`);
//     } else {
//
//         for (let i = 1; i <= +(n); i++) {
//             document.write(` p`);
//         }
//         ;
//
//     }
//     ;
//
//
// };

// autoReplace();
// function autoReplace() {
//
//     let food = ['салат', 'помидоры' ];
//     const  itsFood = 'еда';
//
//     document.write(`<h4> ${itsFood} </h4>`);
//
//
// };

function getNumEnding(iNumber, aEndings)
{
    let sEnding, i;
    iNumber = iNumber % 100;
    if (iNumber>=11 && iNumber<=19) {
        sEnding=aEndings[2];
    }
    else {
        i = iNumber % 10;
        switch (i)
        {
            case (1): sEnding = aEndings[0]; break;
            case (2):
            case (3):
            case (4): sEnding = aEndings[1]; break;
            default: sEnding = aEndings[2];
        }
    }
    return sEnding;
}
console.log(getNumEnding(31, 'товар','товаров','товара'));