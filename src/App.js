import React, { Component } from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route
          path="/"
          getComponent={(location, cb) => {
            require.ensure(
              [],
              require => {
                cb(null, require('./components/Layout').default);
              },
              'layoutChunk'
            );
          }}
        >
          <IndexRoute
            getComponent={(location, cb) => {
              require.ensure(
                [],
                require => {
                  cb(null, require('./Home').default);
                },
                'homeChunk'
              );
            }}
          />
          <Route
            path="post"
            getComponent={(location, cb) => {
              require.ensure(
                [],
                require => {
                  cb(null, require('./Post').default);
                },
                'postChunk'
              );
            }}
          />
        </Route>
      </Router>
    );
  }
}

export default App;
