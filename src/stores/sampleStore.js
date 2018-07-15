import { action, observable } from 'mobx';

class sampleStore {
  @observable sample = null;

  @action
  changeSample() {
    this.sample = 'sample';
  }
}

export default new sampleStore();
