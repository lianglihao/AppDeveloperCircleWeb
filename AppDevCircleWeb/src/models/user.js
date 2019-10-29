import { observable, action } from 'mobx';
import { getFriends } from '@api/user'

class UserStore {
  @observable
  uname = ''

  @observable
  friends = []

  @observable
  friendsCount = 1

  @action
  setName(uname) {
    this.uname = uname
  }

  @action
  updateFriends(array) {
    this.friends = this.friends.concat(array)
  }

  getFriends = async(token) => {
    const params = {
      token,
      count: this.friendsCount
    }
    const res = await getFriends(params)
    console.log(params)
    this.updateFriends(res)
  }
}

export default new UserStore()
