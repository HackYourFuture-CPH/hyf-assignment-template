import { movies } from "./movies.js";

console.log(movies);

// an array of movies containing the movies with a short title
const shortTitleMovies = movies.filter((movie) => movie.title.length <= 5);
console.log(shortTitleMovies);

// an array of movie titles with long movie titles
const longTitleList = movies
  .filter((movie) => movie.title.length > 5)
  .map((movie) => movie.title);
console.log("List of long titles" + longTitleList);

// the number of movies made between 1980-1989 (including both the years)
const moviesFrom80 = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989,
);
const moviesFrom80amount = moviesFrom80.length;
console.log(moviesFrom80amount);

// a new array that has an extra key called tag.
// The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const moviesWithTag = movies.map((movie) => {
  if (movie.rating >= 7) {
    movie.tag = "Good";
  } else if (movie.rating >= 4 && movie.rating < 7) {
    movie.tag = "Average";
  } else if (movie.rating < 4) {
    movie.tag = "Bad";
  }

  return movie;
});
console.log(moviesWithTag);

// first filter the movies array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.
const ratingArray = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log("Ratings over 6 " + ratingArray);

//Count the total number of movies containing any of following keywords:
// Surfer, Alien or Benjamin

const keywordsMovies = movies.filter((movie) => {
  return (
    movie.title.toLowerCase().includes("surfer") ||
    movie.title.toLowerCase().includes("alien") ||
    movie.title.toLowerCase().includes("benjamin")
  );
});

console.log(keywordsMovies);

// an array of movies where a word in the title is duplicated
const duplicatedMovies = movies.filter((movie) => {
  const cleanTitle = movie.title.toLowerCase().replace(/[^a-z0-9 ]/g, "");

  const words = cleanTitle.split(" ");

  const hasDuplicate = words.some((word, index) => {
    if (word === "") return false;
    return words.indexOf(word) !== words.lastIndexOf(word);
  });

  return hasDuplicate;
});

console.log(duplicatedMovies);

// Calculate the average rating of all the movies
const sumRating = movies.reduce((accumulator, movie) => {
  return accumulator + movie.rating;
}, 0);

const averageRating = sumRating / movies.length;
console.log("Average rating " + averageRating);

// Count the total number of Good, Average and Bad movies
const totalByTag = moviesWithTag.reduce(
  (accumulator, movie) => {
    if (movie.tag === "Good") {
      accumulator.Good++;
    } else if (movie.tag === "Average") {
      accumulator.Average++;
    } else if (movie.tag === "Bad") {
      accumulator.Bad++;
    }

    return accumulator;
  },
  { Good: 0, Average: 0, Bad: 0 },
);

console.log(totalByTag);

// App logic
const randomButton = document.querySelector(".random-movies");
const eightiesButton = document.querySelector(".eighties-movies");
const goodButton = document.querySelector(".good-movies");
const badButton = document.querySelector(".bad-movies");
const shortTitleButton = document.querySelector(".short-titled-movies");
const alienButton = document.querySelector(".alien-movies");
const fishButton = document.querySelector(".fish-movies");

const allButtons = document.querySelectorAll(".button");

const cardElements = document.querySelectorAll(".movie-card");

const moviesAmount = 10;

function setActiveButton(clickedButton) {
  allButtons.forEach((btn) => btn.classList.remove("active"));

  clickedButton.classList.add("active");
}

function getMovieEmoji(movie) {
  const title = movie.title.toLowerCase();

  if (title.includes("alien")) {
    return "👽";
  }

  if (title.includes("fish")) {
    return "🐟";
  }

  if (movie.year >= 1980 && movie.year <= 1989) {
    return "🪩";
  }

  return "🍿";
}

function getRandom(howMany, array) {
  const shuffled = array.sort(() => 0.5 - Math.random());

  let selected = shuffled.slice(0, howMany);
  console.log(selected);
  return selected;
}

function renderMovies(moviesToRender) {
  cardElements.forEach((card) => {
    card.innerHTML = "";
  });

  moviesToRender.forEach((movie, index) => {
    if (index < cardElements.length) {
      const card = cardElements[index];

      const emoji = getMovieEmoji(movie);

      const infoDiv = document.createElement("div");
      infoDiv.classList.add("movie-info");
      infoDiv.innerHTML = `
        <p class="movie-emoji">${emoji}</p>
        <h3 class="movie-title">${movie.title}</h3>
        <p class="movie-info-description">Year: ${movie.year}</p>
        <p class="movie-info-description">Rating: ${movie.rating}</p>
      `;

      card.appendChild(infoDiv);

      setTimeout(() => infoDiv.classList.add("visible"), 50);
    }
  });
}

randomButton.addEventListener("click", (event) => {
  setActiveButton(event.currentTarget);
  const randomMovies = getRandom(moviesAmount, movies);
  renderMovies(randomMovies);
});

eightiesButton.addEventListener("click", (event) => {
  setActiveButton(event.currentTarget);
  const eightiesMovies = getRandom(moviesAmount, moviesFrom80);
  renderMovies(eightiesMovies);
});

goodButton.addEventListener("click", (event) => {
  setActiveButton(event.currentTarget);
  const goodMoviesArray = moviesWithTag.filter((movie) => movie.tag === "Good");
  const goodMovies = getRandom(moviesAmount, goodMoviesArray);
  renderMovies(goodMovies);
});

badButton.addEventListener("click", (event) => {
  setActiveButton(event.currentTarget);
  const badMoviesArray = moviesWithTag.filter((movie) => movie.tag === "Bad");
  const badMovies = getRandom(moviesAmount, badMoviesArray);
  renderMovies(badMovies);
});

shortTitleButton.addEventListener("click", (event) => {
  setActiveButton(event.currentTarget);
  const shortTitled = getRandom(moviesAmount, shortTitleMovies);
  renderMovies(shortTitled);
});

alienButton.addEventListener("click", (event) => {
  setActiveButton(event.currentTarget);
  const alienMoviesArray = movies.filter((movie) =>
    movie.title.toLowerCase().includes("alien"),
  );
  const alienMovies = getRandom(moviesAmount, alienMoviesArray);
  renderMovies(alienMovies);
});

fishButton.addEventListener("click", (event) => {
  setActiveButton(event.currentTarget);
  const fishMoviesArray = movies.filter((movie) =>
    movie.title.toLowerCase().includes("fish"),
  );
  const fishMovies = getRandom(moviesAmount, fishMoviesArray);
  renderMovies(fishMovies);
});
