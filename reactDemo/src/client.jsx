import 'babel-polyfill'
import reducer from './reducer' 
import 'common.scss'
import {createMyStore} from './store'
import routes from './routes'
import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

const store = createMyStore(reducer)
ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('react-root'))