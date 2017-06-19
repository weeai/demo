import { Actor, Action } from 'plume2';

export default class HelloActor extends Actor {
  /**
   * 初始化数据
   */
  defaultState() {
    return {
      text: 'hello world'
    };
  }

  @Action('init')
  init(state, text) {
    return state.set('text', text);
  }
}
