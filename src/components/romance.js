//Dependencies
import React, { Component } from 'react';
import Movie from './movie';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import purchaseMovie from '../actions/purchase';

class Romance extends Component {

    createListMovies(){
        return this.props.Rfilm.map((film) =>{
            return(
                <div key = { film.id }>
                    <li>
                        <Movie title = {film.title} img = {film.img} plot = {film.plot} director = {film.director}/>
                        <button type="button" onClick={() => purchaseMovie(film)} >Add to car</button>
                    </li>
                </div>
            );
        });
    }

    render() {
        return(
            <div className = "Romance">
                <h4> Romance movies</h4>
                {this.createListMovies()}
            </div>
        );
    }
}
let RomanceConectado= Romance
RomanceConectado = connect(state => ({ Rfilm: state.Rfilm }), {purchaseMovie})(RomanceConectado)
export default RomanceConectado