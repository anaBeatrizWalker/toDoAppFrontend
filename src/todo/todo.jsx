//Componente que centraliza a maior parte das regras relativas ao cadastro de tarefas
import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component{
    constructor(props) {
        super(props)

        this.handleAdd = this.handleAdd.bind(this)//this é justamente handleAdd
    }

    //Evento de Adição de uma nova tarefa
    handleAdd() {
        console.log('adicionado')
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm handleAdd={this.handleAdd}/>{/*permite o click do botão chamar a função*/}
                <TodoList/>
            </div>
        )
    }
}