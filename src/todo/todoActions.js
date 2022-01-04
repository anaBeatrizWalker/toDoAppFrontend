export const changeDescription = (event) => ({//método que cria a action
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value //pega o valor do input
})