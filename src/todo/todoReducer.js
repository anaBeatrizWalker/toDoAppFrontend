const INITIAL_STATE = {
    //dados fakes para teste
    description: 'Ler livro',
    list: [{
        _id: 1,
        description: 'Pagar fatura do cartão',
        done: true
    }, {
        _id: 2,
        description: 'Reunião com a equipe às 10:00',
        done: false
    }, {
        _id: 3,
        description: 'Consulta médica na terça depois do almoço',
        done: false
    }]
}

//Função que representa o reducer
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}//replica o estado e adc ao description o que vem no payload da ação
            
        case 'TODO_SEARCHED':
            return {...state, list: action.payload.data}
        default: 
            return state
    }
}