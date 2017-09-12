import React, { Component } from 'react';
import LayoutTemplate from './LayoutTemplate';

class Layout extends Component {
  state = {
    component: null,
  };

  componentDidMount() {
    require.ensure([], require => {
      const component = require('./LayoutWithMaterial').default;
      this.setState({
        component: component,
      });
    });
  }

  render() {
    return this.state.component ? (
      <this.state.component {...this.props} />
    ) : (
      <LayoutTemplate />
    );
  }
}

export default Layout;
