'use strict';

let l2Map = document.getElementById('game-map'),
    gameMassage = document.getElementById('message'),
    gameHInt = document.getElementById('hints'),
    maxCount = document.getElementById('max-count'),
    attCount = document.getElementById('att-count');

class Level_1 extends Map {
};

let stage1 = new Level_1();
document.querySelector("button[type='button']").addEventListener('click', () => {
    location.reload();
})
maxCount.innerText = stage1.counter;

l2Map.addEventListener('click', e => {

    stage1.userPosX = e.offsetX;
    stage1.userPosY = e.offsetY;
    gameMassage.style.display = 'none';

    if (stage1.randomPosX === 0) {
        stage1.setRandomPoint()
    }

    stage1.clicks--;
    if (stage1.clicks < 0) {
        gameMassage.innerHTML = 'Вы проиграли :(';
        gameMassage.style.display = 'block';
        document.querySelector("button[type='button']").style.display = 'block';

    } else {
        gameHInt.innerText = stage1.getHint();
        attCount.innerText = stage1.clicks;
        if (stage1.getDistance() <= 25) {
            stage1.counter -= 10;
            stage1.clicks = stage1.counter
            stage1.level++;
            stage1.money += 200;
            if (confirm('Победа! Следующий уровень!')) {
                stage1.setRandomPoint()
                maxCount.innerText = stage1.counter;
                document.getElementById('money').innerHTML = `${stage1.money} Гривень `
                document.getElementById('att-count').innerText = stage1.clicks;
                gameMassage.style.display = 'block';
                gameMassage.innerHTML = `Уровень ${stage1.level} Попытки: ${stage1.counter} `
                if (stage1.counter <= 0) {
                    prompt('Введине номер карты куда отправлять деньги!!')
                    prompt('Карта действительна до:')
                    prompt('CVV КОД:');
                    alert('Супер , деньги придут через 24часа!');
                    gameMassage.innerHTML = `Вы победители и поломали игру!! `;
                }
            } else location.reload();
        }
    }
    console.log(stage1.getDistance())
})