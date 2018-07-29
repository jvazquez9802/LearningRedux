//Dependencies
import React, { Component } from 'react';
import RomanceFilms from '../data/romance_films.js';
import Movie from './movie';

class Romance extends Component {
    render() {
        const ROMANCE = RomanceFilms;
        return(
            <div className = "Romance">
            <h3> Romance movies</h3>
                <p className = "Romance" >
                    {ROMANCE && ROMANCE.map(
                    (ROMANCE, key)=> <li key = { key }>
                        <Movie title = {ROMANCE.title} img = {ROMANCE.img} plot = {ROMANCE.plot} director = {ROMANCE.director}/>
                    </li>
                    )
                    }
                </p>
            </div>
        );
    }
}
export default Romance;