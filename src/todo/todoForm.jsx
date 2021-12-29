import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='todoForm'>
        
        <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    value={props.description}//atribuindo a descrição da tarefa como valor
                    onChange={props.handleChange}//evento de mudança de estado
                    ></input>
        </Grid>

        <Grid cols='12 3 2'>

            <IconButton style='primary' icon='plus'
                onClick={props.handleAdd}//evento de adicionar tarefa
            ></IconButton>

            <IconButton style='info' icon='search'
                onClick={props.handleSearch}//evento de pesquisar tarefa
            ></IconButton>
        </Grid>
    </div>
)