//Dependencies
import React, { Component } from 'react';
import Movie from './movie';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Action extends Component {
    createListMovies(){
        return this.props.Afilm.map((film) =>{
            return(
                <div>
                    <li key = { film.id }>
                        <Movie title = {film.title} img = {film.img} plot = {film.plot} director = {film.director}/>
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
function mapStateToProps(state){
    return{
        Afilm: state.Afilm
    }
}

export default connect(mapStateToProps)(Action);