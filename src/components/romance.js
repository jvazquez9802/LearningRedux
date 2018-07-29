//Dependencies
import React, { Component } from 'react';
import Movie from './movie';
import {bindActionCreators} from 'react-redux';
import {connect} from 'react-redux';

class Romance extends Component {
    createListMovies(){
        return this.props.Rfilm.map((film) =>{
            return(
                <div>
                    <h4> Romance movies</h4>
                    <li key = { film.id }>
                        <Movie title = {film.title} img = {film.img} plot = {film.plot} director = {film.director}/>
                    </li>
                </div>
            );
        });
    }
    render() {
        return(
            <div className = "Romance">
                {this.createListMovies()}
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        Rfilm: state.Afilm
    }
}

export default connect(mapStateToProps)(Romance);
