'use strict'

let searchButton = document.querySelector('.film-content form button'),
    changePage = document.querySelectorAll(".pagination span"),
    filmNameIn,
    totalPages,
    notPair,
    searchHistory = {};

if (!!searchButton) {
    searchButton.onclick = (e) => {
        e.preventDefault();
        getFilms(1);
        let i = 0;
        document.querySelectorAll('.pagination nav span').forEach(spanV => {
            i++;
            spanV.innerHTML = i;
            if (parseInt(spanV.innerHTML) === 1) spanV.classList.add('active-page');
            else spanV.classList.remove('active-page');
        })
        if (!!takeCookie && filmNameIn !== '') {
            let newDate = new Date();
            searchHistory[filmNameIn] = newDate.toLocaleString()
            localStorage.setItem(`${localStorage.getItem('userName')}$searchData`, JSON.stringify(searchHistory))
        }
    }
}

function getFilms(setPage) {

    filmNameIn = document.querySelector('.film-content form input').value;
    let links = ['http://www.omdbapi.com/?s=' + filmNameIn + '&page=' + setPage + '+&apikey=393848ac', 'http://www.omdbapi.com/?s=' + filmNameIn + '&page=' + (setPage + 1) + '&apikey=393848ac'];

    Promise.all(links.map(url =>
        fetch(url).then(resp => {
            document.querySelector('.myErrors.search').style.display = 'none';
            document.querySelector('.myErrors.server').style.display = 'none';
            if (resp.ok === true && resp.status === 200) {
                return resp.json();
            } else {
                document.querySelector('.myErrors.server').style.display = 'block';
            }
        })
    )).then(filmsObj => {
        if (filmsObj[0].Response === "False") {
            document.querySelector('#someResponse').innerHTML = '';
            document.querySelector('.total-results').innerHTML = '';
            document.querySelector('.pagination').style.display = 'none';
            document.querySelector('.myErrors.search').style.display = 'block';
        } else {
            document.getElementById('someResponse').innerHTML = '';
            document.querySelector('.total-results').innerHTML = `Найдено результатов: ${filmsObj[0].totalResults} `;
            notPairVal(Math.ceil(parseInt(filmsObj[0].totalResults) / 10));

            showMySearch(filmsObj[0].Search);
            totalPages = Math.ceil(parseInt(filmsObj[0].totalResults) / 20);
            document.querySelector('.quantity-pages').innerHTML = `Всего страниц: <span>${totalPages}</span>`;

            if (totalPages > 1) {
                showMySearch(filmsObj[1].Search);

                if (totalPages <= 2) {
                    changePage[2].remove();
                    if (totalPages === 1) changePage[1].remove();
                }

                document.querySelector('.pagination').style.display = 'flex';
            } else document.querySelector('.pagination').style.display = 'none';
        }
    })
}

function notPairVal(val) {
    notPair = [''];

    for (let i = 1; i <= val; i++) {
        if (i % 2 !== 0) {
            notPair.push(i);
        }
    }
}


function showMySearch(obj) {
    let outDivs = '';
    obj.forEach(film => {
        if (film.Poster === 'N/A') {
            film.Poster = './img/nophoto.jpg'
        }
        outDivs += `<div class="film-item"> <img src="${film.Poster}"> <div>${film.Title} (${film.Year})</div> <div>Type: ${film.Type}</div> <div class="film-id">imfdbID: <span>${film.imdbID}</span></div> </div>`
    })
    document.getElementById('someResponse').innerHTML += outDivs;
}


//pagination
for (let key in [...changePage]) {

    changePage[key].addEventListener('click', (e) => {
        let startCounter = +document.querySelector('.pagination nav span').innerText;
        getFilms(notPair[parseInt(e.target.innerText)]);

        changePage.forEach(page => {
            page.classList.remove('active-page');
        })
        if (key == 2 && startCounter + 3 <= totalPages) {
            changePage[1].classList.add('active-page');
            changePage.forEach(page => {
                let i = +page.innerText;
                page.innerText = i + 1;
            })
        } else if (key == 0 && startCounter !== 1) {
            changePage[1].classList.add('active-page');
            changePage.forEach(page => {
                let i = +page.innerText;
                page.innerText = i - 1;
            })
        } else {
            changePage[key].classList.add('active-page');
        }
    })
}

// more info about

let modalOverlay = document.querySelector('.overlay');

if (!!modalOverlay) modalOverlay.addEventListener('click', closeModal);


function closeModal(e) {
    if (e.target.classList.contains('overlay') || e.target.classList.contains('close-me')) {
        this.style.display = 'none';
        document.documentElement.style.overflowY = 'auto';
    }
}

if (!!document.querySelector('#someResponse')) {
    document.querySelector('#someResponse').addEventListener('click', (e) => {
        if ((e.target.tagName).toLowerCase() === 'img') {
            getFilmInfo(e.target.parentNode.querySelector('.film-id span').innerText);
        }
    })
}

function getFilmInfo(filmID) {
    fetch('http://www.omdbapi.com/?apikey=393848ac&plot=full&i=' + filmID)
        .then((response) => {
            return response.json();
        })
        .then((currentFilmObj) => {
            document.querySelector('.overlay').style.display = 'block';
            document.documentElement.style.overflowY = 'hidden';
            if (currentFilmObj.Poster === 'N/A') {
                currentFilmObj.Poster = '/img/nophoto.jpg'
            }
            let filmToHtml = '<div class="close-me">&#10006;</div> <h2>' + currentFilmObj.Title + '</h2> <hr> <img src="' + currentFilmObj.Poster + '" alt="' + currentFilmObj.Title + ' Poster"> ';

            for (let key in currentFilmObj) {
                if (key === "Response" || key === 'imdbID' || key === 'Poster' || key === 'Title') {
                    continue;
                }
                if (key === "Ratings") {
                    filmToHtml += '<ul class="ratings" >Ratings'
                    for (let key2 in currentFilmObj[key]) {
                        filmToHtml += '<li>';
                        for (let key3 in currentFilmObj[key][key2]) {
                            console.log(currentFilmObj[key][key2][key3])
                            filmToHtml += '<span> ' + currentFilmObj[key][key2][key3] + '</span>';
                        }
                        filmToHtml += '</li> ';
                    }
                    filmToHtml += '</ul>'
                } else filmToHtml += '<div style="font-weight: bold">' + key + '</div> <div>' + currentFilmObj[key] + '</div>';
            }
            document.getElementById('film-description').innerHTML = filmToHtml;
        })

}


//auth ----------

let hideAuth = document.querySelector('.user-auth'),
    userName = '',
    authForm = document.forms[0],
    submitButton = authForm.querySelector('button');

hideAuth.addEventListener('click', e => {
    if ((e.target.tagName).toLowerCase() === 'span') {
        e.target.style.height = 0;
        e.target.parentNode.querySelector('form').style.display = 'flex';
    }
    e.stopPropagation()
})
document.body.addEventListener('click', e => {
    if (e.target.classList.contains('registrationF') || e.target.parentNode.classList.contains('registrarionF')) {
    } else {
        document.querySelector('.registrationF').style.display = 'none';
        document.querySelector('.user-auth span').style.height = '28px';
    }
})

submitButton.onclick = function () {
    let userName = authForm.name.value,
        userEmail = authForm.email.value,
        userPass = authForm.password.value,
        reName = /(^[A-z]{3,14}$)|(^[А-я]{3,14}$)/,
        rePass = /\w{4,16}/,
        reEmail = /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11})?)$/;

    authForm.querySelectorAll("input").forEach((i) => {
        i.classList.remove('form-error');
    })
    authForm.querySelectorAll("span").forEach((s) => {
        s.remove();
    })

    checkInputs();

//если 4 бала есть , отправляем куки
    function checkInputs() {

        let c = 0;

        if (reName.test(userName) === false) {
            addError('user-name', 'wrong name <br>(одно слово, без цифр, max 14)')

        } else {
            c++;
            localStorage.setItem('userName', userName)
        }

        if (reEmail.test(userEmail) === false) {
            addError('e-mail', 'неправильный email')

        } else {
            c++;
            localStorage.setItem('userEmail', userEmail)
        }

        if (userPass !== document.getElementById('password-сonf').value) {
            addError('password', 'пароли не совпадают')
            addError('password-сonf', '')

        } else {
            c++;
            localStorage.setItem('userPass', userPass)
        }
        if (rePass.test(userPass) === false) {
            addError('password', 'Пароль слишком легкий')
            addError('password-сonf', '')

        } else c++;

        if (c === 4) {
// куки на 7 дней
            let expiresDate = Date.now();
            expiresDate = Math.ceil((+expiresDate / 1000) + 615600)
            expiresDate = new Date(expiresDate * 1000);

            document.cookie = `${userName}=${userEmail}${userPass}; expires = ${expiresDate.toUTCString()}`;
            document.querySelector('.registrationF').style.display = 'none';
            document.querySelector('.user-auth span').style.height = '28px';
            document.location.reload(true)
        }
    }
}

function addError(someInput, textError) {
    document.getElementById(someInput).classList.add('form-error');
    let nameErr = document.createElement('span');
    nameErr.innerHTML = textError;
    nameErr.classList.add('err-message');
    insertAfter(document.getElementById(someInput), nameErr)
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

//check cookie,delete or redirect
let takeCookie = document.cookie,
    goOut,
    reUser = /(^.*)=/mg;

if (!!takeCookie) {

    let accountName = takeCookie.match(reUser)[0];
    accountName = accountName.substring(0, accountName.length - 1)
    document.querySelector('.user-auth span').innerHTML = `<div class="hello-user">
 <a href="cabinet.html"> <span>Привет,</span> ${accountName}</a>
  <a href="cabinet.html"> <span>Мой кабинет</span> </a>
  <a href="cabinet.html"> <span>История поисков</span> </a>
  <a id="log-out">Выйти!</a> </div> `;

    goOut = document.getElementById('log-out');
//есть куки и мы в кабинете!
    if (window.location.toString().indexOf('cabinet') > 0) {
        insertUserData();
        insertUserSearch();

        document.getElementById('input-user-name').innerText = accountName;
        document.getElementById('your-mail').value = localStorage.getItem('userEmail');
        document.getElementById('your-pass').value = localStorage.getItem('userPass');
    }


} else if (window.location.toString().indexOf('cabinet.html') > 0) {
    window.location.assign('index.html');
}

if (!!goOut) {
    goOut.addEventListener("click", () => {
        let cookies = document.cookie.split(";");

        for (let i in cookies) {
            let cookie = cookies[i];
            let eqPos = cookie.indexOf("=");
            let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        localStorage.clear()
        document.location.reload(true)
    })
}
if (!!document.getElementById('save-profile')) {
    document.getElementById('save-profile').addEventListener('click', (e) => {
        e.preventDefault();
        userInfoDetails();
    })
}
let ttt = localStorage.getItem(`${localStorage.getItem('userName')}$info`);

function userInfoDetails() {
    let userForm = document.forms[1],
        checkInputs = document.querySelectorAll('#more-user-info input'),
        userInfo = {};
    userInfo.firstName = userForm.first$name.value,
        userInfo.lastName = userForm.last$name.value,
        userInfo.birth = userForm.birth.value,
        userInfo.gender = userForm.gender.value,
        userInfo.phone = userForm.phone.value,
        userInfo.skype = userForm.skyp.value;
    console.log(userForm.skyp.value, userInfo.skype)
    if (userInfo.skype === undefined) {
        userInfo.skype = '-';

    }
    let c = 0;

    checkInputs.forEach((item) => {

        if (item.value == '' && item.name !== 'skyp') {
            item.style.border = '1px solid red';
            c++;
        } else {
            item.style.border = '1px solid black';
            c--;
        }
    })
    if (c === -5) {

        localStorage.setItem(`${localStorage.getItem('userName')}$info`, JSON.stringify(userInfo))
        insertUserData();
    }
}

//запись в локал + создание обьекта из локалки
function insertUserData(stope) {
    let insteadForm = document.querySelector('.after-save-wrap'),
        userInfoStor = localStorage.getItem(`${localStorage.getItem('userName')}$info`);

    if (!!userInfoStor) {

        userInfoStor = JSON.parse(userInfoStor);
        if (stope === 0) {
            return userInfoStor;
        }
        let insertInfo = '<div class="insert-info"> ';
        for (let key in userInfoStor) {
            insertInfo += `<div> <span>${key}:</span> <span>${userInfoStor[key]}</span> </div>`
        }
        insteadForm.style.display = 'block';
        document.querySelector('#more-user-info').style.display = 'none';
        insertInfo += '<button id="edit-data" onclick="editUserData()" >Редактировать</button> </div> '
        insteadForm.innerHTML = insertInfo;
    }
}


function insertUserSearch() {
    let userSearchStor = localStorage.getItem(`${localStorage.getItem('userName')}$searchData`);

    if (!!userSearchStor) {
        userSearchStor = JSON.parse(userSearchStor);

        let insertSearches = '<div class="insert-searches"> ';
        for (let key in userSearchStor) {
            insertSearches += `<div> <span>${key}:</span> <span>${userSearchStor[key]}</span> </div>`
        }
        insertSearches += '</div> '
        document.querySelector('.search-results') .innerHTML = insertSearches;
    }

}

if (!!document.querySelector('#edit-data')) {
    document.querySelector('#edit-data').onclick = () => {
        editUserData()
    }
}

function editUserData() {
    document.querySelector('.after-save-wrap').style.display = 'none';
    document.querySelector('#more-user-info').style.display = 'block';
    let tempObj = insertUserData(0),
        userForm = document.forms[1];
    userForm.first$name.value = tempObj.firstName ,
        userForm.last$name.value = tempObj.lastName,
        userForm.birth.value = tempObj.birth,
        userForm.gender.value = tempObj.gender,
        userForm.phone.value = tempObj.phone,
        userForm.skyp.value = tempObj.skyp;
}



