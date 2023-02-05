
"use strict"

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     films:{},
//     actors:{},
//     genres: {},
//     private: true,
//     start : function () {
//         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
     
//      while (personalMovieDB.count == "" || personalMovieDB.count == null  ||isNaN(personalMovieDB.count)) {
//         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
//      }
//     },
//     rememberMyFilms : function()  {
//         for ( let i = 0; i <2; i++) {
//            const a = prompt ("Один из последних просмотренных фильмов?", ""),
//                    b = prompt("На сколько оцените его?", "");
//                    if ( a != null && b != null && a != "" && b != "" && a.length < 50 ) {
//                        personalMovieDB.movies[a] = b;
//                        console.log("done");
//                    } else {
//                        console.log("error");
//                        i--;
//                    }
//        } 
//        },
//        detectPersonalLevel : function() {
//         if (personalMovieDB.count < 10) {
//             console.log("просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("вы классический зритель");
//         } else if (personalMovieDB.count >=30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("error")
//         }
//     },
//     showMyDB : function(hidden) {
//         if(!hidden) {
//             console.log(personalMovieDB);
    
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if(personalMovieDB.private) {
//             personalMovieDB.private = true;
//         } else {
//             personalMovieDB.private = false;

//         }

//      },
//     writeYourGenres : function() {
//         for(  let i = 1;  i < 2; i++) 
//         {

//            let genres = prompt(`Введите ваши любимые жанры через запятую`);
//             if(genres === "" || genres === null) {
//                 console.log("Вы ввели некорректные данные");
//                 i--;

//             } else {
//                 personalMovieDB.genres = genres.split(", ");
//                 personalMovieDB.genres.sort();
//             }

           
//         }
//        personalMovieDB.genres.forEach((item, i) => {
//         console.log(`Любимый жанр ${i+1} - это ${item}`);

//        });
//     }
// };

const personalMovieDB = {
    movies : [
        "Логан",
        "Лига справедливости",
        "Ла-Ла Лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};




const adv = document.querySelectorAll(".promo__adv img");
    
    adv.forEach(item => {
        item.remove();
    });

    

   



    

 


 














// console.log(options.name)

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
          
//         }
//     }
//     else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
   
// }
// console.log(counter);


// const soldier = {
//     health : 400,
//     armor : 100,
//     sayHello : function() {
//         console.log("прив");
//     }
// };
// const john = Object.create(soldier);
// // john.__proto__ = soldier;



// john.sayHello();
















  
  


  
    
    













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

        







 






