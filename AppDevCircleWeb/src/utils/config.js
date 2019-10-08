const host = 'http://139.199.206.151:5000'
export const API = process.env.NODE_ENV !== 'development' ? host : '/api'
export const REQUEST_TIMEOUT = 15000
export const HTTP_STATUS_DESC = {
  401: '登录状态过期, 需要重新登录',
  403: '没有相关权限',
  404: '请求地址错误或后端接口未部署',
  500: '后端服务有未处理的错误',
  502: '后端接口无响应',
  504: '请求超时, 可能是网络问题, 请稍后重试'
}
