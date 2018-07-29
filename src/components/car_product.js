//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Product extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      };
    render() {
        const{ title, img } = this.props;
        return(
            <div className = "Product">
                <p>Title: {title}</p>
                <p>
                    <img src = {img} width = "100px"/>
                        <p>
                            
                        </p>
                </p>
            </div>
        );
    }
}

export default Product;