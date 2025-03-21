// Sample movie data
const movieDatabase = [
    { id: 1, title: "Action Movie 1", genre: "Action", rating: 5, image: "C:/Users/DELL/Desktop/reena/action.jpg" },
    { id: 2, title: "Comedy Movie 1", genre: "Comedy", rating: 4, image: "C:/Users/DELL/Desktop/reena/drama.jpg" },
    { id: 3, title: "Drama Movie 1", genre: "Drama", rating: 3, image: "C:/Users/DELL/Desktop/reena/drama1.jpg" },
    { id: 4, title: "Horror Movie 1", genre: "Horror", rating: 2, image: "C:/Users/DELL/Desktop/reena/horror.jpg" },
    { id: 5, title: "Action Movie 2", genre: "Action", rating: 3, image: "C:/Users/DELL/Desktop/reena/horr.jpg" },
    { id: 6, title: "Comedy Movie 2", genre: "Comedy", rating: 5, image: "C:/Users/DELL/Desktop/reena/act.jpg" },
];

// Function to display recommended movies
const displayMovies = (movies) => {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = ""; // Clear the existing movies

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.genre} - Rating: ${movie.rating}</p>
        `;

        // Add smooth animation class
        setTimeout(() => movieCard.classList.add('show'), 100);

        movieList.appendChild(movieCard);
    });
};

// Function to apply filters and get recommended movies
const applyFilters = () => {
    const genreFilter = document.getElementById("genreFilter").value;
    const ratingFilter = document.getElementById("ratingFilter").value;

    const filteredMovies = movieDatabase.filter(movie => {
        const matchesGenre = genreFilter ? movie.genre === genreFilter : true;
        const matchesRating = ratingFilter ? movie.rating >= ratingFilter : true;

        return matchesGenre && matchesRating;
    });

    displayMovies(filteredMovies);
};

// Add event listener to the Apply Filters button
document.getElementById("applyFilters").addEventListener("click", applyFilters);

// Initially display all movies
displayMovies(movieDatabase);
