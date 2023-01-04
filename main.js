
"use strict"
const number0Films =+prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB ={
    count:number0Films,
    movies:{},
    actors:{},
    genres:[],
    private:false
};
const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", ""),
    l = prompt("Один из последних просмотренных фильмов?", ""),
    d = prompt("На сколько оцените его?", "");

    personalMovieDB.movies[a]=b;
    personalMovieDB.movies[l]=d;
    console.log(personalMovieDB);
   


    


