const INITIAL_STATE = { description: '', list: [] }

//Função que representa o reducer
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload} //replica o estado e adc ao description o que vem no payload da ação

        case 'TODO_SEARCHED':
            return {...state, list: action.payload}

        case 'TODO_CLEAR':
            return {...state, description: ''} //limpa o input 
                
        default: 
            return state
    }
}