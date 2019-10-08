import axios from 'axios'
import { startLoading, stopLoading } from '@utils/loading'
import { message } from 'antd'
import * as CONFIG from '@utils/config'
import Catcher from '@utils/catcher'

window.cancelTokenList = []
const instance = axios.create({
  timeout: CONFIG.REQUEST_TIMEOUT
})

const requestHandler = config => {
  startLoading()

  const source = axios.CancelToken.source()

  window.cancelTokenList.push(source)
  config.cancelToken = source.token

  return config
}

const requestErroHandler = error => {
  /* eslint-disable-next-line */
  Promise.reject(error)
}

const responseHandler = response => {
  stopLoading()

  window.cancelTokenList = window.cancelTokenList.filter(
    item => item.token !== response.config.cancelToken
  )

  const { status } = response

  if (status !== 200) Catcher(response)
  if (status !== 200) console.log(response)

  const { code, msg, info, data } = response.data

  if (code !== 200) {
    message.error(msg || info, 2)

    return false
  }

  return data
}

const responseErrorHandler = error => {
  stopLoading()

  Catcher(error.response, true)
  console.log(error.response, true)
}

instance.interceptors.request.use(requestHandler, requestErroHandler)
instance.interceptors.response.use(responseHandler, responseErrorHandler)

export default instance
