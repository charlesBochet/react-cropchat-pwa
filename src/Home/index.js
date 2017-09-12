import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import Page from '../components/Page';
import PicturesListPlacholder from '../components/PicturesListPlaceholder';
import Picture from './components/Picture';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Home extends Component {
  render() {
    const { cats } = this.props;

    const catsList =
      cats !== undefined ? (
        Object.keys(cats)
          .reverse()
          .map((key, id) => (
            <Picture url={cats[key].url} comment={cats[key].comment} />
          ))
      ) : (
        <PicturesListPlacholder />
      );

    return (
      <Page title="Home">
        <ul style={{ padding: '10px' }}>{catsList}</ul>
        <FloatingActionButton
          href="/post"
          secondary={true}
          style={{
            position: 'fixed',
            right: 20,
            bottom: 20,
          }}
        >
          <ContentAdd />
        </FloatingActionButton>
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
