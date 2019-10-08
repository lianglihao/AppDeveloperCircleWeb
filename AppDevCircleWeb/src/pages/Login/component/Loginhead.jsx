import React, { Component } from 'react'
import '../style/loginhead.scss'

class Loginhead extends Component {

  render() {
    return (
      <header className="loginHeader">
        <img alt="logo"
          src={require('../style/img/draw.png')}
        />
        <button>注册</button>
      </header>
    )
  }
}

export default Loginhead
