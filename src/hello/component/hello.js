import React, { Component } from 'react';
import { Relax } from 'plume2';

@Relax
export default class Hello extends Component {
  static relaxProps = {
    text: 'text'
  };

  render() {
    const { text } = this.props.relaxProps;

    return (
      <div>
        {text}
      </div>
    );
  }
}
