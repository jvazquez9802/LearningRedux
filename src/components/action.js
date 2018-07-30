//Dependencies
import React, { Component } from 'react';
import Movie from './movie';
import {connect} from 'react-redux';
import purchaseMovie from '../actions/purchase';

class Action extends Component {

    createListMovies(){
        return this.props.Afilm.map((film) =>{
            return(
                <div key = { film.id }>
                    <li>
                        <Movie title = {film.title} img = {film.img} plot = {film.plot} director = {film.director}/>
                        <button type="button" onClick= {() => purchaseMovie(film)} >Add to car</button>
                    </li>
                </div>
            );
        });
    }

    render() {
        return(
            <div className = "Action">
                <h4> Action movies</h4>
                {this.createListMovies()}
            </div>
        );
    }
}
/*
function mapStateToProps(state){
    return{
        Afilm: state.Afilm
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({purchaseMovie: purchaseMovie}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Action);
*/
let ActionConectado= Action
ActionConectado = connect(state => ({ Afilm: state.Afilm }), {purchaseMovie})(ActionConectado)
export default ActionConectado