import loadable from '@loadable/component'

export const BasicsRouter = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('../pages/Home/Home'))
  }
]

export const UnimpRouter = [
  {
    path: '/login',
    exact: true,
    component: loadable(() => import('../pages/Login/Login'))
  },
  {
    path: '',
    exact: false,
    component: loadable(() => import('../pages/Notfound/404'))
  }
]
