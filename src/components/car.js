//Dependencies
import React, { Component } from 'react';
import '../css/car.css';
import Product from "./car_product";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class Car extends Component {
      
    render() {
        return(
            <div className = "Product">
                <p>I'm the car</p>
            </div>
        );
    }
}

export default Car;