export default function purchaseMovie (movie){
    console.log("PURCHASE A MOVIE", movie.title);
    return dispatch => ({
        Type: "MOVIE_PURCHASE",
        payload: movie
    });
}