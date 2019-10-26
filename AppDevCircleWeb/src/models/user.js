import { observable, action } from 'mobx';
import { getFriends } from '@api/user'

class UserStore {
  @observable
  uname = ''

  @observable
  friends = null

  @action
  setName(uname) {
    this.uname = uname
  }

  @action
  async getFriends(token) {
    const params = {
      token
    }
    const res = await getFriends(params)
    this.friends = res
  }
}

export default new UserStore()
