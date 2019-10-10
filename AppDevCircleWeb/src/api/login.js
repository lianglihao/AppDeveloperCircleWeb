import axios from 'axios'
import * as Config from '@utils/config'

const API = Config.API

export const Login = (data) => {
  return axios.post(`${API}/logIn`, {...data})
}
