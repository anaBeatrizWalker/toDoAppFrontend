import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from'redux-promise'

import App from './main/app'
import reducers from './main/reducers'

//Plugin do chrome
const devTools = window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()

//Criando o store, objeto que contém o estado controlado pelo reducer
const store = applyMiddleware(promise)(createStore)(reducers, devTools)

ReactDOM.render(
    //envolve a aplicação inteira
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')) 