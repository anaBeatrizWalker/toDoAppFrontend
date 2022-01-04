import axios from 'axios'

//url padrão
const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({//método que cria a action
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value //pega o valor do input
})

export const search = ()=>{
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            //a unica ação disparada é a ação de buscas
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = ()=> {
    return { type: 'TODO_CLEAR'}
}