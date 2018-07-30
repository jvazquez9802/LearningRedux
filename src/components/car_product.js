//Dependencies
import React, { Component } from 'react';
import {connect} from 'react-redux';


class Product extends Component {

    render() {
        if(!this.props.SoldMovie){
            return (<h3>you don't have movies on your kar</h3>);
        }
        return(
            <div>
                <h4>{this.props.SoldMovie.title}</h4>
                <img src ={this.props.SoldMovie.img} width = "100px" alt = {this.props.SoldMovie.title}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        SoldMovie: state.SoldMovie
    };
}

export default connect(mapStateToProps)(Product);