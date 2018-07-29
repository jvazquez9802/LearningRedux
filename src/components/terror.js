//Dependencies
import React, { Component } from 'react';
import Movie from './movie';
import {bindActionCreators} from 'react-redux';
import {connect} from 'react-redux';



class Terror extends Component {
    
    createListMovies(){
        return this.props.Tfilm.map((film) =>{
            return(
                <div>
                    <h4> Terror movies</h4>
                    <li key = { film.id }>
                        <Movie title = {film.title} img = {film.img} plot = {film.plot} director = {film.director}/>
                    </li>
                </div>
            );
        });
    }

    render() {
        return(
            <div className = "Terror">
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


export default connect(mapStateToProps)(Terror);