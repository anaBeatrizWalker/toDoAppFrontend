//Componente que centraliza a maior parte das regras relativas ao cadastro de tarefas

import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos' //url base da api do backend

export default class Todo extends Component{
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }//estado inicial

        this.handleAdd = this.handleAdd.bind(this)//this é justamente handleAdd
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    //Retorna a lista dedados atualizada
    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)//concatenando com  o filtro de ordenar pela data de criação (crescente)
            .then(resp => this.setState({...this.state, description: '', list: resp.data}))//muda o estado para adicionar os dados na lista
    }

    //Evento de quando o usuário digitar no input
    handleChange(e){
        //pega todos os dados do estado, pega a descrição e aassocia o valor digitado no input
        this.setState({...this.state, description: e.target.value })
    }

    //Evento de Adição de uma nova tarefa
    handleAdd() {
        const description = this.state.description //valor mais novo
        axios.post(URL, { description })//adiciona na url base o objeto descrição
            .then(resp => this.refresh())
    }

    //Exclusão de tarefa
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)//passando o id na url
            .then(resp => this.refresh())//atualiza e mostra a nova lista
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm 
                    description={this.state.description} //sempre que o estado atualizar, renderiza o valor novo no form

                    handleAdd={this.handleAdd}/*permite o click do botão chamar a função*/

                    handleChange={this.handleChange}/>
                
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}/>
            </div>
        )
    }
}