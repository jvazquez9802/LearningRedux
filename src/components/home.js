//Dependencies
import React, { Component } from 'react';
import image from"../images/movies.jpg";
class Home extends Component {
    
    render() {
        return(
            <div className = "Home">
                <h4> Welcome to my website, where you can buy your favorite horror, action and Romance films</h4>
                <img src = {image} alt = "home"/>
            </div>
        );
    }
}

export default Home;