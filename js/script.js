"use strict";

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

// if (1) {
//     console.log('OK!');
// } else {
//     console.log('Error');
// }

// // //разветвление

// // if (num < 49){
// //     console.log('Error');
// // } else if (num > 100) {
// //     console.log(' A lot of');
// // } else {
// //     console.log('OK!');
// // }

// // //тернарный оператор

// // (num === 50) ? console.log('OK!') : console.log('Error'); 

// const num = 50;

// // конструкция только для строгово сравнения 
// switch (num) {
//     case 49:
//         console.log('false');
//         break;
//     case 100:
//         console.log('false');
//         break;
//     case 50:
//         console.log('try');
//         break;
//     default:
//         console.log('not today');
//         break;

// }

// // Третий урок

// let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);

// for (let i = 1; i < 8; i++){
//     if (i === 6){
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// Практика 2

// const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", " ");


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false 
// };



// for (let i = 0; i < 2; i++){
//     const a = prompt ("Один из последниз просмотренных фильмов", ""),
//           b = prompt ("На сколько цените его?", "");

//           if (a != null && b != null && a != '' && b != '' && a.length <50){

//             personalMovieDB.movies[a] = b;
//             console.log('done');
//           }else {
//               console.log('error');
//               i--;

//           }   
// }

// if  (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('Ошибка');
//         }
        
// console.log(personalMovieDB);

//// Функции 

// let num = 20;

// function showFirstMassage(text) {
//     console.log(text);
//     let num = 10;  
//     console.log(num);
// }

// showFirstMassage('hello world');
// console.log(num);

// function calc(a,b){
//     return (a + b);
// }

// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(10,6));

// Function declaration
// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

//Function expression
// const logger = function() {
//     console.log("Hello");
// };

// logger();

// стрелочная функция
// const calc = (a, b) => {
//     return a + b;
// };

// console.log(calc(5,9));

// // методы
// const str = "teSt";

// // console.log(str[2] = '2');
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// //поиск по строке
// const fruit = "Some Fruit";
// console.log(fruit.indexOf("Fruit"))

// //вырезание от и до
// const logg = "Hello World";
// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// //округление
// const num = 12.2;
// console.log(Math.round(num));

// //перевод в другую систему исчесления
// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// // Третья практика

//  let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", " ");

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", " ");
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function remeberMyFilms() {
//     for (let i = 0; i < 2; i++){
//         const a = prompt ("Один из последниз просмотренных фильмов", ""),
//               b = prompt ("На сколько цените его?", "");
    
//               if (a != null && b != null && a != '' && b != '' && a.length <50){
    
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//               }else {
//                   console.log('error');
//                   i--;
    
//               }   
//     }
// }

// remeberMyFilms();

// function detectPersonlLevel() {
//     if  (personalMovieDB.count < 10) {
//          console.log('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('Ошибка');
//         }
// }
// detectPersonlLevel();

// function showMyDB() {
//     if (personalMovieDB.privat == false){
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++){
//     const genre = prompt("Ваш любимый жанр под номером " +i);

//     if (genre != null && genre != ''){
//         personalMovieDB.genres[i - 1] = genre;
    
//         }
//     }
// }
// writeYourGenres();

// console.log(personalMovieDB);

// call back функция 

// function first() {
//     //do something
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second () {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошёл этот урок');
// }

// learnJS(' JavaScript',  done);

// Объекты
// const options = {
//     name: 'test',
//     with: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors; // деструктуризация объектов
// console.log(border);

// console.log(Object.keys(options).length); //узнать длинну объекта без цикла 


// console.log(options.name);

// delete options.name;

// console.log(options);


//конструкция для перебора объектов
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options [key][i]}`);
//             counter++;
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options [key]}`);
//         counter++;
//     } 
// }
// console.log(counter);

//массивы и псевдомассивы

// const arr = [1, 12, 3, 24, 45];
// arr.sort(compaireNum);
// // arr[99] = 0;
// // console.log(arr.length);
//  console.log(arr); 
//  function compaireNum(a,b) { //функция для сортировки как числа
//    return a-b;
//}

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });

//arr.pop();
// arr.push(6);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", ""); //создание строки   
// const product = str.split(", "); // перевод из строки в массив
// product.sort();// сортировка
// console.log(product.join('; '));// перевод из массива в строку



//Передача по ссылке или по значению, spread оператор 


// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //ссылка

// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) { // копирование
//     let objCopy = {}

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a:2,
//     b:5,
//     c:{
//         x:7,
//         y:4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 2;

// console.log(newNumbers);
// console.log(numbers)

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = (Object.assign({}, add));

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); //копирование массива

// newArray[1] = 'sdrfgtyhujikolp';
// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejornal', 'bloger'],
//     internet = [...video, ...blogs, 'vk', 'facebook']; // синтаксис оператора разворота (spread)

//     console.log(internet);

// более сложный пример использования метода spread
// function log(a, b, c) {
//     console.log(`a = ${a}`);
//     console.log(`b = ${b}`);
//     console.log(`c = ${c}`);
// }

// const num = [2, 5, 7];

// log(...num);
    


// const array = ["a", "b"];

// const newAarray = [...array]; //в переменной newAarray лежит копия переменной array

// const q = {
//     one: 1,
//     two: 2
// };

// let newObj = {...q};
// newObj = {one: 2, two: 1251325};
    
// console.log(newObj);
// console.log(q);


//OOP basics, prototypal inheritance


// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("hello");
//     }
// };

//const jonh  = Object.create(soldier);// создаём новый оъект jonh который будет прототипно наследоваться от soldier
// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier; // старый тип прототипирования

//Object.setPrototypeOf(jonh, soldier); //новый тип протопитирования

//console.log(jonh.armor);
// jonh.sayHello();