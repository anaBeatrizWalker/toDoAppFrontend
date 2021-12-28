//modules é o apelido para a pasta node_modules, configurado no arquivo do webpack 
import 'modules/bootstrap/dist/css/bootstrap.min.css' 
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import About from '../about/about'
import Todo from '../todo/todo'
import Menu from '../template/menu'

export default props => ( //função arrow com expressão
    <div className='container'>
        <Menu/>
        <Todo></Todo>
        <About></About>
    </div>
)