import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from '../ErrorIndicator';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  // children: PropTypes.oneOfType([
  //   PropTypes.arrayOf([PropTypes.elementType]),
  //   PropTypes.elementType
  // ]).isRequired
  // children: PropTypes.arrayOf([PropTypes.elementType]).isRequired
  children: PropTypes.any.isRequired
};

export default ErrorBoundary;
