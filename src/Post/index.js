import React, { Component } from 'react';
import { firebaseConnect } from 'react-redux-firebase';
import { browserHistory } from 'react-router';
import axios from 'axios';
import parse from 'xml-parser';
import Page from '../components/Page';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { pictureToPostUrl: null, comment: '' };
  }

  postPicture(event) {
    event.preventDefault();
    axios
      .post('https://api.cloudinary.com/v1_1/dfaypbt40/image/upload', {
        file: this.state.pictureToPostUrl,
        timestamp: new Date().getTime(),
        api_key: '153638847867413',
        upload_preset: 'ne9fa7sc',
      })
      .then(response => {
        this.props.firebase.push('cats', {
          url: response.data.secure_url,
          comment: this.state.comment,
          info: 'Posted by an anonymous user',
          created_at: new Date().getTime(),
        });
        browserHistory.push('/');
      });
  }

  loadPicture() {
    axios
      .get('https://thecatapi.com/api/images/get?format=xml&results_per_page=1')
      .then(response => {
        this.setState({
          pictureToPostUrl: parse(response.data).root.children['0'].children[
            '0'
          ].children['0'].children['0'].content,
        });
      });
  }

  componentDidMount() {
    this.loadPicture();
  }

  render() {
    return (
      <Page title="Post a new picture">
        <form>
          <div style={{ width: '90%', margin: '5%' }}>
            <div>
              <div>
                {this.state.pictureToPostUrl !== null ? (
                  <img
                    style={{ width: '100%' }}
                    alt="Random cat"
                    src={this.state.pictureToPostUrl}
                  />
                ) : (
                  <div
                    style={{
                      backgroundColor: '#eee',
                      width: '100%',
                      height: '200px',
                      marginTop: '10px',
                      color: '#eee',
                    }}
                  >
                    Placeholder
                  </div>
                )}
              </div>
            </div>
            <div style={{ textAlign: 'right', marginTop: '10px' }}>
              <div>
                <input
                  onChange={event =>
                    this.setState({ comment: event.target.value })}
                  id="comment"
                  type="text"
                  placeholder="Commentaire"
                  style={{
                    width: '100%',
                    height: '30px',
                    padding: '5px',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <input
                type="submit"
                style={{
                  width: '150px',
                  height: '30px',
                  backgroundColor: '#00bcd4',
                  border: 'none',
                  color: 'white',
                  marginTop: '10px',
                }}
                value="Post a cat"
                onClick={event => this.postPicture(event)}
              />
            </div>
          </div>
        </form>
      </Page>
    );
  }
}

export default firebaseConnect()(Post);
