import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';
import PicturesListPlaceholder from '../components/PicturesListPlaceholder';

class LayoutWithoutMaterial extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  handleToggle = () => this.setState({ menuOpen: !this.state.menuOpen });

  render() {
    return (
      <div>
        <div className="App">
          <div
            style={{
              width: '100%',
              backgroundColor: 'rgb(0, 188, 212)',
              height: '64px',
              position: 'fixed',
              lineHeight: '64px',
              color: 'white',
              fontSize: '24px',
              paddingLeft: 48,
            }}
          >
            Cropchat
          </div>
          <PageHeader title="Cropchat" />
          <ul style={{ padding: 10 }}>
            <PicturesListPlaceholder />
          </ul>
          <a
            href="/post"
            style={{
              position: 'fixed',
              right: 20,
              bottom: 20,
              backgroundColor: 'rgb(255, 64, 129)',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              color: 'white',
              lineHeight: '56px',
              fontSize: '30px',
              textAlign: 'center',
              textDecoration: 'none',
            }}
          >
            +
          </a>
        </div>
      </div>
    );
  }
}

export default LayoutWithoutMaterial;
