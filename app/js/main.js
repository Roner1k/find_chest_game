'use strict'

//1
document.querySelector('#task1 button').addEventListener('click', function () {
    document.querySelector('.rNumber').innerHTML = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
})

//3

let hideButton = document.querySelector('#task3 button'),
    someDiv = document.querySelector('#task3 div');

hideButton.addEventListener('click', addClass);

function addClass() {
    if (someDiv.className.length === 0) {
        someDiv.classList.add('youSeeMe');
    } else {
        someDiv.classList.remove('youSeeMe');
    }
}

//4

let buttons4Tabs = document.querySelectorAll('#task4 button'),
    tabsElements = document.querySelectorAll('#task4 div');

for (let key in [...buttons4Tabs]) {

    buttons4Tabs[key].addEventListener('click', () => {

        for (let key2 in [...tabsElements]) {
            buttons4Tabs[key2].classList.remove('activeButton');
            tabsElements[key2].classList.remove('activateMyDiv');
        }

        tabsElements[key].classList.add('activateMyDiv');
        buttons4Tabs[key].classList.add('activeButton');
    })
}

//5
let getNews = document.querySelectorAll('.news');
for (let key in [...getNews]) {
    getNews[key].addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            getNews[key].classList.add('delAnim');
            setTimeout(() => {
                getNews[key].remove();

            }, 500)
        }
    })
}
//6
let progressBar = document.querySelector('progress');
document.querySelector('#task6 button').onclick = () => {
    progressBar.value = progressBar.value >= 100 ? progressBar.value = 0:progressBar.value += 5;

}

