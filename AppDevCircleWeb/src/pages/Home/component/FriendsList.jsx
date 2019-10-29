import React, { Component, Fragment } from 'react'
// import { Link } from 'react-router-dom'
import { action, observable } from 'mobx'
import { observer, inject } from 'mobx-react'
// import Drawerhome from '@component/drawer/Drawerpkg'
// import { Button } from 'antd'
// import { getStorage } from '@utils/storage'
import Drawerhome from '@component/drawer/Drawerpkg'
// import { List, message, Avatar, Spin } from 'antd';
// import InfiniteScroll from 'react-infinite-scroller';

@inject('UserStore')
@observer
class FriendsList extends Component {

  @observable
    loading = false

    @observable
    hasMore = true

    @observable
    data = [{name: 123}, {name: 123}, {name: 123}, {name: 123}, {name: 123}, {name: 123}]

  init = () => {
    const { UserStore } = this.props
    const { friends } = UserStore
    console.log(friends)

    return (
      <Fragment>
        {
          this.data.map((item, index) => {
            return <p key={index}>{item.name}</p>
          })
        }
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Fragment>
    )
  }


  homeDrawer = () => {

    const { visible, onClose } = this.props

    return (
      <Drawerhome
        closable={false}
        content={this.init}
        onClose={onClose}
        title="好友列表"
        visible={visible}
      />
    )
  }

  render() {
    return (
      <Fragment>
        {
          this.homeDrawer()
        }
      </Fragment>
    )
  }
}

export default FriendsList
