import React, { Component } from 'react';

import Spinner from '../components/Spinner';
import ErrorIndicator from '../components/ErrorIndicator';

const withListDataFetching = (WrappedComponent, getData) => {
  class WithListDataFetching extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null,
        error: false,
      };
    }

    componentDidMount() {
      getData()
        .then((data) => {
          this.setState({ data });
        })
        .catch(() => {
          this.setState({ error: true });
        });
    }

    render() {
      const { data, error } = this.state;

      return (
        <WrappedComponent {...this.props} data={data}>
          {error && <ErrorIndicator />}
          {!data && !error && <Spinner />}
        </WrappedComponent>
      );
    }
  }

  WithListDataFetching.displayName = `WithListDataFetching(${WrappedComponent.name})`;

  return WithListDataFetching;
};

export default withListDataFetching;
