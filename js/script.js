'use strict';

// console.log('arr' + ' - object');
// console.log(4 +'5');

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2+2*2 !== '6');

// const isChecked = false,
//     isClose = false;

// console.log(isChecked || !isClose);


const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", " ");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false 
};

const a = prompt ("Один из последниз просмотренных фильмов", ""),
      b = prompt ("На сколько цените его?", ""),
      c = prompt ("Один из последних просмотренных фильмов?", ""),
      d = prompt ("На сколько цените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
