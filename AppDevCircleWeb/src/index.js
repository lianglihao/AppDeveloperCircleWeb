import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import store from '@store';
import store from '@models'
import {configure} from 'mobx'; // 开启严格模式
configure({enforceActions: 'always'}) // 开启严格模式

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
