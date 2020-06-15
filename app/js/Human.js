//описание человека

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get ageTest() {
        if (this.age > 0 && this.age <= 18) return 'молодой';
        if (this.age > 18 && this.age <= 50) return 'среднестатистический';
        if (this.age > 50 && this.age <= 100) return 'пожилой';

        return "скрывающий настоящий возраст"
    }
}