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


// const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", " ");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false 
// };

// const a = prompt ("Один из последниз просмотренных фильмов", ""),
//       b = prompt ("На сколько цените его?", ""),
//       c = prompt ("Один из последних просмотренных фильмов?", ""),
//       d = prompt ("На сколько цените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

//второй урок

if (1) {
    console.log('OK!');
} else {
    console.log('Error');
}



// //разветвление

// if (num < 49){
//     console.log('Error');
// } else if (num > 100) {
//     console.log(' A lot of');
// } else {
//     console.log('OK!');
// }

// //тернарный оператор

// (num === 50) ? console.log('OK!') : console.log('Error'); 

const num = 501;

// конструкция только для строгово сравнения 
switch (num) {
    case 49:
        console.log('false');
        break;
    case 100:
        console.log('false');
        break;
    case 50:
        console.log('try');
        break;
    default:
        console.log('not today');
        break;

}
