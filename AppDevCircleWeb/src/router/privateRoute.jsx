import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { getStorage } from '@utils/storage'
import { deleteStorage } from '@utils/storage'
import { Tokenexpired } from '@api/verification'

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: getStorage('token') ? true : false
    }
  }

  UNSAFE_componentWillMount() {
    const {history} = this.props;

    if(!this.state.isAuthenticated) {
      setTimeout(() => {
        history.replace('/login');
      }, 1000)
    } else {
      const params = {
        token: getStorage('token')
      }
      const res = Tokenexpired(params)
      res.then(response => {
        console.log(response)
        if (!response) {
          console.log(history)
          deleteStorage('token')
          history.replace('login')
        }
      })
    }
  }

  render() {
    const { component: Component, ...rest} = this.props

    return this.state.isAuthenticated ?
      (
        <Route {...rest}
          render={(props) => ( <Component {...props} />
          )}
        />
      ) : (<p style={{'width': '100%', 'textAlign': 'center', 'fontSize': '20px', 'lineHeight': '50px'}}>请登录...</p>)

  }
}

export default withRouter(PrivateRoute)
