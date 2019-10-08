import NProgress from 'nprogress'

let count = 0

export const startLoading = () => {
  // if (!config.noLoading) {
  NProgress.start()

  count += 1
  // }
}

export const stopLoading = () => {
  count -= 1

  if (count <= 0) NProgress.done()
}
