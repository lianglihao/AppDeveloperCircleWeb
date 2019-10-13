import Request from '@utils/request'
import * as Config from '@utils/config'

const API = Config.API

export const Login = (data) => {
  return Request.post(`${API}/logIn`, {...data})
}

export const Tokenexpired = async(data) => {
  const res = await Request.post(`${API}/isexpired`, {...data})

  return res
}
