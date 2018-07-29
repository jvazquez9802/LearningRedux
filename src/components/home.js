//Dependencies
import React, { Component } from 'react';
import image from"../images/movies.jpg";
class Home extends Component {
    
    render() {
        return(
            <div className = "Home">
                <h4> Welcome to my website, you will buy your favorite terror, action and Romance fils here</h4>
                <img src = {image}/>
            </div>
        );
    }
}

export default Home;