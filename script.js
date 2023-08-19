const apiKey = '5f0ff536';

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const movieCards = document.getElementById('movieCards');

searchButton.addEventListener('click', searchMovie);
console.log("Yes")

function searchMovie() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') return;
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;

    fetch(apiUrl)
        .then(response => response.json())
        // console.log(data)
        .then(data => {
            console.log(data)
            if (data.Response === 'True') {
                data.forEach(element => {
                    // console.log(element)
                });
                console.log("Yes")
                const { Title, Year, Plot, Poster } = data;
                console.log(Title)
                movieCards.innerHTML = `
                <img class="poster" src="${Poster}" alt="${Title} Poster">
                    <h2 class="title">${Title} (${Year})</h2>
                    <button class="watchBtn">Watch Now</button>
                `;
                console.log(data)
                console.log("Yes")
            } else {
                movieDetails.innerHTML = '<p>Movie not found</p>';
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