import React, { Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import Page from '../components/Page';
import Picture from './components/Picture';

class Home extends Component {
  render() {
    const { cats } = this.props;

    const catsList =
      cats !== undefined
        ? Object.keys(cats)
            .reverse()
            .map((key, id) => (
              <Picture url={cats[key].url} comment={cats[key].comment} />
            ))
        : 'Loading...';

    return (
      <Page title="Home">
        <ul style={{ padding: '10px' }}>{catsList}</ul>
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/post"
            style={{
              display: 'inline-block',
              color: '#333',
              marginRight: '15px',
            }}
          >
            POST A NEW CAT PICTURE
          </Link>
        </div>
      </Page>
    );
  }
}

export default compose(
  firebaseConnect(['/cats#limitToLast=10&orderByChild=createdAt&desc']),
  connect(({ firebase: { data: { cats } } }) => ({
    cats,
  }))
)(Home);
