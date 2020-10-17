import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from '../components/ErrorIndicator';

const withCardDataFetching = (WrappedComponent, getData, getImage, getFields) => {
  class WithCardDataFetching extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null,
        image: null,
        fields: null,
        loading: false,
        error: false,
      };
    }

    componentDidMount() {
      this.updateData();
    }

    componentDidUpdate(prevProps) {
      const { dataId } = this.props;

      if (dataId !== prevProps.dataId && dataId) {
        this.updateData();
      }
    }

    updateData() {
      const { dataId, type } = this.props;

      if (!dataId) {
        return;
      }

      this.setState({ loading: true });

      getData(dataId)
        .then((data) => {
          this.setState({
            data,
            image: getImage(data, type),
            fields: getFields(type),
            loading: false,
          });
        });
    }

    render() {
      const {
        data, image, loading, fields, error,
      } = this.state;

      return (
        <>
          {!data && <span>Select an item from a list</span>}
          {data && (
            <WrappedComponent
              {...this.props}
              data={data}
              image={image}
              fields={fields}
              loading={loading}
            >
              {error && <ErrorIndicator />}
            </WrappedComponent>
          )}
        </>
      );
    }
  }

  WithCardDataFetching.displayName = `WithCardDataFetching(${WrappedComponent.name})`;

  WithCardDataFetching.propTypes = {
    dataId: PropTypes.string,
    type: PropTypes.string
  };

  WithCardDataFetching.defaultProps = {
    dataId: '',
    type: ''
  };

  return WithCardDataFetching;
};

export default withCardDataFetching;
