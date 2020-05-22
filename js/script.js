let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        let a = prompt('Один из последних просмотренных фильмов?', '');
            if (a != null && a != '' && a.length < 50){
                let b = prompt('На сколько оцените его?', '');
                if (b != null && b != '' && b.length < 50){
                    personalMovieDB.movies[a] = b;
                }
                else{
                    console.log('error');
                    --i;
                }
            }
            else{
                console.log('error');
                --i;
            }
        }
}
//rememberMyFilms();
function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log("Просмотренно довольно мало фильмов(");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log("Вы классический зритель)");
    }
    else if(personalMovieDB.count > 30){
        console.log("Вы киноман!!!");
    }
    else{
        console.log("Что-то пошло не так...");
    }    
}
detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres(){
    for (let i = 0; i < 3; ++i){
        let gener = prompt(`Ваш любимый жанр под номером ${i+1}?`, '');  
        if (gener != null && gener != '' && gener.length < 50){
            personalMovieDB.geners[i] = gener;
        }     
        else{
            --i;
        }
    }
}
writeYourGenres();
console.log(personalMovieDB.geners);