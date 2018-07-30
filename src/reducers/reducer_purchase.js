export default function(state = null, action){
    switch(action.type){
        case "MOVIE_PURCHASE":
            state.productos.push(action.payload);
            return state;
            break;
    }
    return state;
}