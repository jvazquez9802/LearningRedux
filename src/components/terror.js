//Dependencies
import React, { Component } from 'react';
import Movie from './movie';
import {connect} from 'react-redux';
import purchaseMovie from '../actions/purchase';

class Terror extends Component {
    
    createListMovies(){
        return this.props.Tfilm.map((film) =>{
            return(
                <div key = { film.id }>
                    <li>
                        <Movie title = {film.title} img = {film.img} plot = {film.plot} director = {film.director} />
                        <button type="button" onClick= {() => purchaseMovie(film)} >Add to car</button>
                    </li>
                </div>
            );
        });
    }

    render() {
        return(
            <div className = "Terror">
                <h4> Horror movies</h4>
                {this.createListMovies()}
            </div>
        );
    }
}

let TerrorConectado= Terror
TerrorConectado = connect(state => ({ Tfilm: state.Tfilm }), {purchaseMovie})(TerrorConectado)
export default TerrorConectado

