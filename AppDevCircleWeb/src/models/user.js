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
  updateFriends(array) {
    this.friends = array;
  }

  getFriends = async(token) => {
    const params = {
      token
    }
    const res = await getFriends(params)
    this.updateFriends(res)
  }
}

export default new UserStore()
