import React, { Component } from 'react'
import './404.css'

class Notfound extends Component {
  render() {
    return (
      <div style={{background: '#fff'}}>
        <div className="nf-flex-grid-center">
          <div className="nf-mac-window">
            <div className="nf-title-bar">
              <div className="nf-bars-container">
                <div className="nf-bar"></div>
                <div className="nf-bar"></div>
                <div className="nf-bar"></div>
                <div className="nf-bar"></div>
                <div className="nf-bar"></div>
                <div className="nf-bar"></div>
              </div>
              <div className="nf-close">
                <div className="nf-inner"></div>
              </div>
              <div className="nf-title">404 Not Found</div>
            </div>
            <p>This page cannot be found on the server. Check the URL and try again.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Notfound
