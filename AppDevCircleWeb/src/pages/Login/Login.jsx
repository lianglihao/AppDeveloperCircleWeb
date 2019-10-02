import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { action } from 'mobx'
import { observer, inject } from 'mobx-react'
import LandPage from './LandPage'
import styles from './style/login.module.sass'

@inject('UserStore')
@observer
class Login extends Component {

  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  componentDidMount() {
    // document.title = '登录页'
    localStorage.removeItem('login')
  }

  @action
  login() {
    const { UserStore } = this.props
    UserStore.setName('lianglihao')
    localStorage.setItem('login', 1)
    // this.setUser()
  }

  logout() {
    localStorage.removeItem('login')
  }

  goHome() {
    // window.location.replace('/')
    // console.log(this.props)
  }

  render() {

    return (
      <div className={styles.login}>
        <p>Login</p>
        <LandPage></LandPage>
        <Link to="/">goHome</Link>
        <Button onClick={this.login}
          type="primary"
        >登陆</Button>
        <button onClick={this.logout}>退出</button>
      </div>
    )
  }
}

export default Login
