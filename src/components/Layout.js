import React, { Component } from 'react';
import { Link } from 'react-router';

import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';
import { Provider } from 'react-redux';
import firebase from 'firebase';

const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
});

var config = {
  apiKey: 'AIzaSyDOhxRITgaq2LSTtZu72BVAcd3o7XaKb3g',
  authDomain: 'cropchat-rea.firebaseapp.com',
  databaseURL: 'https://cropchat-rea.firebaseio.com',
  projectId: 'cropchat-rea',
  storageBucket: 'cropchat-rea.appspot.com',
  messagingSenderId: '1087740784005',
};
const rrfConfig = { userProfile: 'users' };

const firebaseApp = firebase.initializeApp(config);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseApp, rrfConfig)
)(createStore);

const store = createStoreWithFirebase(rootReducer, {});

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  handleToggle = () => this.setState({ menuOpen: !this.state.menuOpen });

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div
            style={{
              width: '100%',
              backgroundColor: 'white',
              height: '80px',
              lineHeight: '80px',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                float: 'left',
                paddingLeft: '20px',
                color: '#777',
                fontWeight: 'bold',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              CROPCHAT
            </div>
            <div style={{ display: 'inline-block', float: 'right' }}>
              <Link
                to="/"
                style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  color: '#999',
                  marginRight: '15px',
                }}
              >
                Home
              </Link>
              <Link
                to="/post"
                style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  color: '#999',
                  marginRight: '15px',
                }}
              >
                Post
              </Link>
            </div>
          </div>
          {this.props.children}
        </div>
      </Provider>
    );
  }
}

export default Layout;
