import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { Button } from 'antd'
import { observer, inject } from 'mobx-react'
import LandPage from './component/LandPage'
import Loginhead from './component/Loginhead'
import Loginfoot from './component/Loginfoot'
import styles from './style/login.module.sass'

@inject('UserStore')
@observer
class Login extends Component {

  // constructor(props) {
  //   super(props)
  //   this.login = this.login.bind(this)
  // }

  componentDidMount() {
    document.title = '登录页'
    localStorage.removeItem('login')
  }

  // @action
  // login() {
  //   const { UserStore } = this.props
  //   UserStore.setName('lianglihao')
  //   localStorage.setItem('login', 1)
  //   // this.setUser()
  // }

  // logout() {
  //   localStorage.removeItem('login')
  // }

  goHome() {
    // window.location.replace('/')
    // console.log(this.props)
  }

  render() {
    const { history } = this.props

    return (
      <div className={styles.login}>
        <div className={styles.mask}>
          <Loginhead />
          <div className={styles.content}>
            <LandPage history={history}/>
          </div>
          <Loginfoot />
        </div>
      </div>
    )
  }
}

export default Login
