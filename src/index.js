import React from 'react'
import * as ReactDOM from 'react-dom'
import { store, history } from './helpers';
import { Provider } from 'react-redux' 
import { Router } from 'react-router-dom';
import App from './App' 
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
// import 'todomvc-app-css/index.css'  

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
          <App />
      </Router>
  </Provider>,
  document.getElementById('root'));

 
serviceWorker.unregister();
