import React, { Component } from 'react';
import { StoreProvider } from 'plume2';
import Hello from './component/hello';
import AppStore from './store';

@StoreProvider(AppStore, { debug: __DEV__ })
export default class HelloApp extends Component {
  componentDidMount() {
    this.store.onInit();
  }

  render() {
    return <Hello />;
  }
}
