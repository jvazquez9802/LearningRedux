//Dependencies
import React, { Component } from 'react';
import ActionFilms from '../data/action_films.js';
import Movie from './movie';

class Action extends Component {
    render() {
        const ACTION = ActionFilms;
        return(
            <div className = "Action">
            <h3> Action movies</h3>
                <p className = "Action" >
                    {ACTION && ACTION.map(
                    (ACTION, key)=> <li key = { key }>
                        <Movie title = {ACTION.title} img = {ACTION.img} plot = {ACTION.plot} director = {ACTION.director}/>
                    </li>
                    )
                    }
                </p>
            </div>
        );
    }
}
export default Action;