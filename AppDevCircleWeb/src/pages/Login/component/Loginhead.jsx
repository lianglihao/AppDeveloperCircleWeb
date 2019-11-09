import React, { Component } from 'react'
import '../style/loginhead.scss'
import draw from '@assets/img/draw.png'

class Loginhead extends Component {

  render() {
    return (
      <header className="loginHeader">
        <img alt="logo"
          src={draw}
        />
        <button>注册</button>
      </header>
    )
  }
}

export default Loginhead
