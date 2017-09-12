import React, { Component } from 'react';

export default class PageHeader extends Component {
  render() {
    return (
      <div style={{ position: 'relative', marginBottom: '8px' }}>
        <div style={{}}>
          <img
            src={this.props.url}
            style={{ width: '100%', display: 'block' }}
            alt={this.props.comment}
          />
        </div>
        <div
          style={{
            width: '90%',
            position: 'absolute',
            bottom: 0,
            height: '20px',
            padding: '5%',
            textAlign: 'right',
            background: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <span
            style={{
              color: '#fff',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            {this.props.comment}
          </span>
        </div>
      </div>
    );
  }
}
