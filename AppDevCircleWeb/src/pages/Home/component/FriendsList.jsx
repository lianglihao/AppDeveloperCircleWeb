import React, { Component, Fragment } from 'react'
// import { Link } from 'react-router-dom'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
// import Drawerhome from '@component/drawer/Drawerpkg'
// import { Button } from 'antd'
// import { getStorage } from '@utils/storage'
import Drawerhome from '@component/drawer/Drawerpkg'
// import { List, message, Avatar, Spin } from 'antd';
// import InfiniteScroll from 'react-infinite-scroller';
import { List, Avatar, Button } from 'antd';

@inject('UserStore')
@observer
class FriendsList extends Component {

  @observable
  loading = false

  @observable
  hasMore = true

  @observable
  data = [{name: 123}, {name: 123}, {name: 123}, {name: 123}, {name: 123}, {name: 123}]

  chakan = (value) => {
    console.log(value.uname)
  }

  actions = (item) => {
    return [
      <Button key="ledit"
        onClick={() => this.chakan(item)}
        type="link"
      >查看</Button>
      // <Button key="more"
      //   type="link"
      // >更多</Button>
    ]
  }

  init = () => {
    const { UserStore } = this.props
    const { friends } = UserStore
    console.log(friends)

    // const arr = friends.concat(friends)

    return (
      <div>
        <List
          className="demo-loadmore-list"
          dataSource={friends}
          itemLayout="horizontal"
          renderItem={item => {
            return (
              <>
                {item ?
                  <List.Item
                    actions={this.actions(item)}
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar src={item.picture} />
                      }
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      // title={<a href="https://ant.design">{item.name.last}</a>}
                      title={item.uname}
                    />
                  </List.Item> : <p>无好友</p>
                }
              </>
            )
          }

          //   (
          //   <List.Item
          //     actions={this.actions(item)}
          //   >
          //     <List.Item.Meta
          //       avatar={
          //         <Avatar src={item.picture} />
          //       }
          //       description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          //       // title={<a href="https://ant.design">{item.name.last}</a>}
          //       title={item.uname}
          //     />
          //   </List.Item>
          // )
          }
        />
      </div>
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
        width="500"
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
