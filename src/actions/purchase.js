export default function purchaseMovie (movie){
    console.log("PURCHASE A MOVIE", movie.title);
    dispatch({
        Type: "MOVIE_PURCHASE",
        payload: movie
    });
}