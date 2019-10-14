import { observable, action } from 'mobx';
import { getFriends } from '@api/user'

class UserStore {
  @observable
  uname = ''

  @observable
  friends = []

  @action
  setName(uname) {
    this.uname = uname
  }

  @action
  async getFriends(token) {
    console.log(token)
    const params = {
      token
    }
    const res = await getFriends(params)
    console.log(res)
  }
}

export default new UserStore()
