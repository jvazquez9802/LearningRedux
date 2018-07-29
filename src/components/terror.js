//Dependencies
import React, { Component } from 'react';
import TerrorFilms from '../data/terror_films';
import Movie from './movie';

class Terror extends Component {
    render() {
        const TERROR = TerrorFilms;
        return(
            <div className = "Terror">
            <h4> Terror movies</h4>
                <p className = "TerrorMovies" >
                    {TERROR && TERROR.map(
                    (TERROR, key)=> <li key = { key }>
                        <Movie title = {TERROR.title} img = {TERROR.img} plot = {TERROR.plot} director = {TERROR.director}/>
                    </li>
                    )
                    }
                </p>
            </div>
        );
    }
}

export default Terror;