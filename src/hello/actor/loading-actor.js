import { Actor, Action } from 'plume2';

export default class LoadingActor extends Actor {
  defaultState() {
    return {
      loading: true
    };
  }

  @Action('loading')
  end(state, status) {
    return state.set('loading', status);
  }
}
