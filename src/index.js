import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './ducks/reducers'
import App from './App'
import thunk from 'redux-thunk'

const enhancers = [
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__()
]

const store = createStore(rootReducer, compose(...enhancers))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
