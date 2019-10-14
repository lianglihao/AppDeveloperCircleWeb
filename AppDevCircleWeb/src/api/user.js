import Request from '@utils/request'
import * as Config from '@utils/config'

const API = Config.API

// 获取好友
export const getFriends = (data) => {
  return Request.post(`${API}/getfriends`, {...data})
}
