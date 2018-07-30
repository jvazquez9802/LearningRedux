export default function(state = {}, action){
    //Mira el state dice que wea con el componente, en este caso mando un objeto vacio pero puedo poner "null" y en
    //donde vaya a desplegar esta we uso un if para mandar un mensaje mientras (!this.props.SoldMovie)

    //La accion es que vergas hace, es decir que dispara el perro evento
    //el switch evalua el tipo de accion 
    /*

    //Esta es mi pinche accion
        export const purchaseMovie = (movie) =>{
            console.log("PURCHASE A MOVIE", movie.title);
            return{
                Type: "MOVIE_PURCHASE",    
                payload: movie
            }
        };
    */

    //eL Object.asig es crear un nuevo ojeto al cual le el state del original para crear una pinche copia, en este caso es la pelicula la cual compre
    switch(action.type){
        case "MOVIE_PURCHASE":
        return Object.assign({}, state, {
            movies: Object.assign({}, state.movies, action.payload)
          })
        default:
          return state;
      }
    }