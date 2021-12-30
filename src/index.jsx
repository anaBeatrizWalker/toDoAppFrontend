import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app'
import reducers from './main/reducers'

//Criando o store, objeto que contém o estado controlado pelo reducer
const store = createStore(reducers)

ReactDOM.render(
    //envolve a aplicação inteira
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')) 