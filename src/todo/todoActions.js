import axios from 'axios'

//url padrão
const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({//método que cria a action
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value //pega o valor do input
})

export default search = ()=>{
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}