import {combineReducers} from 'redux';
import DataAction from '../data/action_films';
import DataRomance from '../data/romance_films';
import DataTerror from '../data/terror_films';
import DataMenu from '../data/Menu';
    
const allData = combineReducers({
    Afilm: DataAction,
    Rfilm: DataRomance,
    Tfilm: DataTerror,
    Main: DataMenu
});


export default allData;