const apiKey = '5f0ff536';

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const movieCards = document.getElementById('movieCards');
const mMovieCards = document.getElementById('m-movieCards');

searchButton.addEventListener('click', searchMovie);
console.log("Yes")

function searchMovie() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') return;
    const movieBox = document.getElementById('movieBox');
    movieBox.style.display = "block"
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;

    fetch(apiUrl)
        .then(response => response.json())
        // console.log(data)
        .then(data => {
            console.log(data)
            if (data.Response === 'True') {
                // data.forEach(element => {
                //     // console.log(element)
                // });
                console.log("Yes")
                const { Title, Year, Plot, Poster, Genre, Language, Actors, Director, Writer, Released, imdbRating } = data;
                console.log(Title)
                movieCards.innerHTML = `
                <div class="movieDetails">
                <h2 class="title">${Title} (${Year})</h2>
                <P><span>Actors: </span> ${Actors}</p>
                <P><span>Director: </span> ${Director}</p>
                <P><span>Writer: </span> ${Writer}</p>
                <P><span>Released: </span> ${Released}</p>
                <P><span>imdbRating: </span> ${imdbRating}</p>
                <P><span>Genre: </span> ${Genre}</p>
                <P><span>Language: </span> ${Language}</p>
                <P> <span> Plot: </span> ${Plot}</p>
                </div>
                <img class="poster" src="${Poster}" alt="${Title} Poster">
                `;

                mMovieCards.innerHTML = `
                <div class="m-movieDetails">
                <h2 class="title">${Title} (${Year})</h2>
                <img class="poster" src="${Poster}" alt="${Title} Poster">
                <P><span>Actors: </span> ${Actors}</p>
                <P><span>Director: </span> ${Director}</p>
                <P><span>Writer: </span> ${Writer}</p>
                <P><span>Released: </span> ${Released}</p>
                <P><span>imdbRating: </span> ${imdbRating}</p>
                <P><span>Genre: </span> ${Genre}</p>
                <P><span>Language: </span> ${Language}</p>
                <P> <span> Plot: </span> ${Plot}</p>
                </div>
                `;
                console.log(data)
                console.log("Yes")
            } else {
                movieDetails.innerHTML = '<p class="not-found">Movie not found</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            movieDetails.innerHTML = '<p>An error occurred</p>';
        });
}

// searchMovie()

// const apiKey = '5f0ff536';
// const searchTerm = searchInput.value.trim();

// // function
// const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;
// console.log(apiUrl)
// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => data.response)
// console.log(data)