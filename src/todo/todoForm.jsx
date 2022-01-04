import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' //liga o bind ao dispatch

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search } from './todoActions'

//Transformando em componente de classe
class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){
        if (e.key === 'Enter') {
            //Se o shift foi pressaionado
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()

        } else if (e.key === 'Escape') {
            this.props.handleClear()
        }
    }
    render(){
        return (
            <div role='form' className='todoForm'>
            
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                            placeholder='Adicione uma tarefa'
                            value={this.props.description}//atribuindo a descrição da tarefa como valor
                            onKeyUp={this.keyHandler}
                            onChange={this.props.changeDescription}//action de mudança na descrição
                            ></input>
                </Grid>
    
                <Grid cols='12 3 2'>
        
                    <IconButton style='primary' icon='plus'
                        onClick={this.props.handleAdd}//evento de adicionar tarefa
                    ></IconButton>
        
                    <IconButton style='info' icon='search'
                        onClick={this.props.handleSearch}//evento de pesquisar tarefa
                    ></IconButton>
        
                    <IconButton style='default' icon='close'
                        onClick={this.props.handleClear}//evento de limpar o input
                    ></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})//todo.description vem de reducers.js

//Disparando as ações para todos os reducers
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)