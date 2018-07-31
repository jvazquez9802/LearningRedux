//Dependencies
import React, { Component } from 'react';
import {connect} from 'react-redux';
import purchaseMovie from '../actions/purchase';


class Product extends Component {

    render() {
        console.log(this.props)
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

let ProductConectado= Product
ProductConectado = connect(state => ({ SoldMovie: state.SoldMovie }), {purchaseMovie})(ProductConectado)
export default ProductConectado
