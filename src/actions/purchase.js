export const purchaseMovie = (movie) =>{
    console.log("PURCHASE A MOVIE", movie.title);
    return{
        Type: "MOVIE_PURCHASE",
        payload: movie
    }
};