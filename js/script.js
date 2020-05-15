const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

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

//console.log(personalMovieDB);