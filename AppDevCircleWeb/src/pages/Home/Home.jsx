import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { action, observable } from 'mobx'
import { observer, inject } from 'mobx-react'
// import Drawerhome from '@component/drawer/Drawerpkg'
import { Button } from 'antd'
import { getStorage } from '@utils/storage'
import FriendsList from './component/FriendsList'

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
    const { UserStore } = this.props
    const { getFriends } = UserStore
    getFriends(getStorage('token'))
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
    // const { UserStore } = this.props
    // const { getFriends } = UserStore
    // getFriends(getStorage('token'))
    this.drawerVis = true
  }

  // homeDrawerContent = () => {
  //   const { UserStore } = this.props
  //   const { getFriends } = UserStore
  //   getFriends(getStorage('token'))

  //   return (
  //     <Fragment>
  //       <p>Some contents...</p>
  //       <p>Some contents...</p>
  //       <p>Some contents...</p>
  //     </Fragment>
  //   )
  // }

  // homeDrawer = () => {

  //   return (
  //     <Drawerhome
  //       closable={false}
  //       content={this.FriendsList}
  //       onClose={this.closeDrawer}
  //       title="好友列表"
  //       visible={this.drawerVis}
  //     />
  //   )
  // }

  render() {
    const { UserStore } = this.props
    const { uname } = UserStore

    return (
      <Fragment>
        <p className="test">welcome {uname}</p>
        <Link to="/login">goLogin</Link>
        <Button onClick={this.openDrawer}>打开列表</Button>
        <FriendsList
          onClose={this.closeDrawer}
          visible={this.drawerVis}
        />
      </Fragment>
    )
  }
}

export default Home
