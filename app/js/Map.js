class Map {

    constructor(currentPosX, currentPosY) {
        this.userPosX = currentPosX;
        this.userPosY = currentPosY;
        this.randomPosX = 0;
        this.randomPosY = 0;
        this.counter = 50;
        this.clicks = this.counter;
        this.level = 1;
        this.money = 0;
    }

    createRandomPoint(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    setRandomPoint() {
        this.randomPosX = this.createRandomPoint(10, 490);
        this.randomPosY = this.createRandomPoint(10, 490);
    }

    getDistance() {
        let diffX = this.userPosX - this.randomPosX,
            diffY = this.userPosY - this.randomPosY;
        return Math.ceil(Math.sqrt((diffX * diffX) + (diffY * diffY)));
    }

    getHint() {
        let distance = this.getDistance();
        distance = distance >= 500 ? 'Очень далеко 500' :
            distance < 500 && distance >= 400 ? 'Далеко 400' :
                distance < 400 && distance >= 300 ? 'Не Далеко 300' :
                    distance < 300 && distance >= 200 ? 'Куда ближе 200' :
                        distance < 200 && distance >= 100 ? 'Близко 100' :
                            distance < 100 && distance >= 50 ? 'Где-то тут 50' :
                                distance < 50 && distance > 25 ? 'Пахнет деньгами! 25' :
                                    distance <= 25 ? 'Вы нашли 200грн!' : 'Все сломалось!';

        return distance;
    }
}
