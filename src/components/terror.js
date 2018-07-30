//Dependencies
import React, { Component } from 'react';
import Movie from './movie';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {purchaseMovie} from '../actions/purchase';

class Terror extends Component {
    
    createListMovies(){
        return this.props.Tfilm.map((film) =>{
            return(
                <div key = { film.id }>
                    <li>
                        <Movie title = {film.title} img = {film.img} plot = {film.plot} director = {film.director} category = {film.category}/>
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
function mapStateToProps(state){
    return{
        Tfilm: state.Tfilm
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({purchaseMovie: purchaseMovie}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Terror);