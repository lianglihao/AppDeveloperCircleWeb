import { observable, action } from 'mobx';

class UserStore {
  @observable
  name = ''

  @action
  setName(name) {
    this.name = name
  }
}

export default new UserStore()
