
//Depemdemcies
import React, { Component } from 'react';
/*PropTYpes es una validacion que ayuda a definir que primport PropTypes from 'prop-types';opiedades debemos de recibir, de que tipo y 
ver si son necesarios o requeridas o simplemente se pueden mandar como nulas*/
import { Link } from 'react-router-dom';
// Assets
import logo from '../logo.svg';
import '../css/header.css';
import {connect} from 'react-redux';


class Header extends Component {
  RouterButtons(){
    return this.props.Main.map((menu) =>{
        return(
            <div>
                <Link to={menu.url}>
                    <button type="button">{menu.title}</button>
                </Link>
            </div>
        );
    });
}
  render() {
    return (
      <div className="Header">
        <h2>Juan's films</h2>
        <header className="Logo">
            <img src={logo} alt="Logo" width = "200px" />
        </header>
        <li className = "Menu li">
            {this.RouterButtons()}
        </li>
      </div>
    );
  }
}

function mapStateToProps(state){
    return{
        Main: state.Main
    }
}

export default connect(mapStateToProps)(Header);