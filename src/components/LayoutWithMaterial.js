import React, { Component } from 'react';
import { Link } from 'react-router';

import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

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

class LayoutWithMaterial extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  handleToggle = () => this.setState({ menuOpen: !this.state.menuOpen });

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div className="App">
            <AppBar
              style={{ position: 'fixed' }}
              title="Cropchat"
              onLeftIconButtonTouchTap={this.handleToggle}
            />
            <Drawer
              open={this.state.menuOpen}
              docked={false}
              onRequestChange={menuOpen => this.setState({ menuOpen })}
            >
              <MenuItem
                onClick={this.handleToggle}
                containerElement={<Link to="/" />}
                primaryText="Home"
              />
              <MenuItem
                onClick={this.handleToggle}
                containerElement={<Link to="/post" />}
                primaryText="Post"
              />
            </Drawer>
            {this.props.children}
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default LayoutWithMaterial;
