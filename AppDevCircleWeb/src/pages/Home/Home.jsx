import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { action, observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import Drawerhome from '@component/drawer/Drawerpkg'
import { Button } from 'antd'

@inject('UserStore')
@observer
class Home extends Component {

  constructor(props) {
    super(props)

    this.closeDrawer = this.closeDrawer.bind(this)
    this.openDrawer = this.openDrawer.bind(this)
  }

  UNSAFE_componentWillMount() {
    document.title = '小圈子'
  }

  @observable
  drawerVis = false

  @observable
  socket = null

  @action
  closeDrawer() {
    this.drawerVis = false
  }

  @action
  openDrawer() {
    this.drawerVis = true
  }

  homeDrawerContent = () => {
    return (
      <Fragment>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Fragment>
    )
  }

  homeDrawer = () => {
    return (
      <Drawerhome
        closable={false}
        content={this.homeDrawerContent}
        onClose={this.closeDrawer}
        title="好友列表"
        visible={this.drawerVis}
      />
    )
  }

  render() {
    const { UserStore } = this.props
    const { name } = UserStore

    return (
      <Fragment>
        <p className="test">welcome {name}</p>
        <Link to="/login">goLogin</Link>
        <Button onClick={this.openDrawer}>打开列表</Button>

        {
          this.homeDrawer()
        }
      </Fragment>
    )
  }
}

export default Home
