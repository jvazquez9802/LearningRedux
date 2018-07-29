//Dependencies
import React, { Component } from 'react';
import Movie from './movie';
import {bindActionCreators} from 'react-redux';
import {connect} from 'react-redux';

class Action extends Component {
    createListMovies(){
        return this.props.Afilm.map((film) =>{
            return(
                <div>
                    <h4> Action movies</h4>
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