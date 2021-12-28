//Componente que centraliza a maior parte das regras relativas ao cadastro de tarefas
import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

export default class Todo extends Component{
    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
            </div>
        )
    }
}