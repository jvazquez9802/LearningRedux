//Dependencies
import React, { Component } from 'react';
import '../css/car.css';
import Product from "./car_product";

class Car extends Component {
      
    render() {
        return(
            <div className = "Product">
                <Product/>
            </div>
        );
    }
}

export default Car;