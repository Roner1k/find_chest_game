'use strict'

let searchButton = document.querySelector('form button'),
    //  filmsObj,
    filmNameIn;

searchButton.onclick = (e) => {
    e.preventDefault();
    filmNameIn = document.querySelector('form input').value;

    fetch('http://www.omdbapi.com/?s=' + filmNameIn + '&page=1.2&apikey=393848ac')
        .then((response) => {
            document.querySelector('.myErrors.search').style.display = 'none';
            document.querySelector('.myErrors.server').style.display = 'none';

            if (response.ok === true && response.status === 200) {
                console.log(response)
                console.log(response.responseText)
                return response.json();
            } else {
                document.querySelector('.myErrors.server').style.display = 'block';
            }
        })
        .then((data) => {
            if (data.Response === 'False') {
                document.querySelector('.myErrors.search').style.display = 'block';
            } else {
                //filmsObj = data.Search;
                console.log(data);
                console.log(data.Search);
                showMySearch(data.Search);

                if (data.totalResults > 10) {

                }
            }

        });

}

function showMySearch(filmsObj) {
    let outDivs = '';
    filmsObj.forEach(film => {
        if (film.Poster === 'N/A') {
            film.Poster = '/img/nophoto.jpg'
        }
        outDivs += `<div class="film-item"> <img src="${film.Poster}"> <div>${film.Title} (${film.Year})</div> <div>Type: ${film.Type}</div> <div>imfdbID: ${film.imdbID}</div> </div>`
    })
    //console.log(outDivs)
    someResponse.innerHTML = outDivs;
}

//pagination
let changePage = document.querySelectorAll(".pagination span")
for (let key in [...changePage]) {
    // console.log(changePage[key])
    if (changePage[key].classList.contains('active-page')) {
        changePage[key].classList.remove('active-page');

    }
    changePage[key].addEventListener('click', (e) => {
        let start = +document.querySelector('.pagination span').innerText;
        let maxPages = 11;
        console.log(changePage[key].innerText)
        changePage.forEach(page => {
            page.classList.remove('active-page');
        })
        if (key == 2 && start + 3 <= maxPages) {
            changePage[1].classList.add('active-page');
            changePage.forEach(page => {
                let i = +page.innerText;
                page.innerText = i + 1;
            })
        } else if (key == 0 && start !== 1) {
            changePage[1].classList.add('active-page');
            changePage.forEach(page => {
                let i = +page.innerText;
                page.innerText = i - 1;
            })
        } else {
            changePage[key].classList.add('active-page');

        }
    })
function plusMinus(array, AD){
    array.forEach(page => {
        let i = +page.innerText;
        page.innerText = i AD 1;
    })
}


}


// window.addEventListener('load',
//     function () {
//
//         pClick.addEventListener("click", getFilms)
//
//
//         function getFilms() {
//             errorOut.style.display = "none";
//             let xhr = new XMLHttpRequest();
//
//             xhr.onreadystatechange = function () {
//                 if (xhr.readyState == XMLHttpRequest.DONE) {
//                     let films = JSON.parse(xhr.responseText);
//                     console.log(films);
//                     if (films.Response == "False") {
//                         errorOut.style.display = "block";
//                     } else {
//                         let b = '';
//                         films.Search.forEach((film) => {
//                             console.log(film)
//                             // Poster: "https://m.media-amazon.com/images/M/MV5BMjE2Mjc5NDg3OV5BMl5BanBnXkFtZTgwMzUxMjMyMTE@._V1_SX300.jpg"
//                             // Title: "Take the Money and Run"
//                             // Type: "movie"
//                             // Year: "1969"
//                             // imdbID: "tt0065063"
//                             b += `<div>
// <h2>${film.Title}</h2>
// <img src="${film.Poster}" width="200px" class="img" data-id ="${film.imdbID}" >
// <h4> Type: ${film.Type}, ${film.Year}</h4>
// </div>`;
//                         })
//                         out.innerHTML = b;
//                     }
//                 }
//             }
//             xhr.open('GET', 'https://www.omdbapi.com/?apikey=d7790324&s=' + inputSearch.value, true);
//             xhr.send(null);
//         }
//     }, false);
