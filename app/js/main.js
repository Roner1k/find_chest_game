'use strict';

document.querySelector("input[type='button']").onclick = () => {
    let $name = document.getElementById('name').value,
        $age = +document.getElementById('age').value,
        $likeVodka = document.getElementById('myTest').value.toLowerCase();

    class Person extends Human {
        constructor(name, age, likeVodka) {
            super(name, age);
            this.alcoholic = likeVodka;
        }

        findAlcoholic() {
            if (this.alcoholic === 'true') return 'алкоголик';
            return 'нормальный человек'
        }
    }

    console.log($age)
    const person = new Person($name, $age, $likeVodka);
    document.querySelector('.result_text').innerHTML = `Вы ${person.name}, ${person.ageTest} ${person.findAlcoholic()}`

}
