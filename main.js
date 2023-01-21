
"use strict"

let numberOffilms;
 function start () {
    numberOffilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
 }
 while(numberOffilms == "" || numberOffilms == null  ||isNaN(numberOffilms)) {
    numberOffilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
 }
 start();
const personalMovieDB = {
    count: numberOffilms,
    movies: {},
    films:{},
    actors:{},
    genres: {},
    private: true
};
function rememberMyFilms()  {
 for ( let i = 0; i <2; i++) {
    const a = prompt ("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");
            if ( a != null && b != null && a != "" && b != "" && a.length < 50 ) {
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
} 
}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("вы классический зритель");
    } else if (personalMovieDB.count >=30) {
        console.log("Вы киноман");
    } else {
        console.log("error")
    }
} 
// detectPersonalLevel();
 
function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);

    }
}
showMyDB(personalMovieDB.private);
 function writeYourGenres() {
    for(  let i = 1;  i <=3; i++) {
    
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
 }
 writeYourGenres();


  
  


  
    
    













// for (let i = 0; i < 2; ++i) {
//     const a =prompt("Один из последних просмотренных фильмов?", ""),
//          b = prompt("На сколько вы его оцените?", "");
        
//          if (a != null && b != null && a != "" && b != "" && a.length>50 && b.length>50) {
//             personalMovieDB.movies[a] = b;
//             console.log("done");
//         }
//             else {
//                 console.log("Эй, ответьте на вопрос!");
//                 --i;
//             }

//          }

        




console.log(personalMovieDB);


 






