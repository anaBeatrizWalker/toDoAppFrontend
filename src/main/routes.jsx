//Mapeando as rotas do menu
import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>{/*estratégia de histórico*/}
        <Route path='/todos' component={Todo} /> {/*componente que irá carregar quando a rota for acessada*/}

        <Route path='/about' component={About} />
        
        <Redirect from='*' to='/todos' />{/*se qualquer outra rota for digtada, redireciona para a rota todos*/}
    </Router>
)