import Request from '@utils/request'
import * as Config from '@utils/config'

const API = Config.API

export const Login = (data) => {
  return Request.post(`${API}/logIn`, {...data})
}
