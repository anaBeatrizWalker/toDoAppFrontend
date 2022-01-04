import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' //liga o bind ao dispatch

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from './todoActions'

//Transformando em componente de classe
class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    componentWillMount(){//método de ciclo de vida, executado sempre que o comp será exibido
        this.props.search()
    }

    keyHandler(e){
        const { add, clear, search, description } = this.props

        if (e.key === 'Enter') {
            //Se o shift foi pressaionado
            e.shiftKey ? search() : add(description)

        } else if (e.key === 'Escape') {
            clear()
        }
    }
    render(){
        const { add, search, description } = this.props

        return (
            <div role='form' className='todoForm'>
            
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                            placeholder='Adicione uma tarefa'
                            value={this.props.description}
                            onKeyUp={this.keyHandler}
                            onChange={this.props.changeDescription}//action de mudança na descrição
                            ></input>
                </Grid>
    
                <Grid cols='12 3 2'>
        
                    <IconButton style='primary' icon='plus'
                        onClick={()=> add(description)}
                    ></IconButton>
        
                    <IconButton style='info' icon='search'
                        onClick={()=> search()}
                    ></IconButton>
        
                    <IconButton style='default' icon='close'
                        onClick={this.props.clear()}
                    ></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})//todo.description vem de reducers.js

//Disparando as ações para todos os reducers
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)