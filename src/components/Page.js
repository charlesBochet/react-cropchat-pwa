import React, { Component } from 'react';
import PageHeader from '../components/PageHeader';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  handleToggle = () => this.setState({ menuOpen: !this.state.menuOpen });

  render() {
    return (
      <div>
        <PageHeader title={this.props.title} />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Page;
