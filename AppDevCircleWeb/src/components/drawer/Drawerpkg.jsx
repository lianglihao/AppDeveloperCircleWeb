import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { Button } from 'antd'
import { observer } from 'mobx-react'
import { Drawer } from 'antd'
import './drawerpkg.scss'

@observer
class Drawerpkg extends Component {

  // constructor(props) {
  //   super(props)
  // }

  content = () => {
    return (
      <p>请在content中加入内容</p>
    )
  }

  render() {
    const {
      closable = false,
      onClose,
      title = '',
      visible = false,
      content = this.content,
      placement = 'right',
      width = '256'} = this.props

    return (
      <Drawer
        closable={closable}
        onClose={onClose}
        placement={placement}
        title={title}
        visible={visible}
        width={width}
      >
        {
          content()
        }
        {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
      </Drawer>
    )
  }
}

export default Drawerpkg
