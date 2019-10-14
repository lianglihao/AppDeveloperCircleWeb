import Request from '@utils/request'
import * as Config from '@utils/config'

const API = Config.API

// 登录操作
export const Login = (data) => {
  return Request.post(`${API}/logIn`, {...data})
}

// token验证
export const Tokenexpired = async(data) => {
  const res = await Request.post(`${API}/isexpired`, {...data})

  return res
}
