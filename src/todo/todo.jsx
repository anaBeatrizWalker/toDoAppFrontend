//Componente que centraliza a maior parte das regras relativas ao cadastro de tarefas
import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component{
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }//estado inicial

        this.handleAdd = this.handleAdd.bind(this)//this é justamente handleAdd
        this.handleChange = this.handleChange.bind(this)
    }

    //Evento de quando o usuário digitar no input
    handleChange(e){
        //pega todos os dados do estado, pega a descrição e aassocia o valor digitado no input
        this.setState({...this.state, description: e.target.value })
    }

    //Evento de Adição de uma nova tarefa
    handleAdd() {
        console.log(this.state.description)
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm 
                    description={this.state.description} //sempre que o estado atualizar, renderiza o valor novo no form

                    handleAdd={this.handleAdd}/*permite o click do botão chamar a função*/

                    handleChange={this.handleChange}/>
                
                <TodoList/>
            </div>
        )
    }
}