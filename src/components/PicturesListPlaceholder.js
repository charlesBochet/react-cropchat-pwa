import React, { Component } from 'react';

export default class PicturesListPlaceholder extends Component {
  render() {
    return (
      <div>
        {Array.apply(0, Array(10)).map(function(x, i) {
          return (
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
          );
        })}
      </div>
    );
  }
}
