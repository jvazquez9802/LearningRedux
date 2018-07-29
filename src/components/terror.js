//Dependencies
import React, { Component } from 'react';
import Movie from './movie';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {purchaseTmovie} from '../actions/purchase';



class Terror extends Component {
    
    createListMovies(){
        return this.props.Tfilm.map((film) =>{
            return(
                <div>
                    <li key = { film.id }>
                        <Movie title = {film.title} img = {film.img} plot = {film.plot} director = {film.director} category = {film.category}/>
                    </li>
                </div>
            );
        });
    }

    render() {
        return(
            <div className = "Terror">
            <h4> Terror movies</h4>
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
    return bindActionCreators({purchaseTmovie: purchaseTmovie}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Terror);