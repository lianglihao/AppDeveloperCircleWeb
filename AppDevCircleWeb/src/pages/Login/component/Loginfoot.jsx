import React, { Component } from 'react'

class Loginfoot extends Component {

  render() {
    return (
      <div className="myfooter">
        <p className="foo">&copy; 2018-2019 Lifr_Circle
          <a href="https://github.com/lianglihao"
            target="_blank"
            title="开发者github"
          >
          开发者：LHJs
          </a>
          <a href="http://www.miitbeian.gov.cn"
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
