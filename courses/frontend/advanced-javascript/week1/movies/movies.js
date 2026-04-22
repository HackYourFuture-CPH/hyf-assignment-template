import { movies } from "./data.js";
import * as utils from "./script.js";

//short titles
const shortTitlesContainer = document.getElementById("shortTitles");
const shortMovies = utils.getShortMovies(movies);

shortTitlesContainer.innerHTML = `
  <ol>
    ${shortMovies.map(movie => `<li>${movie.title}</li>`).join("")}
  </ol>
`;

//long titles
const longTitlesContainer = document.getElementById("longTitles");

const longMovies = utils.getLongMovies(movies);

longTitlesContainer.innerHTML = `
  <ol>
    ${longMovies.map(title => `<li>${title}</li>`).join("")}
  </ol>
`;
// 1980s count
const count1980sContainer = document.getElementById("count1980s");

const moviesBetween1980And1989 = utils.getMoviesBetween1980And1989(movies);

count1980sContainer.innerHTML = `
  <p>Number of movies from 1980-1989: ${moviesBetween1980And1989.length}</p>
`;
   
// tagged movies

const taggedMoviesContainer = document.getElementById("taggedMovies");

const taggedMovies = utils.getTaggedMovies(movies);

taggedMoviesContainer.innerHTML = `
  <ol>
   ${taggedMovies.map(movie => `<li>${movie.title} - ${movie.tag}</li>`).join("")}
  </ol>
`;
// ratings above 6

const ratingsAbove6Container = document.getElementById("ratingsAbove6");

const moviesWithRatingsOver6 = utils.getMoviesRatingAbove6(movies);

ratingsAbove6Container.innerHTML = `
  <ol>
    ${moviesWithRatingsOver6
      .map(movie => `<li>${movie.title} - ${movie.rating}</li>`)
      .join("")}
  </ol>
`;

//keyword count

const keywordCountContainer = document.getElementById("keywordCount");

const moviesWithKeywords = utils.getMoviesWithKeywords(movies);

keywordCountContainer.innerHTML = `
  <p>Total keyword matches: ${moviesWithKeywords}</p>
`;

//duplicated movies
const duplicatedWordTitlesContainer = document.getElementById("duplicatedWordTitles");

const duplicatedMovies = utils.getDuplicatedMovies(movies);

duplicatedWordTitlesContainer.innerHTML = `
  <ol>
    ${duplicatedMovies.map(title => `<li>${title}</li>`).join("")}
  </ol>
`;


// average rating

const averageRatingContainer = document.getElementById("averageRating");

const averageRating = utils.getAverageRating(movies);

averageRatingContainer.innerHTML = `
  <p>Average Rating: ${averageRating}</p>
`;

// Count the total number of Good, Average and Bad movies

const countTaggedMoviesContainer = document.getElementById("countTaggedMovies");

const countTaggedMovies = utils.getTagCounts(movies);

countTaggedMoviesContainer.innerHTML = `
  <p>Number of good movies: ${countTaggedMovies.goodMovies}</p>
  <p>Number of average movies: ${countTaggedMovies.averageMovies}</p>
  <p>Number of bad movies: ${countTaggedMovies.badMovies}</p>
`;

