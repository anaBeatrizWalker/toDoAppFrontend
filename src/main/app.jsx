//modules é o apelido para a pasta node_modules, configurado no arquivo do webpack 
import 'modules/bootstrap/dist/css/bootstrap.min.css' 
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from '../main/routes'

export default props => ( //função arrow com expressão
    <div className='container'>
        <Menu/>
        <Routes/>
    </div>
)