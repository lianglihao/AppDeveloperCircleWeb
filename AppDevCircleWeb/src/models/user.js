import { observable, action } from 'mobx';

class UserStore {
  @observable
  name = ''

  @action
  setName(name) {
    this.name = name
    console.log(this.name)
  }
}

export default new UserStore()
