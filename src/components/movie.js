//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {purchaseTmovie} from '../actions/purchase';


class Movie extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        plot: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired
      };
    render() {
        const{ title, img, plot, director } = this.props;
        return(
            <div className = "Movie">
                <p>Title: {title}</p>
                    <img src = {img} width = "220px"/>
                <p>Plot: {plot}</p>
                <h5>Directed by: {director}</h5>
            </div>
        );
    }
}

export default Movie;