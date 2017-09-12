import React, { Component } from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import Home from './Home';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="post" component={Post} />
        </Route>
      </Router>
    );
  }
}

export default App;
