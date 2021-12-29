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
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleSearch = this.handleSearch.bind(this)

        this.refresh()
    }

    //Retorna a lista dedados atualizada
    refresh(description = '') {//refresh recebe a descrição atual
        const search = description ? `&description__regex=/${description}/` : '' //se contém a descrição, adiciona na URL
        axios.get(`${URL}?sort=-createdAt${search}`)//concatenando com  o filtro de ordenar pela data de criação (crescente)
            .then(resp => this.setState({...this.state, description, list: resp.data}))//muda o estado para adicionar os dados na lista
    }

    handleSearch() {
        this.refresh(this.state.description)
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

    //Botão excluir tarefa
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)//passando o id na url
            .then(resp => this.refresh(this.state.description))//atualiza e mostra a nova lista
    }

    //Botão feito
    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })//pega todo o objeto e altera a variável booleana para true
            .then(resp => this.refresh(this.state.description))
    }

    //Botão pendente
    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm 
                    description={this.state.description} //sempre que o estado atualizar, renderiza o valor novo no form

                    handleAdd={this.handleAdd}/*permite o click do botão chamar a função*/

                    handleChange={this.handleChange}/>
                
                <TodoList 
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove}
                    handleSearch={this.handleSearch}/>
            </div>
        )
    }
}