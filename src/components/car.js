//Dependencies
import React, { Component } from 'react';
import '../css/car.css';
import Product from "./car_product";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class Car extends Component {
      
    createListProducts(){
        return this.props.Tfilm.map((film) =>{
            return(
                <div>
                    <h4> Your buys</h4>
                    <li key = { film.id }>
                        <Product title = {film.title} img = {film.img} plot/>
                    </li>
                </div>
            );
        });
    }

    render() {
        return(
            <div className = "Product">
                {this.createListProducts()}
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        Rfilm: state.Afilm
    }
}

export default connect(mapStateToProps)(Car);