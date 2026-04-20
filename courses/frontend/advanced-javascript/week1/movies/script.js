// Create an array of movies containing the movies with a short title (you define what short means)

function getShortMovies(movies) {
  return movies.filter((movie) => {
    return movie.title.trim().split(/\s+/).length === 2;
  });
}

// Create an array of movie titles with long movie titles
function getLongMovies(movies) {
  return movies
    .filter((movie) => {
      return movie.title.trim().split(/\s+/).length > 7;
    })
    .map((movie) => movie.title);
}

// Count the number of movies made between 1980-1989 (including both the years)

function getMoviesBetween1980And1989(movies) {
  return movies.filter((movie) => {
    return movie.year >= 1980 && movie.year <= 1989;
  });
}

// Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
function getTaggedMovies(movies) {
  return movies.map((movie) => {
    let tag;
    if (movie.rating >= 7) {
      tag = "Good";
    } else if (movie.rating >= 4) {
      tag = "Average";
    } else {
      tag = "Bad";
    }
    return { ...movie, tag };
  });
}

// Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
function getMoviesRatingAbove6(movies) {
  return movies.filter((movie) => movie.rating > 6);
}

// Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?

function getMoviesWithKeywords(movies) {
  const keywords = ["surfer", "alien", "benjamin"];

  return movies.reduce((count, movie) => {
    const title = movie.title.toLowerCase();

    keywords.forEach((keyword) => {
      if (title.includes(keyword)) {
        count += 1;
      }
    });

    return count;
  }, 0);
}

// Create an array of movies where a word in the title is duplicated. e.g. "Star Wars: The Clone Wars" the word Wars is duplicated. Here are some made-up examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"

function getDuplicatedMovies(movies) {
  return movies
    .filter((movie) => {
      const splitTitles = movie.title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/gi, "")
        .split(/\s+/)
        .filter(Boolean);

      let findDuplicates = splitTitles.filter(
        (title, index) => splitTitles.indexOf(title) !== index,
      );
      return findDuplicates.length > 0;
    })
    .map((movie) => movie.title);
}

// Calculate the average rating of all the movies using .reduce() Optional
function getAverageRating(movies) {
  const sumOfRating = movies.reduce((accumulator, movie) => {
    return accumulator + movie.rating;
  }, 0);
  return (sumOfRating / movies.length).toFixed(2);
}

// Count the total number of Good, Average and Bad movies using .reduce(). A return could be e.g. {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional
function getTagCounts(movies) {
  const taggedMovies = getTaggedMovies(movies);

  return taggedMovies.reduce(
    (accumulator, taggedMovie) => {
      if (taggedMovie.tag === "Good") {
        accumulator.goodMovies += 1;
      } else if (taggedMovie.tag === "Average") {
        accumulator.averageMovies += 1;
      } else {
        accumulator.badMovies += 1;
      }

      return accumulator;
    },
    { goodMovies: 0, averageMovies: 0, badMovies: 0 },
  );
}

export {
  getShortMovies,
  getLongMovies,
  getMoviesBetween1980And1989,
  getTaggedMovies,
  getMoviesRatingAbove6,
  getMoviesWithKeywords,
  getDuplicatedMovies,
  getAverageRating,
  getTagCounts,
};
