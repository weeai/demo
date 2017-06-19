import { Store } from 'plume2';
import HelloActor from './actor/hello-actor';
import LoadingActor from './actor/loading-actor';
import * as webapi from './webapi';

export default class AppStore extends Store {
  bindActor() {
    return [new HelloActor(), new LoadingActor()];
  }

  constructor(props) {
    super(props);
    //debug in chrome
    if (__DEV__) {
      window['_store'] = this;
    }
  }

  onInit = async () => {
    this.dispatch('loading', true);
    let { err, res } = await webapi.fetchText();
    const text = err ? err.message : res;
    this.transaction(() => {
      this.dispatch('loading', false);
      this.dispatch('init', text);
    });
  };
}
