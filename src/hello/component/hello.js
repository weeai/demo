import React, { Component } from 'react';
import { Relax } from 'plume2';

@Relax
export default class Hello extends Component {
  static relaxProps = {
    loading: 'loading',
    text: 'text'
  };

  render() {
    const { text, loading } = this.props.relaxProps;

    if (loading) {
      return <div>loading</div>;
    }

    return (
      <div>
        {text}
      </div>
    );
  }
}
