"use strict";

class movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  static getPG(moveList = []) {
    const moveWithPgRating = [];
    moveList &&
      moveList.forEach((movie) => {
        if (movie.rating.indexOf("PG") !== -1) moveWithPgRating.push(movie);
      });
    return moveWithPgRating;
  }
}

const m1 = new movie("Casino Royale", "Eon Productions", "PG13");
console.log(m1);
const m2 = new movie("Inception", "Eon Productions", "MA");
const m3 = new movie("Titanic", "Eon Productions", "PM1");
const m4 = new movie("Rambo", "Eon Productions", "FA");
const m5 = new movie("Rockie", "Eon Productions", "PG16");
console.log(movie.getPG([m1, m2, m3, m4, m5]));
