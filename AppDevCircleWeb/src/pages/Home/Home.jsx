import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
// import { action } from 'mobx'
import { observer, inject } from 'mobx-react'

@inject('UserStore')
@observer
class Home extends Component {

  // UNSAFE_componentWillMount() {
  //   // document.title = '首页'
  // }

  // componentWillUnmount() {
  //   // this.destroy()
  // }

  render() {
    const { UserStore } = this.props
    const { name } = UserStore

    return (
      <Fragment>
        <h className="test">welcome {name}</h>
        <Link to="/login">goLogin</Link>
      </Fragment>
    )
  }
}

export default Home
