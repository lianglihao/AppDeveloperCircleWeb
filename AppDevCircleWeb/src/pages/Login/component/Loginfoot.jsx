import React, { Component } from 'react'

class Loginfoot extends Component {

  render() {
    const styleFoot = {
      height: '2rem',
      width: '100%',
      color: '#fff',
      textAlign: 'center',
      position: 'fixed',
      bottom: '0',
      margin: '0 auto'
    }

    const stylea = {
      color: '#fff',
      textDecoration: 'none',
      marginLeft: '5px'
    }

    return (
      <div className="myfooter"
        style={styleFoot}
      >
        <p className="foo">&copy; 2018-2019 AppDevCircleWeb
          <a href="https://github.com/lianglihao"
            rel="noopener noreferrer"
            style={stylea}
            target="_blank"
            title="开发者github"
          >
          开发者：LHJs
          </a>
          <a href="http://www.miitbeian.gov.cn"
            rel="noopener noreferrer"
            style={stylea}
            target="_blank"
            title="工信部首页链接"
          >浙ICP备18051718号-1
          </a>
        </p>
      </div>
    )
  }
}

export default Loginfoot
