//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../css/content.css';
class content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  render() {
      const { body } = this.props;
    return (
      <div className="Content">
        <h1>{ body }</h1>
      </div>
    );
  }
}

export default content;