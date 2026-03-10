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
