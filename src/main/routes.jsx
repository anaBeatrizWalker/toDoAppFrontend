//Mapeando as rotas do menu
import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </Router>
)
/*
history: estratégia de histórico
path: componente que irá carregar quando a rota for acessada
from='*': se qualquer outra rota for digtada, redireciona para a rota todos
*/